import { CSSProperties } from "react";

interface CloudflareVideoProps {
  uid: string;
  variant?: "hero" | "card";
  className?: string;
}

const CLOUDFLARE_SUBDOMAIN = "customer-p8mic15ze1rkgi3y.cloudflarestream.com";
const IFRAME_PARAMS =
  "autoplay=true&loop=true&muted=true&controls=false&preload=auto";

const CloudflareVideo = ({
  uid,
  variant = "card",
  className = "",
}: CloudflareVideoProps) => {
  const src = `https://${CLOUDFLARE_SUBDOMAIN}/${uid}/iframe?${IFRAME_PARAMS}`;

  if (variant === "hero") {
    return (
      <div
        className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      >
        <iframe
          src={src}
          title="Background video"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          loading="eager"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0"
          style={{
            // Cover the container with a 16:9 video. Whichever dimension is
            // larger (width vs height * 16/9) wins, scaling the other up.
            width: "max(100%, 177.78vh)",
            height: "max(100%, 56.25vw)",
            minWidth: "100%",
            minHeight: "100%",
          }}
        />
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: "16 / 9" }}>
      <iframe
        src={src}
        title="Video"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        loading="lazy"
        style={{ border: "none" }}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default CloudflareVideo;
