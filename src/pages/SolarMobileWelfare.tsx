import { useState } from "react";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { ClipboardList, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";
import { solarMobileProducts, type SolarProduct } from "@/data/solarProducts";

const ASSETS = "https://assets-libertyguard-co-uk.stackstaging.com/videos";
const SOLAR_MOBILE_THUMBS: Record<string, string> = {
  "12ft-ultimate-eco": `${ASSETS}/solar%20mobile%20welfare/DSCF2166%2012ft%20UE.jpg`,
  "12ft-ultimate-eco-plus": `${ASSETS}/solar%20mobile%20welfare/IMG_1277%2012FT%20UE%20PLUS.JPEG`,
  "20ft-ultimate-eco": `${ASSETS}/solar%20mobile%20welfare/MJP_9997%2020FT%20UE.jpg`,
  "20ft-ultimate-eco-plus": `${ASSETS}/solar%20mobile%20welfare/IMG_0192%2020ft%20UE%20PLUS.JPEG`,
  "24ft-ultimate-eco-plus": `${ASSETS}/solar%20mobile%20welfare/MJP_0232-3%2024FT%20UE%20PLUS.jpg`,
};

const CF_SUBDOMAIN = "customer-p8mic15ze1rkgi3y.cloudflarestream.com";
const IFRAME_PARAMS =
  "autoplay=true&loop=true&muted=true&controls=false&preload=auto";
const cfThumb = (uid: string, time = "0s") =>
  `https://${CF_SUBDOMAIN}/${uid}/thumbnails/thumbnail.jpg?time=${time}&width=800&height=600&fit=crop`;

const ProductCardMedia = ({ product }: { product: SolarProduct }) => {
  const override = SOLAR_MOBILE_THUMBS[product.slug];
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
      alt={`${product.title} solar mobile welfare unit`}
      loading="lazy"
      onError={() => setAttempt((c) => ((c + 1) as 0 | 1 | 2 | 3))}
      className="absolute inset-0 w-full h-full object-cover scale-125 group-hover:scale-[1.32] transition-transform duration-500"
    />
  );
};

const SolarMobileWelfare = () => {
  const renderProduct = (product: SolarProduct) => (
    <Link
      key={product.slug}
      to={`/solar-mobile-welfare/${product.slug}`}
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
      <BreadcrumbJsonLd items={[{ name: "Solar Solutions", path: "/solar" }, { name: "Solar Mobile Welfare", path: "/solar-mobile-welfare" }]} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <HeroVideo src="https://assets.libertyguard.co.uk/videos/DoncasterKnights15.mov" />
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
                Solar Mobile <span className="text-secondary">Welfare</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                State-of-the-art solar-powered mobile welfare units. Eco-efficient, low emissions, silent running and rainwater harvesting - helping you reduce fuel costs, cut your carbon footprint, and reach net zero goals without compromising on facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid promo */}
      <section className="pt-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto rounded-xl bg-primary/5 border border-primary/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-black text-primary uppercase tracking-tight">
                Looking for solar without going full electric?
              </h3>
              <p className="mt-2 text-primary/70 max-w-2xl">
                Our new Hybrid Mobi range combines a 600W solar panel with a back-up generator - the eco benefits of solar with the reliability of a traditional generator.
              </p>
            </div>
            <Link
              to="/mobile-welfare#hybrid-range"
              onClick={() => window.scrollTo(0, 0)}
              className="shrink-0 inline-flex items-center text-secondary font-heading text-sm font-bold uppercase tracking-wider hover:underline"
            >
              View Hybrid Range →
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solarMobileProducts.map(renderProduct)}

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

export default SolarMobileWelfare;
