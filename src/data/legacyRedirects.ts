/**
 * Legacy WordPress URL mappings from the pre-migration site.
 *
 * These are CLIENT-SIDE redirects: the browser loads the SPA, React Router
 * resolves the old path and replaces it with the new one. That preserves the
 * user journey and passes most link equity, but it is not a true 301.
 * The preferred long-term implementation is a server-side 301 at the CDN/host
 * so crawlers see a real permanent redirect without executing JavaScript.
 *
 * Add new rows here as more old URLs surface in Search Console.
 */

/** Exact old path -> new path (matched case-insensitively, trailing slash optional). */
export const legacyExactRedirects: Record<string, string> = {
  "/about-2": "/about",
  "/news-2": "/news",
  "/charity-work": "/about",
  "/towable-welfare-units": "/mobile-welfare",
  "/static-welfare-units": "/static-welfare",
  "/welfare-units-for-construction-sites": "/welfare",
  "/anti-vandal-cabin-hire-2": "/portable-accommodation",
  "/the-complete-package": "/news",
  "/everything-under-one-roof": "/news",
  "/pro-light-comparisons": "/news",
  "/international-earth-day": "/news",
};

/**
 * Old path prefixes -> new path. Order matters: the most specific prefix wins,
 * so the solar marketing suite CPT entries sit above the generic /lg-* rules.
 */
export const legacyPrefixRedirects: { prefix: string; to: string }[] = [
  { prefix: "/lg-products/solar-powered-marketing-suite", to: "/marketing-suites" },
  { prefix: "/lg-categories/solar-powered-marketing-suite", to: "/marketing-suites" },
  // WordPress product CPT — the welfare hub is the nearest equivalent.
  { prefix: "/lg-products", to: "/welfare" },
  { prefix: "/lg-categories", to: "/welfare" },
  // Taxonomy and author archives.
  { prefix: "/tag", to: "/news" },
  { prefix: "/category", to: "/news" },
  { prefix: "/author", to: "/news" },
  // WordPress date archives.
  { prefix: "/2018", to: "/news" },
  { prefix: "/2019", to: "/news" },
  { prefix: "/2020", to: "/news" },
  { prefix: "/2021", to: "/news" },
  { prefix: "/2022", to: "/news" },
  { prefix: "/2023", to: "/news" },
  { prefix: "/2024", to: "/news" },
  { prefix: "/2025", to: "/news" },
];

/**
 * WordPress infrastructure paths that must NOT be redirected — they should
 * fall through to the real 404 so we never send crawlers or bots onward.
 */
export const legacyIgnoredPaths = [
  "/wp-admin",
  "/wp-login.php",
  "/wp-content",
  "/wp-includes",
  "/wp-json",
  "/feed",
  "/comments/feed",
  "/xmlrpc.php",
];

/** Normalises a pathname: lowercased, trailing slashes stripped (except root). */
const normalise = (pathname: string) => {
  const lower = pathname.toLowerCase();
  const trimmed = lower.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

/**
 * Resolves an old WordPress path to its new destination.
 * Returns null when nothing matches, so the caller can render the 404 page.
 * The old query string is intentionally discarded.
 */
export const resolveLegacyRedirect = (pathname: string): string | null => {
  const path = normalise(pathname);

  if (legacyIgnoredPaths.some((p) => path === p || path.startsWith(`${p}/`))) {
    return null;
  }

  if (legacyExactRedirects[path]) return legacyExactRedirects[path];

  const prefixMatch = legacyPrefixRedirects.find(
    ({ prefix }) => path === prefix || path.startsWith(`${prefix}/`),
  );

  return prefixMatch ? prefixMatch.to : null;
};
