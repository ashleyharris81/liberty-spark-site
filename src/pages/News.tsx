import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import newsProductFocus from "@/assets/news-product-focus.jpg";
import newsCustomerFeedback from "@/assets/news-customer-feedback.png";
import newsNewYear from "@/assets/news-new-year.jpg";
import newsAcquisan from "@/assets/news-acquisan.jpg";
import newsDoncaster from "@/assets/news-doncaster.png";
import newsKeepmoat from "@/assets/news-keepmoat.png";

const articles = [
  {
    id: "product-focus",
    title: "Product Focus",
    date: "29 January 2026",
    image: newsProductFocus,
    excerpt:
      "Solar powered welfare units offer many benefits for both the user and the environment. For our customers our solar range provide reliable, self-sufficient facilities with reduced fuel costs, lower maintenance requirements, and quieter operation, creating a more comfortable and efficient site experience.",
    fullContent:
      "Solar powered welfare units offer many benefits for both the user and the environment. For our customers our solar range provide reliable, self-sufficient facilities with reduced fuel costs, lower maintenance requirements, and quieter operation, creating a more comfortable and efficient site experience. With self-contained power that supports lighting, heating, and charging without constant generator use. Regarding environmental benefits, Liberty solar welfare units significantly reduce carbon emissions, fuel consumption, and noise pollution. By harnessing renewable energy, they help minimise a site's environmental impact while supporting sustainability targets and greener working practices, making them a smart, responsible and sustainable choice for modern construction sites.",
  },
  {
    id: "customer-feedback",
    title: "Customer Feedback",
    date: "9 January 2026",
    image: newsCustomerFeedback,
    excerpt:
      "At Liberty Group our customers are our top priority, that's why we pride ourselves on our friendly and approachable sales team, who are on hand to answer any of those technical questions you may have, provide a quote and calculate a sustainability plan.",
    fullContent:
      "At Liberty Group our customers are our top priority, that's why we pride ourselves on our friendly and approachable sales team, who are on hand to answer any of those technical questions you may have, provide a quote and calculate a sustainability plan, for all our customers striving towards their net zero goals. We also offer a dedicated after care department that deals with any welfare issues you may have, any transport queries, ETA's or potential breakdown complications. Our after care team give a 24/7 service for any emergency issues, which gives all of our customers much needed piece of mind.\n\nAt Liberty we thrive on positive customer experience and when we receive encouraging feedback, we're ecstatic! Here's one we received just before Christmas;\n\n\"I would just like to compliment all at Liberty Guard to the way they perform as well as the standard of the welfare units we get. If we have faults or queries with the units, the backup service we receive is excellent as well as the helpfulness of your on and off hire departments when we require times deliveries and collections.\"",
  },
  {
    id: "new-years-resolution",
    title: "New Years Resolution!",
    date: "2 January 2026",
    image: newsNewYear,
    excerpt:
      "Have you made any New Year's resolutions yet? Or maybe set yourself a few goals for 2026? Whether it's getting fitter, learning something new, or just being a bit more organised, this time of year always feels like a fresh start.",
    fullContent:
      "Have you made any New Year's resolutions yet? Or maybe set yourself a few goals for 2026? Whether it's getting fitter, learning something new, or just being a bit more organised, this time of year always feels like a fresh start.\n\nHere at Liberty Group, we're very much in that same mindset. We're always looking for ways to improve, grow, and do things better, and this year is no exception. Over this next year, we're committed to expanding our welfare fleet so we can support even more sites with reliable, high-quality facilities. We're also investing further into our solar-powered products, because we believe smarter, cleaner, sustainable energy solutions are the way forward.\n\nSustainability isn't just a buzzword for us, it's a real priority. From reducing emissions to improving efficiency on site, we're focused on making solar powered welfare more accessible and practical for everyone. We're excited about what's ahead and can't wait to see where 2026 takes us!",
  },
  {
    id: "acquisan-acquisition",
    title: "Acquisan Announces Acquisition of Liberty Group Holdings Limited",
    date: "9 December 2025",
    image: newsAcquisan,
    excerpt:
      "Acquisan, supported by Westbrooke Equity Partners (Westbrooke), has acquired Liberty Guard (UK) Limited, a leading provider of welfare units and site accommodation. This strategic move marks a significant milestone in Acquisan's mission to build a UK network of welfare and sanitation services.",
    fullContent:
      "Acquisan, supported by Westbrooke Equity Partners (Westbrooke), has acquired Liberty Guard (UK) Limited, a leading provider of welfare units and site accommodation. This strategic move marks a significant milestone in Acquisan's mission to build a UK network of welfare and sanitation services.",
  },
  {
    id: "doncaster-railway",
    title: "Doncaster Railway Station, The Big Renovation Project",
    date: "1 December 2025",
    image: newsDoncaster,
    excerpt:
      "We're incredibly proud to have played a part in the recent regeneration of Doncaster Railway Station, a project that represents a major step forward for our city. With a total investment of £7.5 million, this transformative development has brought long-overdue improvements.",
    fullContent:
      "We're incredibly proud to have played a part in the recent regeneration of Doncaster Railway Station, a project that represents a major step forward for our city. With a total investment of £7.5 million, this transformative development has brought long-overdue improvements to one of Doncaster's key transport hubs.",
  },
  {
    id: "keepmoat-homes",
    title: "Site Set-Up for Keepmoat Homes with £25m Housing Development",
    date: "29 November 2025",
    image: newsKeepmoat,
    excerpt:
      "We're proud to support the early stages of a major housing development in partnership with Keepmoat Homes, providing a full Liberty Guard site set-up to help bring this ambitious project to life.",
    fullContent:
      "We're proud to support the early stages of a major housing development in partnership with Keepmoat Homes, providing a full Liberty Guard site set-up to help bring this ambitious project to life.",
  },
];

const News = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="bg-primary py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
              Liberty <span className="text-secondary">News</span>
            </h1>
            <p
              className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              The latest updates, projects and insights from Liberty Group
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article) => {
              const isExpanded = expandedId === article.id;
              return (
                <article
                  key={article.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-secondary/40 transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <time>{article.date}</time>
                    </div>
                    <h2 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide mb-3 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {isExpanded ? article.fullContent : article.excerpt}
                    </p>
                    <button
                      onClick={() =>
                        setExpandedId(isExpanded ? null : article.id)
                      }
                      className="inline-block mt-4 text-secondary font-heading font-semibold text-sm uppercase tracking-wider hover:underline text-left"
                    >
                      {isExpanded ? "Show Less ←" : "Read More →"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
