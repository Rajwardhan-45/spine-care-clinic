import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SportsInjury from "./pages/services/SportsInjury";
import SlipDisc from "./pages/services/SlipDisc";
import BackPain from "./pages/services/BackPain";
import Chiropractic from "./pages/services/Chiropractic";
import CervicalSpondylosis from "./pages/services/CervicalSpondylosis";
import KneePain from "./pages/services/KneePain";
import FrozenShoulder from "./pages/services/FrozenShoulder";
import Paralysis from "./pages/services/Paralysis";
import TennisElbow from "./pages/services/TennisElbow";
import FacialPalsy from "./pages/services/FacialPalsy";
import LigamentTreatment from "./pages/services/LigamentTreatment";
import CuppingTherapy from "./pages/services/CuppingTherapy";
import DryNeedling from "./pages/services/DryNeedling";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/sports-injury" element={<SportsInjury />} />
          <Route path="/services/slip-disc" element={<SlipDisc />} />
          <Route path="/services/back-pain" element={<BackPain />} />
          <Route path="/services/chiropractic" element={<Chiropractic />} />
          <Route path="/services/cervical-spondylosis" element={<CervicalSpondylosis />} />
          <Route path="/services/knee-pain" element={<KneePain />} />
          <Route path="/services/frozen-shoulder" element={<FrozenShoulder />} />
          <Route path="/services/paralysis" element={<Paralysis />} />
          <Route path="/services/tennis-elbow" element={<TennisElbow />} />
          <Route path="/services/facial-palsy" element={<FacialPalsy />} />
          <Route path="/services/ligament-treatment" element={<LigamentTreatment />} />
          <Route path="/services/cupping-therapy" element={<CuppingTherapy />} />
          <Route path="/services/dry-needling" element={<DryNeedling />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
