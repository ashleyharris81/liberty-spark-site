import { useEffect, useRef, useState } from "react";

interface VimeoEmbedProps {
  src: string;
  title?: string;
  className?: string;
}

const VimeoEmbed = ({ src, title = "Vimeo video", className = "" }: VimeoEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [iframeSize, setIframeSize] = useState({ width: "100%", height: "100%" });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      const { width, height } = container.getBoundingClientRect();
      const containerRatio = width / height;
      const videoRatio = 16 / 9;

      if (containerRatio > videoRatio) {
        // Container is wider than 16:9 — fill width, crop top/bottom
        setIframeSize({ width: "100%", height: `${width * 9 / 16}px` });
      } else {
        // Container is taller than 16:9 — fill height, crop left/right
        setIframeSize({ width: `${height * 16 / 9}px`, height: "100%" });
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: iframeSize.width, height: iframeSize.height }}
      />
    </div>
  );
};

export default VimeoEmbed;
