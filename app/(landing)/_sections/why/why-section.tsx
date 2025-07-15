import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import {
  Section,
  SectionDescription,
  SectionTitle,
} from "../../../../components/layout/section";

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
          <h3 className="text-lg font-semibold">
            Radix Colors as a foundation
          </h3>
          <p className="text-muted-foreground text-sm">
            We use{" "}
            <a href="https://www.radix-ui.com/colors" className="underline">
              Radix Colors
            </a>{" "}
            as the backbone of this system. Their accessible and consistent
            palettes are perfect for building modern themes across light and
            dark modes, with clean semantic scales.
          </p>
        </SectionItem>

        <SectionItem>
          <h3 className="text-lg font-semibold">Simple by design</h3>
          <p className="text-muted-foreground text-sm">
            Most theme generators are full of endless options. Ours gives you
            solid, clean defaults and opinionated logic — so you get results
            fast, without getting lost in complexity.
          </p>
        </SectionItem>

        <SectionItem>
          <h3 className="text-lg font-semibold">Tailored for shadcn/ui</h3>
          <p className="text-muted-foreground text-sm">
            This tool was built for{" "}
            <a href="https://ui.shadcn.com/" className="underline">
              shadcn/ui
            </a>{" "}
            and Tailwind CSS. The generated themes drop right into your project
            — without config headaches or manual overrides.
          </p>
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
