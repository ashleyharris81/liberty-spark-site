import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardList, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";
import { solarLooProducts, type SolarProduct } from "@/data/solarProducts";

const ASSETS = "https://assets-libertyguard-co-uk.stackstaging.com/videos";
const HERO_VIDEO = `${ASSETS}/solar%20loos%20video/Social%202.mov`;

const LOO_THUMBS: Record<string, string> = {
  "single-solar-loo": `${ASSETS}/solar%20loos/MK2_2824.%20single%20loo.jpg`,
  "twin-solar-loo": `${ASSETS}/solar%20loos/MJP_3558.%20twin%20loo.jpg`,
};

const CF_SUBDOMAIN = "customer-p8mic15ze1rkgi3y.cloudflarestream.com";
const IFRAME_PARAMS =
  "autoplay=true&loop=true&muted=true&controls=false&preload=auto";
const cfThumb = (uid: string, time = "0s") =>
  `https://${CF_SUBDOMAIN}/${uid}/thumbnails/thumbnail.jpg?time=${time}&width=800&height=600&fit=crop`;

const ProductCardMedia = ({ product }: { product: SolarProduct }) => {
  const override = LOO_THUMBS[product.slug];
  const [attempt, setAttempt] = useState<0 | 1 | 2 | 3>(override ? 0 : 1);

  if (attempt === 3) {
    return (
      <iframe
        src={`https://${CF_SUBDOMAIN}/${product.uid}/iframe?${IFRAME_PARAMS}`}
        title={product.title}
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

  const src =
    attempt === 0 && override
      ? override
      : cfThumb(product.uid, attempt <= 1 ? "0s" : "2s");

  return (
    <img
      src={src}
      alt={product.title}
      loading="lazy"
      onError={() => setAttempt((c) => ((c + 1) as 0 | 1 | 2 | 3))}
      className="absolute inset-0 w-full h-full object-cover scale-125 group-hover:scale-[1.32] transition-transform duration-500"
    />
  );
};


const SolarLoos = () => {
  const renderProduct = (product: SolarProduct) => (
    <Link
      key={product.slug}
      to={`/solar-loos/${product.slug}`}
      onClick={() => window.scrollTo(0, 0)}
      className="group relative overflow-hidden rounded-xl bg-navy-light border border-primary-foreground/10 hover:border-secondary/60 transition-all duration-300 aspect-[4/3]"
    >
      <ProductCardMedia product={product} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h2 className="font-heading text-xl md:text-2xl font-black text-primary-foreground uppercase tracking-tight">
          {product.title}
        </h2>
        <span className="mt-2 inline-block text-secondary font-heading text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
          View Details →
        </span>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <HeroVideo src={HERO_VIDEO} />
          <div className="absolute inset-0 bg-primary/60 z-[5]" />
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
                Solar <span className="text-secondary">Loos</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Self-contained solar-powered portable toilets. Suitable for any location with no mains hook-up required - secure, eco-friendly, and ready for unisex use with on-demand hot water and PIR LED outdoor lighting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solarLooProducts.map(renderProduct)}

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

export default SolarLoos;
