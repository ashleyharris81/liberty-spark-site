import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import mndaLogo from "@/assets/mnda/mnda-logo.png.asset.json";
import mndaWestminster from "@/assets/mnda/mnda-westminster.jpg.asset.json";
import mndaBrewery from "@/assets/mnda/mnda-brewery.jpg.asset.json";
import mndaMarathon from "@/assets/mnda/mnda-marathon.jpg.asset.json";
import mndaRebrand from "@/assets/mnda/mnda-rebrand.jpg.asset.json";
import mnda2026 from "@/assets/mnda/mnda-2026.jpg.asset.json";

type Milestone = {
  date: string;
  kicker: string;
  title: string;
  body: React.ReactNode;
  image: string;
  alt: string;
  reverse?: boolean;
  quote?: { text: string; cite: string };
};

const milestones: Milestone[] = [
  {
    date: "2021",
    kicker: "Where it began",
    title: "Our first donation",
    body: (
      <>
        <p>
          Back in September 2021 we made the decision to support the Motor Neurone
          Disease Association. This was an easy choice for us to make as the
          Association is extremely close to our hearts and forever will be. At Liberty
          we chose to support the Association in the only way we know how - with
          welfare! We chose a 12ft Mobi to be our dedicated charity unit and vowed each
          time this unit was out on hire, £125 per week would instantly go to the
          Association. We were delighted to send our first donation to the charity.
        </p>
      </>
    ),
    image: mndaBrewery.url,
    alt: "The original Liberty MND Association charity welfare unit at Don Valley Brewery",
  },
  {
    date: "May 2024",
    kicker: "Rob Burrow Leeds Marathon",
    title: "26 miles for MND",
    body: (
      <>
        <p>
          In May 2024 Beth Jones took part in the Rob Burrow Leeds Marathon to raise
          awareness and funds for the Association. As you can imagine, running a
          marathon takes a lot of preparation, hard work, dedication and great
          determination to run 26 miles. Beth says the huge support from her family
          gave her that extra push over the finish line.
        </p>
      </>
    ),
    image: mndaMarathon.url,
    alt: "Beth Jones with her Rob Burrow Leeds Marathon 2024 finisher's medal",
    reverse: true,
    quote: {
      text: "I took part in the marathon to raise funds and awareness for MND as my grandad lost his battle with the disease in 2010. The marathon was something else but honestly was so incredible! The atmosphere and support from people on the roadside is just next level... to then see my family on the last corner just gave me the extra boost I needed to get to the end!",
      cite: "Beth Jones",
    },
  },
  {
    date: "February 2026",
    kicker: "The Rebrand",
    title: "A new identity",
    body: (
      <>
        <p>
          In February 2026 the MND Association launched their rebrand, consisting of a
          new logo, brand colours and fonts. However, the rebrand for the Association
          was a lot more than just creating an image - it was about clearly portraying
          their story. The Association is passionate about aiding all people directly
          affected by the disease; they support their families and carers through the
          daily struggles and pressures too.
        </p>
        <p>
          At Liberty we fully supported this new brand identity by giving our 12ft Mobi
          unit a complete make-over. The old brand was removed, the unit was given a
          full respray in Liberty blue, the new MND Association logo was added and the
          very important "text to donate" information was added. We are over the moon
          with the final result.
        </p>
      </>
    ),
    image: mndaRebrand.url,
    alt: "The rebranded Liberty 12ft Mobi charity unit in Liberty blue with the new MND Association logo",
  },
  {
    date: "September 2026",
    kicker: "Still going strong",
    title: "£27,000 and counting",
    body: (
      <>
        <p>
          To bring us up to date, we continue to have our 12ft Mobi unit out on hire. We
          aim to have this unit fully utilised all year round, to fully maximise the
          donation amount for the MND Association. We will continue to donate £125 of
          the hire rate per week to the charity. To date we have donated £27,000 to the
          Association, and we shall go on raising money for the charity year after year.
        </p>
      </>
    ),
    image: mnda2026.url,
    alt: "The Liberty MND Association charity welfare unit on hire",
    reverse: true,
  },
];

const MndaPartnership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${mndaWestminster.url})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" aria-hidden="true" />
        <div className="relative container mx-auto px-4 lg:px-8 py-24 md:py-36">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-10 transition-colors"
          >
            ← Back to Home
          </Link>
          <div className="max-w-2xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-8">
              <img
                src={mndaLogo.url}
                alt="MND Association logo"
                className="h-16 w-auto"
              />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-[1.05]">
              MND Association
              <br />
              <span className="text-secondary">Partnership</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Liberty's ongoing commitment to the Motor Neurone Disease Association -
              supporting families affected by MND through our dedicated charity welfare unit.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Our story so far
          </p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary uppercase tracking-wide leading-snug">
            Five years of giving back
          </h2>
        </div>
      </section>

      {/* Timeline rail */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="relative">
            {/* vertical rail */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" aria-hidden="true" />

            <div className="space-y-20 md:space-y-28">
              {milestones.map((m, i) => (
                <div key={m.date} className="relative">
                  {/* milestone dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10 hidden md:block">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary ring-4 ring-background">
                      <span className="h-2 w-2 rounded-full bg-secondary-foreground" />
                    </span>
                  </div>

                  <div
                    className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                      m.reverse ? "md:[direction:rtl]" : ""
                    }`}
                  >
                    {/* text */}
                    <div className={`pl-12 md:pl-0 md:[direction:ltr] ${m.reverse ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-[0.15em]">
                        {m.date}
                      </span>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide mt-1 mb-4">
                        {m.title}
                      </h3>
                      <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground mb-4">
                        {m.kicker}
                      </p>
                      <div className="prose-news text-muted-foreground">{m.body}</div>
                      {m.quote && (
                        <blockquote className={`mt-6 border-l-4 border-secondary pl-4 ${m.reverse ? "md:ml-auto md:border-r-4 md:border-l-0 md:pl-0 md:pr-4 md:text-left" : ""}`}>
                          <p className="italic text-foreground/80 mb-2">{m.quote.text}</p>
                          <footer className="font-heading font-semibold text-secondary text-sm uppercase tracking-wider not-italic">
                            - {m.quote.cite}
                          </footer>
                        </blockquote>
                      )}
                    </div>

                    {/* image */}
                    <div className={`pl-12 md:pl-0 md:[direction:ltr] ${m.reverse ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
                        <img
                          src={m.image}
                          alt={m.alt}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -mr-24 -mt-24" aria-hidden="true" />
        <div className="relative container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Make a difference
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground uppercase tracking-tight mb-6">
            How to Donate
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            If you would like to financially support the MND Association too, it's really
            simple to make a one-off donation.
          </p>

          {/* text-to-donate card */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 md:p-10 mb-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <span className="font-heading text-base font-bold uppercase tracking-wider text-primary-foreground/70">
                Text
              </span>
              <span className="inline-block bg-secondary text-secondary-foreground font-heading text-2xl font-black px-6 py-3 rounded-lg uppercase tracking-widest">
                MNDASSOC
              </span>
              <span className="font-heading text-base font-bold uppercase tracking-wider text-primary-foreground/70">
                to
              </span>
              <span className="inline-block bg-secondary text-secondary-foreground font-heading text-2xl font-black px-6 py-3 rounded-lg tracking-widest">
                70085
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              To donate £5. Text cost £5 plus one standard rate message.
            </p>
          </div>

          <a
            href="https://www.mndassociation.org/get-involved/donate-mnd-association-today"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-secondary-foreground font-heading font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Set up a monthly donation →
          </a>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default MndaPartnership;
