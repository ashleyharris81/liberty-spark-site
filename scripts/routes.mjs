/**
 * Single source of truth for the site's canonical routes.
 *
 * Consumed by:
 *  - scripts/generate-sitemap.ts (public/sitemap.xml)
 *  - scripts/prerender.mjs (build-time static HTML per route)
 *
 * Keep this list canonical-only: no duplicate paths, no /admin, no /homepage2.
 */

// Canonical host is www: it is the serving host and the host the old WordPress
// site's backlinks point at, so keeping it preserves that link history.
export const BASE_URL = "https://www.libertyguard.co.uk";

const staticEntries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/new-account", changefreq: "monthly", priority: "0.7" },
  { path: "/news", changefreq: "weekly", priority: "0.7" },
  { path: "/depots", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/welfare", changefreq: "weekly", priority: "0.8" },
  { path: "/mobile-welfare", changefreq: "weekly", priority: "0.8" },
  { path: "/static-welfare", changefreq: "weekly", priority: "0.8" },
  { path: "/solar", changefreq: "weekly", priority: "0.8" },
  { path: "/solar-mobile-welfare", changefreq: "weekly", priority: "0.8" },
  { path: "/solar-static-welfare", changefreq: "weekly", priority: "0.8" },
  { path: "/solar-drying-room", changefreq: "weekly", priority: "0.8" },
  { path: "/solar-loos", changefreq: "weekly", priority: "0.8" },
  { path: "/portable-buildings", changefreq: "weekly", priority: "0.8" },
  { path: "/portable-accommodation", changefreq: "weekly", priority: "0.8" },
  { path: "/modular-buildings", changefreq: "weekly", priority: "0.8" },
  { path: "/marketing-suites", changefreq: "weekly", priority: "0.8" },
];

// Dynamic route slugs from data files
const mobiModelSlugs = [
  "12ft-mobi",
  "16ft-mobi",
  "16ft-mobi-plus",
  "20ft-mobi",
  "20ft-mobi-plus",
  "24ft-mobi",
  "24ft-mobi-twin-toilet",
  "12ft-hybrid-mobi",
  "16ft-hybrid-mobi",
  "24ft-hybrid-mobi-twin-toilet",
];

// 25ft-solar-static and 28ft-eco-hybrid are solar models: they canonicalise to
// the /solar-static-welfare path, so only that version is listed below.
const staticModelSlugs = ["26ft-junior-plus", "32ft-master"];

const solarMobileSlugs = [
  "12ft-ultimate-eco",
  "12ft-ultimate-eco-plus",
  "20ft-ultimate-eco",
  "20ft-ultimate-eco-plus",
  "24ft-ultimate-eco-plus",
];

const solarLooSlugs = ["single-solar-loo", "twin-solar-loo"];

const solarStaticSlugs = ["25ft-solar-static", "28ft-eco-hybrid"];

const solarDrySlugs = ["12ft-solar-dry"];

const dynamicEntries = [
  ...mobiModelSlugs.map((slug) => ({
    path: `/mobile-welfare/${slug}`,
    changefreq: "monthly",
    priority: "0.6",
  })),
  ...staticModelSlugs.map((slug) => ({
    path: `/static-welfare/${slug}`,
    changefreq: "monthly",
    priority: "0.6",
  })),
  ...solarMobileSlugs.map((slug) => ({
    path: `/solar-mobile-welfare/${slug}`,
    changefreq: "monthly",
    priority: "0.6",
  })),
  ...solarLooSlugs.map((slug) => ({
    path: `/solar-loos/${slug}`,
    changefreq: "monthly",
    priority: "0.6",
  })),
  ...solarStaticSlugs.map((slug) => ({
    path: `/solar-static-welfare/${slug}`,
    changefreq: "monthly",
    priority: "0.6",
  })),
  ...solarDrySlugs.map((slug) => ({
    path: `/solar-drying-room/${slug}`,
    changefreq: "monthly",
    priority: "0.6",
  })),
];

export const allEntries = [...staticEntries, ...dynamicEntries];

/** Routes to prerender to static HTML at build time. */
export const prerenderRoutes = allEntries.map((e) => e.path);
