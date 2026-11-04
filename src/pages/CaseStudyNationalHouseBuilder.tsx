import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import hero from "@/assets/case-study-national-house-builder-exterior-front.jpg.asset.json";
import openPlan from "@/assets/case-study-national-house-builder-open-plan.jpg.asset.json";
import dryRoom from "@/assets/case-study-national-house-builder-dry-room.jpg.asset.json";
import staircase from "@/assets/case-study-national-house-builder-staircase.jpg.asset.json";
import exteriorSide from "@/assets/case-study-national-house-builder-exterior-side.jpg.asset.json";
import exterior from "@/assets/case-study-national-house-builder-exterior.jpg.asset.json";

const stats = [
  { label: "Building size", value: "61m x 30m" },
  { label: "Configuration", value: "12 Bay, Two-Storey" },
  { label: "Offices", value: "5" },
  { label: "Large open-plan canteen", value: "1" },
  { label: "Dry room", value: "1" },
  { label: "Toilets", value: "3" },
];

const gallery = [
  { image: openPlan, caption: "Open-plan interior", alt: "Spacious modular building interior with windows and wall-mounted heaters" },
  { image: dryRoom, caption: "Dry room", alt: "Dry room with wooden benches, coat hooks and heating" },
  { image: staircase, caption: "External staircase", alt: "Steel staircase with yellow safety treads alongside the blue modular building" },
  { image: exteriorSide, caption: "Two-storey accommodation", alt: "Side view of the two-storey blue modular building with external stairs" },
];

const CaseStudyNationalHouseBuilder = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <header className="relative overflow-hidden bg-primary">
      <img src={hero.url} alt="Completed blue two-storey modular building for a national house builder" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-12 pt-64 md:flex-row md:items-end md:justify-between md:pb-14 md:pt-[420px]">
        <div className="min-w-0 md:max-w-xl">
          <Button asChild variant="link" className="h-auto p-0 font-heading text-sm font-bold uppercase text-secondary hover:text-primary-foreground">
            <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)}>← Back to case studies</Link>
          </Button>
          <h1 className="mt-3 font-heading text-3xl font-bold uppercase text-primary-foreground sm:text-4xl md:text-5xl">Modular Build for a National House Builder</h1>
        </div>
        <dl className="grid w-full shrink-0 grid-cols-2 gap-x-6 gap-y-5 border-t border-primary-foreground/30 pt-6 md:w-80">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-xs font-bold uppercase text-secondary">{stat.label}</dt>
              <dd className="mt-1 font-heading text-sm font-bold text-primary-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
    <main className="pb-16">
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="font-heading text-3xl font-bold uppercase text-primary">The Project</h2>
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">From the beginning of this project the customer was very clear on exactly what build they wanted and they knew precisely how they wanted it executing. On this build the customer sent through their own CAD drawings of exact measurements, external and internal layouts. Each aspect of the CAD drawing was clearly detailed from every sink to each light switch. It was apparent from the very beginning the customer had a clear vision in mind and it was our job to bring this vision into a reality.</p>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-12">
        <h2 className="font-heading text-3xl font-bold uppercase text-primary">The Brief</h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/80">
          <p>Our task was to manufacture a 12 bay, two storey modular build with UPVC windows, UPVC doors, steel security shutters and two staircases running down each side. For the internal layout the customer required separate rooms with an office layout, sufficient toilet facilities, a dry room and an extra-large open plan canteen space.</p>
          <p>With a very specific brief given by the customer, we were able to begin this project immediately, once all building regulations and compliance standards were met, we were able to begin manufacture.</p>
        </div>
      </section>
      <section aria-label="Completed project photographs" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {gallery.map(({ image, caption, alt }) => (
            <figure key={caption}>
              <img src={image.url} alt={alt} loading="lazy" className="aspect-[3/4] w-full rounded-lg object-cover" />
              <figcaption className="mt-3 font-heading text-sm font-bold uppercase text-muted-foreground">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-12">
        <h2 className="font-heading text-3xl font-bold uppercase text-primary">In Conclusion</h2>
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">The final build was a great success and we fully delivered on the brief. The customer was pleased with the final result and praised the team on delivering exactly what they had envisioned. To date this house builder has had many projects from us, similar in configuration to this project and they will continue to use Liberty for their upcoming builds.</p>
      </section>
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <img src={exterior.url} alt="Finished two-storey modular accommodation with UPVC windows and steel security shutters" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
      </div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase">Need space like this for your team?</h2>
          <p className="max-w-xl text-lg text-primary-foreground/80">Talk to our modular buildings team about a bespoke solution for your site.</p>
          <Button asChild variant="secondary" size="lg" className="font-heading font-bold uppercase">
            <a href="mailto:sales@libertyguard.co.uk">Email the team</a>
          </Button>
        </div>
      </section>
    </main>
    <Contact />
    <Footer />
  </div>
);

export default CaseStudyNationalHouseBuilder;