import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { FoundingMembersSection } from "@/components/FoundingMembersSection";
import { LeadMagnetSection } from "@/components/LeadMagnetSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <FoundingMembersSection />
        <LeadMagnetSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
