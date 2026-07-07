import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import {
  Package,
  ShieldCheck,
  Settings2,
  Users,
  TrendingUp,
  HeartPulse,
} from "lucide-react";
import portableAccomImg from "@/assets/portable-accommodation-card.jpg.asset.json";

const features = [
  {
    title: "COMPLETE PACKAGE",
    description:
      "Everything you need in one solution — delivered, installed, and ready to use.",
    icon: Package,
  },
  {
    title: "SAFE & SECURE",
    description:
      "Steel construction with reinforced doors and high-quality locking systems for total peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "FLEXIBLE CONFIGURATIONS",
    description:
      "Tailored layouts including open-plan, canteens, dry rooms, and offices to suit your project.",
    icon: Settings2,
  },
  {
    title: "DEDICATED TEAM",
    description:
      "Expert support from initial enquiry through to delivery and installation.",
    icon: Users,
  },
  {
    title: "SCALABILITY",
    description:
      "From single cabins to complete modular setups, expand as your project grows.",
    icon: TrendingUp,
  },
  {
    title: "HEALTH & SAFETY COMPLIANT",
    description:
      "Built to meet all health and safety standards with lighting, heating, insulation, and ventilation.",
    icon: HeartPulse,
  },
];

const PortableAccommodation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={portableAccomImg.url}
            alt="Portable cabin on construction site"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                to="/portable-buildings"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
              >
                ← Back to Portable Buildings
              </Link>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
                Portable{" "}
                <span className="text-secondary">Accommodation</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Safe, secure, and flexible on-site cabins for any project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-24 mt-12 overflow-hidden">
        <img
          src={portableAccomImg.url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight mb-4">
              KEY <span className="text-secondary">FEATURES</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-8 text-center hover:bg-primary-foreground/15 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider mb-3">
                  {f.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-6">
            Find Your Ideal <span className="text-secondary">Solution</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Get in touch today to find the ideal portable accommodation solution
            for your next project. Our knowledgeable team is ready to help.
          </p>
          <a
            href="tel:03333443833"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-md hover:brightness-110 transition-all duration-300"
          >
            Call Our Team
          </a>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default PortableAccommodation;
