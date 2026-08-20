import { Building2, Clock, Users, Wrench } from "lucide-react";

const stats = [
  { icon: Clock, value: "40+", label: "Years Experience" },
  { icon: Building2, value: "1981", label: "Founded" },
  { icon: Users, value: "UK Wide", label: "Coverage" },
  { icon: Wrench, value: "UK", label: "Support Team" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight">
            Our Business
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Here at Liberty we're your trusted welfare provider and with over 40 years of industry experience we are confident in our product knowledge and reliability.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Our core focus is to supply a high specification product, that is supported with a quality service and with our dedicated aftercare department and breakdowns division we can deliver.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We provide portable accommodation covering all sectors, we specialise in towable, static and solar welfare cabins. At Liberty we feel it's imperative to keep up to date with market leading eco efficient welfare, as our mission is to lower carbon emissions across the welfare industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="font-heading text-3xl font-black text-foreground">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
