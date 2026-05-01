import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardList, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CloudflareVideo from "@/components/CloudflareVideo";
import heroBg from "@/assets/hero-bg.jpg";
import { mobiModels, type MobiModel } from "@/data/mobiModels";

const CF_SUBDOMAIN = "customer-p8mic15ze1rkgi3y.cloudflarestream.com";
const thumb = (uid: string) =>
  `https://${CF_SUBDOMAIN}/${uid}/thumbnails/thumbnail.jpg?time=2s&height=600`;

const ModelCardMedia = ({ model }: { model: MobiModel }) => {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="absolute inset-0">
        <CloudflareVideo uid={model.uid} variant="card" className="!aspect-auto h-full" />
      </div>
    );
  }
  return (
    <img
      src={thumb(model.uid)}
      alt={model.title}
      loading="lazy"
      onError={() => setErrored(true)}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  );
};

const MobileWelfare = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={heroBg}
            alt="Liberty Guard mobile welfare unit"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
              >
                ← Back to Home
              </Link>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
                Mobile <span className="text-secondary">Welfare</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Towable welfare units that can be easily transported between sites. Choose from our standard range with reliable generator power, or our hybrid range featuring solar-assisted running for reduced fuel costs and lower emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Grid */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobiModels.map((model) => (
                <Link
                  key={model.slug}
                  to={`/mobile-welfare/${model.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group relative overflow-hidden rounded-xl bg-navy-light border border-primary-foreground/10 hover:border-secondary/60 transition-all duration-300 aspect-[4/3]"
                >
                  <img
                    src={thumb(model.uid)}
                    alt={model.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                  {model.isHybrid && (
                    <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-heading text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      Hybrid
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="font-heading text-xl md:text-2xl font-black text-primary-foreground uppercase tracking-tight">
                      {model.title}
                    </h2>
                    {model.subtitle && (
                      <p className="mt-1 font-heading text-xs font-bold text-secondary uppercase tracking-wider">
                        {model.subtitle}
                      </p>
                    )}
                    <span className="mt-2 inline-block text-secondary font-heading text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details →
                    </span>
                  </div>
                </Link>
              ))}

              {/* CTA: New Customer */}
              <Link
                to="/new-account"
                onClick={() => window.scrollTo(0, 0)}
                className="group relative overflow-hidden rounded-xl border-2 border-secondary/60 hover:border-secondary bg-primary hover:bg-secondary/10 transition-all duration-300 aspect-[4/3] flex flex-col items-center justify-center p-6 text-center"
              >
                <ClipboardList className="w-14 h-14 text-secondary mb-4" />
                <h3 className="font-heading text-xl font-black text-primary-foreground uppercase tracking-tight">
                  New Customer
                </h3>
                <p className="mt-1 font-heading text-sm text-primary-foreground/80 uppercase tracking-wider">
                  Open an Account
                </p>
                <span className="mt-3 text-secondary font-heading text-xs font-semibold uppercase tracking-wider">
                  Get Started →
                </span>
              </Link>

              {/* CTA: Email Us */}
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="group relative overflow-hidden rounded-xl border-2 border-secondary/60 hover:border-secondary bg-primary hover:bg-secondary/10 transition-all duration-300 aspect-[4/3] flex flex-col items-center justify-center p-6 text-center"
              >
                <Mail className="w-14 h-14 text-secondary mb-4" />
                <h3 className="font-heading text-xl font-black text-primary-foreground uppercase tracking-tight">
                  Email Us
                </h3>
                <p className="mt-1 font-heading text-sm text-primary-foreground/80 uppercase tracking-wider">
                  Request a Quote
                </p>
                <span className="mt-3 text-secondary font-heading text-xs font-semibold uppercase tracking-wider">
                  Contact →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default MobileWelfare;
