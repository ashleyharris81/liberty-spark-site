import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CloudflareVideo from "@/components/CloudflareVideo";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <CloudflareVideo uid="a00d3e83fd24b5fe98b3334d4691b7a2" variant="hero" />
          <div className="absolute inset-0 bg-primary/60 z-[5]" />
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
                About <span className="text-secondary">Us</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Who are we? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8 text-center">
            Who are <span className="text-secondary">we?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Liberty was founded in 1981 and has grown to become a pillar in the welfare industry. We supply a variety of portable accommodation facilities, accessible to all sectors. Our trusted reputation is built on our consistency of quality and service.
          </p>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight mb-8 text-center">
            Our Core <span className="text-secondary">Values</span>
          </h2>
          <div className="space-y-4 text-primary-foreground/90 text-lg leading-relaxed">
            <p><span className="font-bold">High-specification welfare:</span> our extensive fleet and wide product range covers all projects.</p>
            <p><span className="font-bold">One central hub:</span> all enquiries, servicing and aftercare handled through a single point of contact.</p>
            <p><span className="font-bold">Nationwide coverage:</span> fast delivery anywhere in the UK through our trusted depot partners.</p>
            <p><span className="font-bold">Quality service:</span> dedicated aftercare, experienced engineers, help and support systems.</p>
            <p><span className="font-bold">Sustainability first:</span> market-leading solar welfare units, lowering carbon emissions across all industry sectors.</p>
          </div>
        </div>
      </section>

      {/* Sustainability Pledge */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8 text-center">
            Sustainability <span className="text-secondary">Pledge</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            At Liberty we are dedicated to reducing our environmental impact and helping our customers achieve the same. We continuously invest in the latest solar-powered technology delivering sustainable and low-emission solutions. Our goal is to help our customers save energy, cut costs, reduce emissions and protect the planet together. Over the next few years, we’re transforming our entire welfare fleet with cutting-edge solar technology. By regularly reviewing and upgrading our eco-efficient systems, we ensure our operations meet the highest environmental standards and lead the way in a sustainable future.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default AboutPage;
