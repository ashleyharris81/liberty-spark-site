/**
 * Build-time prerender: writes a real static HTML file per canonical route.
 *
 * Run after `vite build` (client) and `vite build --ssr src/entry-server.tsx`.
 * The route list comes from scripts/routes.mjs, the same source the sitemap
 * generator uses, so the sitemap and the prerendered pages cannot drift.
 *
 * Output: dist/<route>.html (plus dist/index.html for "/"). Vercel serves these
 * static files directly; unknown paths fall through to the SPA shell.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "fs";
import { dirname, resolve } from "path";
import { pathToFileURL } from "url";

const DIST = resolve("dist");
const SSR_DIR = resolve("dist-ssr");

const { prerenderRoutes } = await import("./routes.mjs");
const { render } = await import(pathToFileURL(resolve(SSR_DIR, "entry-server.js")).href);

const shell = readFileSync(resolve(DIST, "index.html"), "utf8");

// "/" overwrites dist/index.html, so keep an untouched copy of the empty SPA
// shell for unknown paths (legacy redirects, NotFound) to fall back to.
writeFileSync(resolve(DIST, "spa-fallback.html"), shell);

// index.html carries fallback head tags marked data-rh="true" (react-helmet
// manages them on the client). For prerendered pages Helmet emits the real
// per-route versions, so strip the fallbacks to avoid duplicate title/meta.
const template = shell
  .replace(/^[ \t]*<title>[\s\S]*?<\/title>[ \t]*\n/m, "")
  .replace(/^[ \t]*<meta[^>]*data-rh="true"[^>]*>[ \t]*\n/gm, "");

if (!template.includes('<div id="root"></div>')) {
  throw new Error("prerender: could not find <div id=\"root\"></div> in dist/index.html");
}

let count = 0;
for (const route of prerenderRoutes) {
  const { html, head } = render(route);

  if (!html || html.length < 200) {
    throw new Error(`prerender: suspiciously empty render for ${route}`);
  }

  let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (head) {
    page = page.replace("</head>", `  ${head}\n  </head>`);
  }

  const outFile =
    route === "/" ? resolve(DIST, "index.html") : resolve(DIST, `${route.replace(/^\//, "")}.html`);
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, page);
  count++;
}

// The SSR bundle is a build artefact only — never ship it.
if (existsSync(SSR_DIR)) rmSync(SSR_DIR, { recursive: true, force: true });

console.log(`prerendered ${count} routes`);
