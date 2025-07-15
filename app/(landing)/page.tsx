import { WhyRadixShadcnSection } from "./_sections/why-radix-shadcn";
import { ContactSection } from "./_sections/contact";
import { ShowcaseSection } from "./_sections/showcase/showcase-section";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "./_sections/hero/hero-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ShowcaseSection />
      <Separator className="my-16" />
      <WhyRadixShadcnSection />
      <ContactSection />
    </div>
  );
}
