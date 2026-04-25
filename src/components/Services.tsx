import { Link } from "react-router-dom";
import { Building, Sun, Home, Presentation, Truck, Zap } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Mobile Welfare",
    description:
      "Towable welfare cabins for sites that move. Generator-powered, road-towable, fully self-contained.",
    link: "/mobile-welfare",
  },
  {
    icon: Building,
    title: "Static Welfare",
    description:
      "Fixed welfare cabins for longer projects. Robust, spacious, fully equipped for construction and infrastructure.",
    link: "/static-welfare",
  },
  {
    icon: Sun,
    title: "Solar Welfare",
    description:
      "Solar-powered welfare with low emissions, silent running, and rainwater harvesting.",
    link: "/solar",
  },
  {
    icon: Zap,
    title: "Hybrid Welfare",
    description:
      "The best of both - solar-assisted with back-up generator for sustainable, reliable site power.",
    link: "/mobile-welfare#hybrid-range",
  },
  {
    icon: Presentation,
    title: "Marketing Suites",
    description:
      "Premium marketing suites for housebuilders. Bespoke, secure, fully equipped.",
    link: "/marketing-suites",
  },
  {
    icon: Home,
    title: "Portable Accommodation",
    description:
      "Anti-vandal cabins and modular buildings for hire or purchase.",
    link: "/portable-buildings",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground uppercase tracking-tight">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-navy-light rounded-xl p-8 hover:bg-secondary/10 border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-foreground uppercase tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed text-sm">
                {service.description}
              </p>
              <Link
                to={service.link}
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block mt-6 text-secondary font-heading font-semibold text-sm uppercase tracking-wider hover:underline"
              >
                Take a Look →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
