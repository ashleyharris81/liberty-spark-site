import { Link } from "react-router-dom";
import { articles } from "@/data/newsArticles";

const NewsTeaser = () => {
  const latest = articles[0];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight">
              News & <span className="text-secondary">Updates</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed mx-auto lg:mx-0">
              Read about our latest product launches, partnerships and industry insights here.
            </p>
            <Link
              to="/news"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex mt-8 items-center justify-center bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-md hover:brightness-110 transition-all duration-300"
            >
              Read More Here
            </Link>
          </div>

          <Link
            to="/news"
            onClick={() => window.scrollTo(0, 0)}
            aria-label="View all news and updates"
            className="group block bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-secondary/40 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row h-full">
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs uppercase tracking-wider text-secondary font-heading font-semibold">
                  {latest.date}
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground uppercase tracking-wide mt-3 leading-snug">
                  {latest.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4 flex-1">
                  {latest.excerpt}
                </p>
                <span className="self-start mt-6 text-secondary font-heading font-semibold text-sm uppercase tracking-wider group-hover:underline">
                  Read More →
                </span>
              </div>
              <div className="sm:w-2/5 overflow-hidden">
                <img
                  src={latest.image}
                  alt={`${latest.title} — Liberty news`}
                  className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsTeaser;
