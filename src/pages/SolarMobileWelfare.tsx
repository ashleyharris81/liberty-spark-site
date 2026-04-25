import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import heroBg from "@/assets/hero-bg.jpg";

const SolarMobileWelfare = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={heroBg}
            alt="Solar Mobile Welfare Units"
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
                Solar Mobile Welfare{" "}
                <span className="text-secondary">Units</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Eco-efficient towable welfare powered by solar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-6">
            Coming <span className="text-secondary">Soon</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We're putting the finishing touches on this page. Check back shortly for full details on our solar mobile welfare units solutions, or get in touch with our team for immediate enquiries.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default SolarMobileWelfare;
