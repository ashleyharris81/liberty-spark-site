import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "lg-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[60] bg-primary border-t-2 border-secondary shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.5)]"
    >
      <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-primary-foreground text-sm leading-relaxed flex-1">

          We use essential cookies to make our site work. With your consent we also use
          analytics and marketing cookies to improve our website. See our{" "}
          <Link
            to="/privacy-policy"
            onClick={() => window.scrollTo(0, 0)}
            className="text-secondary hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => decide("rejected")}
            className="px-5 py-2.5 border border-primary-foreground/30 text-primary-foreground font-heading text-xs font-bold uppercase tracking-wider hover:border-secondary hover:text-secondary transition-colors"
          >
            Reject non-essential
          </button>
          <button
            onClick={() => decide("accepted")}
            className="px-5 py-2.5 bg-secondary text-secondary-foreground font-heading text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
