import { Link } from "react-router-dom";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";
import {
  Hammer,
  Palette,
  ShieldCheck,
  ClipboardCheck,
  Layers,
  Award,
} from "lucide-react";
import modularImg from "@/assets/modular-buildings-hero.jpg.asset.json";

const features = [
  {
    title: "PRECISION BUILD",
    description:
      "Every modular unit is fabricated to exacting standards for a flawless finish.",
    icon: Hammer,
  },
  {
    title: "CUSTOM MADE",
    description:
      "From layouts to internal finishes, configurations are tailored to your needs.",
    icon: Palette,
  },
  {
    title: "HEALTH & SAFETY COMPLIANT",
    description:
      "Built to meet all relevant regulations for safety, performance, and comfort.",
    icon: ShieldCheck,
  },
  {
    title: "SITE SURVEY",
    description:
      "Our focused team will visit your site to fully assess your requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "VERSATILE USES",
    description:
      "Complete packages, one full solution throughout your projects entire lifetime.",
    icon: Layers,
  },
  {
    title: "HIGH SPECIFICATION",
    description:
      "Modular buildings that scale with your project — offices, training rooms, meeting spaces and more.",
    icon: Award,
  },
];

const ModularBuildings = () => {
  return (
    <div className="min-h-screen">
      <BreadcrumbJsonLd items={[{ name: "Portable Buildings", path: "/portable-buildings" }, { name: "Modular Buildings", path: "/modular-buildings" }]} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <HeroVideo
            src="https://assets.libertyguard.co.uk/videos/ZND%20Modular%20Build%20(website).mp4"
            className="z-0"
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
                Modular <span className="text-secondary">Buildings</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Modular spaces, designed around you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-24 mt-12 overflow-hidden">
        <img
          src={modularImg.url}
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
            Get in touch today to find the ideal modular building solution for
            your next project. Our knowledgeable team is ready to help.
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

export default ModularBuildings;
