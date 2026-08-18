import { Link } from "react-router-dom";
import { Building, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";
import portableAccomImg from "@/assets/portable-accommodation-card.jpg.asset.json";
import modularBuildingsImg from "@/assets/modular-buildings-card.jpg.asset.json";

const categories = [
  {
    title: "Portable Accommodation",
    description:
      "Anti-vandal cabins offering a secure, robust solution for high-risk or remote sites with steel construction, secure windows, and reinforced doors.",
    icon: Shield,
    link: "/portable-accommodation",
    image: portableAccomImg.url,
  },
  {
    title: "Modular Buildings",
    description:
      "Greater flexibility and scalability, perfect for larger projects requiring office space, accommodation, training facilities or meeting rooms.",
    icon: Building,
    link: "/modular-buildings",
    image: modularBuildingsImg.url,
  },
];


const PortableBuildings = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <HeroVideo
            src="https://assets.libertyguard.co.uk/videos/Socials%20Landscape%20Nottingham%202.mov"
            className="z-0"
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
                Portable{" "}
                <span className="text-secondary">Buildings</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Portable Accommodation & Modular Buildings — Hire or Purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative overflow-hidden rounded-xl border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-300 block min-h-[420px]"
              >
                {/* Background image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/40" />

                {/* Content */}
                <div className="relative z-10 p-10 flex flex-col h-full min-h-[420px]">
                  <div className="w-16 h-16 bg-secondary/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                    <cat.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="mt-auto">
                    <h2 className="font-heading text-2xl font-bold text-primary-foreground uppercase tracking-wide mb-4">
                      {cat.title}
                    </h2>
                    <p className="text-primary-foreground/85 leading-relaxed">
                      {cat.description}
                    </p>
                    <span className="inline-block mt-6 text-secondary font-heading font-semibold text-sm uppercase tracking-wider group-hover:underline">
                      Take a Look →
                    </span>
                  </div>
                </div>
              </Link>
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
            Get in touch today to find the ideal portable accommodation solution for your next project. Our knowledgeable team is ready to help.
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

export default PortableBuildings;
