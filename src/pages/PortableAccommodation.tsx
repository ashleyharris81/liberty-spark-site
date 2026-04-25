import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CloudflareVideo from "@/components/CloudflareVideo";

const galleryImages = [
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0265-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0266-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0270-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0285-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0333-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0334-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0336-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0337-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0342-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0343-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0344-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0605-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0608-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0625-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_1946-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_1948-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2039-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2040-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2073-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2078-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2081-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/LH0007.jpg",
];

const sections = [
  {
    heading: "Anti-Vandal Cabins, Built to Last",
    paragraphs: [
      "When it comes to safe, secure, and flexible on-site accommodation, our range of portable anti-vandal cabins offers the ideal solution. Designed for both short and long-term projects, these units are suitable for use across a wide range of sectors including construction, infrastructure, sports clubs, utility companies, local councils, schools, and many more.",
      "Anti-vandal cabins are built with security as a top priority. Featuring robust steel construction, secure steel shutters, and reinforced doors with high-quality locking systems, they are ideal for high-risk or remote sites where protection against theft and vandalism is essential. These units give you peace of mind, knowing that your equipment, documents, and staff are safe at all times.",
      "Available in a variety of sizes and internal layouts, our portable accommodation units can be tailored to your specific needs. Choose from a range of configurations including open plan spaces, seated canteens, dry rooms and office units, all designed to create a comfortable, functional working environment.",
    ],
  },
  {
    heading: "Comfort & Compliance",
    paragraphs: [
      "Each unit is built to comply with health and safety standards, offering practical features such as lighting, heating, insulation, and ventilation to ensure all-year-round usability.",
      "Whether you're looking for a temporary setup or a long-term accommodation solution for an extended project, we can provide the right unit at the right price. With options to hire or purchase, you can select the best fit for your budget and timeline.",
      "Our dedicated portable accommodation team is focused solely on this department, ensuring that you receive expert advice, prompt service, and complete support from enquiry to installation. From single anti-vandal cabins to complete modular setups, we're here to help you find the right solution.",
      "Whether you need extra office space, welfare facilities, or secure storage on-site, our team will work closely with you to deliver a tailored, cost-effective result.",
    ],
  },
];

const PortableAccommodation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <CloudflareVideo uid="8d895f0b86b65c37c71ae47468bb9d96" variant="hero" />
          <div className="absolute inset-0 bg-primary/60 z-[5]" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                to="/portable-buildings"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
              >
                ← Back to Portable Buildings
              </Link>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
                Portable <span className="text-secondary">Accommodation</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Safe, secure, and flexible on-site cabins for any project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section, idx) => (
        <section
          key={section.heading}
          className={`py-20 ${idx % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
              {section.heading}
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight text-center mb-12">
            Our <span className="text-secondary">Portable Cabins</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src) => (
              <div key={src} className="overflow-hidden rounded-lg border border-primary-foreground/10">
                <img
                  src={src}
                  alt="Liberty Guard portable cabin"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default PortableAccommodation;
