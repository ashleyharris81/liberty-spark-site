import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";

const galleryImages = [
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_1961-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2463-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2462-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2424-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2409-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2408-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2396-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2370-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2374-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2377-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2387-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2388-1024x768.jpeg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/LIB_08-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/LIB_35-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/LIB_38-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Liberty-Llanwern-03.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Liberty-Llanwern-08.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Liberty-Tetbury-01-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Liberty-Tetbury-04-1024x683.jpg",
  "https://libertyguard.co.uk/wp-content/uploads/2025/09/Liberty-Tetbury-09-1024x683.jpg",
];

const sections = [
  {
    heading: "First Impressions Matter",
    paragraphs: [
      "At Liberty Guard, we understand the importance of first impressions. Our stand-alone Marketing Suites are designed to provide a stylish, professional, and welcoming environment for both your customers and staff. Each unit is tailored to your specific requirements, with prestigious finishes and bespoke interiors that reflect your brand's identity, creating the perfect platform to showcase your homes and developments in a relaxed, high-quality setting.",
      "From layout to interior styling, every detail is considered to ensure your sales environment is as functional as it is visually impressive. Whether you need a compact suite or a flagship model, our versatile solutions offer comfort, sophistication, and practicality, helping you promote your homes within a distinctive, secure and fully-equipped space.",
      "Over the years, Liberty Marketing Suites have become the supplier of choice for major housebuilders across the UK. Our reputation has been built on understanding the specific needs of the property development industry and responding with a product range that is not only highly functional but also aesthetically outstanding.",
    ],
  },
  {
    heading: "A Complete Package",
    paragraphs: [
      "Working in close partnership with our clients, we've developed a collection of suites that offer unmatched flexibility and appeal. Our extensive range includes various sizes and configurations, from compact 24' x 10' models to our most prestigious 32' x 24' suites. No matter the size or style, all units are built to the highest standards and finished with a keen eye for design and durability.",
      "Every Liberty Marketing Suite is offered as a complete package deal. Included is our specially designed Power Pack, featuring a 14KVA generator and a large-capacity water tank, allowing the suite to operate completely independently of external services. This self-sufficient system ensures you can set up and run your marketing suite wherever it's needed, without delay or disruption.",
      "Each model includes a contemporary kitchen, executive-style toilet facilities, and a spacious open-plan sales area. The suite is accessed through UPVC French doors and features air conditioning as standard, ensuring a comfortable environment in all seasons.",
    ],
  },
  {
    heading: "Security & Support",
    paragraphs: [
      "The structure itself allows for significant design flexibility. A standout feature is the full-width glass frontage, offering abundant natural light and visual appeal, protected by remote-controlled electric shutters for added security and convenience.",
      "Staff security is a priority in every Liberty Marketing Suite. Each unit is equipped with a panic alarm system that includes both an external sounder and a visual warning light. A quick-lock escape route is also integrated to provide peace of mind for on-site sales staff.",
      "And with our 24/7 After Care support, you're never left in the dark. From power packs to consumables, our responsive service team ensures any issues are resolved quickly, keeping your suite running smoothly day in, day out.",
    ],
  },
];

const MarketingSuites = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <HeroVideo
            src="https://assets.libertyguard.co.uk/videos/Showhome-Nottingham-40ft-Marketing-Suite.mov"
            poster="/posters/marketing-suites.jpg"
          />
          <div className="absolute inset-0 bg-primary/60 z-[5]" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-primary-foreground/70 hover:text-secondary font-heading text-sm uppercase tracking-wider mb-6 transition-colors"
              >
                ← Back to Home
              </Link>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase tracking-tight leading-tight animate-fade-in-up">
                Marketing <span className="text-secondary">Suites</span>
              </h1>
              <p
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Trusted by Housebuilders. Designed for Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body sections */}
      {sections.map((section, idx) => (
        <section
          key={section.heading}
          className={`py-20 ${idx % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-8">
              {section.heading}
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Gallery */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground uppercase tracking-tight text-center mb-12">
            Showhomes & <span className="text-secondary">Marketing Suites</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src) => (
              <div key={src} className="overflow-hidden rounded-lg border border-primary-foreground/10">
                <img
                  src={src}
                  alt="Liberty Guard marketing suite"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default MarketingSuites;
