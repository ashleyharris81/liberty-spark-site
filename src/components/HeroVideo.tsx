import heroBg from "@/assets/hero-bg.jpg";

interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

const HeroVideo = ({ src, poster = heroBg, className = "" }: HeroVideoProps) => (
  <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}>
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  </div>
);

export default HeroVideo;
