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

/**
 * Hidden MND Association partnership page.
 * Not linked in the nav, noindex, excluded from sitemap/prerender.
 * Reachable only via the direct link /mnda.
 */
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" aria-hidden="true" />
        <div className="relative container mx-auto px-4 lg:px-8 py-24 md:py-32">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          <div className="max-w-xs mb-8">
            <img
              src={mndaLogo.url}
              alt="MND Association logo"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight">
            MND Association <span className="text-secondary">Partnership</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            Liberty's ongoing commitment to the Motor Neurone Disease Association —
            supporting families affected by MND through our dedicated charity welfare unit.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <article className="max-w-4xl mx-auto prose-news">

            {/* 2021 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
                  2021
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide mb-4">
                  Where it began
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Back in September 2021 we made the decision to support the Motor Neurone
                  Disease Association. This was an easy choice for us to make as the
                  Association is extremely close to our hearts and forever will be. At Liberty
                  we chose to support the Association in the only way we know how — with
                  welfare! We chose a 12ft Mobi to be our dedicated charity unit and vowed each
                  time this unit was out on hire, £125 per week would instantly go to the
                  Association. We were delighted to send our first donation to the charity.
                </p>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl border border-border shadow-lg">
                <img
                  src={mndaBrewery.url}
                  alt="The original Liberty MND Association charity welfare unit at Don Valley Brewery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Rob Burrow Leeds Marathon 2024 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
              <div className="md:order-2">
                <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
                  May 2024
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide mb-4">
                  Rob Burrow Leeds Marathon
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In May 2024 Beth Jones took part in the Rob Burrow Leeds Marathon to raise
                  awareness and funds for the Association. As you can imagine, running a
                  marathon takes a lot of preparation, hard work, dedication and great
                  determination to run 26 miles. Beth says the huge support from her family
                  gave her that extra push over the finish line.
                </p>
                <blockquote className="border-l-4 border-secondary pl-4 italic text-foreground/80">
                  <p className="mb-2">
                    "I took part in the marathon to raise funds and awareness for MND as my
                    grandad lost his battle with the disease in 2010.
                  </p>
                  <p>
                    The marathon was something else but honestly was so incredible!!! The
                    atmosphere and support from people on the roadside is just next level... to
                    then see my family on the last corner just gave me the extra boost I needed
                    to get to the end!"
                  </p>
                  <footer className="mt-3 not-italic font-heading font-semibold text-secondary text-sm uppercase tracking-wider">
                    — Beth Jones
                  </footer>
                </blockquote>
              </div>
              <div className="md:order-1 aspect-[3/4] overflow-hidden rounded-xl border border-border shadow-lg max-w-sm mx-auto">
                <img
                  src={mndaMarathon.url}
                  alt="Beth Jones with her Rob Burrow Leeds Marathon 2024 finisher's medal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* The Rebrand */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
                  February 2026
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide mb-4">
                  The Rebrand
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In February 2026 the MND Association launched their rebrand, consisting of a
                  new logo, brand colours and fonts. However, the rebrand for the Association
                  was a lot more than just creating an image — it was about clearly portraying
                  their story. The Association is passionate about aiding all people directly
                  affected by the disease; they support their families and carers through the
                  daily struggles and pressures too.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  At Liberty we fully supported this new brand identity by giving our 12ft Mobi
                  unit a complete make-over. The old brand was removed, the unit was given a
                  full respray in Liberty blue, the new MND Association logo was added and the
                  very important "text to donate" information was added. We are over the moon
                  with the final result.
                </p>
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-xl border border-border shadow-lg max-w-sm mx-auto">
                <img
                  src={mndaRebrand.url}
                  alt="The rebranded Liberty 12ft Mobi charity unit in Liberty blue with the new MND Association logo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* September 2026 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
              <div className="md:order-2">
                <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
                  September 2026
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide mb-4">
                  Still going strong
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To bring us up to date, we continue to have our 12ft Mobi unit out on hire. We
                  aim to have this unit fully utilised all year round, to fully maximise the
                  donation amount for the MND Association. We will continue to donate £125 of
                  the hire rate per week to the charity. To date we have donated £27,000 to the
                  Association, and we shall go on raising money for the charity year after year.
                </p>
              </div>
              <div className="md:order-1 aspect-[3/4] overflow-hidden rounded-xl border border-border shadow-lg max-w-sm mx-auto">
                <img
                  src={mnda2026.url}
                  alt="The Liberty MND Association charity welfare unit on hire"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* How To Donate */}
            <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-wide mb-4">
                How to Donate
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                If you would like to financially support the MND Association too, it's really
                simple to make a one-off donation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <span className="font-heading text-lg font-bold uppercase tracking-wider">
                  Text
                </span>
                <span className="inline-block bg-secondary text-secondary-foreground font-heading text-2xl font-black px-6 py-3 rounded-lg uppercase tracking-widest">
                  MNDASSOC
                </span>
                <span className="font-heading text-lg font-bold uppercase tracking-wider">to</span>
                <span className="inline-block bg-secondary text-secondary-foreground font-heading text-2xl font-black px-6 py-3 rounded-lg tracking-widest">
                  70085
                </span>
              </div>
              <p className="text-primary-foreground/70 text-sm mb-8">
                To donate £5. Text cost £5 plus one standard rate message.
              </p>
              <a
                href="https://www.mndassociation.org/get-involved/donate-mnd-association-today"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-secondary-foreground font-heading font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Set up a monthly donation →
              </a>
            </div>
          </article>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default MndaPartnership;
