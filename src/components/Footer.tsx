import { Link } from "react-router-dom";
import logo from "@/assets/liberty-logo-white.png";
import risqs from "@/assets/accreditations/risqs.png";
import constructionline from "@/assets/accreditations/constructionline.png";
import ssip from "@/assets/accreditations/ssip.jpg";
import safecontractor from "@/assets/accreditations/safecontractor.jpeg";
import iso9001 from "@/assets/accreditations/iso9001.jpg";
import chas from "@/assets/accreditations/chas.png";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact" },
  { label: "Open New Account", href: "/new-account" },
  { label: "eBay Shop", href: "https://www.ebay.co.uk/str/libertyguardukltd", external: true },
];

const accreditations = [
  { src: chas, alt: "CHAS Accreditation Advanced" },
  { src: constructionline, alt: "Constructionline Gold Member" },
  { src: ssip, alt: "SSIP Accredited" },
  { src: safecontractor, alt: "SafeContractor SafePQQ Verified" },
  { src: iso9001, alt: "NQA ISO 9001 Quality Management" },
  { src: risqs, alt: "RISQS Verified" },
];

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-navy-light py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="flex flex-col gap-4">
            <img src={logo} alt="Liberty" className="h-12 w-auto object-contain self-start" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              The Old Airfield, Belton Road, Sandtoft DN8 5SX
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-primary-foreground/70 hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>0333 344 3833</li>
              <li>sales@libertyguard.co.uk</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">
              Accreditations
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {accreditations.map((a) => (
                <div
                  key={a.alt}
                  className="bg-white rounded-md p-1.5 flex items-center justify-center h-14"
                >
                  <img
                    src={a.src}
                    alt={a.alt}
                    loading="lazy"
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-primary-foreground/10 flex justify-end text-primary-foreground/40 text-xs">
          <span>©2026 LIBERTY GUARD (U.K.) LIMITED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
