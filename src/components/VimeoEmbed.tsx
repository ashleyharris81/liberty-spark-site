interface VimeoEmbedProps {
  src: string;
  title?: string;
  className?: string;
}

const VimeoEmbed = ({ src, title = "Vimeo video", className = "" }: VimeoEmbedProps) => (
  <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}>
    <iframe
      src={src}
      title={title}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
);

export default VimeoEmbed;
