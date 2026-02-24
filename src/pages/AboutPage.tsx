import { Link } from "react-router-dom";
import { Shield, Leaf, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import aboutHq from "@/assets/about-hq.jpg";

const values = [
  {
    icon: Award,
    title: "40+ Years of Expertise",
    description: "One of the UK's largest independent suppliers of standard and specialist modular and portable accommodation.",
  },
  {
    icon: Users,
    title: "Strong Partnerships",
    description: "We stay ahead of industry demands through close collaboration with our clients, delivering on business continuity and excellence.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "The safety, health, and wellbeing of our employees, customers, and suppliers remain a core priority in everything we do.",
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    description: "Climate-resilient solutions that reduce carbon footprints while safeguarding biodiversity — embedded into every aspect of our operations.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="bg-primary py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
              About <span className="text-secondary">Us</span>
            </h1>
            <p
              className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Over 40 years leading the modular & portable accommodation sector
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
                Our <span className="text-secondary">Journey</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  The Liberty Group proudly brings over 40 years of expertise in the modular and portable accommodation sector. We have grown to become one of the UK's largest independent suppliers of both standard and specialist solutions within the industry.
                </p>
                <p>
                  Our head office in Sandtoft, Doncaster, serves as the strategic hub for our operations, coordinating a nationwide network that enables us to consistently deliver high-quality products and services to our extensive customer base.
                </p>
                <p>
                  Through strong partnerships with our clients, we stay ahead of industry demands and deliver on our commitment to business continuity and excellence.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={aboutHq}
                alt="Liberty Group headquarters"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight text-center mb-12">
            What Drives <span className="text-secondary">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-navy-light rounded-xl p-8 border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground uppercase tracking-wide mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Safety */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The safety, health, and wellbeing of our employees, customers, and suppliers remain a core priority. We continuously strive to enhance the safety standards that protect our people.
            </p>
            <p>
              Our ongoing commitment to environmental sustainability is embedded into every aspect of our operations. We are driven to develop climate-resilient solutions that reduce carbon footprints for both ourselves and our clients while safeguarding biodiversity.
            </p>
            <p className="text-foreground font-heading font-bold text-lg uppercase tracking-wide">
              As industry leaders, we move boldly towards a more sustainable future for the welfare sector.
            </p>
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
