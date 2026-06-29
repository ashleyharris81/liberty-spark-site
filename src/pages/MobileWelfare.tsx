import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardList, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";

import heroBg from "@/assets/hybrid-24ft-twin-card.jpg";
import hybrid12ftCard from "@/assets/hybrid-12ft-card.jpg";
import hybrid16ftCard from "@/assets/hybrid-16ft-card.jpg";
import hybrid24ftTwinCard from "@/assets/hybrid-24ft-twin-card.jpg";
import twin24Centered from "@/assets/24ft-mobi-twin-toilet-card.jpg";
import { mobiModels, type MobiModel } from "@/data/mobiModels";

// Centered still-image overrides (skip CF thumbnail so container stays central)
const cardOverrides: Partial<Record<MobiModel["slug"], { src: string; objectPosition?: string }>> = {
  "24ft-mobi-twin-toilet": { src: twin24Centered },
  "12ft-hybrid-mobi": { src: hybrid12ftCard },
  "16ft-hybrid-mobi": { src: hybrid16ftCard },
  "24ft-hybrid-mobi-twin-toilet": { src: hybrid24ftTwinCard },
};

// Fine-tune object-position for Cloudflare thumbnails that are off-centre
const thumbPositions: Partial<Record<MobiModel["slug"], string>> = {
  "16ft-mobi-plus": "70% center",
};

const CF_SUBDOMAIN = "customer-p8mic15ze1rkgi3y.cloudflarestream.com";
const IFRAME_PARAMS =
  "autoplay=true&loop=true&muted=true&controls=false&preload=auto";
const thumb = (uid: string, time = "0s") =>
  `https://${CF_SUBDOMAIN}/${uid}/thumbnails/thumbnail.jpg?time=${time}&width=800&height=600&fit=crop`;

const fallbackImages: Partial<Record<MobiModel["slug"], string>> = {
  "12ft-hybrid-mobi": hybrid12ftCard,
  "16ft-hybrid-mobi": hybrid16ftCard,
  "24ft-hybrid-mobi-twin-toilet": hybrid24ftTwinCard,
};

const ModelCardMedia = ({ model }: { model: MobiModel }) => {
  const override = cardOverrides[model.slug];
  const [thumbAttempt, setThumbAttempt] = useState<0 | 1 | 2>(0);
  const fallbackImage = fallbackImages[model.slug];

  if (override) {
    return (
      <img
        src={override.src}
        alt={model.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        style={{ objectPosition: override.objectPosition ?? "center" }}
      />
    );
  }


  if (thumbAttempt === 2) {
    if (fallbackImage) {
      return (
        <img
          src={fallbackImage}
          alt={model.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      );
    }

    return (
      <iframe
        src={`https://${CF_SUBDOMAIN}/${model.uid}/iframe?${IFRAME_PARAMS}`}
        title={model.title}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        loading="lazy"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0"
        style={{
          width: "calc(100% + 6rem)",
          height: "calc(100% + 6rem)",
          minWidth: "100%",
          minHeight: "100%",
        }}
      />
    );
  }

  return (
    <img
      src={thumb(model.uid, thumbAttempt === 0 ? "0s" : "2s")}
      alt={model.title}
      loading="lazy"
      onError={() => setThumbAttempt((current) => (current === 0 ? 1 : 2))}
      className="absolute inset-0 w-full h-full object-cover scale-125 group-hover:scale-[1.32] transition-transform duration-500"
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
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 z-[1]">
            <HeroVideo src="https://assets-libertyguard-co-uk.stackstaging.com/videos/mobilewelfare/24ft%20Mobi/LGMPO68%20-%2024ft%20Mobi.mov" />
          </div>
          <div className="absolute inset-0 bg-primary/60 z-[2]" />
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(() => {
                const lastSlug = "24ft-hybrid-mobi-twin-toilet";
                const ordered = [
                  ...mobiModels.filter((m) => m.slug !== lastSlug),
                ];
                const lastModel = mobiModels.find((m) => m.slug === lastSlug);

                const renderModel = (model: MobiModel) => (
                  <Link
                    key={model.slug}
                    to={`/mobile-welfare/${model.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="group relative overflow-hidden rounded-xl bg-navy-light border border-primary-foreground/10 hover:border-secondary/60 transition-all duration-300 aspect-[4/3]"
                  >
                    <ModelCardMedia model={model} />
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
                );

                return (
                  <>
                    {ordered.map(renderModel)}

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

              {lastModel && renderModel(lastModel)}

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
                  </>
                );
              })()}
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
