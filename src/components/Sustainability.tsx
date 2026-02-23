import sustainabilityBg from "@/assets/sustainability-bg.jpg";
import { Leaf, Zap, Droplets, Volume2 } from "lucide-react";

const features = [
  { icon: Leaf, label: "Low Emissions" },
  { icon: Zap, label: "Reduced CO₂" },
  { icon: Droplets, label: "Rainwater Harvesting" },
  { icon: Volume2, label: "Silent Running" },
];

const Sustainability = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sustainabilityBg})` }}
      />
      <div className="absolute inset-0 bg-primary/85" />
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
            Our goal is to help our customers save energy, cut costs, reduce emissions and protect the planet together. Over the next few years, we're transforming our entire welfare fleet with cutting-edge solar technology.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.label} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-secondary/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-primary-foreground font-heading font-semibold text-sm uppercase tracking-wider">
                  {feature.label}
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
