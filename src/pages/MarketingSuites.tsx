import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";
import {
  Sparkles,
  LifeBuoy,
  ShieldCheck,
  MapPin,
  Palette,
  Building2,
} from "lucide-react";
import millerHomes from "@/assets/miller-homes.png.asset.json";
import keepmoat from "@/assets/keepmoat.png.asset.json";
import piperHomes from "@/assets/piper-homes.png.asset.json";
import taylorWimpey from "@/assets/taylor-wimpey.png.asset.json";
import persimmon from "@/assets/persimmon.png.asset.json";
import honey from "@/assets/honey.png.asset.json";
import strata from "@/assets/strata.png.asset.json";

const stripImages = [
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_1961-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Liberty-Tetbury-01-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/LIB_08-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Liberty-Llanwern-03.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/LIB_35-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2463-1024x768.jpeg",
];

const housebuilders = [
  { name: "Miller Homes", logo: millerHomes.url },
  { name: "Keepmoat Homes", logo: keepmoat.url },
  { name: "Piper Homes", logo: piperHomes.url },
  { name: "Taylor Wimpey", logo: taylorWimpey.url },
  { name: "Persimmon", logo: persimmon.url },
  { name: "Honey", logo: honey.url },
  { name: "Strata", logo: strata.url },
];

const features = [
  {
    title: "BRAND IDENTITY",
    description:
      "Bespoke suites with prestigious finishes and interiors that reflect your brand.",
    icon: Sparkles,
  },
  {
    title: "AFTERCARE",
    description:
      "24/7 support with a responsive service team, keeping your suite running day in, day out.",
    icon: LifeBuoy,
  },
  {
    title: "HIGH SECURITY",
    description:
      "Panic alarm systems, remote-controlled shutters, and quick-lock escape routes as standard.",
    icon: ShieldCheck,
  },
  {
    title: "NATIONWIDE",
    description:
      "Delivered and installed across the UK for major housebuilders and developments.",
    icon: MapPin,
  },
  {
    title: "BESPOKE DESIGNS",
    description:
      "Choose from 24' x 12' models to our flagship 24' x 20' suites or create a custom-made design.",
    icon: Palette,
  },
  {
    title: "FOUNDATIONS",
    description:
      "Complete package with Power Pack, kitchen, executive WC, and open-plan sales area.",
    icon: Building2,
  },
];

const MarketingSuites = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <HeroVideo
            src="https://assets.libertyguard.co.uk/videos/Showhome-Nottingham-40ft-Marketing-Suite.mov"
            poster="/posters/marketing-suites.jpg"
          />
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
                Marketing <span className="text-secondary">Suites</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Trusted by Housebuilders. Designed for Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Impressions Matter */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
            First Impressions Matter
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-left">
            <p>
              At Liberty, we understand the importance of first impressions. Our stand-alone Marketing Suites are designed to provide a stylish, professional, and welcoming environment for both your customers and staff. Each unit is tailored to your specific requirements, with prestigious finishes and bespoke interiors that reflect your brand's identity, creating the perfect platform to showcase your homes and developments in a relaxed, high-quality setting.
            </p>
            <p>
              From layout to interior styling, every detail is considered to ensure your sales environment is as functional as it is visually impressive. Whether you need a compact suite or a flagship model, our versatile solutions offer comfort, sophistication, and practicality, helping you promote your homes within a distinctive, secure and fully-equipped space.
            </p>
            <p>
              Over the years, Liberty Marketing Suites have become the supplier of choice for major housebuilders across the UK. Our reputation has been built on understanding the specific needs of the property development industry and responding with a product range that is not only highly functional but also aesthetically outstanding.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal image strip */}
      <section className="bg-background">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {stripImages.map((src) => (
            <div key={src} className="overflow-hidden aspect-[4/3]">
              <img
                src={src}
                alt="Liberty marketing suite"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Housebuilder Network */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-4">
              Housebuilder <span className="text-secondary">Network</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="relative overflow-hidden max-w-6xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-16 animate-marquee w-max">
              {[...housebuilders, ...housebuilders].map((b, i) => (
                <div
                  key={`${b.name}-${i}`}
                  className="flex items-center justify-center h-20 shrink-0"
                >
                  <img
                    src={b.logo}
                    alt={b.name}
                    loading="lazy"
                    className="max-h-16 w-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Excellence */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-4">
              Designed for <span className="text-secondary">Excellence</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-primary/90 border border-primary-foreground/10 rounded-lg p-8 text-left hover:bg-primary transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-base font-bold text-primary-foreground uppercase tracking-wider mb-3">
                  {f.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Builds */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-4">
            Bespoke <span className="text-secondary">Builds</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-10" />
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-12">
            <p>
              At Liberty we provide welfare units nationwide, supported by 20 reliable distribution depots. With over 40 years of industry experience, we bring expert product knowledge to every project.
            </p>
            <p>
              Our fleet of 1,500+ units enables fast, flexible solutions with a quick 24-hour turnaround — backed by our trusted aftercare team, delivering high-quality service and rapid support.
            </p>
          </div>
          <a
            href="tel:03333443833"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-heading font-bold uppercase tracking-wider transition-colors"
          >
            Call Our Team
            <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
          </a>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default MarketingSuites;
