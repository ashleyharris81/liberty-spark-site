import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CloudflareVideo from "@/components/CloudflareVideo";
import heroBg from "@/assets/hero-bg.jpg";

const ASSETS = "https://assets-libertyguard-co-uk.stackstaging.com/videos";
const STATIC_IMG_BY_UID: Record<string, string> = {
  bc0d90221940958c3d321b50e9e36750: `${ASSETS}/solar%20static%20welfare/DSCF7941%2025ft%20solar%20static.jpg`,
  "1fd4831857cb674dbb1b19b27536690f": `${ASSETS}/solar%20static%20welfare/DSCF1270%2028ft%20static.jpg`,
};

interface SpecCategory {
  title: string;
  items: string[];
}

interface Product {
  title: string;
  uid: string;
  specs: SpecCategory[];
}

const SOLAR_PANELS: SpecCategory = {
  title: "Solar Panels",
  items: ["315W Roof-mounted solar panels", "Fitted with a hybrid system"],
};

const products: Product[] = [
  {
    title: "25ft Solar Static",
    uid: "bc0d90221940958c3d321b50e9e36750",
    specs: [
      SOLAR_PANELS,
      {
        title: "Generator",
        items: ["7 KVA Generator", "Full service intervals included"],
      },
      {
        title: "Toilet",
        items: [
          "x1 toilet cubicle with external access",
          "No mains required chemical toilet",
          "Hand wash sink",
          "Hands-free low-power electric hand dryers",
        ],
      },
      {
        title: "Office",
        items: [
          "x2 office chairs",
          "x2 desks & shelving",
          "Whiteboard & notice board",
          "12v diesel heating system throughout",
          "6x 24V USB charging power outlets",
          "6x 500W 230V low power sockets",
        ],
      },
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen; sink, cupboards, worktop",
          "Appliances; microwave & kettle",
          "Fridge",
          "Notice board",
        ],
      },
      {
        title: "Dry Room",
        items: [
          "x1 cubicle with external access",
          "Bench seating with under storage sections",
          "12v diesel heating",
          "Clothes hooks",
        ],
      },
      {
        title: "Canteen",
        items: [
          "Seating for 15 people",
          "12v diesel heating system throughout",
          "Bench seating with under storage sections",
          "3x 24V USB charging power outlets",
          "3x 500W 230V low power sockets",
          "External LED PIR lighting",
        ],
      },
    ],
  },
  {
    title: "28ft Eco Hybrid",
    uid: "1fd4831857cb674dbb1b19b27536690f",
    specs: [
      SOLAR_PANELS,
      {
        title: "Generator",
        items: ["11 KVA Generator", "Full service intervals included"],
      },
      {
        title: "Toilet",
        items: [
          "x2 toilet cubicle with external access",
          "No mains required chemical toilet",
          "Hand wash sink",
          "Hands-free low-power electric hand dryers",
        ],
      },
      {
        title: "Office",
        items: [
          "x2 office chairs",
          "x2 desks & shelving",
          "Whiteboard & notice board",
          "12v diesel heating system throughout",
          "2x 24V USB charging power outlets",
          "4x 500W 230V low power sockets",
        ],
      },
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen; sink, cupboards, worktop",
          "Appliances; microwave & kettle",
          "Fridge",
          "Notice board",
        ],
      },
      {
        title: "Dry Room",
        items: [
          "x1 cubicle with external access",
          "Bench seating with under storage sections",
          "Clothes hooks",
          "12v diesel heating",
        ],
      },
      {
        title: "Canteen",
        items: [
          "Seating for 16 people",
          "12v diesel heating system throughout",
          "Bench seating with under storage sections",
          "4x 500W 230V low power sockets",
          "External LED PIR lighting",
        ],
      },
    ],
  },
];

const SolarStaticWelfare = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={heroBg}
            alt="Liberty Guard solar static welfare unit"
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
                Solar Static <span className="text-secondary">Welfare</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Solar-powered static welfare units for longer-term projects. Combining the spaciousness and durability of static cabins with hybrid solar technology - delivering low emissions, lower fuel costs, and quieter site operations.
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

export default SolarStaticWelfare;
