import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface CloudflareVideoProps {
  uid: string;
  variant?: "hero" | "card";
  className?: string;
}

const CLOUDFLARE_SUBDOMAIN = "customer-p8mic15ze1rkgi3y.cloudflarestream.com";
const IFRAME_PARAMS =
  "autoplay=true&loop=true&muted=true&controls=false&preload=auto";
const COVER_IFRAME_CLASS =
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0";

const CloudflareVideo = ({
  uid,
  variant = "card",
  className = "",
}: CloudflareVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const manifest = `https://${CLOUDFLARE_SUBDOMAIN}/${uid}/manifest/video.m3u8`;
  const poster = `https://${CLOUDFLARE_SUBDOMAIN}/${uid}/thumbnails/thumbnail.jpg?height=1080`;

  useEffect(() => {
    if (variant !== "hero") return;
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari
      video.src = manifest;
    } else if (Hls.isSupported()) {
      hls = new Hls({ capLevelToPlayerSize: false, autoStartLoad: true });
      hls.loadSource(manifest);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // Pick the highest-quality rendition
        if (hls && hls.levels.length > 0) {
          hls.currentLevel = hls.levels.length - 1;
        }
      });
    }

    video.play().catch(() => {});

    return () => {
      if (hls) hls.destroy();
    };
  }, [manifest, variant]);

  if (variant === "hero") {
    return (
      <div
        className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
          style={{
            width: "max(100%, 177.78vh)",
            height: "max(100%, 56.25vw)",
          }}
        />
      </div>
    );
  }

  const src = `https://${CLOUDFLARE_SUBDOMAIN}/${uid}/iframe?${IFRAME_PARAMS}`;
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: "16 / 9" }}>
      <iframe
        src={src}
        title="Video"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        loading="lazy"
        className={COVER_IFRAME_CLASS}
        style={{
          width: "calc(100% + 6rem)",
          height: "calc(100% + 6rem)",
          minWidth: "100%",
          minHeight: "100%",
        }}
      />
    </div>
  );
};

export default CloudflareVideo;
