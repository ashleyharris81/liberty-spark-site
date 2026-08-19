import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE = "Liberty Guard";
/**
 * Canonical host is https://www.libertyguard.co.uk (with www).
 * www is already the serving host and was the host on the old WordPress site, so
 * the existing backlink profile points there — aligning the code to www preserves
 * that history and avoids touching the project-level apex->www domain redirect,
 * which is the only option carrying redirect-loop risk.
 */
const ORIGIN = "https://www.libertyguard.co.uk";
const OG_IMAGE = `${ORIGIN}/og-image.jpg`;

type Meta = { title: string; description: string };

const routeMeta: Record<string, Meta> = {
  "/": {
    title: "Welfare Unit & Portable Building Hire UK",
    description:
      "Welfare unit and portable building hire across the UK, from mobile and solar welfare to modular buildings. 40+ years' experience — call 0333 344 3833.",
  },
  "/homepage2": {
    title: "Welfare Unit & Portable Building Hire",
    description:
      "Welfare units, solar site solutions and portable buildings for hire across the UK from Liberty Guard. Call 0333 344 3833 to talk through your site needs.",
  },
  "/nationwide-hire": {
    title: "Nationwide Welfare Unit Hire & UK Depot Network",
    description:
      "Nationwide welfare unit hire from our UK depot network, with one central hub for enquiries, servicing and aftercare. Call 0333 344 3833 for fast delivery.",
  },
  "/marketing-suites": {
    title: "Marketing Suite Hire for Housebuilders",
    description:
      "Marketing suite hire across the UK, from 24' x 12' models to flagship 24' x 20' suites or a bespoke design for your development. Call 0333 344 3833.",
  },
  "/portable-buildings": {
    title: "Portable Building Hire UK",
    description:
      "Portable building hire across the UK — portable accommodation, modular buildings and marketing suites, delivered, installed and ready to use. Call us today.",
  },
  "/portable-accommodation": {
    title: "Portable Accommodation & Site Cabin Hire",
    description:
      "Portable accommodation and site cabin hire across the UK — canteens, dry rooms and offices built to health and safety standards. Call 0333 344 3833.",
  },
  "/modular-buildings": {
    title: "Modular Building Hire",
    description:
      "Modular building hire across the UK for offices, training rooms and meeting spaces, custom made, precision built and fully compliant. Call 0333 344 3833.",
  },
  "/solar": {
    title: "Solar Welfare Units & Solar Site Solutions",
    description:
      "Solar welfare units, solar loos and solar drying rooms for hire across the UK, cutting fuel use, costs and carbon on site. Call 0333 344 3833 to enquire.",
  },
  "/welfare": {
    title: "Mobile & Static Welfare Units for Hire",
    description:
      "Mobile and static welfare units for hire across the UK, with canteens, toilets and drying facilities to a high specification. Call 0333 344 3833 to enquire.",
  },
  "/mobile-welfare": {
    title: "Mobile Welfare Unit Hire 12ft to 24ft",
    description:
      "Mobile welfare unit hire across the UK from 12ft to 24ft, including twin toilet and Mobi Plus models ready for immediate site use. Call 0333 344 3833.",
  },
  "/static-welfare": {
    title: "Static Welfare Unit Hire",
    description:
      "Static welfare unit hire across the UK with spacious canteens, drying rooms, offices and toilets for longer-term site projects. Call 0333 344 3833 today.",
  },
  "/solar-mobile-welfare": {
    title: "Solar Mobile Welfare Unit Hire",
    description:
      "Solar mobile welfare unit hire across the UK, giving quiet, low-emission site facilities with minimal generator run time. Call 0333 344 3833 to enquire.",
  },
  "/solar-static-welfare": {
    title: "Solar Static Welfare Unit Hire",
    description:
      "Solar static welfare unit hire across the UK, combining spacious site facilities with sustainable, low-carbon power for long-term sites. Call us today.",
  },
  "/solar-drying-room": {
    title: "Solar Drying Room Hire",
    description:
      "Solar drying room hire across the UK, keeping site workwear dry and ready without the fuel cost of conventional units. Call 0333 344 3833 to enquire.",
  },
  "/solar-loos": {
    title: "Solar Toilet Hire — Solar Loos",
    description:
      "Solar toilet hire across the UK — clean, self-sufficient solar loos that run anywhere on site with no mains power. Call 0333 344 3833 to book yours.",
  },
  "/news": {
    title: "News & Updates",
    description:
      "News and updates from Liberty Guard, including fleet investment, solar upgrades, partnerships and charity work across the UK. Read the latest stories here.",
  },
  "/depots": {
    title: "UK Depot Network — Nationwide Welfare Hire",
    description:
      "Nationwide depot coverage for welfare unit and portable building hire, with delivery and collection from locations across the UK. Call 0333 344 3833.",
  },
  "/about": {
    title: "About Us — Welfare Unit Suppliers Since 1981",
    description:
      "Founded in 1981, Liberty Guard supplies portable accommodation and welfare facilities nationwide, built on quality and service. Call 0333 344 3833 to talk.",
  },
  "/new-account": {
    title: "Open a Hire Account",
    description:
      "Open a hire account with Liberty Guard and start hiring welfare units and portable buildings for your UK projects. Complete the application form online now.",
  },
  "/contact": {
    title: "Contact Us — 0333 344 3833",
    description:
      "Contact the Liberty Guard team on 0333 344 3833 or email sales@libertyguard.co.uk for UK hire enquiries, quotes and our latest brochure. Get in touch today.",
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description:
      "How Liberty Guard collects, uses and protects your personal data, and the cookies used on this website. Contact us if you have any privacy questions.",
  },
};

/** Routes that must not be indexed (duplicates, private tools, error pages). */
const NOINDEX_PATHS = new Set(["/homepage2", "/admin"]);

/**
 * Canonical overrides. "/" and "/nationwide-hire" render the same page, and a
 * few solar models are reachable from both a solar and a non-solar path.
 */
const canonicalOverrides: Record<string, string> = {
  "/nationwide-hire": "/",
  "/static-welfare/25ft-solar-static": "/solar-static-welfare/25ft-solar-static",
  "/static-welfare/28ft-eco-hybrid": "/solar-static-welfare/28ft-eco-hybrid",
};

const prettify = (slug: string) =>
  slug
    .split("-")
    .map((w) => (w.length <= 3 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");

const Seo = () => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  let meta = routeMeta[path];
  let notFound = false;

  if (!meta) {
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 2) {
      const name = prettify(segments[1]);
      const parent = routeMeta[`/${segments[0]}`];
      meta = {
        title: name,
        description: `${name} specifications, features and hire details from Liberty Guard${
          parent ? ` — part of our ${parent.title.toLowerCase()} range` : ""
        }.`,
      };
    } else {
      notFound = true;
      meta = {
        title: "Page Not Found",
        description:
          "The page you are looking for could not be found on the Liberty Guard website.",
      };
    }
  }

  const suffixed = `${meta.title} | ${SITE}`;
  const title =
    path === "/" ? `${SITE} — ${meta.title}` : suffixed.length < 60 ? suffixed : meta.title;
  const canonicalPath = canonicalOverrides[path] ?? (path === "/" ? "/" : path);
  const canonical = `${ORIGIN}${canonicalPath}`;
  const noindex = notFound || NOINDEX_PATHS.has(path);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={meta.description} />
    </Helmet>
  );
};

export default Seo;
