import { useEffect, useRef, useState } from "react";

type MapPoint = {
  lat: number;
  lng: number;
  label: string;
  title: string;
  isOrigin?: boolean;
};

const API_KEY = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY as string | undefined;
const CHANNEL = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID as string | undefined;

let loaderPromise: Promise<void> | null = null;
let authFailed = false;
const authListeners = new Set<() => void>();

const loadMaps = () => {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if ((window as any).google?.maps?.Map) return Promise.resolve();
  if (loaderPromise) return loaderPromise;
  if (!API_KEY) return Promise.reject(new Error("missing key"));

  loaderPromise = new Promise<void>((resolve, reject) => {
    (window as any).__initDepotMap = () => resolve();
    (window as any).gm_authFailure = () => {
      authFailed = true;
      authListeners.forEach((fn) => fn());
    };
    const script = document.createElement("script");
    const channel = CHANNEL ? `&channel=${encodeURIComponent(CHANNEL)}` : "";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&loading=async&callback=__initDepotMap${channel}`;
    script.async = true;
    script.onerror = () => reject(new Error("Google Maps failed to load"));
    document.head.appendChild(script);
  });

  return loaderPromise;
};

const DepotResultsMap = ({ points }: { points: MapPoint[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

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

        points.forEach((point) => {
          bounds.extend({ lat: point.lat, lng: point.lng });
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

  if (failed || !API_KEY) return null;

  return (
    <div
      ref={containerRef}
      className="mt-8 h-[360px] md:h-[440px] w-full rounded-xl border border-border overflow-hidden bg-muted"
      aria-label="Map showing the entered postcode and nearest depots"
    />
  );
};

export default DepotResultsMap;
