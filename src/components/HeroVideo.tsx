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
  "modularbuild.mp4": "/posters/modular-buildings.jpg",
  "ZND%20Modular%20Build%20(website).mp4": "/posters/modular-build.jpg",
  "newhybrid16ftmobiv2.mp4": "/posters/mobi-16ft-hybrid.jpg",
  "socialslandscapenottingham.mov": "/posters/portable-accommodation.jpg",
  "Socials%20Landscape%20Nottingham%202.mov": "/posters/portable-buildings.jpg",
  "Socials Landscape Nottingham 2.mov": "/posters/portable-buildings.jpg",
  "nottinghambluecabin.mov": "/posters/portable-accommodation.jpg",
};

const resolvePoster = (src: string, explicit?: string) => {
  if (explicit) return explicit;
  for (const [key, url] of Object.entries(POSTER_BY_VIDEO)) {
    if (src.includes(key)) return url;
  }
  return undefined;
};

const HeroVideo = ({ src, poster, className = "" }: HeroVideoProps) => {
  const resolvedPoster = resolvePoster(src, poster);
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={resolvedPoster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVideo;
