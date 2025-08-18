import HeroSection from "@/components/HeroSection";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Education from "@/components/Education";
import SkillsChart from "@/components/SkillsChart";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProfessionalSummary />
      <ExperienceTimeline />
      <Education />
      <SkillsChart />
      <ContactForm />
    </div>
  );
};

export default Index;