import brochureAsset from "@/assets/liberty-brochure.pdf.asset.json";
import { Link } from "react-router-dom";
import { SocialIcon } from "@/components/SocialIcons";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UKDepotMap from "@/components/UKDepotMap";
import { depots } from "@/data/depots";
import { downloadFile } from "@/lib/downloadFile";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your enquiry! We will be in touch shortly.",
    });
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p
              className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Get in touch with our team — we're here to help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-8">
                Get In <span className="text-secondary">Touch</span>
              </h2>

              <div className="space-y-8">
                <a href="tel:03333443833" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Call Us</p>
                    <p className="text-foreground font-heading font-bold text-lg">0333 344 3833</p>
                  </div>
                </a>

                <a href="mailto:sales@libertyguard.co.uk" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Email Us</p>
                    <p className="text-foreground font-heading font-bold text-lg">sales@libertyguard.co.uk</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Location</p>
                    <p className="text-foreground font-heading font-bold">Nationwide Coverage</p>
                    <p className="text-muted-foreground text-sm">The Old Airfield, Belton Road, Sandtoft DN8 5SX</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => downloadFile(`${brochureAsset.url}`, "Liberty-Brochure.pdf")}
                  className="flex items-center gap-4 group text-left"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Downloads</p>
                    <p className="text-foreground font-heading font-bold">Download a Brochure</p>
                  </div>
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-wider mb-4">
                  Stay Social
                </h3>
                <div className="flex gap-4">
                  {[
                    { name: "Facebook", url: "https://www.facebook.com/libertyguarduk" },
                    { name: "LinkedIn", url: "https://www.linkedin.com/company/liberty-guard-uk-ltd/" },
                    { name: "Instagram", url: "https://www.instagram.com/liberty_uk_ltd?igsh=ZnhsYnZxMDR3enh5&utm_source=qr" },
                    { name: "YouTube", url: "https://www.youtube.com/@libertygroup5383" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                    >
                      <SocialIcon name={social.name} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-8">
                Send Us a <span className="text-secondary">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-colors font-body"
                    required
                    maxLength={100}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-colors font-body"
                    required
                    maxLength={100}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-colors font-body"
                  required
                  maxLength={255}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-colors font-body"
                  required
                  maxLength={200}
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-colors resize-none font-body"
                  required
                  maxLength={2000}
                />
                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider py-4 rounded-lg hover:brightness-110 transition-all duration-300"
                >
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Depot Map */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground uppercase tracking-tight">
              Our <span className="text-secondary">Depots</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          </div>
          <div className="mx-auto w-full max-w-[360px] md:max-w-[420px]">
            <UKDepotMap depots={depots} />
          </div>
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-4">
            Download Our <span className="text-secondary">Brochure</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Explore our full range of portable accommodation, welfare units, and site solutions. Download the Liberty brochure today.
          </p>
          <button
            type="button"
            onClick={() => downloadFile(`${brochureAsset.url}`, "Liberty-Brochure.pdf")}
            className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-heading font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            Download a Brochure
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
