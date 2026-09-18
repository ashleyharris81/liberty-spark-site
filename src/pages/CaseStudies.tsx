import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import zndExterior from "@/assets/case-study-znd-exterior-1.jpg.asset.json";

const CaseStudies = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-secondary">
          Case Studies
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold uppercase text-primary md:text-5xl">
          Our Work In Action
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Real projects, real results. See how Liberty delivers practical,
          comfortable and premium accommodation for clients across the UK.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/case-studies/znd-uk"
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={zndExterior.url}
                alt="The finished modular office building at ZND UK"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))]/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading text-xs font-bold uppercase tracking-widest text-white">
                Modular Buildings
              </p>
            </div>
            <div className="p-6">
              <h2 className="font-heading text-xl font-bold uppercase text-primary group-hover:text-secondary">
                ZND Temporary Fence Solutions
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A 30m x 9.6m two-storey, 10-bay modular office building for the
                world's largest temporary fence manufacturer.
              </p>
              <span className="mt-4 inline-block font-heading text-sm font-bold uppercase tracking-wider text-secondary">
                Read the case study →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </main>
    <Contact />
    <Footer />
  </div>
);

export default CaseStudies;
