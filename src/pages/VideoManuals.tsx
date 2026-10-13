import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { videoManualGroups } from "@/data/videoManuals";

const VideoManuals = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-20">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-14 lg:px-8 lg:py-20">
          <p className="mb-3 font-heading text-sm font-bold uppercase text-secondary">Mobile Welfare · 2026</p>
          <h1 className="font-heading text-4xl font-bold uppercase md:text-5xl">Video Manuals</h1>
        </div>
      </header>
      <div className="container mx-auto space-y-14 px-4 py-12 lg:px-8 lg:py-16">
        {videoManualGroups.map((group) => (
          <section key={group.title} aria-label={group.title}>
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-4">
              <h2 className="font-heading text-2xl font-bold uppercase text-foreground">{group.title}</h2>
              <span className="text-sm text-muted-foreground">{group.manuals.length} videos</span>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.manuals.map((manual) => (
                <article key={manual.video} className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground">
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={manual.poster}
                    aria-label={manual.title}
                    className="aspect-video w-full bg-primary object-contain"
                    onPlay={(event) => {
                      const current = event.currentTarget;
                      current.closest("main")?.querySelectorAll("video").forEach((video) => {
                        if (video !== current) video.pause();
                      });
                    }}
                  >
                    <source src={manual.video} type="video/mp4" />
                    <a href={manual.video}>Open {manual.title}</a>
                  </video>
                  <div className="flex min-h-24 items-start justify-between gap-4 p-5">
                    <h3 className="font-heading text-base font-bold">{manual.title}</h3>
                    <span className="shrink-0 text-sm tabular-nums text-muted-foreground">{manual.duration}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default VideoManuals;