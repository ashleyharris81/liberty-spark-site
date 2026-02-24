import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/liberty-guard-logo.png";

const navLinks = [
  { label: "WELFARE", href: "#services", isRoute: false },
  { label: "SOLAR", href: "#solar", isRoute: false },
  { label: "MARKETING SUITES", href: "/marketing-suites", isRoute: true },
  { label: "PORTABLE BUILDINGS", href: "#services", isRoute: false },
  { label: "CONTACT", href: "#contact", isRoute: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getHref = (link: typeof navLinks[0]) => {
    if (link.isRoute) return link.href;
    // If not on home page, anchor links should go to home page first
    if (!isHome) return `/${link.href}`;
    return link.href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Liberty Guard" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-secondary font-heading text-sm font-semibold tracking-wider transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={getHref(link)}
                  className="text-primary-foreground/80 hover:text-secondary font-heading text-sm font-semibold tracking-wider transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-primary-foreground/80 hover:text-secondary font-heading text-sm font-semibold tracking-wider transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={getHref(link)}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-primary-foreground/80 hover:text-secondary font-heading text-sm font-semibold tracking-wider transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
