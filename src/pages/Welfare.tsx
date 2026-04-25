import { Link } from "react-router-dom";
import { Building, ShieldCheck, Utensils, DoorOpen, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CloudflareVideo from "@/components/CloudflareVideo";
import welfareMobileCard from "@/assets/welfare-mobile-card.jpg";
import welfareStaticCard from "@/assets/welfare-static-card.jpg";

const welfareTypes = [
  {
    title: "Mobile Welfare",
    image: welfareMobileCard,
    link: "/mobile-welfare",
  },
  {
    title: "Static Welfare",
    image: welfareStaticCard,
    link: "/static-welfare",
  },
];

const facilities = [
  { icon: Utensils, title: "Canteen", description: "Comfortable dining and break area for your workforce." },
  { icon: DoorOpen, title: "Drying Room", description: "Dedicated space for drying workwear and PPE." },
  { icon: ShieldCheck, title: "Toilet Facilities", description: "Clean, compliant toilet and washroom facilities." },
  { icon: Utensils, title: "Kitchenette", description: "Fully equipped kitchen area for meal preparation." },
  { icon: Building, title: "Office Space", description: "On-site office facilities for management and admin." },
  { icon: Wrench, title: "Nationwide Service", description: "Fast delivery, installation and responsive ongoing support." },
];

const Welfare = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <CloudflareVideo uid="8f4ff233528f86183d2c5740e0c9b7c9" variant="hero" />
          <div className="absolute inset-0 bg-primary/60 z-[5]" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                to="/"
                className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
              >
                ← Back to Home
              </Link>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
                Welfare{" "}
                <span className="text-secondary">Cabins</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Towable & Static Solutions — Hire for Any Project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
            Practical, Compliant &{" "}
            <span className="text-secondary">Comfortable</span>
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Welfare cabin hire offers a practical, compliant, and comfortable solution for your on-site needs across construction, infrastructure, and remote projects. With a range of eco-efficient, fully equipped cabins available, you can choose between towable or static units tailored to your site requirements.
            </p>
            <p>
              Liberty welfare cabins come complete with essential facilities including a canteen, toilet, kitchenette, drying room, and office space — ensuring your team has a safe and comfortable environment to work from. Whether you're running a short-term project or a long-term development, our units are designed to meet all relevant health and safety regulations, keeping your site compliant and your workforce productive.
            </p>
          </div>
        </div>
      </section>

      {/* Two Types */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight text-center mb-12">
            Choose Your <span className="text-secondary">Solution</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {welfareTypes.map((type) => (
              <Link
                key={type.title}
                to={type.link}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative overflow-hidden rounded-xl bg-navy-light p-10 border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-300 block"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <type.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground uppercase tracking-wide mb-4">
                  {type.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {type.description}
                </p>
                <span className="inline-block mt-6 text-secondary font-heading font-semibold text-sm uppercase tracking-wider group-hover:underline">
                  Take a Look →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              With nationwide transport and responsive service, getting the right welfare solution to your site is straightforward and hassle-free. From urban developments to remote locations, welfare cabins can be delivered and installed quickly, ensuring minimal disruption to your schedule.
            </p>
            <p>
              Choose Liberty welfare hire for a reliable, cost-effective way to provide your workforce with the facilities they need, wherever the job takes you. Whether you need a single unit or a complete site setup, there's a towable or static solution ready to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight text-center mb-12">
            What's <span className="text-secondary">Included</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                  <facility.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide mb-3">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {facility.description}
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
            Ready to <span className="text-secondary">Get Started?</span>
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-10">
            Get in touch today to find the ideal welfare solution for your next project. Our team is ready to help with nationwide delivery and full support.
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

export default Welfare;
