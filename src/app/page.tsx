import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowWeWork from "@/components/HowWeWork";
import BeyondCarbonProjects from "@/components/BeyondCarbonProjects";
import ConnectWithUs from "@/components/ConnectWithUs";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <HowWeWork />
      <BeyondCarbonProjects />
      <ConnectWithUs />
      <CTASection />
    </div>
  );
}
