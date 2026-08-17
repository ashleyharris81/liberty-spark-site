import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import policy from "@/content/privacy-policy.md?raw";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

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
              Privacy <span className="text-secondary">Policy</span>
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
              How Liberty Guard (U.K.) Limited collects, uses and protects your personal data.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <article
            className="prose prose-slate max-w-4xl mx-auto
              prose-headings:font-heading prose-headings:uppercase prose-headings:text-primary
              prose-h1:sr-only
              prose-a:text-secondary prose-strong:text-primary
              prose-table:text-sm prose-th:text-left prose-th:text-primary
              prose-hr:border-border"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{policy}</ReactMarkdown>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
