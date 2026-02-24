import { Link } from "react-router-dom";
import logo from "@/assets/liberty-guard-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-navy-light py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Liberty Guard" className="h-12 w-auto" />
          <div className="flex flex-col md:flex-row items-center gap-4 text-primary-foreground/60 text-sm">
            <span>0333 344 3833</span>
            <span className="hidden md:inline">•</span>
            <span>sales@libertyguard.co.uk</span>
            <span className="hidden md:inline">•</span>
            <span>The Old Airfield, Belton Road, Sandtoft DN8 5SX</span>
            <span className="hidden md:inline">•</span>
            <Link to="/new-account" className="text-secondary hover:underline font-semibold">
              Open a New Account
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-navy-light text-center text-primary-foreground/40 text-sm">
          ©2025 Liberty Guard, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
