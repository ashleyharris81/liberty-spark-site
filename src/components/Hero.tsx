import heroBg from "@/assets/hero-bg.jpg";

const HERO_VIDEO_URL =
  "https://assets-libertyguard-co-uk.stackstaging.com/videos/home-page-video.mov";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static fallback background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-[1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-primary/70 z-[2]" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up max-w-5xl mx-auto">
          <span className="block font-normal text-3xl md:text-5xl lg:text-6xl">Leaders in</span>
          <span className="text-secondary block">Modular & Portable Accommodation</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Founded in 1981. Over 40 years of trusted service delivering welfare cabins, solar solutions and portable buildings nationwide.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-md hover:brightness-110 transition-all duration-300"
          >
            Get a Quote
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-md hover:border-secondary hover:text-secondary transition-all duration-300"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
