import heroBg from "@/assets/hero-bg.jpg";

interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

// Auto-map known hero videos to their first-frame still in /public/posters
const POSTER_BY_VIDEO: Record<string, string> = {
  "home-page-video.mov": "/posters/home.jpg",
  "LGP54.mov": "/posters/static-welfare.jpg",
  "Social%201.mov": "/posters/solar.jpg",
  "Social 1.mov": "/posters/solar.jpg",
  "Social%202.mov": "/posters/solar-loos.jpg",
  "DoncasterKnights15.mov": "/posters/solar-mobile.jpg",
  "LGJP138.mov": "/posters/solar-static.jpg",
  "Social 2.mov": "/posters/solar-loos.jpg",
  "LGM418": "/posters/mobi-12ft.jpg",
  "LGM308": "/posters/mobi-16ft.jpg",
  "LGM160": "/posters/mobi-16ft-plus.jpg",
  "LGM424": "/posters/mobi-20ft.jpg",
  "LGN1516": "/posters/mobi-20ft-plus.jpg",
  "LGMPO68": "/posters/mobi-24ft.jpg",
  "LGMP102": "/posters/mobi-24ft-twin.jpg",
};

const resolvePoster = (src: string, explicit?: string) => {
  if (explicit) return explicit;
  for (const [key, url] of Object.entries(POSTER_BY_VIDEO)) {
    if (src.includes(key)) return url;
  }
  return heroBg;
};

const HeroVideo = ({ src, poster, className = "" }: HeroVideoProps) => (
  <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}>
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={resolvePoster(src, poster)}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  </div>
);

export default HeroVideo;
