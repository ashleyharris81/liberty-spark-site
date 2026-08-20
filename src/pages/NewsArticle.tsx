import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { BreadcrumbJsonLd, NewsArticleJsonLd } from "@/components/JsonLd";
import Seo from "@/components/Seo";
import { useEffect } from "react";
import { articles, getArticleBySlug } from "@/data/newsArticles";

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Seo title="Article Not Found | Liberty" />
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
            <h1 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-4">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The news article you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/news"
              className="inline-block bg-secondary text-secondary-foreground font-heading font-semibold uppercase tracking-wider text-sm px-6 py-3 rounded-lg hover:opacity-90"
            >
              Back to News
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const articleIndex = articles.findIndex((a) => a.slug === article.slug);
  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${article.title} | Liberty News`}
        description={article.excerpt}
      />
      <NewsArticleJsonLd
        title={article.title}
        date={article.date}
        excerpt={article.excerpt}
        image={article.image}
        slug={article.slug}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "News", path: "/news" },
          { name: article.title, path: `/news/${article.slug}` },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
          <Link
            to="/news"
            className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground font-heading text-sm uppercase tracking-wider mb-6"
          >
            ← Back to News
          </Link>
          <div className="text-xs uppercase tracking-wider text-secondary font-heading font-semibold mb-4">
            {article.date}
          </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground uppercase tracking-tight leading-tight max-w-4xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="aspect-[16/9] overflow-hidden rounded-xl mb-10 shadow-lg">
            <img
              src={article.image}
              alt={`${article.title} — Liberty news`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="text-foreground text-base md:text-lg leading-relaxed space-y-6">
            {article.body.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="mt-16 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevArticle ? (
              <Link
                to={`/news/${prevArticle.slug}`}
                className="group block"
              >
                <span className="block text-xs uppercase tracking-wider text-muted-foreground font-heading mb-1">
                  ← Previous
                </span>
                <span className="block font-heading font-bold text-foreground uppercase tracking-wide group-hover:text-secondary transition-colors">
                  {prevArticle.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {nextArticle ? (
              <Link
                to={`/news/${nextArticle.slug}`}
                className="group block sm:text-right"
              >
                <span className="block text-xs uppercase tracking-wider text-muted-foreground font-heading mb-1">
                  Next →
                </span>
                <span className="block font-heading font-bold text-foreground uppercase tracking-wide group-hover:text-secondary transition-colors">
                  {nextArticle.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </article>

      <Contact />
      <Footer />
    </div>
  );
};

export default NewsArticle;
