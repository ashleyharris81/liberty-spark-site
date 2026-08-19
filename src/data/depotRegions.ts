import { depots } from "@/data/depots";
import type { Depot } from "@/components/UKDepotMap";

/**
 * Regional grouping for the /depots hub page. Each depot is assigned from its
 * actual location — no invented depots, no invented regions.
 */
export const REGION_ORDER = [
  "Scotland",
  "North East",
  "North West",
  "Midlands",
  "South West",
  "South East",
  "Wales",
] as const;

export type Region = (typeof REGION_ORDER)[number];

const regionByCode: Record<string, Region> = {
  "5401": "Scotland", // Aberdeen
  "5408": "Scotland", // Falkirk
  "5400": "North East", // Sandtoft (Doncaster)
  "5410": "North East", // Darlington
  "5416": "North West", // Warrington (Chester)
  "5406": "Midlands", // Coventry
  "5419": "Midlands", // Nuneaton
  "5417": "Midlands", // Stafford
  "5418": "Midlands", // Northampton
  "5404": "South West", // Bristol
  "5402": "South West", // Bournemouth
  "5413": "South West", // Plymouth
  "5421": "South East", // Oxford (Weston)
  "5411": "South East", // Oxford (Waterstock)
  "5407": "South East", // Dartford
  "5414": "South East", // Reading (Hurst)
  "5414b": "South East", // Reading (Wokingham)
  "5420": "South East", // Southend-on-Sea (Benfleet)
  "5422": "Wales", // Cardiff (Aberdare)
};

export const depotsByRegion: { region: Region; depots: Depot[] }[] = REGION_ORDER.map(
  (region) => ({
    region,
    depots: depots.filter((d) => regionByCode[d.code] === region),
  }),
).filter((group) => group.depots.length > 0);

/** Towns/cities served, derived from the depot names (used for areaServed). */
export const depotAreasServed = depots.map((d) =>
  d.name.replace(/\s*\(([^)]+)\)\s*$/, (_m, inner) => ` / ${inner}`).trim(),
);
