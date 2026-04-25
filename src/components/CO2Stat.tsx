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
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-sky-400 to-sky-600">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-primary/20" />
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-black text-primary uppercase tracking-tight drop-shadow-sm">
            Solar — A <span className="text-secondary">Brighter Future</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6 mb-6" />
          <p className="font-heading text-lg md:text-2xl font-bold text-secondary uppercase tracking-wide">
            Switch to solar welfare & save £11,281 a year
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center text-center bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
            >
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-secondary bg-white/20 flex items-center justify-center">
                <m.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-heading text-2xl md:text-3xl font-black text-primary tracking-tight">
                {m.stat}
              </div>
              <div className="mt-2 text-primary/80 font-heading text-xs font-bold uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-primary/60 text-xs italic mt-10">
          *Annual savings based on the 24ft Ultimate Eco Plus
        </p>
      </div>
    </section>
  );
};

export default CO2Stat;
