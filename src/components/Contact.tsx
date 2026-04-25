import { Phone, Mail, MapPin, FileText } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    alert("Thank you for your enquiry! We will be in touch shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground uppercase tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <a href="tel:03333443833" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm font-medium">Call Us</p>
                  <p className="text-primary-foreground font-heading font-bold text-lg">0333 344 3833</p>
                </div>
              </a>

              <a href="mailto:sales@libertyguard.co.uk" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm font-medium">Email Us</p>
                  <p className="text-primary-foreground font-heading font-bold text-lg">sales@libertyguard.co.uk</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm font-medium">Location</p>
                  <p className="text-primary-foreground font-heading font-bold">Nationwide Coverage</p>
                  <p className="text-primary-foreground/70 text-sm">The Old Airfield, Belton Road, Sandtoft DN8 5SX</p>
                </div>
              </div>

              <a href="/Liberty-Guard-Brochure.pdf" download="Liberty-Guard-Brochure.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm font-medium">Downloads</p>
                  <p className="text-primary-foreground font-heading font-bold">Download a Brochure</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="font-heading text-lg font-bold text-primary-foreground uppercase tracking-wider mb-4">
                Stay Social
              </h3>
              <div className="flex gap-4">
                {[
                  { name: "Facebook", url: "https://www.facebook.com/libertyguarduk" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/company/liberty-guard-uk-ltd/" },
                  { name: "Instagram", url: "https://www.instagram.com/libertygroupuk" },
                  { name: "YouTube", url: "https://www.youtube.com/@libertygroup5383" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 font-heading font-bold text-xs"
                  >
                    {social.name[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-navy-light border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors font-body"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-navy-light border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors font-body"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-navy-light border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors font-body"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-navy-light border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors font-body"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-navy-light border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors resize-none font-body"
              required
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
    </section>
  );
};

export default Contact;
