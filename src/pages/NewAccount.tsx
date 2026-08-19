import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitForm } from "@/lib/submitForm";

const salesReps = ["Ben", "Ross", "Hannah W", "Abbie", "Josh", "Andy", "None"];
const hearAboutOptions = ["Linkedin", "Social Media", "Word of Mouth", "Trade Event", "Google", "Other"];

const collectDetails = (form: HTMLFormElement) => {
  const details: Record<string, string> = {};
  const fields = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
    "input, select, textarea",
  );
  fields.forEach((field) => {
    if (field instanceof HTMLInputElement && field.type === "checkbox") return;
    const value = field.value?.trim();
    if (!value) return;
    const labelled =
      field.dataset.label ||
      form.querySelector(`label[for="${field.id}"]`)?.textContent?.replace(/\*/g, "").trim() ||
      field.id;
    let key = labelled;
    let suffix = 2;
    while (key in details) key = `${labelled} (${suffix++})`;
    details[key] = value.slice(0, 2000);
  });
  return details;
};

const NewAccount = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      const details = collectDetails(form);
      await submitForm({
        type: "account",
        companyName: (form.querySelector<HTMLInputElement>("#company-name")?.value || "").trim(),
        email: (form.querySelector<HTMLInputElement>("#email")?.value || "").trim(),
        details,
      });
      toast({
        title: "Application Submitted",
        description: "Thank you! We'll review your application and be in touch shortly.",
      });
      form.reset();
      setAgreed(false);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again, or call us on 0333 344 3833.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Thank you for applying for a Liberty account!
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
                  <label className={labelClass} htmlFor="company-name">Company Name *</label>
                  <input id="company-name" type="text" required maxLength={200} className={inputClass} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Trading Address */}
                  <div className="space-y-4">
                    <p className="font-heading text-sm font-bold text-muted-foreground uppercase tracking-wide">Trading Address</p>
                    <div>
                      <label className={labelClass} htmlFor="address-line-1">Address Line 1 *</label>
                      <input id="address-line-1" type="text" required maxLength={200} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="address-line-2">Address Line 2</label>
                      <input id="address-line-2" type="text" maxLength={200} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass} htmlFor="city">City *</label>
                        <input id="city" type="text" required maxLength={100} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="post-code">Post Code *</label>
                        <input id="post-code" type="text" required maxLength={10} className={inputClass} />
                      </div>
                    </div>
                  </div>

                  {/* Invoice Address */}
                  <div className="space-y-4">
                    <p className="font-heading text-sm font-bold text-muted-foreground uppercase tracking-wide">Invoice Address</p>
                    <div>
                      <label className={labelClass} htmlFor="address-line-1-2">Address Line 1 *</label>
                      <input id="address-line-1-2" type="text" required maxLength={200} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="address-line-2-2">Address Line 2</label>
                      <input id="address-line-2-2" type="text" maxLength={200} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass} htmlFor="city-2">City *</label>
                        <input id="city-2" type="text" required maxLength={100} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="post-code-2">Post Code *</label>
                        <input id="post-code-2" type="text" required maxLength={10} className={inputClass} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="company-registration-number">Company Registration Number</label>
                    <input id="company-registration-number" type="text" maxLength={20} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="vat-number">VAT Number</label>
                    <input id="vat-number" type="text" maxLength={20} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="number-of-years-trading">Number of Years Trading</label>
                    <input id="number-of-years-trading" type="text" maxLength={10} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email *</label>
                    <input id="email" type="email" required maxLength={255} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="accounts-contact-name">Accounts Contact Name *</label>
                    <input id="accounts-contact-name" type="text" required maxLength={100} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="accounts-telephone-number">Accounts Telephone Number *</label>
                    <input id="accounts-telephone-number" type="tel" required maxLength={20} className={inputClass} />
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
                      <label className={labelClass} htmlFor={`ref-${num}-name`}>Name *</label>
                      <input id={`ref-${num}-name`} data-label={`Trade Reference ${num} Name`} type="text" required maxLength={100} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor={`ref-${num}-address-1`}>Address Line 1</label>
                      <input id={`ref-${num}-address-1`} data-label={`Trade Reference ${num} Address Line 1`} type="text" maxLength={200} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor={`ref-${num}-address-2`}>Address Line 2</label>
                      <input id={`ref-${num}-address-2`} data-label={`Trade Reference ${num} Address Line 2`} type="text" maxLength={200} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass} htmlFor={`ref-${num}-city`}>City</label>
                        <input id={`ref-${num}-city`} data-label={`Trade Reference ${num} City`} type="text" maxLength={100} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor={`ref-${num}-post-code`}>Post Code</label>
                        <input id={`ref-${num}-post-code`} data-label={`Trade Reference ${num} Post Code`} type="text" maxLength={10} className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor={`ref-${num}-contact-number`}>Contact Number *</label>
                      <input id={`ref-${num}-contact-number`} data-label={`Trade Reference ${num} Contact Number`} type="tel" required maxLength={20} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor={`ref-${num}-email`}>Email *</label>
                      <input id={`ref-${num}-email`} data-label={`Trade Reference ${num} Email`} type="email" required maxLength={255} className={inputClass} />
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
                  <label className={labelClass} htmlFor="did-you-speak-to-a-sales-rep-today">Did you speak to a sales rep today?</label>
                  <select id="did-you-speak-to-a-sales-rep-today" className={inputClass}>
                    <option value="">- Select -</option>
                    {salesReps.map((rep) => (
                      <option key={rep} value={rep}>{rep}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="how-did-you-hear-about-liberty">How did you hear about Liberty?</label>
                  <select id="how-did-you-hear-about-liberty" className={inputClass}>
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
                  <label className="block font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide mb-1.5" htmlFor="position">
                    Position *
                  </label>
                  <input id="position" type="text" required maxLength={100} className={`${inputClass} bg-navy-light border-primary-foreground/20 text-primary-foreground`} />
                </div>
                <div>
                  <label className="block font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide mb-1.5" htmlFor="name-2">
                    Name *
                  </label>
                  <input id="name-2" type="text" required maxLength={100} className={`${inputClass} bg-navy-light border-primary-foreground/20 text-primary-foreground`} />
                </div>
                <div>
                  <label className="block font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide mb-1.5" htmlFor="date">
                    Date *
                  </label>
                  <input id="date" type="date" required className={`${inputClass} bg-navy-light border-primary-foreground/20 text-primary-foreground`} />
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
