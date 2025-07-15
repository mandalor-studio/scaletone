import { DoubleMarquee } from "./_components/double-marquee";
import { ShowcaseSectionHeading } from "./_components/showcase-section-heading";

export function ShowcaseSection() {
  return (
    <div className="flex flex-col py-16 gap-16">
      <ShowcaseSectionHeading />
      <DoubleMarquee />
    </div>
  );
}
