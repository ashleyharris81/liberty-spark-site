import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CloudflareVideo from "@/components/CloudflareVideo";
import heroBg from "@/assets/hero-bg.jpg";

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

const TOWING: SpecCategory = {
  title: "Towing & Setup",
  items: [
    "Standard ball-socket type towbar",
    "Integrated rear lighting",
    "Hydraulic system allows wheels to be retracted",
  ],
};

const DRY_ROOM: SpecCategory = {
  title: "Dry Room",
  items: [
    "24V air-blown diesel heater",
    "Coat hooks",
    "Bench seating",
    "Fully heated",
  ],
};

const BATTERY: SpecCategory = {
  title: "Battery",
  items: [
    "Lithium-ion battery",
    "Back-up generator",
    "SOLARTracK™ remote energy, battery, tank & fault monitoring system",
  ],
};

const TOILET_SINGLE: SpecCategory = {
  title: "Toilet",
  items: [
    "1x toilet cubicle with external access",
    "Freshwater microflush toilet",
    "Hand wash sink",
    "Hands-free low-power electric hand dryers",
  ],
};

const TOILET_DOUBLE: SpecCategory = {
  title: "Toilet",
  items: [
    "2x toilet cubicle with external access",
    "Freshwater microflush toilet",
    "Hand wash sink",
    "Hands-free low-power electric hand dryers",
  ],
};

const RAIN_HARVESTING: SpecCategory = {
  title: "Rain Harvesting",
  items: ["WM PRO™ - rainwater harvesting & greywater recycling system"],
};

const SOLAR_PANELS: SpecCategory = {
  title: "Solar Panels",
  items: ["315W Roof-mounted solar panels"],
};

const TELEMETRY: SpecCategory = {
  title: "Telemetry",
  items: [
    "Customer friendly digital device tracking location, battery, energy, fuel, waste & water",
  ],
};

const KITCHEN_BASE: SpecCategory = {
  title: "Kitchen",
  items: [
    "Fitted kitchen with sink, cupboards & worktop",
    "Appliances - microwave & kettle",
    "Notice board",
  ],
};

const KITCHEN_PLUS: SpecCategory = {
  title: "Kitchen",
  items: [
    "Fitted kitchen with sink, cupboards & worktop",
    "Appliances - microwave & kettle",
    "Fridge",
    "Notice board",
  ],
};

const CANTEEN_12: SpecCategory = {
  title: "Canteen",
  items: [
    "Seating for up to 7 people",
    "Under-bench storage space",
    "4x 24V USB charging power outlets",
    "24V air-blown diesel heater",
    "Internal and external PIR-sensor 24V LED floodlights",
  ],
};

const CANTEEN_20: SpecCategory = {
  title: "Canteen",
  items: [
    "Seating for up to 12 people",
    "Under-bench storage space",
    "4x 24V USB charging power outlets",
    "4x 500W 230V low power sockets",
    "24V air-blown diesel heater",
    "Internal and external PIR-sensor 24V LED floodlights",
  ],
};

const OFFICE_20: SpecCategory = {
  title: "Office",
  items: [
    "1x Office Chair",
    "Fitted desk & work surface",
    "Whiteboard & notice board",
    "24V air blown diesel heater",
    "4x 24V USB-C charging power outlets",
    "2x 500W 230V low power sockets",
  ],
};

const products: Product[] = [
  {
    title: "12ft Ultimate Eco",
    specSheet: "/downloads/12ft_ultimate_eco.pdf",
    uid: "e167fa58628c9062d8051429040b06f9",
    specs: [
      CANTEEN_12,
      TOWING,
      DRY_ROOM,
      BATTERY,
      TOILET_SINGLE,
      RAIN_HARVESTING,
      KITCHEN_BASE,
      SOLAR_PANELS,
      TELEMETRY,
    ],
  },
  {
    title: "12ft Ultimate Eco Plus",
    specSheet: "/downloads/12ft_ultimate_eco_plus.pdf",
    uid: "cc2bc1dcb70121e85dc49d711dffd3c0",
    specs: [
      CANTEEN_12,
      TOWING,
      DRY_ROOM,
      BATTERY,
      TOILET_SINGLE,
      RAIN_HARVESTING,
      KITCHEN_PLUS,
      SOLAR_PANELS,
      TELEMETRY,
    ],
  },
  {
    title: "20ft Ultimate Eco",
    specSheet: "/downloads/20ft_ultimate_eco.pdf",
    uid: "c508c767438ac222f1cac1294fbfcde1",
    specs: [
      CANTEEN_20,
      TOWING,
      DRY_ROOM,
      BATTERY,
      TOILET_SINGLE,
      RAIN_HARVESTING,
      OFFICE_20,
      KITCHEN_BASE,
      SOLAR_PANELS,
      TELEMETRY,
    ],
  },
  {
    title: "20ft Ultimate Eco Plus",
    specSheet: "/downloads/20ft_ultimate_eco_plus.pdf",
    uid: "750f03c60dde24f7d87081424513b5f4",
    specs: [
      CANTEEN_20,
      TOWING,
      DRY_ROOM,
      BATTERY,
      TOILET_SINGLE,
      RAIN_HARVESTING,
      OFFICE_20,
      KITCHEN_PLUS,
      SOLAR_PANELS,
      TELEMETRY,
    ],
  },
  {
    title: "24ft Ultimate Eco Plus",
    specSheet: "/downloads/24ft_ultimate_eco_plus.pdf",
    uid: "a1c53ee2fffe88785f5e3f8798030aa6",
    specs: [
      CANTEEN_20,
      TOWING,
      DRY_ROOM,
      BATTERY,
      TOILET_DOUBLE,
      RAIN_HARVESTING,
      OFFICE_20,
      KITCHEN_PLUS,
      SOLAR_PANELS,
      TELEMETRY,
    ],
  },
];

const SolarMobileWelfare = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={heroBg}
            alt="Liberty Guard solar mobile welfare unit"
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

      {/* Product Cards */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto mb-10 rounded-xl bg-muted/10 border border-primary-foreground/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-black text-primary-foreground uppercase tracking-tight">
                Looking for solar without going full electric?
              </h3>
              <p className="mt-2 text-primary-foreground/70 max-w-2xl">
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

export default SolarMobileWelfare;
