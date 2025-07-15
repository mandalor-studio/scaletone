import { DottedBg } from "../../../../components/dotted-bg";
import { Section } from "../../../../components/layout/section";
import { DoubleMarquee } from "./_components/double-marquee";
import { ShowcaseSectionHeading } from "./_components/showcase-section-heading";

export function ShowcaseSection() {
  return (
    <Section
      id="showcase"
      className="flex flex-col py-12 gap-8 md:py-30 md:gap-16 relative max-w-none"
    >
      <DottedBg />
      <ShowcaseSectionHeading />
      <DoubleMarquee />
    </Section>
  );
}
