import sustainabilityBg from "@/assets/sustainability-pledge.jpg";
import { Leaf, Zap, Droplets, VolumeX } from "lucide-react";

const stats = [
  { icon: Leaf, label: "Low Emissions" },
  { icon: Zap, label: "Reduced CO₂" },
  { icon: Droplets, label: "Rainwater Harvesting" },
  { icon: VolumeX, label: "Silent Running" },
];

const Sustainability = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sustainabilityBg})` }}
      />
      <div className="absolute inset-0 bg-primary/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/30" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground uppercase tracking-tight">
              Sustainability <span className="text-yellow">Pledge</span>
            </h2>
            <div className="w-20 h-1 bg-yellow mx-auto mt-4 mb-8" />
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6 font-bold">
              We are dedicated to reducing our environmental impact and helping our customers achieve the same. We continuously invest in the latest solar-powered technology delivering sustainable and low-emission solutions.
            </p>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-bold">
              Our goal is to help our customers save energy, cut costs, reduce emissions and protect the planet together. Over the next few years, we're transforming our entire welfare fleet with cutting-edge solar technology. By regularly reviewing and upgrading our eco-efficient systems, we ensure our operations meet the highest environmental standards and lead the way in a sustainable future.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-yellow/20 border-2 border-yellow/50 flex items-center justify-center">
                    <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-yellow" />
                  </div>
                  <p className="text-primary-foreground font-heading font-bold text-sm md:text-base uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
