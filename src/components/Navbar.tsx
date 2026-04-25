import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/liberty-white-logo.png";

const navLinks = [
  { label: "MOBILE", href: "/mobile-welfare", isRoute: true },
  { label: "STATIC", href: "/static-welfare", isRoute: true },
  { label: "SOLAR", href: "/solar", isRoute: true },
  { label: "SOLAR LOO", href: "/solar-loos", isRoute: true },
  { label: "HYBRID", href: "/mobile-welfare#hybrid-range", isRoute: true },
  { label: "MARKETING SUITES", href: "/marketing-suites", isRoute: true },
  { label: "PORTABLE BUILDINGS", href: "/portable-buildings", isRoute: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.includes("#")) {
      e.preventDefault();
      const [path, hash] = href.split("#");
      const scrollToHash = () => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      if (location.pathname === path) {
        scrollToHash();
      } else {
        navigate(path);
        setTimeout(scrollToHash, 250);
      }
      setIsOpen(false);
      return;
    }
    window.scrollTo(0, 0);
    setIsOpen(false);
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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-primary-foreground/80 hover:text-secondary font-heading text-sm font-semibold tracking-wider transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-primary-foreground/80 hover:text-secondary font-heading text-sm font-semibold tracking-wider transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
