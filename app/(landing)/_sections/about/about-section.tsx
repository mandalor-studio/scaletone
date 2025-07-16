import {
  Section,
  SectionTitle,
  SectionDescription,
} from "@/components/layout/section";
import { DottedBg } from "@/components/dotted-bg";
import { AboutForm } from "./about-form";

export function AboutSection() {
  return (
    <Section
      id="contact"
      className="py-12 gap-8 md:py-30 md:gap-16 relative max-w-none"
    >
      <DottedBg />
      {/* About */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:justify-center items-center w-full">
        <div className="space-y-4 max-w-xl text-center">
          <SectionTitle>Who’s behind this?</SectionTitle>
          <SectionDescription>
            This tool was built by <strong>mandalor studio</strong>, a small
            team crafting custom tools and design systems for modern web &
            mobile products. We focus on simplicity, performance, and real-world
            usefulness.
          </SectionDescription>
        </div>

        {/* Contact form */}
        <AboutForm />
      </div>
    </Section>
  );
}
