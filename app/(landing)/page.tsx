import { Hero } from "./_sections/hero";
import { DemoSection } from "./_sections/demo";
import { WhyRadixShadcnSection } from "./_sections/why-radix-shadcn";
import { ContactSection } from "./_sections/contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <DemoSection />
      <WhyRadixShadcnSection />
      <ContactSection />
    </div>
  );
}
