import { Link } from "react-router-dom";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";
import { downloadFile } from "@/lib/downloadFile";
import {
  Sparkles,
  LifeBuoy,
  ShieldCheck,
  MapPin,
  Palette,
  Building2,
  FileText,
} from "lucide-react";
import millerHomes from "@/assets/miller-homes.png.asset.json";
import keepmoat from "@/assets/keepmoat.png.asset.json";
import piperHomes from "@/assets/piper-homes.png.asset.json";
import taylorWimpey from "@/assets/taylor-wimpey.png.asset.json";
import persimmon from "@/assets/persimmon.png.asset.json";
import honey from "@/assets/honey.png.asset.json";
import strata from "@/assets/strata.png.asset.json";
import marketingSuiteBrochure from "@/assets/Marketing_Suite_Brochure_2026.pdf.asset.json";
import strip1 from "@/assets/legacy/IMG_1961-1024x768.jpeg.asset.json";
import strip2 from "@/assets/legacy/Liberty-Tetbury-01-1024x683.jpg.asset.json";
import strip3 from "@/assets/legacy/LIB_08-1024x683.jpg.asset.json";
import strip4 from "@/assets/legacy/Liberty-Llanwern-03.jpg.asset.json";
import strip5 from "@/assets/legacy/LIB_35-1024x683.jpg.asset.json";
import strip6 from "@/assets/legacy/IMG_2463-1024x768.jpeg.asset.json";

const stripImages = [
  strip1.url,
  strip2.url,
  strip3.url,
  strip4.url,
  strip5.url,
  strip6.url,
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
      "Complete package with Power Pack, foundations, civils, site survey and nationwide craned transport.",
    icon: Building2,
  },
];

const MarketingSuites = () => {
  return (
    <div className="min-h-screen">
      <BreadcrumbJsonLd items={[{ name: "Portable Buildings", path: "/portable-buildings" }, { name: "Marketing Suites", path: "/marketing-suites" }]} />
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
      <section className="bg-background overflow-hidden">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex gap-0 animate-marquee w-max">
            {[...stripImages, ...stripImages].map((src, i) => (
              <div key={`${src}-${i}`} className="overflow-hidden h-64 w-80 shrink-0">
                <img
                  src={src}
                  alt="Liberty marketing suite"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
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
              Whether you’re looking for one of our existing Marketing Suites or require a custom-made suite, our expert team have the capabilities to create a sales suite tailored towards you and your sales staff.
            </p>
            <p>
              Get in touch to discuss the best options for your next sales suite, our dedicated team is on hand to meet your specific requirements.
            </p>
          </div>
          <button
            type="button"
            onClick={() => downloadFile(`${marketingSuiteBrochure.url}`, "Marketing-Suite-Brochure-2026.pdf")}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-heading font-bold uppercase tracking-wider transition-colors"
          >
            Marketing Suite Brochure
            <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary-foreground" />
            </span>
          </button>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default MarketingSuites;
