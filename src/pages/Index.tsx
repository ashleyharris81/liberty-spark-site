import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Sustainability from "@/components/Sustainability";
import SolarSection from "@/components/SolarSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Sustainability />
      <SolarSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
