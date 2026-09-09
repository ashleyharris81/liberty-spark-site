import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

// Returns the referrer-restricted Google Maps browser key so the map can load
// on the production custom domain. Safe to expose: the key is locked to the
// site's own domains in Google Cloud.
Deno.serve((req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  const key = Deno.env.get('GOOGLE_API_KEY') ?? '';
  return new Response(JSON.stringify({ key }), {
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
});
