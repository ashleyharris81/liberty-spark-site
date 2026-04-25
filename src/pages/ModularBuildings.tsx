import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2675.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/marketing-Suite2.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/mod3-1024x768.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Holme_CC_Exterior_04-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2698.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/EllsworthSchl_Exterior_07-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/mod-1024x768.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Oakwood_Interior_15-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Oakwood_Interior_18-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/sharp-gatehouse-.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Two-Bay-Mod.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Cadbury_Interior_08-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/EllsworthSchl_Exterior_03-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/40x12-Ceder-Clad-3-1024x768.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/EWSheff_External_08-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Cadbury_Interior_05-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/EllsworthSchl_Exterior_02-1024x672.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/EWSheff_External_01-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Holme_CC_Exterior_02-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Holme_CC_Exterior_10-1024x683.jpg",
];

const sections = [
  {
    heading: "A Dedicated Department",
    paragraphs: [
      "At Liberty Guard, our Modular Building Department is dedicated to delivering high-quality, purpose-built spaces that meet the specific needs of our clients. Whether you're looking for a single office, a full suite of modular facilities, or a bespoke building tailored to your business, we offer a start-to-finish service that combines technical expertise, precision planning, and outstanding customer care.",
      "From the very first enquiry, each project is handled by a designated team who will work closely with you throughout the entire process. This ensures a smooth journey from concept to completion, with one-to-one communication at every stage. We understand that every client is different, and our team is committed to designing and delivering a space that works for you, not just in terms of function, but also in terms of layout, aesthetics, and long-term usability.",
    ],
  },
  {
    heading: "Site Survey & Design",
    paragraphs: [
      "The journey begins with a comprehensive site survey carried out by our experienced team. This allows us to assess your space, understand any specific challenges, and start shaping the project around your unique requirements. Our in-house design team then produces detailed CAD drawings, bringing your vision to life with accurate plans and 3D representations of your new modular building.",
      "With a collaborative and transparent approach, we make sure every element is carefully considered, from room layout and access points to lighting, heating, and exterior finishes. All our buildings are planned and developed with precision and built to meet all relevant regulations, ensuring the highest standards of safety, performance, and comfort.",
    ],
  },
  {
    heading: "Bespoke Designs",
    paragraphs: [
      "Every modular building we produce is designed to the customer's exact requirements. Whether you need a modern office facility, a private meeting room, or a fully equipped modular complex, we can create a solution that works for your space, your people, and your purpose.",
      "Our buildings are available in a wide range of bespoke options, allowing you to personalise everything from internal finishes and colour schemes to external cladding and branding. Whether you prefer a sleek corporate look or a more traditional finish, we will help bring your vision to life.",
      "Liberty Guard's modular buildings offer all the advantages of off-site construction: faster build times, reduced disruption, and consistent quality control. Our commitment to manufacture ensures you receive a finished product that stands the test of time. Built using high-grade materials and expert engineering, our modular units offer the same durability and performance as traditional buildings, often in a fraction of the time.",
      "What truly sets us apart is our focus on customer service. Every project is supported by a dedicated account manager, giving you direct access to someone who understands your needs, answers your questions, and ensures the process runs smoothly. We pride ourselves on building strong relationships with our clients, delivering not just a product, but a full-service experience that exceeds expectations.",
    ],
  },
];

const ModularBuildings = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={heroBg}
            alt="Modular Buildings"
            className="absolute inset-0 w-full h-full object-cover"
          />
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
                Modular <span className="text-secondary">Buildings</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Modular spaces, designed around you.
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
            Our <span className="text-secondary">Modular Buildings</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src) => (
              <div key={src} className="overflow-hidden rounded-lg border border-primary-foreground/10">
                <img
                  src={src}
                  alt="Liberty Guard modular building"
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

export default ModularBuildings;
