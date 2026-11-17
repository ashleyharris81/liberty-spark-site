import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { articles } from "@/data/newsArticles";
import { CalendarClock, PhoneCall, PoundSterling, Ban, Truck, Wrench } from "lucide-react";

const keyDates = [
  { label: "Offices close", value: "2pm, Wed 23 Dec 2026" },
  { label: "Offices reopen", value: "8.30am, Mon 4 Jan 2027" },
  { label: "Welfare off-hire deadline", value: "2pm, Mon 7 Dec 2026" },
  { label: "Marketing suite off-hire deadline", value: "Mon 16 Nov 2026" },
];

const sectionHeading = "font-heading text-xl md:text-2xl font-bold text-primary uppercase tracking-wide mb-4 flex items-center gap-3";
const sectionIcon = "h-6 w-6 text-secondary flex-shrink-0";

const ChristmasShutdown = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <header className="relative pt-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
          <Link to="/news" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground font-heading text-sm uppercase tracking-wider mb-6">
            ← Back to News
          </Link>
          <p className="text-xs uppercase tracking-wider text-secondary font-heading font-semibold mb-4">Customer notice</p>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground uppercase leading-tight max-w-4xl">
            Christmas/New Year Shutdown 2026 - 2027
          </h1>
        </div>
      </header>

      <div className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
            <aside className="lg:w-64 lg:flex-shrink-0 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <h2 className="font-heading text-sm uppercase tracking-wider text-secondary font-bold mb-4 pb-3 border-b border-border">More News</h2>
                <nav className="flex flex-col gap-1" aria-label="More news">
                  {articles.map((article) => (
                    <Link key={article.slug} to={`/news/${article.slug}`} onClick={() => window.scrollTo(0, 0)} className="block px-3 py-2 rounded-lg text-sm leading-snug transition-colors text-muted-foreground hover:text-foreground hover:bg-muted">
                      <span className="block text-[10px] uppercase tracking-wider opacity-70 mb-0.5">{article.date}</span>
                      {article.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="flex-1 order-1 lg:order-2 min-w-0 space-y-10 text-foreground text-base md:text-lg leading-relaxed">
              <div>
                <p className="font-semibold text-primary mb-3">To all our valued customers,</p>
                <p>We would like to inform you of our Christmas/New Year policies for off-hire, collection and suspension of hire. These policies will be effective from Wednesday 23 December 2026 to Monday 4 January 2027.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {keyDates.map((item) => (
                  <div key={item.label} className="rounded-xl border border-border bg-muted/40 p-5">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-heading font-semibold mb-1">{item.label}</p>
                    <p className="font-heading font-bold text-primary text-lg">{item.value}</p>
                  </div>
                ))}
              </div>

              <section className="rounded-xl border-l-4 border-secondary bg-muted/40 p-6 md:p-8">
                <h2 className={sectionHeading}><PhoneCall className={sectionIcon} />Emergency Support</h2>
                <p>A limited number of engineers will be on call to assist with urgent matters between <strong className="font-semibold">9am and 5pm</strong> over our Christmas shutdown period, excluding Christmas Day and New Year's Day.</p>
                <p className="mt-4">If you require emergency support within these hours, please contact <a href="tel:07833771281" className="font-semibold text-primary underline decoration-secondary underline-offset-4 whitespace-nowrap">07833 771281</a>.</p>
              </section>

              <section>
                <h2 className={sectionHeading}><PoundSterling className={sectionIcon} />Festive Call-Out Charges</h2>
                <ul className="grid sm:grid-cols-3 gap-3 list-none pl-0">
                  <li className="rounded-lg border border-border p-4 text-center"><span className="block font-heading font-bold text-primary text-xl">£165.00</span><span className="text-sm text-muted-foreground">call-out</span></li>
                  <li className="rounded-lg border border-border p-4 text-center"><span className="block font-heading font-bold text-primary text-xl">£75.00</span><span className="text-sm text-muted-foreground">per hour - minimum 4 hours</span></li>
                  <li className="rounded-lg border border-border p-4 text-center"><span className="block font-heading font-bold text-primary text-xl">£0.85ppm</span><span className="text-sm text-muted-foreground">+ materials</span></li>
                </ul>
              </section>

              <section>
                <h2 className={sectionHeading}><Ban className={sectionIcon} />No Suspension of Hires</h2>
                <p>During our Christmas shutdown period, hires will not be suspended, and no credits will be issued. This is in keeping with our Terms &amp; Conditions Policy and aligns with industry standards for welfare facility requirements in the construction industry.</p>
              </section>

              <section>
                <h2 className={sectionHeading}><Truck className={sectionIcon} />Off-Hire Policy</h2>
                <p>If you require to off-hire a welfare unit before our Christmas shutdown period, please contact us <strong className="font-semibold">before 2pm on Monday 7 December 2026</strong>. If you request an off-hire after this date, we will endeavour to collect your welfare as soon as possible; however, we cannot guarantee collection before our Christmas shutdown period.</p>
                <p className="mt-4">Please note, to off-hire a marketing suite, the deadline date is <strong className="font-semibold">Monday 16 November 2026</strong>.</p>
              </section>

              <section>
                <h2 className={sectionHeading}><CalendarClock className={sectionIcon} />Standard Collection Charges</h2>
                <p>All products that are hired from Liberty Group during our Christmas shutdown period remain the sole responsibility of the hirer, for insurance and safekeeping purposes.</p>
              </section>

              <section>
                <h2 className={sectionHeading}><Wrench className={sectionIcon} />Servicing</h2>
                <p>Our routine servicing shall be paused from Wednesday 23 December 2026 to Monday 4 January 2027 to save any unnecessary trips and to reduce wastage. Should you wish to book a service or fuel prior to the shutdown, please contact our toilet service department.</p>
                <a href="mailto:toiletservice@libertyguard.co.uk" className="inline-block mt-3 text-primary underline decoration-secondary underline-offset-4 break-all">toiletservice@libertyguard.co.uk</a>
              </section>

              <div className="rounded-xl bg-primary p-6 md:p-8 text-primary-foreground">
                <p>From all the team here at Liberty, we would like to say a huge thank you for your continued support throughout 2026, and we greatly look forward to another successful year in 2027.</p>
                <p className="mt-4 font-heading font-semibold text-secondary uppercase tracking-wide">The Liberty Team</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
    <Contact />
    <Footer />
  </div>
);

export default ChristmasShutdown;
