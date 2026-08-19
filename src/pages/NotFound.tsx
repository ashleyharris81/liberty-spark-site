import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const popularPages = [
  { label: "Welfare", href: "/welfare" },
  { label: "Solar Solutions", href: "/solar" },
  { label: "Marketing Suites", href: "/marketing-suites" },
  { label: "Portable Buildings", href: "/portable-buildings" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <Navbar />

      <section className="flex-1 flex items-center justify-center min-h-[80vh] pt-20 pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative max-w-3xl mx-auto text-center">
            {/* Giant 404 background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
            >
              <span className="font-heading font-black text-secondary opacity-20 text-[10rem] md:text-[16rem] lg:text-[20rem] leading-none tracking-tighter">
                404
              </span>
            </div>

            {/* Foreground content */}
            <div className="relative z-10 py-16">
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground uppercase tracking-tight">
                Page Not <span className="text-secondary">Found</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
                Sorry, the page you're looking for doesn't exist or has been
                moved. It happens to the best of us - let's get you back on
                track.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block px-8 py-4 rounded-md bg-secondary text-secondary-foreground font-heading font-bold uppercase tracking-wider text-sm hover:bg-secondary/90 transition-colors"
                >
                  Back to Home
                </Link>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block px-8 py-4 rounded-md border-2 border-primary-foreground/30 text-primary-foreground font-heading font-bold uppercase tracking-wider text-sm hover:border-secondary hover:text-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-14">
                <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 font-heading font-semibold mb-4">
                  Popular Pages
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                  {popularPages.map((page) => (
                    <Link
                      key={page.href}
                      to={page.href}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-sm uppercase tracking-wider font-heading font-semibold text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
