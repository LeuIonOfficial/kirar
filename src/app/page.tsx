import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import HowWeWork from "@/components/HowWeWork";
import BeyondCarbonProjects from "@/components/BeyondCarbonProjects";
import ConnectWithUs from "@/components/ConnectWithUs";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <HowWeWork />
      <BeyondCarbonProjects />
      <ConnectWithUs />
      <CTASection />
    </div>
  );
}
