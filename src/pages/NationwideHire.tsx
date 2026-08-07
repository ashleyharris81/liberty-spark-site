import brochureAsset from "@/assets/liberty-brochure.pdf.asset.json";
import remoteMonitoringImg from "@/assets/remote-monitoring.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Phone, MapPin, Truck, Clock, Wrench, ShieldCheck, Leaf, Download, ArrowDown, Cloud, Fuel, Plug, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";
import Sustainability from "@/components/Sustainability";
import ImageAccordion from "@/components/ImageAccordion";
import nationwideHireBg from "@/assets/nationwide-hire-bg.jpg";
import solarSavingsBg from "@/assets/solar-savings-bg.jpg";
import whyLibertyBg from "@/assets/why-liberty-bg.jpg";
import UKDepotMap from "@/components/UKDepotMap";
import { depots } from "@/data/depots";
import mobileCard from "@/assets/welfare-mobile-card.jpg";
import staticCard from "@/assets/welfare-static-card.jpg";
import hybridCard from "@/assets/hybrid-24ft-twin-card.jpg";
import msExterior from "@/assets/ms-exterior.jpg";
import portableHero from "@/assets/portable-buildings-hero.jpg";
import { downloadFile } from "@/lib/downloadFile";


const showcase = [
  { title: "Mobile Welfare", image: mobileCard, link: "/mobile-welfare" },
  { title: "Static Welfare", image: staticCard, link: "/static-welfare" },
  { title: "Portable Accommodation", image: portableHero, link: "/portable-buildings", featured: true },
  { title: "Marketing Suites", image: msExterior, link: "/marketing-suites" },
  { title: "Hybrid Welfare", image: hybridCard, link: "/mobile-welfare/12ft-hybrid-mobi" },
];


const features = [
  { icon: MapPin, title: "UK Coverage", text: "Nationwide reach across mainland UK" },
  { icon: Truck, title: "1,500+ Fleet", text: "One of the largest welfare fleets in the country" },
  { icon: Wrench, title: "20 Depots", text: "Strategically located distribution depots" },
  { icon: Clock, title: "24/7 Breakdown", text: "Round-the-clock breakdown assistance" },
  { icon: ShieldCheck, title: "Toilet Servicing", text: "Scheduled servicing available on every unit" },
  { icon: Truck, title: "24-Hour Turnaround", text: "Fast delivery and collection" },
  { icon: Clock, title: "Short & Long Term", text: "Hire periods to suit any project" },
  { icon: Leaf, title: "Extensive Range", text: "Standard, hybrid and solar-powered options" },
];

const tickerItems = [
  "TRUSTED WELFARE PROVIDER",
  "UK COVERAGE",
  "40 YEARS INDUSTRY EXPERIENCE",
  "MARKET LEADING SOLAR FLEET",
  "EXTENSIVE PRODUCT RANGE",
  "NATIONWIDE DISTRIBUTION DEPOTS",
  "DEDICATED AFTERCARE",
  "SUSTAINABLE WELFARE SOLUTIONS",
];

const NationwideHire = () => {
  const [promiseIndex, setPromiseIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setPromiseIndex((i) => (i + 1) % tickerItems.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[80vh] min-h-[560px] overflow-hidden">
          <img
            src={nationwideHireBg}
            alt="Liberty welfare unit on site"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 w-full h-full overflow-hidden z-[1]">
            <HeroVideo src="https://assets-libertyguard-co-uk.stackstaging.com/videos/home-page-video.mov" />
          </div>
          <div className="absolute inset-0 bg-primary/20 z-[2]" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <span className="inline-block font-heading text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-secondary border border-secondary/40 rounded-full px-4 py-1.5 animate-fade-in-up">
                Nationwide Hire
              </span>
              <h1 className="mt-6 font-heading text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground uppercase tracking-tight leading-[0.95] animate-fade-in-up max-w-5xl">
                Liberty
                <span className="block text-secondary">Welfare Hire</span>
              </h1>
              <div
                className="mt-6 h-8 md:h-12 lg:h-16 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p
                  key={promiseIndex}
                  className="text-3xl md:text-5xl lg:text-6xl font-heading font-normal text-yellow leading-[0.95] animate-fade-in-up uppercase"
                >
                  {tickerItems[promiseIndex]}
                </p>
              </div>
              <div
                className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="tel:03333443833"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-md hover:brightness-110 transition-all"
                >
                  <Phone className="w-4 h-4" /> Get a Quote
                </a>
                <Link
                  to="/new-account"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-md hover:border-secondary hover:text-secondary transition-all"
                >
                  Open an Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business */}
      <section className="pt-20 pb-10 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">
            Our <span className="text-secondary">Business</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mt-4 mb-6 mx-auto" />
          <p className="text-primary/80 text-lg leading-relaxed">
            Here at Liberty we're your trusted welfare provider and with over 40 years of industry experience we are confident in our product knowledge and reliability.
          </p>
          <p className="text-primary/80 text-lg leading-relaxed mt-4">
            Our core focus is to supply a high specification product, that is supported with a quality service and with our dedicated aftercare department and breakdowns division we can deliver.
          </p>
          <p className="text-primary/80 text-lg leading-relaxed mt-4">
            We provide portable accommodation covering all sectors, we specialise in towable, static and solar welfare cabins. At Liberty we feel it's imperative to keep up to date with market leading eco efficient welfare, as our mission is to lower carbon emissions across the welfare industry.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-10 max-w-2xl mx-auto">
            <div>
              <p className="font-heading text-4xl font-black text-secondary">40+</p>
              <p className="text-primary/70 text-sm uppercase tracking-wider mt-1">Years experience</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-black text-secondary">1,500+</p>
              <p className="text-primary/70 text-sm uppercase tracking-wider mt-1">Fleet size</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-black text-secondary">20</p>
              <p className="text-primary/70 text-sm uppercase tracking-wider mt-1">UK Depots</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="group inline-flex items-center gap-4 bg-primary text-primary-foreground font-heading font-black text-2xl md:text-3xl uppercase tracking-tight px-8 py-5 rounded-full shadow-lg hover:bg-primary/90 transition-all"
            >
              Book a Demo
              <span className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center group-hover:bg-secondary transition-colors">
                <Phone className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Range Showcase */}
      <ImageAccordion />

      {/* Trusted by */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-black text-primary uppercase tracking-tight">
            Trusted by our valued customers
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-3 mb-12" />
        </div>
        <div
          className="group relative overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
        >
          <div className="flex items-center gap-16 md:gap-20 w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...customers, ...customers].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex items-center justify-center h-14 md:h-16 shrink-0"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="max-h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depot Map */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={nationwideHireBg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground uppercase tracking-tight">
              Nationwide <span className="text-secondary">Hire</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-[0.6fr_1fr_0.8fr] gap-10 items-center">
            <div className="hidden md:block" />
            <div className="mx-auto w-full max-w-[320px] md:max-w-[400px]">
              <UKDepotMap depots={depots} />
            </div>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              We have 20 depot locations distributed across the UK, with this strong partnership in place we can uphold nationwide delivery, competitive rates and a quality service on our entire fleet. At Liberty we have an extensive fleet size, supplying a complete product range and offering a variety of size options, proficiently covering multiple projects in the industry.
            </p>
          </div>
        </div>
      </section>

      <div className="h-4 md:h-6 bg-white" />

      <Sustainability />

      <div className="h-4 md:h-6 bg-white" />

      {/* Solar Savings */}
      <section className="relative overflow-hidden">
        <img
          src={solarSavingsBg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={768}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl py-20">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] gap-10 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-6xl font-black text-primary-foreground uppercase tracking-tight leading-none">
                <span className="text-yellow">Solar</span>
                <span className="block w-16 h-1 bg-yellow my-3" />
                A Brighter
                <br />
                <span className="text-secondary">Future</span>
              </h2>
            </div>
            <div>
              <p className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
                Switch to solar welfare & save{" "}
                <span className="text-yellow">£11,281 a year</span>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mt-8">
                {[
                  { icon: ArrowDown, value: "£6,925", label: "Fuel Savings" },
                  { icon: Cloud, value: "10,201kg", label: "CO₂ Emissions" },
                  { icon: Fuel, value: "3,221L", label: "Fuel Saved" },
                  { icon: Plug, value: "£2,016", label: "Generator Servicing" },
                  { icon: Users, value: "£2,340", label: "Toilet Servings" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full border-2 border-secondary flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <p className="font-heading font-black text-lg text-primary-foreground">
                      {value}
                    </p>
                    <p className="text-xs text-primary-foreground/75 mt-1">{label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-primary-foreground/60 mt-6 italic">
                Data compares a 24ft standard diesel welfare unit with a 24ft Ultimate eco solar welfare unit
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-4 md:h-6 bg-white" />

      {/* Remote Monitoring */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl py-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] gap-10 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-6xl font-black text-primary uppercase tracking-tight leading-none">
                Remote
                <br />
                <span className="text-secondary">Monitoring</span>
              </h2>
              <div className="w-16 h-1 bg-secondary my-6" />
              <p className="text-primary/80 text-lg leading-relaxed">
                Our Solar Fleet feature intelligent track-and-trace technology that monitors energy production, usage, and battery levels 24/7 via Wi-Fi or 5G.
              </p>
              <p className="text-primary/80 text-lg leading-relaxed mt-4">
                Real-time data includes cabin location, weather, fuel usage, waste and water levels. Fitted with a back-up generator, remote diagnostics and rainwater harvesting, our systems ensure efficient, reliable, and sustainable operation all year round.
              </p>
            </div>
            <div>
              <img
                src={remoteMonitoringImg}
                alt="Remote monitoring solar welfare unit"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-4 md:h-6 bg-white" />

      {/* Request a Brochure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="rounded-2xl border-2 border-secondary/40 bg-primary p-10 md:p-14 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight">
              Request a <span className="text-secondary">Brochure</span>
            </h2>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
              Download our latest brochure for a complete overview of our welfare units, portable buildings and solar solutions.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => downloadFile(`${brochureAsset.url}`, "Liberty-Brochure.pdf")}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all"
              >
                <Download className="w-4 h-4" /> Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-4 md:h-6 bg-white" />

      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${whyLibertyBg})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground uppercase tracking-tight">
              Why <span className="text-secondary">Liberty</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-primary/70 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:border-secondary/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-black text-primary-foreground uppercase tracking-tight">
                  {title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="rounded-2xl border-2 border-secondary/40 bg-primary p-10 md:p-14 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight">
              Ready to <span className="text-secondary">hire?</span>
            </h2>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
              Speak to our team about availability in your area or open a new account to get started.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03333443833"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all"
              >
                <Phone className="w-4 h-4" /> 0333 344 3833
              </a>
              <Link
                to="/new-account"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                Open an Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default NationwideHire;
