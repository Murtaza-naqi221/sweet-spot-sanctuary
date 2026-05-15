import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import PlanSection from "@/components/PlanSection";
import FinancialJourneySection from "@/components/FinancialJourneySection";
import WaysSection from "@/components/WaysSection";
import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import RetirementWizard from "@/components/RetirementWizard";

const Index = () => {
  const [showWizard, setShowWizard] = useState(false);

  if (showWizard) {
    return (
      <>
        <TopBar />
        <Navbar />
        <RetirementWizard onGoHome={() => setShowWizard(false)} />
        <CTABanner />
        <ContactStrip />
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection onStartCalculator={() => setShowWizard(true)} />
      <PlanSection onStartCalculator={() => setShowWizard(true)} />
      <FinancialJourneySection />
      <CTABanner />
      <WaysSection />
      <CTABanner />
      <ContactStrip />
      <Footer />
    </>
  );
};

export default Index;
