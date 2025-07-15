import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import ShadcnLogo from "@/components/logos/shadcn";
import RadixLogo from "@/components/logos/radix";
import TailwindLogo from "@/components/logos/tailwind";
import { DottedBg } from "@/components/dotted-bg";
import { StackLogos } from "./stack-section";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden flex flex-col items-start text-left md:items-center md:text-center md:justify-center space-y-8 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 min-h-[calc(100vh-100px)]">
      {/* Main Heading */}
      <div className="space-y-4 border-primary">
        <StackLogos />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Easy consistent themes
          <br /> for
          <span className="text-primary"> shadcn/ui</span>
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground max-w-sm md:max-w-3xl leading-relaxed">
          Generate accessible and consistent themes using{" "}
          <span className="font-semibold text-foreground">Radix Colors</span>{" "}
          for <span className="font-semibold text-foreground">shadcn/ui</span>{" "}
          components.
          <br />
        </p>
      </div>
      <DottedBg />

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full md:w-auto">
        <Button asChild size="lg" className="px-8">
          <Link href="/generator">
            Generate Your Theme
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-base px-8 bg-secondary"
          asChild
        >
          <Link href="#examples">View Examples</Link>
        </Button>
      </div>
      <div className="items-center gap-8 py-8 hidden md:flex">
        <Link
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300"
        >
          <ShadcnLogo className="h-8 w-8 text-foreground" />
          <span className="text-sm font-medium hidden md:block">shadcn/ui</span>
        </Link>
        <Link
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 opacity-70 hover:opacity-100  hover:scale-105 transition-all duration-300"
        >
          <TailwindLogo className="h-8 w-8" />
          <span className="text-sm font-medium hidden md:block">
            Tailwind CSS
          </span>
        </Link>
        <Link
          href="https://www.radix-ui.com/colors/docs/palette-composition/scales"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300"
        >
          <RadixLogo className="h-8 w-8 text-foreground" />
          <span className="text-sm font-medium hidden md:block">
            Radix Colors
          </span>
        </Link>
      </div>
    </section>
  );
}
