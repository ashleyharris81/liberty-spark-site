import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UKDepotMap from "@/components/UKDepotMap";
import { depots } from "@/data/depots";
import { publicDepotsByRegion, depotAreasServed } from "@/data/depotRegions";
import { BreadcrumbJsonLd, OrganizationAreaServedJsonLd } from "@/components/JsonLd";

const Depots = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BreadcrumbJsonLd items={[{ name: "Depots", path: "/depots" }]} />
      <OrganizationAreaServedJsonLd areas={depotAreasServed} />

      <section className="pt-20">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl font-black text-primary-foreground uppercase tracking-tight leading-tight">
              UK Depot <span className="text-secondary">Network</span>
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl leading-relaxed">
              Liberty Guard's head office is in Sandtoft, Doncaster. Nationwide delivery,
              servicing and collection of our welfare units and portable buildings are operated
              through a network of distribution partners across mainland UK and Wales, giving
              coverage from Aberdeen to Plymouth. Every hire, service visit and collection is
              coordinated centrally by our team on 0333 344 3833.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:03333443833"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors"
              >
                <Phone className="w-4 h-4" /> 0333 344 3833
              </a>
              <a
                href="mailto:sales@libertyguard.co.uk"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground font-heading font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-full hover:border-secondary hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" /> sales@libertyguard.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="mx-auto w-full max-w-[400px]">
            <UKDepotMap depots={depots} />
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">
            Depots by <span className="text-secondary">Region</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mt-4 mb-10" />

          <div className="space-y-12">
            {publicDepotsByRegion.map((group) => (
              <div key={group.region}>
                <h3 className="font-heading text-xl font-bold text-primary uppercase tracking-wider border-b border-border pb-3">
                  {group.region}
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {group.depots.map((depot) => (
                    <div key={depot.code} className="border border-border rounded-xl p-5">
                      <p className="font-heading text-base font-bold text-primary uppercase tracking-wider">
                        {depot.name}
                      </p>
                      <p className="text-primary/70 text-sm leading-relaxed mt-2">
                        {depot.location}
                      </p>
                      <p className="text-primary/60 text-sm mt-3">
                        Delivery and collection are handled from this location by our distribution
                        network. Enquiries and hire bookings via our central team on
                        0333 344 3833 or sales@libertyguard.co.uk.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Depots;
