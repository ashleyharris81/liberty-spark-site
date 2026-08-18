import { Helmet } from "react-helmet-async";

const ORIGIN = "https://libertyguard.co.uk";

const BRAND = {
  "@type": "Brand",
  name: "Liberty",
};

type SpecCategory = { title: string; items: string[] };

export const ProductJsonLd = ({
  name,
  description,
  path,
  specs = [],
  image,
}: {
  name: string;
  description: string;
  path: string;
  specs?: SpecCategory[];
  image?: string;
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: BRAND,
    url: `${ORIGIN}${path}`,
    ...(image ? { image: image.startsWith("http") ? image : `${ORIGIN}${image}` } : {}),
    category: "Site welfare units & portable buildings",
    additionalProperty: specs.flatMap((spec) =>
      spec.items.map((item) => ({
        "@type": "PropertyValue",
        name: spec.title,
        value: item,
      })),
    ),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
      url: `${ORIGIN}${path}`,
      priceCurrency: "GBP",
      seller: { "@type": "Organization", name: "Liberty Guard (U.K.) Limited" },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

/** Converts "June 2026" into an ISO date such as "2026-06-01". */
export const monthYearToIso = (value: string) => {
  const [month, year] = value.trim().split(/\s+/);
  const index = MONTHS.indexOf(month?.toLowerCase() ?? "");
  if (index === -1 || !/^\d{4}$/.test(year ?? "")) return undefined;
  return `${year}-${String(index + 1).padStart(2, "0")}-01`;
};

export const ArticleListJsonLd = ({
  path,
  articles,
}: {
  path: string;
  articles: { title: string; excerpt: string; date: string; image?: string }[];
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: `${ORIGIN}${path}`,
    itemListElement: articles.map((article, i) => {
      const datePublished = monthYearToIso(article.date);
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "BlogPosting",
          headline: article.title,
          description: article.excerpt,
          ...(datePublished ? { datePublished } : {}),
          ...(article.image
            ? {
                image: article.image.startsWith("http")
                  ? article.image
                  : `${ORIGIN}${article.image}`,
              }
            : {}),
          mainEntityOfPage: `${ORIGIN}${path}`,
          author: { "@type": "Organization", name: "Liberty" },
          publisher: { "@type": "Organization", name: "Liberty" },
        },
      };
    }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};
