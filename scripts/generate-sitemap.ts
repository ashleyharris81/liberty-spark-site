import { writeFileSync } from "fs";
import { resolve } from "path";
// Routes live in scripts/routes.mjs so the sitemap and the build-time prerender
// step (scripts/prerender.mjs) can never drift apart.
import { BASE_URL, allEntries } from "./routes.mjs";

function generateSitemap(entries: { path: string; changefreq?: string; priority?: string }[]) {
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
