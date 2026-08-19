import { depots } from "@/data/depots";

/**
 * PUBLIC display layer for the depot network.
 *
 * Only Sandtoft (Doncaster) is Liberty Guard's own premises, so it is the only
 * depot whose full street address may be published. Every other depot is a
 * third-party partner yard: publishing its street line, farm/building name or
 * full postcode would expose which haulage and site-services partners the
 * business uses and where, and would imply a Liberty Guard location at an
 * address the company does not occupy.
 *
 * Therefore: NEVER render depot.address, depot.postcode, depot.contact,
 * depot.phone or depot.email for a partner depot. Render only the town/city,
 * county or region, and the outward (first half) postcode where it exists in
 * the record. The full records stay in src/data/depots.ts for internal use.
 */

export const HEAD_OFFICE_CODE = "5400";

/** Town/city + county or region (+ outward postcode), derived from the stored records. */
const publicLocation: Record<string, string> = {
  "5400": "The Old Airfield, Belton Road, Sandtoft, DN8 5SX", // head office — own premises
  "5401": "Aberdeen, Aberdeenshire (AB23)",
  "5402": "Bournemouth, Dorset (DT11)",
  "5404": "Bristol (BS10)",
  "5406": "Coventry, Warwickshire (CV12)",
  "5407": "Dartford (DA2)",
  "5408": "Falkirk, Scotland (FK4)",
  "5410": "Darlington (DL2)",
  "5411": "Oxford, Oxfordshire (OX33)",
  "5413": "Plymouth / Saltash (PL12)",
  "5414": "Reading, Berkshire (RG10)",
  "5414b": "Wokingham, Berkshire (RG40)",
  "5416": "Warrington / Chester (CH3)",
  "5417": "Stafford, Staffordshire (ST18)",
  "5418": "Northampton / Towcester (NN12)",
  "5419": "Nuneaton (CV10)",
  "5420": "Southend-on-Sea / Benfleet (SS7)",
  "5421": "Oxford, Oxfordshire (OX25)",
  "5422": "Aberdare, Cardiff (CF44)",
};

/** Safe display value for any depot record. Falls back to the depot name only. */
export const depotDisplayLocation = (code: string, name: string) =>
  publicLocation[code] ?? name;

export type PublicDepot = { code: string; name: string; location: string };

/**
 * At town level the two Reading and the two Oxford yards collapse into one
 * visible row each, so the public list merges them.
 */
const MERGED: Record<string, PublicDepot> = {
  "5414": { code: "5414", name: "Reading", location: "Reading & Wokingham, Berkshire" },
  "5421": { code: "5421", name: "Oxford", location: "Oxford, Oxfordshire" },
};
const DROPPED = new Set(["5414b", "5411"]);

export const publicDepots: PublicDepot[] = depots
  .filter((d) => !DROPPED.has(d.code))
  .map((d) =>
    MERGED[d.code] ?? {
      code: d.code,
      name: d.name,
      location: depotDisplayLocation(d.code, d.name),
    },
  );
