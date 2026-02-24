import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const salesReps = ["Ben", "Ross", "Hannah W", "Abbie", "Josh", "Andy", "None"];
const hearAboutOptions = ["Linkedin", "Social Media", "Word of Mouth", "Trade Event", "Google", "Other"];

const NewAccount = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted",
        description: "Thank you! We'll review your application and be in touch shortly.",
      });
      (e.target as HTMLFormElement).reset();
      setAgreed(false);
    }, 1000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors font-body text-sm";
  const labelClass = "block font-heading text-sm font-semibold text-foreground uppercase tracking-wide mb-1.5";
  const sectionTitle = "font-heading text-xl font-bold text-foreground uppercase tracking-wide mb-6";

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
              New <span className="text-secondary">Account</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Thank you for applying for a Liberty Group account!
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To open an account with us we ask for some Company information from you. The form shouldn't take too long to complete but please make sure you read it first to ensure you have everything you need to hand! Unfortunately, we are unable to process incomplete applications. If you do have any queries, please contact our accounts Dept on{" "}
              <a href="tel:03333443838" className="text-secondary hover:underline font-semibold">
                0333 344 3838
              </a>
              .
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Company Info */}
            <div>
              <h3 className={sectionTitle}>Company Information</h3>
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>Company Name *</label>
                  <input type="text" required maxLength={200} className={inputClass} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Trading Address */}
                  <div className="space-y-4">
                    <p className="font-heading text-sm font-bold text-muted-foreground uppercase tracking-wide">Trading Address</p>
                    <div>
                      <label className={labelClass}>Address Line 1 *</label>
                      <input type="text" required maxLength={200} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Address Line 2</label>
                      <input type="text" maxLength={200} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>City *</label>
                        <input type="text" required maxLength={100} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Post Code *</label>
                        <input type="text" required maxLength={10} className={inputClass} />
                      </div>
                    </div>
                  </div>

                  {/* Invoice Address */}
                  <div className="space-y-4">
                    <p className="font-heading text-sm font-bold text-muted-foreground uppercase tracking-wide">Invoice Address</p>
                    <div>
                      <label className={labelClass}>Address Line 1 *</label>
                      <input type="text" required maxLength={200} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Address Line 2</label>
                      <input type="text" maxLength={200} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>City *</label>
                        <input type="text" required maxLength={100} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Post Code *</label>
                        <input type="text" required maxLength={10} className={inputClass} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Company Registration Number</label>
                    <input type="text" maxLength={20} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>VAT Number</label>
                    <input type="text" maxLength={20} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Number of Years Trading</label>
                    <input type="text" maxLength={10} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input type="email" required maxLength={255} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Accounts Contact Name *</label>
                    <input type="text" required maxLength={100} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Accounts Telephone Number *</label>
                    <input type="tel" required maxLength={20} className={inputClass} />
                  </div>
                </div>
              </div>
            </div>

            {/* Trade References */}
            <div>
              <h3 className={sectionTitle}>Trade References</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Please submit two trade references including Contact Number & Email Address
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((num) => (
                  <div key={num} className="space-y-4 bg-muted rounded-xl p-6">
                    <p className="font-heading text-sm font-bold text-foreground uppercase tracking-wide">
                      Trade Reference {num}
                    </p>
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input type="text" required maxLength={100} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Address Line 1</label>
                      <input type="text" maxLength={200} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Address Line 2</label>
                      <input type="text" maxLength={200} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>City</label>
                        <input type="text" maxLength={100} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Post Code</label>
                        <input type="text" maxLength={10} className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Contact Number *</label>
                      <input type="tel" required maxLength={20} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input type="email" required maxLength={255} className={inputClass} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className={sectionTitle}>Additional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Did you speak to a sales rep today?</label>
                  <select className={inputClass}>
                    <option value="">- Select -</option>
                    {salesReps.map((rep) => (
                      <option key={rep} value={rep}>{rep}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>How did you hear about Liberty?</label>
                  <select className={inputClass}>
                    <option value="">- Select -</option>
                    {hearAboutOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Declaration */}
            <div className="bg-primary rounded-xl p-8">
              <h3 className="font-heading text-xl font-bold text-primary-foreground uppercase tracking-wide mb-4">
                Declaration
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                I confirm that the above information is correct. I have received and agree to the trading terms and conditions and 30 day payment terms.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide mb-1.5">
                    Position *
                  </label>
                  <input type="text" required maxLength={100} className={`${inputClass} bg-navy-light border-primary-foreground/20 text-primary-foreground`} />
                </div>
                <div>
                  <label className="block font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide mb-1.5">
                    Name *
                  </label>
                  <input type="text" required maxLength={100} className={`${inputClass} bg-navy-light border-primary-foreground/20 text-primary-foreground`} />
                </div>
                <div>
                  <label className="block font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide mb-1.5">
                    Date *
                  </label>
                  <input type="date" required className={`${inputClass} bg-navy-light border-primary-foreground/20 text-primary-foreground`} />
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-secondary"
                  required
                />
                <span className="text-primary-foreground/80 text-sm">
                  I agree to the trading terms and conditions and 30 day payment terms *
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !agreed}
              className="w-full md:w-auto px-10 py-4 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-md hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewAccount;
