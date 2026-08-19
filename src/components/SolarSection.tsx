import solarBg from "@/assets/solar-bg.jpg";
import { Wifi, Battery, MapPin, CloudRain } from "lucide-react";

const monitoringFeatures = [
  { icon: Wifi, title: "24/7 Monitoring", desc: "Energy production, usage & battery levels via Wi-Fi or 5G" },
  { icon: MapPin, title: "Track & Trace", desc: "Real-time cabin location and weather data" },
  { icon: Battery, title: "Back-up Generator", desc: "Remote diagnostics ensure reliable operation year round" },
  { icon: CloudRain, title: "Rainwater Harvesting", desc: "Sustainable water collection and management systems" },
];

const SolarSection = () => {
  return (
    <section id="solar" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight">
              Remote Monitoring & <span className="text-secondary">Track-and-Trace</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mt-4 mb-8" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our Solar Fleet feature intelligent track-and-trace technology that monitors energy production, usage, and battery levels 24/7 via Wi-Fi or 5G. Real-time data includes cabin location, weather, fuel usage, waste and water levels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {monitoringFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={solarBg}
              alt="Solar welfare cabin with solar panels"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;
