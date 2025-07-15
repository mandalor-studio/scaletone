import { WhyRadixShadcnSection } from "./_sections/why-radix-shadcn";
import { ContactSection } from "./_sections/contact";
import { ShowcaseSection } from "./_sections/showcase/showcase-section";
import { HeroSection } from "./_sections/hero/hero-section";
import { ToolsSection } from "./_sections/tools/tools-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ToolsSection />
      <ShowcaseSection />
      <WhyRadixShadcnSection />
      <ContactSection />
    </div>
  );
}
