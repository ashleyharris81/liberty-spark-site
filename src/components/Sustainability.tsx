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
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sustainabilityBg})` }}
      />
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground uppercase tracking-tight">
            Sustainability <span className="text-secondary">Pledge</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-8" />
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
            We are dedicated to reducing our environmental impact and helping our customers achieve the same. We continuously invest in the latest solar-powered technology delivering sustainable and low-emission solutions.
          </p>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-12">
            Our goal is to help our customers save energy, cut costs, reduce emissions and protect the planet together. Over the next few years, we're transforming our entire welfare fleet with cutting-edge solar technology. By regularly reviewing and upgrading our eco-efficient systems, we ensure our operations meet the highest environmental standards and lead the way in a sustainable future.
          </p>

          <div className="w-full h-px bg-primary-foreground/15 mb-12" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-primary-foreground font-heading font-semibold text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
