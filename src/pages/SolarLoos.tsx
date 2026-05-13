import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CloudflareVideo from "@/components/CloudflareVideo";
import { downloadFile } from "@/lib/downloadFile";
const heroBg = "https://customer-p8mic15ze1rkgi3y.cloudflarestream.com/72c99cace1b5f8642fab7ab476c7c65c/thumbnails/thumbnail.jpg?time=2s&height=900";

interface SpecCategory {
  title: string;
  items: string[];
}

interface Product {
  title: string;
  uid: string;
  specSheet?: string;
  specs: SpecCategory[];
}

const POWER_SINGLE: SpecCategory = {
  title: "Power",
  items: [
    "3 x 150W Solar panels with inverter",
    "3 x 150AH Deep cycle batteries",
    "240v Backup battery",
    "Integrated diesel/electric power",
  ],
};

const POWER_TWIN: SpecCategory = {
  title: "Power",
  items: [
    "3 x 185W Solar panels with inverter",
    "3 x 150AH Deep cycle batteries",
    "240v Backup battery",
    "Integrated diesel/electric power",
  ],
};

const EXTERIOR: SpecCategory = {
  title: "Exterior",
  items: [
    "Secure locking system",
    "Suitable for any location",
    "PIR LED outdoor lighting",
    "Waste tank indicator",
  ],
};

const products: Product[] = [
  {
    title: "Single Solar Loo",
    specSheet: "/downloads/solar_loo_single.pdf",
    uid: "72c99cace1b5f8642fab7ab476c7c65c",
    specs: [
      {
        title: "Specifications",
        items: [
          "Size (mm): 2670 L x 1780 W x 2625 H",
          "500L Waste tank",
          "Drop through toilet",
          "Stainless steel sink",
          "400L Fresh water tank",
          "53L Diesel tank",
        ],
      },
      {
        title: "Interior",
        items: [
          "Single toilet interior",
          "Quality fittings",
          "12v Diesel Webasto water heating system",
          "On demand hot water",
          "Hot & cold freshwater taps",
          "Feminine hygiene bins",
          "Unisex facility",
        ],
      },
      POWER_SINGLE,
      EXTERIOR,
    ],
  },
  {
    title: "Twin Solar Loo",
    specSheet: "/downloads/solar_loo_twin.pdf",
    uid: "8ab52ab4ab0dbb598cf1c432526e5b39",
    specs: [
      {
        title: "Specifications",
        items: [
          "Size (mm): 2670 L x 2560 W x 2625 H",
          "800L Waste tank",
          "Drop through toilet",
          "Stainless steel sink",
          "400L Fresh water tank",
          "53L Diesel tank",
        ],
      },
      {
        title: "Interior",
        items: [
          "Two single toilets with external access",
          "Quality fittings",
          "12v Diesel Webasto water heating system",
          "On demand hot water",
          "Hot & cold freshwater taps",
          "Feminine hygiene bins",
          "Unisex facility",
        ],
      },
      POWER_TWIN,
      EXTERIOR,
    ],
  },
];

const SolarLoos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={heroBg}
            alt="Liberty Guard solar loo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                to="/"
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

      {/* Product Cards */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-10 max-w-7xl mx-auto">
            {products.map((product) => (
              <article
                key={product.title}
                className="group relative overflow-hidden rounded-xl bg-navy-light border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-300"
              >
                <div className="p-6 md:p-10">
                  <h2 className="font-heading text-2xl md:text-3xl font-black text-primary-foreground uppercase tracking-tight mb-6">
                    {product.title}
                  </h2>

                  <div className="mb-8 mx-auto w-full max-w-[800px]">
                    <div className="rounded-lg overflow-hidden border border-primary-foreground/10">
                      <CloudflareVideo uid={product.uid} variant="card" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {product.specs.map((spec) => (
                      <div key={spec.title}>
                        <h3 className="font-heading text-sm font-bold text-secondary uppercase tracking-wider mb-3 pb-2 border-b border-primary-foreground/10">
                          {spec.title}
                        </h3>
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
                  {product.specSheet && (
                    <div className="mt-8 flex justify-center">
                      <button
                        type="button"
                        onClick={() => downloadFile(product.specSheet)}
                        className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all"
                      >
                        Product Specification Sheet
                      </button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default SolarLoos;
