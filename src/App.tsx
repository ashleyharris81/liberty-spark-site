import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MarketingSuites from "./pages/MarketingSuites";
import PortableBuildings from "./pages/PortableBuildings";
import Solar from "./pages/Solar";
import Welfare from "./pages/Welfare";
import MobileWelfare from "./pages/MobileWelfare";
import MobiModel from "./pages/MobiModel";
import StaticWelfare from "./pages/StaticWelfare";
import StaticModel from "./pages/StaticModel";
import SolarMobileWelfare from "./pages/SolarMobileWelfare";
import SolarStaticWelfare from "./pages/SolarStaticWelfare";
import SolarDryingRoom from "./pages/SolarDryingRoom";
import SolarLoos from "./pages/SolarLoos";
import SolarProduct from "./pages/SolarProduct";
import PortableAccommodation from "./pages/PortableAccommodation";
import ModularBuildings from "./pages/ModularBuildings";
import News from "./pages/News";
import AboutPage from "./pages/AboutPage";
import NewAccount from "./pages/NewAccount";
import ContactPage from "./pages/ContactPage";
import NationwideHire from "./pages/NationwideHire";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieBanner from "./components/CookieBanner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NationwideHire />} />
          <Route path="/homepage2" element={<Index />} />
          <Route path="/marketing-suites" element={<MarketingSuites />} />
          <Route path="/portable-buildings" element={<PortableBuildings />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/welfare" element={<Welfare />} />
          <Route path="/mobile-welfare" element={<MobileWelfare />} />
          <Route path="/mobile-welfare/:slug" element={<MobiModel />} />
          <Route path="/static-welfare" element={<StaticWelfare />} />
          <Route path="/static-welfare/:slug" element={<StaticModel />} />
          <Route path="/solar-mobile-welfare" element={<SolarMobileWelfare />} />
          <Route path="/solar-mobile-welfare/:slug" element={<SolarProduct />} />
          <Route path="/solar-static-welfare" element={<SolarStaticWelfare />} />
          <Route path="/solar-static-welfare/:slug" element={<SolarProduct />} />
          <Route path="/solar-drying-room" element={<SolarDryingRoom />} />
          <Route path="/solar-drying-room/:slug" element={<SolarProduct />} />
          <Route path="/solar-loos" element={<SolarLoos />} />
          <Route path="/solar-loos/:slug" element={<SolarProduct />} />
          <Route path="/portable-accommodation" element={<PortableAccommodation />} />
          <Route path="/modular-buildings" element={<ModularBuildings />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/new-account" element={<NewAccount />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/nationwide-hire" element={<NationwideHire />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
