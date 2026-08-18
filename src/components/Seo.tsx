import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE = "Liberty";
const ORIGIN = "https://libertyguard.co.uk";
const OG_IMAGE = `${ORIGIN}/og-image.jpg`;

type Meta = { title: string; description: string };

const routeMeta: Record<string, Meta> = {
  "/": {
    title: "Welfare Units & Portable Buildings Hire UK",
    description:
      "Nationwide hire of mobile, static and solar welfare units, portable accommodation and modular buildings, backed by 40+ years' industry experience.",
  },
  "/homepage2": {
    title: "Welfare Unit & Portable Building Hire",
    description:
      "Explore Liberty's range of welfare units, solar solutions and portable buildings available for hire across the UK.",
  },
  "/nationwide-hire": {
    title: "Nationwide Welfare Hire & UK Depot Network",
    description:
      "Fast delivery anywhere in the UK from our nationwide depot network, with one central hub for enquiries, servicing and aftercare.",
  },
  "/marketing-suites": {
    title: "Marketing Suites Hire",
    description:
      "Bespoke marketing suites from 24' x 12' models to flagship 24' x 20' suites, or a custom-made design for your development.",
  },
  "/portable-buildings": {
    title: "Portable Buildings Hire",
    description:
      "Portable accommodation, modular buildings and marketing suites for hire — delivered, installed and ready to use on site.",
  },
  "/portable-accommodation": {
    title: "Portable Accommodation Hire",
    description:
      "Safe, secure and flexible on-site cabins including canteens, dry rooms and offices, built to health and safety standards.",
  },
  "/modular-buildings": {
    title: "Modular Buildings Hire",
    description:
      "Custom-made modular buildings for offices, training and meeting spaces, precision built and fully compliant.",
  },
  "/solar": {
    title: "Solar Welfare Units & Solar Solutions",
    description:
      "Market-leading solar welfare units, solar loos and drying rooms that cut fuel use, costs and carbon emissions on site.",
  },
  "/welfare": {
    title: "Mobile & Static Welfare Units",
    description:
      "High-specification mobile and static welfare units for hire across the UK, with canteens, toilets and drying facilities.",
  },
  "/mobile-welfare": {
    title: "Mobile Welfare Units for Hire",
    description:
      "Towable mobile welfare units from 12ft to 24ft, including twin toilet and Mobi Plus models, ready for immediate site use.",
  },
  "/static-welfare": {
    title: "Static Welfare Units for Hire",
    description:
      "Static welfare units offering spacious canteens, drying rooms, offices and toilets for longer-term site projects.",
  },
  "/solar-mobile-welfare": {
    title: "Solar Mobile Welfare Units",
    description:
      "Solar-powered mobile welfare units delivering quiet, low-emission site facilities with minimal generator run time.",
  },
  "/solar-static-welfare": {
    title: "Solar Static Welfare Units",
    description:
      "Solar static welfare units combining spacious facilities with sustainable, low-carbon power for long-term sites.",
  },
  "/solar-drying-room": {
    title: "Solar Drying Rooms",
    description:
      "Solar-powered drying rooms keeping site workwear dry and ready, without the fuel cost of conventional units.",
  },
  "/solar-loos": {
    title: "Solar Loos",
    description:
      "Solar-powered welfare toilets providing clean, self-sufficient facilities anywhere on site.",
  },
  "/news": {
    title: "Latest News & Updates",
    description:
      "News from Liberty, including fleet investment, solar upgrades, partnerships and charity work across the UK.",
  },
  "/about": {
    title: "About Us",
    description:
      "Founded in 1981, Liberty supplies portable accommodation and welfare facilities nationwide, built on quality and service.",
  },
  "/new-account": {
    title: "Open a New Account",
    description:
      "Apply to open a credit account with Liberty and start hiring welfare units and portable buildings for your projects.",
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Speak to our team on 0333 344 3833 or email sales@libertyguard.co.uk for hire enquiries, quotes and our brochure.",
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description:
      "How Liberty collects, uses and protects your personal data, and the cookies used on this website.",
  },
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

  if (!meta) {
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 2) {
      const name = prettify(segments[1]);
      const parent = routeMeta[`/${segments[0]}`];
      meta = {
        title: name,
        description: `${name} specifications, features and hire details from Liberty${
          parent ? ` — part of our ${parent.title.toLowerCase()} range` : ""
        }.`,
      };
    } else {
      meta = {
        title: "Page Not Found",
        description: "The page you are looking for could not be found on the Liberty website.",
      };
    }
  }

  const title = path === "/" ? `${SITE} — ${meta.title}` : `${meta.title} | ${SITE}`;
  const canonical = `${ORIGIN}${path === "/" ? "/" : path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
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
