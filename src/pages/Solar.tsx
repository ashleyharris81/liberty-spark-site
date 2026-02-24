import { Link } from "react-router-dom";
import { Sun, Droplets, Wifi, Leaf, Gauge, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import solarBg from "@/assets/solar-bg.jpg";

const solarProducts = [
  {
    title: "Solar Mobile Welfare",
    description: "Fully solar-powered mobile welfare units with low emissions, silent running and smart monitoring.",
    icon: Sun,
  },
  {
    title: "Solar Static Welfare",
    description: "Static welfare cabins powered by solar technology, ideal for longer-term sites requiring sustainable facilities.",
    icon: ShieldCheck,
  },
  {
    title: "Solar Drying Room",
    description: "Eco-friendly solar drying rooms — generator-free, silent operation, and zero-emission drying for workwear and PPE.",
    icon: Gauge,
  },
  {
    title: "Solar Loos",
    description: "Solar-powered portable toilet facilities combining sustainability with essential hygiene on any site.",
    icon: Droplets,
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "Reduced Carbon Output",
    description: "Minimal emissions and lower carbon footprint, helping you achieve net zero targets.",
  },
  {
    icon: Sun,
    title: "Low Fuel Consumption",
    description: "Designed to run on minimal fuel, delivering significant financial savings over traditional units.",
  },
  {
    icon: Droplets,
    title: "Rainwater Harvesting",
    description: "Clever built-in rainwater collection system to reduce water usage and environmental impact.",
  },
  {
    icon: Wifi,
    title: "Remote Monitoring",
    description: "Telematics and remote monitoring with water level alerts and waste tank gauge — tracked by our teams.",
  },
  {
    icon: Gauge,
    title: "Silent Operation",
    description: "Whisper-quiet running with no generator noise, perfect for residential areas and sensitive sites.",
  },
  {
    icon: ShieldCheck,
    title: "Full Support",
    description: "From initial advice to ongoing support, our team ensures a smooth and stress-free experience.",
  },
];

const Solar = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={solarBg}
            alt="Liberty Guard solar-powered welfare unit"
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
                Solar{" "}
                <span className="text-secondary">Solutions</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Smart, eco-friendly technology — saving money, saving energy, protecting our future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
            Innovative <span className="text-secondary">Solar Range</span>
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              At Liberty Guard, we're excited to introduce you to our innovative solar range, a smart, eco-friendly solution designed with both your needs and the planet in mind. We've combined the latest in solar technology with clever features like rainwater harvesting, telematics, remote monitoring, water level alerts and a waste tank gauge, allowing our teams to monitor and track your cabin's performance.
            </p>
            <p>
              Our solar units are all about efficiency. They're designed to run on low fuel, produce fewer emissions, and keep carbon output to an absolute minimum — using less energy overall. That means you're not just saving money, you're also reducing your environmental impact too.
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight text-center mb-12">
            Our Solar <span className="text-secondary">Products</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {solarProducts.map((product) => (
              <div
                key={product.title}
                className="group bg-navy-light rounded-xl p-8 border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-secondary/30 transition-colors">
                  <product.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary-foreground uppercase tracking-wide mb-3">
                  {product.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              By choosing from our solar range, you are making a smart investment that offers significant financial savings. But it's not just about cutting costs — it's about making a real difference. Whether you're looking to lower your carbon footprint or take steps toward net zero, our solar-powered solutions are here to help you achieve those goals.
            </p>
            <p>
              As always, our team is on hand to guide you through the options and find the best setup for your site. From initial advice to ongoing support, we're here to make sure your experience with Liberty Guard is as smooth and stress-free as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight text-center mb-12">
            Key <span className="text-secondary">Benefits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight mb-6">
            Go <span className="text-secondary">Solar</span> Today
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-10">
            Get in touch today and see how our solar range can work for you — saving money, saving energy, and helping protect our future.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-md hover:brightness-110 transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Solar;
