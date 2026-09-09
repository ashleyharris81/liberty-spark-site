import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type MapPoint = {
  lat: number;
  lng: number;
  label: string;
  title: string;
  isOrigin?: boolean;
  polyline?: string | null;
};

const API_KEY = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY as string | undefined;
const CHANNEL = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID as string | undefined;

const ROUTE_COLOURS = ["#0f766e", "#f59e0b", "#6366f1"];

let loaderPromise: Promise<void> | null = null;
let authFailed = false;
const authListeners = new Set<() => void>();

/**
 * Preview/editor addresses use the shared Lovable key; the live site uses the
 * client's own Google key (restricted to libertyguard.co.uk).
 */
const isPreviewHost = () => {
  const host = window.location.hostname;
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".lovable.app") ||
    host.endsWith(".lovableproject.com")
  );
};

const resolveKey = async () => {
  if (isPreviewHost() && API_KEY) return API_KEY;
  try {
    const { data } = await supabase.functions.invoke("maps-key");
    const key = (data as { key?: string } | null)?.key;
    if (key) return key;
  } catch {
    // fall through to the preview key
  }
  return API_KEY;
};

const loadMaps = () => {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if ((window as any).google?.maps?.Map) return Promise.resolve();
  if (loaderPromise) return loaderPromise;

  loaderPromise = (async () => {
    const key = await resolveKey();
    if (!key) throw new Error("missing key");

    await new Promise<void>((resolve, reject) => {
      (window as any).__initDepotMap = () => resolve();
      (window as any).gm_authFailure = () => {
        authFailed = true;
        authListeners.forEach((fn) => fn());
        reject(new Error("Google Maps auth failure"));
      };
      const script = document.createElement("script");
      const channel = CHANNEL ? `&channel=${encodeURIComponent(CHANNEL)}` : "";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&libraries=geometry&callback=__initDepotMap${channel}`;
      script.async = true;
      script.onerror = () => reject(new Error("Google Maps failed to load"));
      document.head.appendChild(script);
    });
  })();

  return loaderPromise;
};

/** Fallback decoder so route lines still draw if the geometry library is unavailable. */
const decodePolyline = (encoded: string) => {
  const path: { lat: number; lng: number }[] = [];
  let index = 0;
  let lat = 0;
  let lng = 0;

  while (index < encoded.length) {
    let result = 0;
    let shift = 0;
    let byte: number;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    lat += result & 1 ? ~(result >> 1) : result >> 1;

    result = 0;
    shift = 0;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    lng += result & 1 ? ~(result >> 1) : result >> 1;

    path.push({ lat: lat / 1e5, lng: lng / 1e5 });
  }

  return path;
};

const DepotResultsMap = ({ points }: { points: MapPoint[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(authFailed);

  useEffect(() => {
    const listener = () => setFailed(true);
    authListeners.add(listener);
    return () => {
      authListeners.delete(listener);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    loadMaps()
      .then(() => {
        if (cancelled || !containerRef.current || points.length === 0) return;
        const google = (window as any).google;
        const map = new google.maps.Map(containerRef.current, {
          center: { lat: points[0].lat, lng: points[0].lng },
          zoom: 7,
          mapTypeControl: false,
          streetViewControl: false,
        });

        const bounds = new google.maps.LatLngBounds();
        const info = new google.maps.InfoWindow();
        let routeIndex = 0;

        points.forEach((point) => {
          bounds.extend({ lat: point.lat, lng: point.lng });

          if (point.polyline) {
            const decoder = google.maps.geometry?.encoding?.decodePath;
            const path = decoder
              ? decoder(point.polyline)
              : decodePolyline(point.polyline);
            new google.maps.Polyline({
              path,
              map,
              strokeColor: ROUTE_COLOURS[routeIndex % ROUTE_COLOURS.length],
              strokeOpacity: 0.85,
              strokeWeight: 4,
            });
            (path as any[]).forEach((position) => bounds.extend(position));
            routeIndex += 1;
          }

          const marker = new google.maps.Marker({
            position: { lat: point.lat, lng: point.lng },
            map,
            title: point.title,
            label: point.isOrigin
              ? undefined
              : { text: point.label, color: "#ffffff", fontWeight: "bold" },
            icon: point.isOrigin
              ? {
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: "#14b8a6",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 2,
                }
              : undefined,
          });
          marker.addListener("click", () => {
            info.setContent(`<strong>${point.title}</strong>`);
            info.open(map, marker);
          });
        });

        map.fitBounds(bounds, 60);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [points]);

  if (failed) return null;

  return (
    <div
      ref={containerRef}
      className="mt-8 h-[360px] md:h-[440px] w-full rounded-xl border border-border overflow-hidden bg-muted"
      aria-label="Map showing the entered postcode, nearest depots and driving routes"
    />
  );
};

export default DepotResultsMap;
