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
  specs: SpecCategory[];
}

const products: Product[] = [
  {
    title: "12ft Solar Dry",
    uid: "dae4d7a7bed6537e29f3d6811b9b5722",
    specs: [
      {
        title: "Dry Room",
        items: [
          "24V air-blown diesel heater",
          "Boot rack",
          "3x coat hooks",
          "Clothes rail with hangers",
          "Cushioned bench seating",
          "Fully heated",
          "Interior PIR-sensor 24v LED lighting",
          "Advanced temperature & humidity sensors control drying function with auto-shut off",
        ],
      },
      {
        title: "Battery",
        items: [
          "Lithium-ion battery",
          "No generator",
          "SOLARTracK™ remote energy, battery, tank & fault monitoring system",
        ],
      },
      {
        title: "Solar Panels",
        items: ["315W Roof-mounted & wall mounted solar panels"],
      },
      {
        title: "Telemetry",
        items: [
          "Customer friendly digital device tracking location, battery, energy usage, input, fuel",
        ],
      },
      {
        title: "Exterior",
        items: [
          "PIR-sensor 24v LED lighting",
          "High security anti-vandal unit with 3 bolt locking system & anti-prise strip on the door",
          "Non glass solar panels to reduce vandalism",
          "User friendly operation",
          "No mains required hook up",
        ],
      },
      {
        title: "Towing & Setup",
        items: [
          "Standard ball-socket type towbar",
          "Integrated rear lighting",
          "Manual hydraulic system allows wheels to be retracted",
        ],
      },
    ],
  },
];

const SolarDryingRoom = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={heroBg}
            alt="Liberty Guard solar drying room"
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
                Solar Drying <span className="text-secondary">Room</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Standalone solar-powered drying room cabin. No mains required, no generator needed - powered entirely by solar panels with lithium-ion battery storage. Advanced humidity sensors and full heating ensure work gear dries efficiently and safely between shifts.
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

export default SolarDryingRoom;
