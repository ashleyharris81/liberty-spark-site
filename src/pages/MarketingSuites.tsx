import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import msExterior from "@/assets/ms-exterior.jpg";
import msInterior1 from "@/assets/ms-interior-1.jpg";
import msInterior2 from "@/assets/ms-interior-2.jpg";
import msExterior2 from "@/assets/ms-exterior-2.jpg";
import msInterior3 from "@/assets/ms-interior-3.jpg";
import msExterior3 from "@/assets/ms-exterior-3.jpg";
import msInterior4 from "@/assets/ms-interior-4.jpg";
import msInterior5 from "@/assets/ms-interior-5.jpg";

const galleryImages = [
  { src: msExterior, alt: "Marketing suite exterior view" },
  { src: msInterior1, alt: "Marketing suite interior open-plan sales area" },
  { src: msInterior2, alt: "Marketing suite interior design details" },
  { src: msExterior2, alt: "Marketing suite professional exterior" },
  { src: msInterior3, alt: "Marketing suite premium interior finish" },
  { src: msExterior3, alt: "Marketing suite on development site" },
  { src: msInterior4, alt: "Marketing suite kitchen area" },
  { src: msInterior5, alt: "Marketing suite spacious layout" },
];

const features = [
  {
    title: "Bespoke Design",
    description: "Every detail tailored to reflect your brand's identity with prestigious finishes and bespoke interiors.",
  },
  {
    title: "Self-Sufficient Power",
    description: "Includes our Power Pack with 14KVA generator and large-capacity water tank for complete independence.",
  },
  {
    title: "Full-Width Glass Frontage",
    description: "Abundant natural light and visual appeal, protected by remote-controlled electric shutters.",
  },
  {
    title: "Staff Security",
    description: "Panic alarm system with external sounder, visual warning light, and quick-lock escape route.",
  },
  {
    title: "Climate Control",
    description: "Air conditioning as standard, ensuring a comfortable environment in all seasons.",
  },
  {
    title: "24/7 After Care",
    description: "Responsive service team for power packs, consumables, and any issues — keeping your suite running smoothly.",
  },
];

const MarketingSuites = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={msExterior}
            alt="Liberty Guard Marketing Suite"
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
                Marketing{" "}
                <span className="text-secondary">Suites</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Trusted by Housebuilders, Designed for Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
            First Impressions <span className="text-secondary">Matter</span>
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              At Liberty Guard, we understand the importance of first impressions. Our stand-alone Marketing Suites are designed to provide a stylish, professional, and welcoming environment for both your customers and staff. Each unit is tailored to your specific requirements, with prestigious finishes and bespoke interiors that reflect your brand's identity, creating the perfect platform to showcase your homes and developments in a relaxed, high-quality setting.
            </p>
            <p>
              From layout to interior styling, every detail is considered to ensure your sales environment is as functional as it is visually impressive. Whether you need a compact suite or a flagship model, our versatile solutions offer comfort, sophistication, and practicality, helping you promote your homes within a distinctive, secure and fully-equipped space.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight text-center mb-12">
            Our <span className="text-secondary">Portfolio</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-primary/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-secondary text-3xl font-heading font-bold"
            onClick={() => setLightboxIndex(null)}
          >
            ✕
          </button>
          <button
            className="absolute left-4 md:left-8 text-primary-foreground/80 hover:text-secondary text-4xl font-heading"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            ‹
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 md:right-8 text-primary-foreground/80 hover:text-secondary text-4xl font-heading"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
            }}
          >
            ›
          </button>
        </div>
      )}

      {/* Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Over the years, Liberty Marketing Suites have become the supplier of choice for major housebuilders across the UK. Our reputation has been built on understanding the specific needs of the property development industry and responding with a product range that is not only highly functional but also aesthetically outstanding.
            </p>
            <p>
              Our extensive range includes various sizes and configurations, from compact 24' × 10' models to our most prestigious 32' × 24' suites. No matter the size or style, all units are built to the highest standards and finished with a keen eye for design and durability.
            </p>
            <p>
              Every Liberty Marketing Suite is offered as a complete package deal. Included is our specially designed Power Pack, featuring a 14KVA generator and a large-capacity water tank, allowing the suite to operate completely independently of external services.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight text-center mb-12">
            Key <span className="text-secondary">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/40 transition-colors duration-300"
              >
                <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Inclusions */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight mb-8">
            Every Suite <span className="text-secondary">Includes</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Contemporary kitchen facilities",
              "Executive-style toilet facilities",
              "Spacious open-plan sales area",
              "UPVC French door access",
              "Air conditioning as standard",
              "Full-width glass frontage",
              "Remote-controlled electric shutters",
              "Panic alarm & quick-lock escape",
              "14KVA generator Power Pack",
              "Large-capacity water tank",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-2">
                <span className="text-secondary mt-0.5 text-lg">✓</span>
                <span className="text-primary-foreground/80 text-sm">{item}</span>
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

export default MarketingSuites;
