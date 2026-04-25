import { ArrowDownCircle, Cloud, Fuel, Plug, Users } from "lucide-react";

const metrics = [
  { icon: ArrowDownCircle, stat: "£6,925", label: "Fuel Savings" },
  { icon: Cloud, stat: "10,201 kg", label: "CO₂ Emissions" },
  { icon: Fuel, stat: "3,221 L", label: "Fuel Saved" },
  { icon: Plug, stat: "£2,016", label: "Generator Servicing" },
  { icon: Users, stat: "£2,340", label: "Toilet Servicing" },
];

const CO2Stat = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-primary">
      {/* Decorative accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--secondary)/0.15),_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <span className="inline-block font-heading text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-6">
            ◆ A Brighter Future
          </span>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-[0.95]">
            Switch to solar &<br />
            <span className="text-secondary">save £11,281</span> a year
          </h2>
          <p className="mt-8 text-primary-foreground/60 text-base md:text-lg max-w-2xl mx-auto">
            Real annual savings from upgrading a traditional welfare unit to our solar-powered fleet.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="group relative bg-navy-light rounded-2xl p-6 md:p-8 border border-primary-foreground/10 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center group-hover:bg-secondary/25 transition-colors">
                  <m.icon className="w-6 h-6 text-secondary" strokeWidth={2} />
                </div>
                <span className="font-heading text-xs font-bold text-primary-foreground/30 tabular-nums">
                  0{i + 1}
                </span>
              </div>
              <div className="font-heading text-3xl md:text-4xl font-black text-primary-foreground tracking-tight leading-none">
                {m.stat}
              </div>
              <div className="mt-3 text-primary-foreground/60 font-heading text-[11px] font-bold uppercase tracking-[0.15em]">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-primary-foreground/40 text-xs italic mt-12">
          *Annual savings based on the 24ft Ultimate Eco Plus
        </p>
      </div>
    </section>
  );
};

export default CO2Stat;
