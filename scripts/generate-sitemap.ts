import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://dev.libertyguard.co.uk";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/nationwide-hire", changefreq: "weekly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/new-account", changefreq: "monthly", priority: "0.7" },
  { path: "/news", changefreq: "weekly", priority: "0.7" },
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
  { path: "/homepage2", changefreq: "weekly", priority: "0.5" },
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

const staticModelSlugs = [
  "25ft-solar-static",
  "26ft-junior-plus",
  "28ft-eco-hybrid",
  "32ft-master",
];

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

const dynamicEntries: SitemapEntry[] = [
  ...mobiModelSlugs.map((slug) => ({
    path: `/mobile-welfare/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.6",
  })),
  ...staticModelSlugs.map((slug) => ({
    path: `/static-welfare/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.6",
  })),
  ...solarMobileSlugs.map((slug) => ({
    path: `/solar-mobile-welfare/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.6",
  })),
  ...solarLooSlugs.map((slug) => ({
    path: `/solar-loos/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.6",
  })),
  ...solarStaticSlugs.map((slug) => ({
    path: `/solar-static-welfare/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.6",
  })),
  ...solarDrySlugs.map((slug) => ({
    path: `/solar-drying-room/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.6",
  })),
];

const allEntries = [...staticEntries, ...dynamicEntries];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) => {
    const lines = [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ];
    return lines.filter(Boolean).join("\n");
  });

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(allEntries));
console.log(`sitemap.xml written (${allEntries.length} entries)`);
