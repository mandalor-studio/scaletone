import { Hero } from "./_sections/hero";
import { DemoSection } from "./_sections/demo";
import { WhyRadixShadcnSection } from "./_sections/why-radix-shadcn";
import { ContactSection } from "./_sections/contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-4xl font-bold">See themes examples</h1>
        <p className="text-sm text-muted-foreground">
          You can generate this themes here.
        </p>
      </div>
      <DemoSection />
      <WhyRadixShadcnSection />
      <ContactSection />
    </div>
  );
}
