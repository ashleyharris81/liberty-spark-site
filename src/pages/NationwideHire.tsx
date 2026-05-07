import { Link } from "react-router-dom";
import { MapPin, Truck, Clock, Wrench, Phone, ShieldCheck, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import nationwideHero from "@/assets/nationwide-hero.jpg";


const features = [
  { icon: MapPin, title: "UK Coverage", text: "Nationwide reach across mainland UK" },
  { icon: Truck, title: "1,500+ Fleet", text: "One of the largest welfare fleets in the country" },
  { icon: Wrench, title: "20 Depots", text: "Strategically located distribution depots" },
  { icon: Clock, title: "24/7 Breakdown", text: "Round-the-clock breakdown assistance" },
  { icon: ShieldCheck, title: "Toilet Servicing", text: "Scheduled servicing available on every unit" },
  { icon: Truck, title: "24-Hour Turnaround", text: "Fast delivery and collection" },
  { icon: Clock, title: "Short & Long Term", text: "Hire periods to suit any project" },
  { icon: Leaf, title: "Extensive Range", text: "Standard, hybrid and solar-powered options" },
];

const promises = [
  "Depots throughout the UK",
  "Sustainable site solutions",
  "Specialists in the industry",
  "Dedicated aftercare department",
  "Site compliant facilities",
  "Lowering carbon emissions",
  "Money-saving solar range",
  "High specification marketing suites",
  "Rainwater harvesting technology",
  "Nationwide coverage",
];

const NationwideHire = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <img
            src={nationwideHero}
            alt="Liberty Guard welfare unit on site"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
              >
                ← Back to Home
              </Link>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
                Liberty Group <span className="text-secondary">Welfare Hire</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Depots throughout the UK / Sustainable site solutions / Specialists in the industry / Dedicated aftercare department / Site compliant facilities / Lowering carbon emissions / Money saving solar range / High specification marketing suites / Save water with rainwater harvesting technology / Nationwide coverage /
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">
            Our <span className="text-secondary">Business</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mt-4 mb-6 mx-auto" />
          <p className="text-primary/80 text-lg leading-relaxed">
            At Liberty Group we provide welfare units nationwide, supported by 20 reliable distribution depots. With over 40 years of industry experience, we bring expert product knowledge to every project.
          </p>
          <p className="text-primary/80 text-lg leading-relaxed mt-4">
            Our fleet of 1,500+ units enables fast, flexible solutions with a quick 24-hour turnaround — backed by our trusted aftercare team, delivering high-quality service and rapid support.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-10 max-w-2xl mx-auto">
            <div>
              <p className="font-heading text-4xl font-black text-secondary">40+</p>
              <p className="text-primary/70 text-sm uppercase tracking-wider mt-1">Years experience</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-black text-secondary">1,500+</p>
              <p className="text-primary/70 text-sm uppercase tracking-wider mt-1">Fleet size</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-black text-secondary">20</p>
              <p className="text-primary/70 text-sm uppercase tracking-wider mt-1">UK Depots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground uppercase tracking-tight">
              Why <span className="text-secondary">Liberty Guard</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-primary rounded-xl p-6 border border-primary-foreground/10 hover:border-secondary/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-black text-primary-foreground uppercase tracking-tight">
                  {title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promises strip */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {promises.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-full border border-secondary/40 text-secondary font-heading text-xs uppercase tracking-wider"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="rounded-2xl border-2 border-secondary/40 bg-primary p-10 md:p-14 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight">
              Ready to <span className="text-secondary">hire?</span>
            </h2>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
              Speak to our team about availability in your area or open a new account to get started.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03333443833"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all"
              >
                <Phone className="w-4 h-4" /> 0333 344 3833
              </a>
              <Link
                to="/new-account"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                Open an Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default NationwideHire;
