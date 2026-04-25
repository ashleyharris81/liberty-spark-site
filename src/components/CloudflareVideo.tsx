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
  const src = `https://${CLOUDFLARE_SUBDOMAIN}/${uid}/iframe?${IFRAME_PARAMS}`;
  const iframeStyle =
    variant === "hero"
      ? {
          width: "max(100%, 177.78vh)",
          height: "max(100%, 56.25vw)",
          minWidth: "100%",
          minHeight: "100%",
        }
      : {
          width: "calc(100% + 6rem)",
          height: "calc(100% + 6rem)",
          minWidth: "100%",
          minHeight: "100%",
        };

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
          className={COVER_IFRAME_CLASS}
          style={iframeStyle}
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
        className={COVER_IFRAME_CLASS}
        style={iframeStyle}
      />
    </div>
  );
};

export default CloudflareVideo;
