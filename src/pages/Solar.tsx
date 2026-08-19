import { useState } from "react";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { Sun, Droplets, Wifi, Leaf, Gauge, ShieldCheck, ClipboardList, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";

const ASSETS = "https://assets-libertyguard-co-uk.stackstaging.com/videos";
const HERO_VIDEO = `${ASSETS}/solar%20solutions%20video/Social%201.mov`;

const CF_SUBDOMAIN = "customer-p8mic15ze1rkgi3y.cloudflarestream.com";
const IFRAME_PARAMS =
  "autoplay=true&loop=true&muted=true&controls=false&preload=auto";
const cfThumb = (uid: string, time = "0s") =>
  `https://${CF_SUBDOMAIN}/${uid}/thumbnails/thumbnail.jpg?time=${time}&width=800&height=600&fit=crop`;

interface SolarCategory {
  title: string;
  description: string;
  link: string;
  uid: string;
  thumb?: string;
}

const solarProducts: SolarCategory[] = [
  {
    title: "Solar Mobile Welfare",
    description: "Fully solar-powered mobile welfare units with low emissions, silent running and smart monitoring.",
    link: "/solar-mobile-welfare",
    uid: "e167fa58628c9062d8051429040b06f9",
    thumb: `${ASSETS}/solar%20solutions%20-%20catagories/MJP_9981%20solar%20mobile%20welfare.jpg`,
  },
  {
    title: "Solar Static Welfare",
    description: "Static welfare cabins powered by solar technology, ideal for longer-term sites requiring sustainable facilities.",
    link: "/solar-static-welfare",
    uid: "bc0d90221940958c3d321b50e9e36750",
    thumb: `${ASSETS}/solar%20solutions%20-%20catagories/DSCF8031%20solar%20static%20welfare.png`,
  },
  {
    title: "Solar Drying Room",
    description: "Eco-friendly solar drying rooms — generator-free, silent operation, and zero-emission drying for workwear and PPE.",
    link: "/solar-drying-room",
    uid: "dae4d7a7bed6537e29f3d6811b9b5722",
    thumb: `${ASSETS}/solar%20solutions%20-%20catagories/16.0%20solar%20dry.jpg`,
  },
  {
    title: "Solar Loos",
    description: "Solar-powered portable toilet facilities combining sustainability with essential hygiene on any site.",
    link: "/solar-loos",
    uid: "72c99cace1b5f8642fab7ab476c7c65c",
    thumb: `${ASSETS}/solar%20solutions%20-%20catagories/MK2_2714%20solar%20loos.jpg`,
  },
];

const CategoryCardMedia = ({ product }: { product: SolarCategory }) => {
  const [attempt, setAttempt] = useState<0 | 1 | 2 | 3>(product.thumb ? 0 : 1);

  if (attempt === 3) {
    return (
      <iframe
        src={`https://${CF_SUBDOMAIN}/${product.uid}/iframe?${IFRAME_PARAMS}`}
        title={product.title}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        loading="lazy"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0"
        style={{
          width: "calc(100% + 6rem)",
          height: "calc(100% + 6rem)",
          minWidth: "100%",
          minHeight: "100%",
        }}
      />
    );
  }

  const src =
    attempt === 0 && product.thumb
      ? product.thumb
      : cfThumb(product.uid, attempt <= 1 ? "0s" : "2s");

  return (
    <img
      src={src}
      alt={product.title}
      loading="lazy"
      onError={() => setAttempt((c) => ((c + 1) as 0 | 1 | 2 | 3))}
      className="absolute inset-0 w-full h-full object-cover scale-125 group-hover:scale-[1.32] transition-transform duration-500"
    />
  );
};


const benefits = [
  {
    icon: Leaf,
    title: "Reduced Carbon Output",
    description: "Minimal emissions and lower carbon footprint, helping you achieve net zero targets.",
  },
  {
    icon: Sun,
    title: "Low Fuel Consumption",
    description: "Designed to run on minimal fuel, delivering significant financial savings over traditional units.",
  },
  {
    icon: Droplets,
    title: "Rainwater Harvesting",
    description: "Clever built-in rainwater collection system to reduce water usage and environmental impact.",
  },
  {
    icon: Wifi,
    title: "Remote Monitoring",
    description: "Telematics and remote monitoring with water level alerts and waste tank gauge — tracked by our teams.",
  },
  {
    icon: Gauge,
    title: "Silent Operation",
    description: "Whisper-quiet running with no generator noise, perfect for residential areas and sensitive sites.",
  },
  {
    icon: ShieldCheck,
    title: "Full Support",
    description: "From initial advice to ongoing support, our team ensures a smooth and stress-free experience.",
  },
];

const Solar = () => {
  return (
    <div className="min-h-screen">
      <BreadcrumbJsonLd items={[{ name: "Solar Solutions", path: "/solar" }]} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <HeroVideo src={HERO_VIDEO} />
          <div className="absolute inset-0 bg-primary/60 z-[5]" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                to="/"
                className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
              >
                ← Back to Home
              </Link>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
                Solar{" "}
                <span className="text-secondary">Solutions</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Smart, eco-friendly technology — saving money, saving energy, protecting our future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
            Innovative <span className="text-secondary">Solar Range</span>
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              At Liberty, we're excited to introduce you to our innovative solar range, a smart, eco-friendly solution designed with both your needs and the planet in mind. We've combined the latest in solar technology with clever features like rainwater harvesting, telematics, remote monitoring, water level alerts and a waste tank gauge, allowing our teams to monitor and track your cabin's performance.
            </p>
            <p>
              Our solar units are all about efficiency. They're designed to run on low fuel, produce fewer emissions, and keep carbon output to an absolute minimum — using less energy overall. That means you're not just saving money, you're also reducing your environmental impact too.
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight text-center mb-12">
            Our Solar <span className="text-secondary">Products</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {solarProducts.map((product) => (
              <Link
                key={product.title}
                to={product.link}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative overflow-hidden rounded-xl bg-navy-light border border-primary-foreground/10 hover:border-secondary/60 transition-all duration-300 aspect-[4/3]"
              >
                <CategoryCardMedia product={product} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-xl md:text-2xl font-black text-primary-foreground uppercase tracking-tight">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-primary-foreground/80 text-sm leading-snug line-clamp-2">
                    {product.description}
                  </p>
                  <span className="mt-2 inline-block text-secondary font-heading text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    Take a Look →
                  </span>
                </div>
              </Link>
            ))}

            <Link
              to="/new-account"
              onClick={() => window.scrollTo(0, 0)}
              className="group relative overflow-hidden rounded-xl border-2 border-secondary/60 hover:border-secondary bg-primary hover:bg-secondary/10 transition-all duration-300 aspect-[4/3] flex flex-col items-center justify-center p-6 text-center"
            >
              <ClipboardList className="w-14 h-14 text-secondary mb-4" />
              <h3 className="font-heading text-xl font-black text-primary-foreground uppercase tracking-tight">
                New Customer
              </h3>
              <p className="mt-1 font-heading text-sm text-primary-foreground/80 uppercase tracking-wider">
                Open an Account
              </p>
              <span className="mt-3 text-secondary font-heading text-xs font-semibold uppercase tracking-wider">
                Get Started →
              </span>
            </Link>

            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="group relative overflow-hidden rounded-xl border-2 border-secondary/60 hover:border-secondary bg-primary hover:bg-secondary/10 transition-all duration-300 aspect-[4/3] flex flex-col items-center justify-center p-6 text-center"
            >
              <Mail className="w-14 h-14 text-secondary mb-4" />
              <h3 className="font-heading text-xl font-black text-primary-foreground uppercase tracking-tight">
                Email Us
              </h3>
              <p className="mt-1 font-heading text-sm text-primary-foreground/80 uppercase tracking-wider">
                Request a Quote
              </p>
              <span className="mt-3 text-secondary font-heading text-xs font-semibold uppercase tracking-wider">
                Contact →
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* More Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              By choosing from our solar range, you are making a smart investment that offers significant financial savings. But it's not just about cutting costs — it's about making a real difference. Whether you're looking to lower your carbon footprint or take steps toward net zero, our solar-powered solutions are here to help you achieve those goals.
            </p>
            <p>
              As always, our team is on hand to guide you through the options and find the best setup for your site. From initial advice to ongoing support, we're here to make sure your experience with Liberty is as smooth and stress-free as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight text-center mb-12">
            Key <span className="text-secondary">Benefits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-xl p-8 border border-border hover:border-secondary/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight mb-6">
            Go <span className="text-secondary">Solar</span> Today
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-10">
            Get in touch today and see how our solar range can work for you — saving money, saving energy, and helping protect our future.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-md hover:brightness-110 transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Solar;
