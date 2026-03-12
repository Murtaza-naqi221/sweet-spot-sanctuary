import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import PlanSection from "@/components/PlanSection";
import FinancialJourneySection from "@/components/FinancialJourneySection";
import WaysSection from "@/components/WaysSection";
import ContactStrip from "@/components/ContactStrip";
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
      </>
    );
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection onStartCalculator={() => setShowWizard(true)} />
      <CTABanner />
      <PlanSection />
      <FinancialJourneySection />
      <CTABanner />
      <WaysSection />
      <CTABanner />
      <ContactStrip />
    </>
  );
};

export default Index;
