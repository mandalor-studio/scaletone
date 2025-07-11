import { Hero } from "./_sections/hero";
import { DemoSection } from "./_sections/demo";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <DemoSection />
    </div>
  );
}
