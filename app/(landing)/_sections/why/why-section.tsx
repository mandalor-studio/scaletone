import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";

export function WhySection() {
  return (
    <Section id="why" className="py-12 gap-8 md:py-30 md:gap-16 relative">
      <div className="absolute w-[33%] h-[50%] -z-10 top-5 md:top-10 left-1/2 -translate-x-1/2 rounded-full blur-3xl bg-primary/10" />
      {/* Title and subtitle */}
      <div className="text-center max-w-3xl mx-auto">
        <SectionTitle>Why we built this theme generator</SectionTitle>
        <SectionDescription>
          Most theme tools are bloated. We just wanted something clean,
          accessible and efficient — built on solid design principles.
        </SectionDescription>
      </div>

      {/* 3 blocks layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <SectionItem>
          <SectionItemTitle>Radix Colors as a foundation</SectionItemTitle>
          <SectionItemDescription>
            We use{" "}
            <Link
              href="https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette"
              className="underline"
              target="_blank"
            >
              Radix Colors
            </Link>{" "}
            as the backbone of this system. Their accessible and consistent
            palettes are perfect for building modern themes across light and
            dark modes, with clean semantic scales.
          </SectionItemDescription>
        </SectionItem>

        <SectionItem>
          <SectionItemTitle>Simple by design</SectionItemTitle>
          <SectionItemDescription>
            Most theme generators are full of endless options. Ours gives you
            solid, clean defaults and opinionated logic — so you get results
            fast, without getting lost in complexity.
          </SectionItemDescription>
        </SectionItem>

        <SectionItem>
          <SectionItemTitle>Tailored for shadcn/ui</SectionItemTitle>
          <SectionItemDescription>
            This tool was built for{" "}
            <Link
              href="https://ui.shadcn.com/"
              className="underline"
              target="_blank"
            >
              shadcn/ui
            </Link>{" "}
            and Tailwind CSS. The generated themes drop right into your project
            — without config headaches or manual overrides.
          </SectionItemDescription>
        </SectionItem>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/generator">
            Try it now
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}

function SectionItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-3 text-left border-l-8 border-primary pl-4">
      {children}
    </div>
  );
}

function SectionItemTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

function SectionItemDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground text-sm">{children}</p>;
}
