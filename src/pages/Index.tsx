import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FoundingMembersSection } from "@/components/FoundingMembersSection";
import { ValidationFormSection } from "@/components/ValidationFormSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <FoundingMembersSection />
        <ValidationFormSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
