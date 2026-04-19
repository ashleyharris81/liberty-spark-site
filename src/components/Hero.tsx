import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/50 z-[1]" />
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground uppercase tracking-tight leading-tight max-w-3xl">
          Leaders in Modular &<br />Portable Accommodation
        </h1>
      </div>
    </section>
  );
};

export default Hero;
