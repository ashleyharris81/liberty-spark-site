import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

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
import { ArticleListJsonLd } from "@/components/JsonLd";

const articles = [
  {
    image: newsSolarUpgrade,
    date: "June 2026",
    title: "New Product Range!",
    excerpt:
      "Our new range is here, and we couldn't be more excited! We've named this range SOLAR UPGRADE to distinguish from our original kit.",
  },
  {
    image: newsFunFact,
    date: "June 2026",
    title: "Fun Fact",
    excerpt:
      "Welfare isn't an optional extra, they're not just handy to have around or just look nice, they're actually a necessity. Welfare facilities are an essential part of every site.",
  },
  {
    image: newsAjc,
    date: "June 2026",
    title: "New Partnership with AJC",
    excerpt:
      "We're pleased to announce another exciting partnership - our brand-new Eco Smart Mobi from AJC Easy Cabin, renowned for their welfare expertise.",
  },
  {
    image: newsMnd,
    date: "May 2026",
    title: "Unit Rebrand with Motor Neurone Disease (MND) Association",
    excerpt:
      "Keeping in line with MNDA's brand refresh we have given our favourite 12ft Mobi a complete overhaul, with a full respray, new signs and brand-new livery.",
  },
  {
    image: newsDoncaster,
    date: "October 2025",
    title: "Doncaster Knights Partnership",
    excerpt:
      "We're proud to support Doncaster Knights with our 12ft Ultimate Eco Plus solar welfare unit, providing sustainable on-site facilities for their training ground.",
  },
  {
    image: newsKeepmoat,
    date: "September 2025",
    title: "Keepmoat Homes Continued Partnership",
    excerpt:
      "Liberty renews its long-standing partnership with Keepmoat Homes, supplying marketing suites and welfare units across multiple new developments.",
  },
  {
    image: newsProductFocus,
    date: "August 2025",
    title: "Product Focus: 24ft Ultimate Eco Plus",
    excerpt:
      "Our flagship solar welfare unit features twin toilets, full office facilities, and our SOLARTracK monitoring system - a complete sustainable site solution.",
  },
  {
    image: newsAcquisan,
    date: "July 2025",
    title: "Acquisan Acquisition",
    excerpt:
      "Liberty expands its capabilities through the acquisition of Acquisan, strengthening our nationwide service offering.",
  },
  {
    image: newsCustomerFeedback,
    date: "June 2025",
    title: "Customer Feedback Highlights",
    excerpt:
      "Our customers share their experience with Liberty's welfare solutions - read what makes our service stand out.",
  },
  {
    image: newsNewYear,
    date: "January 2025",
    title: "A New Year, A Greener Fleet",
    excerpt:
      "Liberty kicks off the year with a major investment in expanding its solar welfare fleet, doubling down on our sustainability commitment.",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArticleListJsonLd path="/news" articles={articles} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 py-24 md:py-32">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight">
            News & <span className="text-secondary">Updates</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            The latest from Liberty - product launches, partnerships, and industry insights.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article) => (
              <a
                key={article.title}
                href="#"
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-secondary/40 hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-sm hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs uppercase tracking-wider text-secondary font-heading font-semibold mb-3">
                    {article.date}
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide mb-3 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-secondary font-heading font-semibold text-sm uppercase tracking-wider group-hover:underline">
                    Read More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default News;
