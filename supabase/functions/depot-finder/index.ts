import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_maps';
const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
const GOOGLE_MAPS_API_KEY = Deno.env.get('GOOGLE_MAPS_API_KEY');
const DAILY_LOOKUP_CAP = 100;


const depotSchema = z.object({
  code: z.string().trim().min(1).max(20),
  name: z.string().trim().min(1).max(120),
  postcode: z.string().trim().min(3).max(12),
  lat: z.number(),
  lng: z.number(),
});

const bodySchema = z.object({
  postcode: z
    .string()
    .trim()
    .min(3)
    .max(12)
    .regex(/^[A-Za-z0-9 ]+$/, 'Enter a valid UK postcode'),
  depots: z.array(depotSchema).min(1).max(60),
});

const KM_PER_MILE = 1.609344;

const haversine = (
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
) => {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(s));
};

const json = (payload: unknown, status = 200) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });

const gatewayHeaders = (extra: Record<string, string> = {}) => ({
  Authorization: `Bearer ${LOVABLE_API_KEY}`,
  'X-Connection-Api-Key': GOOGLE_MAPS_API_KEY ?? '',
  'Content-Type': 'application/json',
  ...extra,
});

const failure = async (response: Response, label: string) => {
  const details = await response.text();
  console.error(`${label} failed [${response.status}]: ${details}`);
  return json(
    { error: 'Lookup failed', status: response.status, details },
    response.status,
  );
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  if (!LOVABLE_API_KEY || !GOOGLE_MAPS_API_KEY) {
    return json({ error: 'Map service is not configured' }, 500);
  }

  try {
    const parsed = bodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return json({ error: 'Enter a valid UK postcode' }, 400);
    }
    const { postcode, depots } = parsed.data;

    // 1. Geocode the entered postcode (UK only)
    const geoRes = await fetch(
      `${GATEWAY_URL}/maps/api/geocode/json?components=country:GB|postal_code:${encodeURIComponent(
        postcode,
      )}`,
      { headers: gatewayHeaders() },
    );
    if (!geoRes.ok) return await failure(geoRes, 'Geocoding');
    const geo = await geoRes.json();
    const first = geo?.results?.[0];
    if (!first?.geometry?.location) {
      return json({ error: 'We could not find that postcode. Please check and try again.' }, 404);
    }
    const origin = {
      lat: first.geometry.location.lat as number,
      lng: first.geometry.location.lng as number,
    };

    // 2. Shortlist the 5 closest depots as the crow flies, then price by road
    const shortlist = [...depots]
      .map((d) => ({ depot: d, straight: haversine(origin, d) }))
      .sort((a, b) => a.straight - b.straight)
      .slice(0, 5);

    const matrixRes = await fetch(`${GATEWAY_URL}/routes/distanceMatrix/v2:computeRouteMatrix`, {
      method: 'POST',
      headers: gatewayHeaders({
        'X-Goog-FieldMask':
          'originIndex,destinationIndex,distanceMeters,duration,condition',
      }),
      body: JSON.stringify({
        origins: [
          {
            waypoint: {
              location: { latLng: { latitude: origin.lat, longitude: origin.lng } },
            },
          },
        ],
        destinations: shortlist.map(({ depot }) => ({
          waypoint: {
            location: { latLng: { latitude: depot.lat, longitude: depot.lng } },
          },
        })),
        travelMode: 'DRIVE',
        units: 'IMPERIAL',
      }),
    });
    if (!matrixRes.ok) return await failure(matrixRes, 'Route matrix');
    const matrix = (await matrixRes.json()) as Array<{
      destinationIndex?: number;
      distanceMeters?: number;
      duration?: string;
      condition?: string;
    }>;

    const results = shortlist
      .map(({ depot, straight }, index) => {
        const row = matrix.find((r) => (r.destinationIndex ?? 0) === index);
        const ok = row?.condition === 'ROUTE_EXISTS' && typeof row.distanceMeters === 'number';
        const minutes = row?.duration
          ? Math.round(parseInt(row.duration.replace('s', ''), 10) / 60)
          : null;
        return {
          code: depot.code,
          name: depot.name,
          postcode: depot.postcode,
          roadMiles: ok ? Math.round((row!.distanceMeters! / 1000 / KM_PER_MILE) * 10) / 10 : null,
          driveMinutes: ok ? minutes : null,
          straightMiles: Math.round((straight / KM_PER_MILE) * 10) / 10,
        };
      })
      .sort((a, b) => {
        if (a.roadMiles === null) return 1;
        if (b.roadMiles === null) return -1;
        return a.roadMiles - b.roadMiles;
      })
      .slice(0, 3);

    // 3. Fetch the driving route line for each of the three nearest depots
    const withRoutes = await Promise.all(
      results.map(async (result) => {
        const depot = depots.find((d) => d.code === result.code);
        if (!depot) return { ...result, polyline: null as string | null };
        try {
          const routeRes = await fetch(`${GATEWAY_URL}/routes/directions/v2:computeRoutes`, {
            method: 'POST',
            headers: gatewayHeaders({
              'X-Goog-FieldMask': 'routes.polyline.encodedPolyline',
            }),
            body: JSON.stringify({
              origin: { location: { latLng: { latitude: origin.lat, longitude: origin.lng } } },
              destination: {
                location: { latLng: { latitude: depot.lat, longitude: depot.lng } },
              },
              travelMode: 'DRIVE',
              polylineQuality: 'OVERVIEW',
            }),
          });
          if (!routeRes.ok) {
            console.error(`Route line failed [${routeRes.status}]: ${await routeRes.text()}`);
            return { ...result, polyline: null as string | null };
          }
          const routeBody = await routeRes.json();
          return {
            ...result,
            polyline: (routeBody?.routes?.[0]?.polyline?.encodedPolyline ?? null) as string | null,
          };
        } catch (routeError) {
          console.error('Route line error', routeError);
          return { ...result, polyline: null as string | null };
        }
      }),
    );

    return json({
      origin: { postcode: first.formatted_address ?? postcode, ...origin },
      results: withRoutes,
    });
  } catch (error) {
    console.error('depot-finder error', error);
    return json({ error: 'Something went wrong looking up that postcode.' }, 500);
  }
});
