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
  subtitle?: string;
  uid: string;
  specs: SpecCategory[];
}

const TOWING: SpecCategory = {
  title: "Towing & Setup",
  items: [
    "Standard ball-socket type towbar",
    "Integrated rear lighting",
    "Anti-vandal lockable steel tow bar cover",
    "Hydraulic jack allows wheels to be retracted",
  ],
};

const GENERATOR: SpecCategory = {
  title: "Generator / Drying Room",
  items: [
    "7 kVA Generator",
    "Full-service intervals included",
    "Diesel container & funnel supplied",
    "Fully heated",
    "Clothes hooks",
  ],
};

const TOILET: SpecCategory = {
  title: "Toilet",
  items: [
    "x1 toilet cubicle with external access",
    "Hand washing",
    "No-mains required chemical toilet",
    "High security skylight provides natural light",
  ],
};

const TOILET_TWIN: SpecCategory = {
  ...TOILET,
  items: [
    "x2 toilet cubicle with external access",
    "Hand washing",
    "No-mains required chemical toilet",
    "High security skylight provides natural light",
  ],
};

const products: Product[] = [
  {
    title: "12ft Mobi",
    uid: "8b316178f0d091f7689dfb8b562f36ef",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Water cooler",
          "Bin",
          "Notice board",
        ],
      },
      {
        title: "Canteen",
        items: ["Seating for up to 7", "Under-bench storage space", "Plinth heater"],
      },
      TOWING,
    ],
  },
  {
    title: "16ft Mobi",
    uid: "7d97dd84f8d1b4f437a9cdce22ec9a8f",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Bin",
          "Notice board",
        ],
      },
      {
        title: "Canteen",
        items: ["Seating for up to 12", "Under-bench storage space", "Plinth heater"],
      },
      {
        title: "Additional Seating",
        items: ["Extra seating for 7 people", "Use as extra canteen area", "Use as work area"],
      },
      TOWING,
    ],
  },
  {
    title: "16ft Mobi Plus",
    uid: "55a655e74c625fa98b5dfaad02950ee6",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Bin",
          "Notice board",
        ],
      },
      {
        title: "Canteen",
        items: ["Seating for up to 10", "Under-bench storage space", "Plinth heater"],
      },
      {
        title: "Office",
        items: ["Large desk", "x1 office chair", "Additional canteen bench seating", "Notice board"],
      },
      TOWING,
    ],
  },
  {
    title: "20ft Mobi",
    uid: "f6e58c215f145a61fe3d48394d98ecf8",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Water cooler",
          "Bin",
        ],
      },
      {
        title: "Canteen",
        items: ["Seating for up to 17", "Under-bench storage space", "Plinth heater"],
      },
      TOWING,
    ],
  },
  {
    title: "20ft Mobi Plus",
    uid: "78d0d5aae467fa6a150c2a1f558eb220",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Bin",
        ],
      },
      {
        title: "Office",
        items: ["Large desk", "x1 office chair", "Notice board"],
      },
      {
        title: "Canteen",
        items: ["Seating up to 13", "Under-bench storage space", "Plinth heater"],
      },
      TOWING,
    ],
  },
  {
    title: "24ft Mobi",
    uid: "718203c553ab7aac3268319b9aae8427",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Bin",
          "Notice board",
        ],
      },
      {
        title: "Office",
        items: ["x2 office chairs", "x2 desks", "Notice board"],
      },
      {
        title: "Canteen",
        items: ["Seating up to 15 people", "Under-bench storage space", "Plinth heater"],
      },
      TOWING,
    ],
  },
  {
    title: "24ft Mobi Twin Toilet",
    uid: "4246e01f4aa1f753693be5f0cd6bd673",
    specs: [
      GENERATOR,
      TOILET_TWIN,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Bin",
          "Notice board",
        ],
      },
      {
        title: "Office",
        items: ["x1 office chair", "x1 desk & shelving", "Notice board"],
      },
      {
        title: "Canteen",
        items: ["Seating up to 13 people", "Under-bench storage space", "Plinth heater"],
      },
      {
        title: "Drying Room",
        items: ["Fully heated - plinth & wall heaters", "Bench & clothes hooks"],
      },
      TOWING,
    ],
  },
];

const HYBRID_TOWING: SpecCategory = {
  title: "Towing & Setup",
  items: [
    "Standard ball-socket type towbar",
    "Integrated rear lighting",
    "Anti-vandal lockable steel tow bar cover",
    "Hydraulic jack allows wheels to be retracted",
    "Road towable",
  ],
};

const HYBRID_RUNNING: SpecCategory = {
  title: "Hybrid Running",
  items: [
    "600W roof-mounted solar panel",
    "6kVA generator",
    "50L fuel tank",
    "Diesel container & funnel supplied",
  ],
};

const HYBRID_DRY_ROOM: SpecCategory = {
  title: "Walk-in Dry Room",
  items: ["12v HVO heater", "Clothes hooks", "Cushioned bench seating"],
};

const HYBRID_KITCHEN: SpecCategory = {
  title: "Kitchen",
  items: [
    "Fitted kitchen - sink, cupboards & worktop",
    "Appliances - microwave & kettle",
    "Bin",
    "Notice board",
  ],
};

const HYBRID_OFFICE: SpecCategory = {
  title: "Office",
  items: [
    "Office desk",
    "x1 chair",
    "Notice board",
    "12v LED lighting",
    "Low energy plug sockets",
    "12v USB power outlets",
  ],
};

const HYBRID_TOILET_SINGLE: SpecCategory = {
  title: "Toilet",
  items: [
    "x1 toilet cubicle with external access",
    "Hand washing / drying station",
    "No-mains required water flush toilet",
    "Safety lock door",
  ],
};

const HYBRID_TOILET_TWIN: SpecCategory = {
  title: "Toilet",
  items: [
    "x2 toilet cubicle with external access",
    "Urinal",
    "Hand washing / drying station",
    "No-mains required water flush toilet",
    "Safety lock door",
  ],
};

const hybridCanteen = (seats: number): SpecCategory => ({
  title: "Canteen",
  items: [
    `Seating for up to ${seats}`,
    "Under-bench storage space",
    "12v LED lighting",
    "Low energy plug sockets",
    "12v USB power outlets",
    "12v HVO heater",
  ],
});

const hybridProducts: Product[] = [
  {
    title: "12ft Hybrid Mobi",
    subtitle: "7 Person",
    uid: "926eed1261b29291590f8366862e09d4",
    specs: [
      hybridCanteen(7),
      HYBRID_KITCHEN,
      HYBRID_RUNNING,
      HYBRID_DRY_ROOM,
      HYBRID_TOILET_SINGLE,
      HYBRID_TOWING,
    ],
  },
  {
    title: "16ft Hybrid Mobi",
    subtitle: "10 Person",
    uid: "3c7277a73a0a7a47c4a6cffb8d599f41",
    specs: [
      hybridCanteen(10),
      HYBRID_KITCHEN,
      HYBRID_RUNNING,
      HYBRID_DRY_ROOM,
      HYBRID_OFFICE,
      HYBRID_TOILET_SINGLE,
      HYBRID_TOWING,
    ],
  },
  {
    title: "24ft Hybrid Mobi Twin Toilet",
    subtitle: "14 Person",
    uid: "c81707904798153c440f08d063fa3017",
    specs: [
      hybridCanteen(14),
      HYBRID_RUNNING,
      HYBRID_DRY_ROOM,
      HYBRID_OFFICE,
      HYBRID_TOILET_TWIN,
      HYBRID_TOWING,
    ],
  },
];

const renderProductCard = (product: Product) => (
  <article
    key={product.title}
    className="group relative overflow-hidden rounded-xl bg-navy-light border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-300"
  >
    <div className="p-6 md:p-10">
      <h2 className="font-heading text-2xl md:text-3xl font-black text-primary-foreground uppercase tracking-tight mb-2">
        {product.title}
      </h2>
      {product.subtitle && (
        <p className="font-heading text-sm font-bold text-secondary uppercase tracking-wider mb-6">
          {product.subtitle}
        </p>
      )}
      {!product.subtitle && <div className="mb-4" />}

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
);

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
                Towable welfare units that can be easily transported between sites. Choose from our standard mobile welfare range with reliable generator power, or our new hybrid range featuring solar-assisted running for reduced fuel costs and lower emissions. All units are fully self-contained with essential facilities for your workforce.
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

export default MobileWelfare;
