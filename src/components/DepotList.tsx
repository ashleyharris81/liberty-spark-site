import { depots } from "@/data/depots";

/**
 * Crawlable, always-rendered list of depot names and addresses.
 * Only public information is shown: name, address and postcode. The internal
 * `contact`, `phone` and `email` fields on each depot record are partner and
 * personal details and must never be rendered on the public site.
 *
 * `tone="dark"` is for the navy nationwide hire section, `"light"` for /depots.
 */
const DepotList = ({ tone = "dark" }: { tone?: "dark" | "light" }) => {
  const dark = tone === "dark";

  return (
    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
      {depots.map((depot) => (
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
            {depot.address}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default DepotList;
