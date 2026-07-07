import { Link } from "react-router-dom";
import { Building, Shield, Wrench, Truck, Home, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import heroBg from "@/assets/portable-buildings-hero.jpg";
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

const features = [
  {
    icon: Shield,
    title: "Steel Construction",
    description: "Anti-vandal cabins with secure windows and reinforced doors for high-risk or remote sites.",
  },
  {
    icon: Home,
    title: "Flexible Configurations",
    description: "From single units to multi-building complexes, configured to your exact specifications.",
  },
  {
    icon: Truck,
    title: "Rapid Deployment",
    description: "Designed for fast setup and can be hired for temporary needs or purchased for permanent use.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Our focused accommodation department ensures a smooth experience from enquiry to installation.",
  },
  {
    icon: Wrench,
    title: "Full Lifecycle Support",
    description: "Competitive packages with full support throughout your project's entire lifecycle.",
  },
  {
    icon: Building,
    title: "Scalable Solutions",
    description: "Modular buildings that scale with your project — offices, training rooms, meeting spaces and more.",
  },
];

const PortableBuildings = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={heroBg} alt="Portable building on construction site" className="absolute inset-0 w-full h-full object-cover" />
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
                className="group relative overflow-hidden rounded-xl bg-primary p-10 border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-300 block"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <cat.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground uppercase tracking-wide mb-4">
                  {cat.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {cat.description}
                </p>
                <span className="inline-block mt-6 text-secondary font-heading font-semibold text-sm uppercase tracking-wider group-hover:underline">
                  Take a Look →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
            Built for <span className="text-secondary">Every Project</span>
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Our portable accommodation solutions include anti-vandal cabins and modular buildings, available for both hire and purchase. Designed for flexibility, durability, and comfort, these units are ideal for long-term projects across construction, infrastructure, education, and industrial sectors.
            </p>
            <p>
              Anti-vandal cabins offer a secure, robust solution for high-risk or remote sites, providing peace of mind with a steel construction, secure windows, and reinforced doors. Modular buildings offer greater flexibility and scalability, making them perfect for larger projects that require an office space, accommodation, training facilities or meeting rooms.
            </p>
            <p>
              Whether you need a single unit or a multi-building complex, our team is dedicated to delivering high-quality, tailored solutions to meet your needs. Our portable buildings are designed for rapid deployment and can be configured to your exact specifications.
            </p>
            <p>
              With the option to hire for temporary requirements or purchase for permanent use, we offer competitive packages and full support throughout your project's lifecycle. Our focused accommodation department prides itself on delivering excellent customer service, with our knowledgeable team who ensure a smooth and efficient experience from initial enquiry through to delivery and installation.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight text-center mb-12">
            Key <span className="text-secondary">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-navy-light rounded-xl p-8 border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-secondary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary-foreground uppercase tracking-wide mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {feature.description}
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
