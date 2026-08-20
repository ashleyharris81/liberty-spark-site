import newsAcquisan from "@/assets/news-acquisan.jpg";
import newsCustomerFeedback from "@/assets/news-customer-feedback.png";
import newsDoncaster from "@/assets/news-doncaster.png";
import newsKeepmoat from "@/assets/news-keepmoat.png";
import newsNewYear from "@/assets/news-new-year.jpg";
import newsProductFocus from "@/assets/news-product-focus.jpg";
import newsSolarUpgrade from "@/assets/news-solar-upgrade.jpg";
import newsFunFact from "@/assets/news-fun-fact.jpg";
import newsAjc from "@/assets/news-ajc.jpeg";
import newsMnd from "@/assets/news-mnd.png";

export type NewsArticle = {
  slug: string;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  body: string;
};

export const articles: NewsArticle[] = [
  {
    slug: "new-product-range",
    image: newsSolarUpgrade,
    date: "June 2026",
    title: "New Product Range!",
    excerpt:
      "Our new range is here, and we couldn't be more excited! We've named this range SOLAR UPGRADE to distinguish from our original kit.",
    body: "Our new range is here, and we couldn't be more excited! We've named this range SOLAR UPGRADE to distinguish it from our original kit.\n\nEvery unit in the range has been specified with larger solar arrays, higher-capacity battery storage and smarter power management, so sites run cleaner and quieter for longer between top-ups. The result is lower fuel use, fewer generator hours and a noticeably better welfare environment for the teams using them.\n\nSpeak to our team to check availability and to arrange a look around a unit at your nearest depot.",
  },
  {
    slug: "fun-fact",
    image: newsFunFact,
    date: "June 2026",
    title: "Fun Fact",
    excerpt:
      "Welfare isn't an optional extra, they're not just handy to have around or just look nice, they're actually a necessity. Welfare facilities are an essential part of every site.",
    body: "Welfare isn't an optional extra. They're not just handy to have around or nice to look at - they're actually a necessity. Welfare facilities are an essential part of every site.\n\nUnder UK site regulations, workers must have access to washing facilities, drinking water, somewhere to change and store clothing, and a warm, dry space to rest and eat. Getting welfare right isn't just compliance, it protects your people and keeps productivity up in poor weather.\n\nOur mobile and static units cover every size of site, from a two-person job to a large multi-phase development.",
  },
  {
    slug: "new-partnership-with-ajc",
    image: newsAjc,
    date: "June 2026",
    title: "New Partnership with AJC",
    excerpt:
      "We're pleased to announce another exciting partnership - our brand-new Eco Smart Mobi from AJC Easy Cabin, renowned for their welfare expertise.",
    body: "We're pleased to announce another exciting partnership - our brand-new Eco Smart Mobi from AJC EasyCabin, renowned for their welfare expertise.\n\nThe Eco Smart Mobi brings solar-first power generation, remote monitoring and a well-thought-out internal layout into a towable footprint, making it ideal for sites where space and access are tight.\n\nUnits are joining the fleet now and are available to hire nationwide.",
  },
  {
    slug: "unit-rebrand-with-mnd-association",
    image: newsMnd,
    date: "May 2026",
    title: "Unit Rebrand with Motor Neurone Disease (MND) Association",
    excerpt:
      "Keeping in line with MNDA's brand refresh we have given our favourite 12ft Mobi a complete overhaul, with a full respray, new signs and brand-new livery.",
    body: "Keeping in line with MNDA's brand refresh, we have given our favourite 12ft Mobi a complete overhaul: a full respray, new signage and brand-new livery.\n\nThe unit travels the country on live sites, so it carries the MND Association's message everywhere it goes. We're proud to continue supporting the charity and the vital work it does for people living with motor neurone disease.\n\nIf you'd like the rebranded unit on your site, get in touch with our team.",
  },
  {
    slug: "doncaster-knights-partnership",
    image: newsDoncaster,
    date: "October 2025",
    title: "Doncaster Knights Partnership",
    excerpt:
      "We're proud to support Doncaster Knights with our 12ft Ultimate Eco Plus solar welfare unit, providing sustainable on-site facilities for their training ground.",
    body: "We're proud to support Doncaster Knights with our 12ft Ultimate Eco Plus solar welfare unit, providing sustainable on-site facilities for their training ground.\n\nThe unit delivers washing facilities, a drying area and a warm rest space powered predominantly by solar, which means no generator noise during training sessions and minimal running costs for the club.\n\nIt's a great example of solar welfare working just as well outside of construction as it does on site.",
  },
  {
    slug: "keepmoat-homes-continued-partnership",
    image: newsKeepmoat,
    date: "September 2025",
    title: "Keepmoat Homes Continued Partnership",
    excerpt:
      "Liberty renews its long-standing partnership with Keepmoat Homes, supplying marketing suites and welfare units across multiple new developments.",
    body: "Liberty renews its long-standing partnership with Keepmoat Homes, supplying marketing suites and welfare units across multiple new developments.\n\nThe agreement covers bespoke marketing suites for new sales outlets alongside mobile and static welfare across live build phases, all delivered, installed and serviced by our own teams.\n\nWe're delighted to continue supporting Keepmoat's programme nationwide.",
  },
  {
    slug: "product-focus-24ft-ultimate-eco-plus",
    image: newsProductFocus,
    date: "August 2025",
    title: "Product Focus: 24ft Ultimate Eco Plus",
    excerpt:
      "Our flagship solar welfare unit features twin toilets, full office facilities, and our SOLARTracK monitoring system - a complete sustainable site solution.",
    body: "Our flagship solar welfare unit features twin toilets, full office facilities, and our SOLARTracK monitoring system - a complete sustainable site solution.\n\nInside you'll find a generous canteen area, a separate office, a drying room and twin toilets, so larger teams can share one unit comfortably. Power comes from a large roof-mounted solar array with battery storage, with the back-up generator only stepping in when it's genuinely needed.\n\nSOLARTracK reports run hours, fuel use and solar yield so you can evidence carbon savings on your project.",
  },
  {
    slug: "acquisan-acquisition",
    image: newsAcquisan,
    date: "November 2025",
    title: "Acquisan Acquisition",
    excerpt:
      "Liberty expands its capabilities through the acquisition of Acquisan, strengthening our nationwide service offering.",
    body: "Liberty expands its capabilities through the acquisition of Acquisan, strengthening our nationwide service offering.\n\nThe acquisition adds servicing capacity, additional stock and experienced people to the business, allowing us to improve response times and widen the range of welfare and portable accommodation we can supply.\n\nCustomers of both businesses continue to be looked after by the same familiar teams.",
  },
  {
    slug: "customer-feedback-highlights",
    image: newsCustomerFeedback,
    date: "June 2025",
    title: "Customer Feedback Highlights",
    excerpt:
      "Our customers share their experience with Liberty's welfare solutions - read what makes our service stand out.",
    body: "Our customers share their experience with Liberty's welfare solutions - read what makes our service stand out.\n\nThe themes that come up again and again are straightforward: units turn up clean and on time, servicing happens when it's promised, and there's always someone who answers the phone and sorts the problem.\n\nThank you to everyone who took the time to give us feedback - it shapes how we specify and service the fleet.",
  },
  {
    slug: "a-new-year-a-greener-fleet",
    image: newsNewYear,
    date: "January 2025",
    title: "A New Year, A Greener Fleet",
    excerpt:
      "Liberty kicks off the year with a major investment in expanding its solar welfare fleet, doubling down on our sustainability commitment.",
    body: "Liberty kicks off the year with a major investment in expanding its solar welfare fleet, doubling down on our sustainability commitment.\n\nThe investment adds further solar mobile and solar static units across our depot network, replacing older diesel-dependent kit and cutting fuel deliveries, emissions and noise on the sites we supply.\n\nTalk to us about switching your next project over to solar welfare.",
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
