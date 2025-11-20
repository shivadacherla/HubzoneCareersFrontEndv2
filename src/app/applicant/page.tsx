import { HeroSection } from "@/components/sections/hero-section";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { AIShowcase } from "@/components/sections/ai-showcase";
import { CtaSection } from "@/components/sections/cta-section";

// Lottie animation JSON - loaded from public/animations/hero.json
// You can replace this with a better animation from LottieFiles.com
// Search for: "job search", "recruitment", "career", "hiring", "resume"
import heroAnimationData from "@/../public/animations/hero.json";

export default function ApplicantHome() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <HeroSection animationData={heroAnimationData} />
      <FeatureGrid />
      <AIShowcase />
      <CtaSection />
    </main>
  );
}

