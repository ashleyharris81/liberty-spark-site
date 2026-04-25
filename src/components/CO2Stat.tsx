import { Leaf } from "lucide-react";

const CO2Stat = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-8 bg-secondary/20 rounded-full flex items-center justify-center">
            <Leaf className="w-12 h-12 text-primary-foreground" />
          </div>

          <div className="font-heading text-7xl md:text-8xl font-black text-secondary tracking-tight">
            10,201 kg
          </div>
          <div className="mt-3 font-heading text-lg md:text-xl font-bold text-primary-foreground uppercase tracking-widest">
            CO₂ Emissions Avoided
          </div>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6 mb-10" />

          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
            Looking to cut carbon on your site? Switching to solar welfare units is a simple, effective way to do just that. These innovative cabins are powered by solar energy, which means way less fuel is used, less emissions are emitted and there's a big drop in carbon dioxide. They are still fully kitted out with everything you need - canteen, kitchen, toilet, office space - but with a much greener footprint.
          </p>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
            Not only are you massively helping the environment, you're also reducing noise pollution, fuel costs, servicing visits and reducing maintenance. It's a smart move for any project looking to be more sustainable, without compromising on comfort or compliance.
          </p>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
            So, why not make the change? Our planet will thank you!
          </p>
          <p className="text-primary-foreground/50 text-xs italic">
            *CO₂ savings are taken annually, from the 24ft Ultimate Eco Plus
          </p>
        </div>
      </div>
    </section>
  );
};

export default CO2Stat;
