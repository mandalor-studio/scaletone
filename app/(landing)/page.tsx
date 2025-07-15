import { ShowcaseSection } from "./_sections/showcase/showcase-section";
import { HeroSection } from "./_sections/hero/hero-section";
import { ToolsSection } from "./_sections/tools/tools-section";
import { WhySection } from "./_sections/why/why-section";
import { AboutSection } from "./_sections/about/about-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ToolsSection />
      <ShowcaseSection />
      <WhySection />
      <AboutSection />
    </div>
  );
}
