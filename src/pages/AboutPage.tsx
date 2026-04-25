import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CloudflareVideo from "@/components/CloudflareVideo";

const journeyParagraphs = [
  "The Liberty Group proudly brings over 40 years of expertise in the modular and portable accommodation sector. We have grown to become one of the UK's most trusted independent suppliers of both standard and specialist solutions within the industry.",
  "Our head office in Sandtoft, Doncaster, serves as the strategic hub for our operations, coordinating a nationwide network that enables us to consistently deliver high-quality products and services to our extensive customer base.",
  "Through strong partnerships with our clients, we stay ahead of industry demands and deliver on our commitment to business continuity and excellence.",
  "The safety, health, and wellbeing of our employees, customers, and suppliers remain a core priority. We continuously strive to enhance the safety standards that protect our people.",
  "Our ongoing commitment to environmental sustainability is embedded into every aspect of our operations. We are driven to develop climate-resilient solutions that reduce carbon footprints for both ourselves and our clients while safeguarding biodiversity.",
  "As industry leaders, we move boldly towards a more sustainable future for the welfare sector.",
];

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
                Our <span className="text-secondary">Journey</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Over 40 years delivering modular & portable accommodation to the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
            Our <span className="text-secondary">Journey</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            {journeyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight mb-8">
            Our <span className="text-secondary">Philosophy</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            To supply high specification welfare and portable accommodation to all our customers, to offer nationwide transport, to give one-to-one communication throughout your hire, and provide a dedicated aftercare service.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default AboutPage;
