import { Hero } from "./_sections/hero";
import { WhyRadixShadcnSection } from "./_sections/why-radix-shadcn";
import { ContactSection } from "./_sections/contact";
import { ShowcaseSection } from "./_sections/showcase/showcase-section";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ShowcaseSection />
      <WhyRadixShadcnSection />
      <ContactSection />
    </div>
  );
}
