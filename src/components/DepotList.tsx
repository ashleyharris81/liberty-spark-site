import { publicDepots } from "@/data/depotDisplay";

/**
 * Crawlable, always-rendered list of depot locations.
 * Town/city and county only for partner depots — see src/data/depotDisplay.ts:
 * partner street addresses, building names, full postcodes and internal contact
 * details must never be rendered on the public site.
 *
 * `tone="dark"` is for the navy nationwide hire section, `"light"` for /depots.
 */
const DepotList = ({ tone = "dark" }: { tone?: "dark" | "light" }) => {
  const dark = tone === "dark";

  return (
    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
      {publicDepots.map((depot) => (
        <li key={depot.code}>
          <p
            className={`font-heading text-sm font-bold uppercase tracking-wider ${
              dark ? "text-secondary" : "text-primary"
            }`}
          >
            {depot.name}
          </p>
          <p
            className={`text-sm leading-relaxed ${
              dark ? "text-primary-foreground/75" : "text-primary/70"
            }`}
          >
            {depot.location}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default DepotList;
