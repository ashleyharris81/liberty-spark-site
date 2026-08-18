import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CloudflareVideo from "@/components/CloudflareVideo";
import { getStaticModel } from "@/data/staticModels";
import { downloadFile } from "@/lib/downloadFile";
import { ProductJsonLd } from "@/components/JsonLd";

const StaticModel = () => {
  const { slug } = useParams<{ slug: string }>();
  const model = slug ? getStaticModel(slug) : undefined;

  if (!model) return <Navigate to="/static-welfare" replace />;

  return (
    <div className="min-h-screen">
      <ProductJsonLd
        name={`${model.title} Static Welfare Unit`}
        description={`${model.title}${model.subtitle ? ` — ${model.subtitle}` : ""} static welfare unit available for nationwide hire from Liberty.`}
        path={`/static-welfare/${model.slug}`}
        specs={model.specs}
      />
      <Navbar />

      <section className="pt-20 bg-primary">
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
          <CloudflareVideo uid={model.uid} variant="hero" />
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            to="/static-welfare"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
          >
            ← Back to Static Welfare
          </Link>

          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              {model.isHybrid && (
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary/20 text-secondary font-heading text-xs font-bold uppercase tracking-wider">
                  Hybrid Range
                </span>
              )}
              <h1 className="font-heading text-4xl md:text-6xl font-black text-primary-foreground uppercase tracking-tight">
                {model.title}
              </h1>
              {model.subtitle && (
                <p className="mt-3 font-heading text-base font-bold text-secondary uppercase tracking-wider">
                  {model.subtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {model.specs.map((spec) => (
                <div key={spec.title}>
                  <h2 className="font-heading text-sm font-bold text-secondary uppercase tracking-wider mb-3 pb-2 border-b border-primary-foreground/10">
                    {spec.title}
                  </h2>
                  <ul className="space-y-2">
                    {spec.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-primary-foreground/70 leading-relaxed flex gap-2"
                      >
                        <span className="text-secondary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {model.specSheet && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => downloadFile(model.specSheet)}
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all"
                >
                  Product Specification Sheet
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default StaticModel;
