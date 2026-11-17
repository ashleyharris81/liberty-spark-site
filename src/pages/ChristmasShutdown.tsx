import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, Clock, Phone } from "lucide-react";

const ChristmasShutdown = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24">
      <header className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-secondary font-heading uppercase text-sm mb-4">Customer notice</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase leading-tight max-w-4xl">
            Christmas/New Year<br />Shutdown <span className="text-secondary">2026 - 2027</span>
          </h1>
          <p className="mt-6 text-lg max-w-3xl text-primary-foreground/80">
            Information for our valued customers on off-hire, collection, servicing and suspension of hire over the festive period.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl border-t border-primary-foreground/20 pt-6">
            <div className="flex gap-3">
              <CalendarDays className="h-6 w-6 shrink-0 text-secondary" aria-hidden="true" />
              <div><p className="font-semibold">Offices close</p><p>2pm, Wednesday 23 December 2026</p></div>
            </div>
            <div className="flex gap-3">
              <Clock className="h-6 w-6 shrink-0 text-secondary" aria-hidden="true" />
              <div><p className="font-semibold">Offices reopen</p><p>8.30am, Monday 4 January 2027</p></div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16 grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-12 lg:gap-16">
        <article className="min-w-0 space-y-9 text-lg leading-relaxed">
          <div>
            <p className="font-semibold text-primary mb-3">To all our valued customers,</p>
            <p>We would like to inform you of our Christmas/New Year policies for off-hire, collection and suspension of hire. These policies will be effective from Wednesday 23 December 2026 to Monday 4 January 2027.</p>
          </div>
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">No Suspension of Hires</h2>
            <p>During our Christmas shutdown period, hires will not be suspended, and no credits will be issued. This is in keeping with our Terms &amp; Conditions Policy and aligns with industry standards for welfare facility requirements in the construction industry.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">Off-Hire Policy</h2>
            <p>If you require to off-hire a welfare unit before our Christmas shutdown period, please contact us <strong className="font-semibold">before 2pm on Monday 7 December 2026</strong>. If you request an off-hire after this date, we will endeavour to collect your welfare as soon as possible; however, we cannot guarantee collection before our Christmas shutdown period.</p>
            <p className="mt-4">Please note, to off-hire a marketing suite, the deadline date is <strong className="font-semibold">Monday 16 November 2026</strong>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">Standard Collection Charges</h2>
            <p>All products that are hired from Liberty Group during our Christmas shutdown period remain the sole responsibility of the hirer, for insurance and safekeeping purposes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">Servicing</h2>
            <p>Our routine servicing shall be paused from Wednesday 23 December 2026 to Monday 4 January 2027 to save any unnecessary trips and to reduce wastage. Should you wish to book a service or fuel prior to the shutdown, please contact our toilet service department.</p>
            <a href="mailto:toiletservice@libertyguard.co.uk" className="inline-block mt-3 text-primary underline decoration-secondary underline-offset-4 break-all">toiletservice@libertyguard.co.uk</a>
          </section>
          <div className="border-t border-border pt-8">
            <p>From all the team here at Liberty, we would like to say a huge thank you for your continued support throughout 2026, and we greatly look forward to another successful year in 2027.</p>
            <p className="mt-4 font-heading font-semibold text-primary">The Liberty Team</p>
          </div>
        </article>

        <aside className="min-w-0 lg:border-l border-border lg:pl-8 space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-semibold text-primary mb-4">Emergency Support</h2>
            <p className="text-lg leading-relaxed">A limited number of engineers will be on call to assist with urgent matters between <strong className="font-semibold">9am and 5pm</strong> over our Christmas shutdown period, excluding Christmas Day and New Year's Day.</p>
            <p className="mt-4 text-lg">If you require emergency support within these hours, please contact:</p>
            <a href="tel:07833771281" className="inline-flex items-center gap-3 mt-4 text-2xl font-heading font-semibold text-primary underline decoration-secondary underline-offset-4">
              <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />07833 771281
            </a>
          </section>
          <section className="border-t border-border pt-6">
            <h2 className="font-heading text-xl font-semibold text-primary mb-4">Festive Call-Out Charges</h2>
            <dl className="divide-y divide-border">
              <div className="py-3 flex justify-between gap-4"><dt>Call-out</dt><dd className="font-semibold">£165.00</dd></div>
              <div className="py-3 flex justify-between gap-4"><dt>Hourly rate</dt><dd className="font-semibold">£75.00</dd></div>
              <div className="py-3 flex justify-between gap-4"><dt>Minimum hours</dt><dd className="font-semibold">4 hours</dd></div>
              <div className="py-3 flex justify-between gap-4"><dt>Travel</dt><dd className="font-semibold">£0.85ppm</dd></div>
            </dl>
            <p className="mt-3 text-muted-foreground">Plus materials.</p>
          </section>
        </aside>
      </div>
    </main>
    <Footer />
  </div>
);

export default ChristmasShutdown;