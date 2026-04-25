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
    const heroWrapperStyle: CSSProperties = {
      pointerEvents: "none",
    };
    const heroIframeStyle: CSSProperties = {
      pointerEvents: "none",
      border: "none",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      // Cover behaviour for a 16:9 iframe: size it to be at least as
      // large as the container in both dimensions while preserving 16:9.
      width: "max(100%, calc(var(--cf-h, 100%) * 16 / 9))",
      height: "max(100%, calc(var(--cf-w, 100%) * 9 / 16))",
      minWidth: "100%",
      minHeight: "100%",
      aspectRatio: "16 / 9",
    };
    return (
      <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`} style={heroWrapperStyle}>
        <iframe
          src={src}
          title="Background video"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          loading="eager"
          style={heroIframeStyle}
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
