import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowDown, Fuel, Droplet, Plug, Cloud, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CloudflareVideo from "@/components/CloudflareVideo";
import { getSolarProduct } from "@/data/solarProducts";
import { downloadFile } from "@/lib/downloadFile";
import ultimateEcoLogo from "@/assets/ultimate-eco-logo.png.asset.json";

type Savings = {
  total: string;
  fuelCost: string;
  fuelSaved: string;
  generator: string;
  co2: string;
  toilet: string;
};

const savingsBySlug: Record<string, Savings> = {
  "12ft-ultimate-eco": { total: "£7,465", fuelCost: "£3,969", fuelSaved: "1,846L", generator: "£1,156", co2: "5,846kg", toilet: "£2,340" },
  "20ft-ultimate-eco": { total: "£10,222", fuelCost: "£5,678", fuelSaved: "2,641L", generator: "£2,204", co2: "8,345kg", toilet: "£2,340" },
  "12ft-ultimate-eco-plus": { total: "£8,140", fuelCost: "£4,644", fuelSaved: "2,160L", generator: "£1,150", co2: "6,841kg", toilet: "£2,340" },
  "20ft-ultimate-eco-plus": { total: "£11,015", fuelCost: "£6,751", fuelSaved: "3,140L", generator: "£1,924", co2: "9,922kg", toilet: "£2,340" },
  "24ft-ultimate-eco-plus": { total: "£11,281", fuelCost: "£6,925", fuelSaved: "3,221L", generator: "£2,016", co2: "10,201kg", toilet: "£2,340" },
  "12ft-solar-dry": { total: "£40,585", fuelCost: "N/A", fuelSaved: "27,990L", generator: "£2,016", co2: "88,448kg", toilet: "N/A" },
};

const buildStats = (s: Savings) => [
  { icon: ArrowDown, value: s.total, label: "Total Savings*" },
  { icon: Fuel, value: s.fuelCost, label: "Direct Fuel Costs Avoided*" },
  { icon: Droplet, value: s.fuelSaved, label: "Total Litres Fuel Saved*" },
  { icon: Plug, value: s.generator, label: "Generator Service Costs Saved*" },
  { icon: Cloud, value: s.co2, label: "CO₂ Emissions Avoided*" },
  { icon: Users, value: s.toilet, label: "Toilet Servicing Costs Avoided*" },
];

const UltimateEcoLogo = () => (
  <img
    src={ultimateEcoLogo.url}
    alt="Ultimate ECO"
    className="h-24 md:h-32 w-auto shrink-0"
  />
);

const SolarProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getSolarProduct(slug) : undefined;

  if (!product) return <Navigate to="/solar-mobile-welfare" replace />;

  const backMap: Record<typeof product.category, { to: string; label: string }> = {
    loo: { to: "/solar-loos", label: "Back to Solar Loos" },
    mobile: { to: "/solar-mobile-welfare", label: "Back to Solar Mobile Welfare" },
    static: { to: "/solar-static-welfare", label: "Back to Solar Static Welfare" },
    dry: { to: "/solar-drying-room", label: "Back to Solar Drying Room" },
  };
  const { to: backTo, label: backLabel } = backMap[product.category];
  const savings = savingsBySlug[product.slug];
  const goSolarStats = savings ? buildStats(savings) : [];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-20 bg-primary">
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
          <CloudflareVideo uid={product.uid} variant="hero" />
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            to={backTo}
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
          >
            ← {backLabel}
          </Link>

          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="font-heading text-4xl md:text-6xl font-black text-primary-foreground uppercase tracking-tight">
                {product.title}
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {product.specs.map((spec) => (
                <div key={spec.title}>
                  <h3 className="font-heading text-sm font-bold text-secondary uppercase tracking-wider mb-3 pb-2 border-b border-primary-foreground/10">
                    {spec.title}
                  </h3>
                  <ul className="space-y-2">
                    {spec.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-primary-foreground/70 leading-relaxed flex gap-2"
                      >
                        <span className="text-secondary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {product.specSheet && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => downloadFile(product.specSheet!)}
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all"
                >
                  Product Specification Sheet
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {savings && (
        <section className="relative w-full bg-[hsl(78,68%,52%)] py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_50%),radial-gradient(circle_at_80%_80%,white,transparent_50%)]" />
          <div className="relative container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-4">
                <UltimateEcoLogo />
                <h2 className="font-heading text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
                  Go S<span className="text-yellow">O</span>lar <span className="italic font-light">&amp; Save</span>
                </h2>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {goSolarStats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border-2 border-white/70 bg-transparent p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="font-heading text-4xl md:text-5xl font-black text-white leading-none">
                      {value}
                    </div>
                    <div className="mt-3 font-heading text-sm font-bold text-white uppercase tracking-wider">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-xs text-white/90 leading-relaxed max-w-4xl mx-auto text-center">
                *Compared to standard comparable 'eco' Canteen unit with fresh water toilet(s) and 7kVA generator 5 day/week. CO₂ emissions calculation: 1l of fuel = 3.16 kg of CO₂ (inc. Scope 3). HVO biofuel - £2.15l. Generator service £280. Toilet service £70.
              </p>
            </div>
          </div>
        </section>
      )}

      <Contact />
      <Footer />
    </div>
  );
};

export default SolarProduct;
