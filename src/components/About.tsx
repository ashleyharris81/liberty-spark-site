import { Building2, Clock, Users, Wrench } from "lucide-react";

const stats = [
  { icon: Clock, value: "40+", label: "Years Experience" },
  { icon: Building2, value: "1981", label: "Founded" },
  { icon: Users, value: "UK Wide", label: "Coverage" },
  { icon: Wrench, value: "24/7", label: "Support" },
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
            Founded in 1981, Liberty Guard has become one of the UK's most trusted suppliers of self-contained welfare cabins. With over 40 years of experience, we've built our reputation on exceptional customer service and reliable, high-quality products.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We started small, with a big vision and we have expanded into a nationwide business with a diverse fleet of mobile and static welfare cabins, modular buildings, portable accommodation, marketing suites and our state-of-the-art solar fleet.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We specialise in the hire of welfare units for construction, civil engineering, and remote sites. Each unit provides essential on-site facilities such as toilet, canteen, dry room, kitchen and office, in one secure, portable solution. Our entire fleet is supported by our experienced team of responsive aftercare and on-call engineers, we deliver a seamless service from start to finish.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Our sizeable investment in our solar range, promotes sustainable welfare, low emissions, reduced CO₂, low fuel, silent running and rainwater harvesting. Helping our customers to save money, reduce their environmental impact and reach their net zero goals.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Liberty Guard we're looking forward to a brighter, cleaner future for the welfare industry.
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
