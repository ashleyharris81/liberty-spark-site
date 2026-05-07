import { useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import ukOutline from "@/assets/uk-outline.json";

export type Depot = {
  code: string;
  name: string;
  address: string;
  postcode: string;
  lat: number;
  lng: number;
  contact?: string;
  phone?: string;
  email?: string;
};

const WIDTH = 500;
const HEIGHT = 640;

const UKDepotMap = ({ depots }: { depots: Depot[] }) => {
  const [active, setActive] = useState<string | null>(null);

  const { pathD, project } = useMemo(() => {
    const projection = geoMercator().fitSize(
      [WIDTH, HEIGHT],
      ukOutline as GeoJSON.Feature
    );
    const path = geoPath(projection);
    return {
      pathD: path(ukOutline as GeoJSON.Feature) || "",
      project: (lng: number, lat: number) => projection([lng, lat]) || [0, 0],
    };
  }, []);

  const activeDepot = depots.find((d) => d.code === active);

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full h-auto"
        role="img"
        aria-label="UK depot locations"
      >
        <defs>
          <filter id="pinShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.35" />
          </filter>
        </defs>
        <path
          d={pathD}
          fill="hsl(var(--secondary) / 0.18)"
          stroke="hsl(var(--secondary))"
          strokeWidth={1}
        />
        {depots.map((d) => {
          const [x, y] = project(d.lng, d.lat);
          const isActive = active === d.code;
          return (
            <g
              key={d.code}
              transform={`translate(${x}, ${y})`}
              className="cursor-pointer"
              onMouseEnter={() => setActive(d.code)}
              onClick={() =>
                setActive((v) => (v === d.code ? null : d.code))
              }
              filter="url(#pinShadow)"
            >
              <circle
                r={isActive ? 14 : 10}
                fill="hsl(var(--secondary))"
                opacity={0.25}
                className="transition-all"
              />
              <path
                d="M0,-14 C-6,-14 -10,-10 -10,-5 C-10,2 0,12 0,12 C0,12 10,2 10,-5 C10,-10 6,-14 0,-14 Z"
                fill="hsl(var(--secondary))"
                stroke="hsl(var(--primary))"
                strokeWidth={1.2}
              />
              <circle cx={0} cy={-5} r={3} fill="hsl(var(--primary))" />
            </g>
          );
        })}
      </svg>

      {activeDepot && (
        <div className="absolute top-3 left-3 right-3 md:right-auto md:max-w-xs bg-primary text-primary-foreground rounded-xl shadow-2xl border border-secondary/40 p-4 animate-fade-in">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-heading text-xs uppercase tracking-wider text-secondary">
                Depot {activeDepot.code}
              </p>
              <h3 className="font-heading font-black text-lg uppercase tracking-tight mt-0.5">
                {activeDepot.name}
              </h3>
            </div>
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="text-primary-foreground/60 hover:text-secondary text-lg leading-none"
            >
              ×
            </button>
          </div>
          <p className="text-sm text-primary-foreground/85 mt-2 leading-relaxed">
            {activeDepot.address}
          </p>
        </div>
      )}
    </div>
  );
};

export default UKDepotMap;
