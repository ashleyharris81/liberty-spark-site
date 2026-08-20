import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { BreadcrumbJsonLd, ArticleListJsonLd } from "@/components/JsonLd";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { articles } from "@/data/newsArticles";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArticleListJsonLd path="/news" articles={articles} />
      <BreadcrumbJsonLd items={[{ name: "News", path: "/news" }]} />
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
              <Link
                key={article.title}
                to={`/news/${article.slug}`}
                className="group bg-card rounded-xl overflow-hidden border border-border transition-all duration-300 shadow-sm hover:shadow-lg hover:border-secondary/40 hover:-translate-y-2 flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={`${article.title} — Liberty news`}
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
                  <span className="self-start mt-4 text-secondary font-heading font-semibold text-sm uppercase tracking-wider group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
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
