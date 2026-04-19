import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Static fallback background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Vimeo Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-[1]">
        <iframe
          src="https://player.vimeo.com/video/1168093045?background=1&autoplay=1&loop=1&muted=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: '177.78vh', height: '100vh', minWidth: '100%', minHeight: '100%' }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Hero background video"
        />
      </div>
      <div className="absolute inset-0 bg-primary/20 z-[2]" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground uppercase tracking-tight leading-tight max-w-5xl mx-auto drop-shadow-lg">
          Leaders in Modular &<br />Portable Accommodation
        </h1>
      </div>
    </section>
  );
};

export default Hero;
