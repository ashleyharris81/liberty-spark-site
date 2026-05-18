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

    // hls.js + MSE doesn't always honor the native `loop` attribute reliably.
    // Force a restart on `ended` so hero videos play continuously.
    const handleEnded = () => {
      try {
        video.currentTime = 0;
        void video.play();
      } catch {}
    };
    video.addEventListener("ended", handleEnded);

    let hls: Hls | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari
      video.src = manifest;
    } else if (Hls.isSupported()) {
      hls = new Hls({
        capLevelToPlayerSize: false,
        autoStartLoad: false, // wait until we set the highest level before loading any fragments
        startLevel: -1,
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
        backBufferLength: 30,
      });
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls!.loadSource(manifest);
      });
      hls.on(Hls.Events.MANIFEST_PARSED, (_e, data) => {
        // Force highest-quality rendition before any fragments are fetched
        const top = (data.levels?.length ?? hls!.levels.length) - 1;
        if (top >= 0) {
          hls!.startLevel = top;
          hls!.autoLevelCapping = top;
          hls!.nextLevel = top;
          hls!.currentLevel = top;
        }
        // Pre-buffer at top quality, then start playback
        hls!.startLoad(0);
        const tryPlay = () => {
          // Start once we have ~7s of high-quality buffer
          if (video.buffered.length && video.buffered.end(0) >= 7) {
            video.play().catch(() => {});
            video.removeEventListener("progress", tryPlay);
          }
        };
        video.addEventListener("progress", tryPlay);
        // Safety net: start after 9s regardless
        setTimeout(() => {
          video.play().catch(() => {});
          video.removeEventListener("progress", tryPlay);
        }, 9000);
      });
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
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
          className="absolute inset-0 w-full h-full object-cover"
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
