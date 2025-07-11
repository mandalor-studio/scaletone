import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import ShadcnLogo from "@/components/logos/shadcn";
import RadixLogo from "@/components/logos/radix";
import TailwindLogo from "@/components/logos/tailwind";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
      {/* Badge */}
      <Badge variant="outline" className="px-4 py-2 text-sm">
        <SparklesIcon className="h-4 w-4 mr-2" />
        Generate beautiful themes in seconds
      </Badge>

      {/* Main Heading */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Easy consistent themes for{" "}
          <span className="text-primary">shadcn/ui</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Generate consistent, accessible color palettes for your
          <br />
          <span className="font-semibold text-foreground">shadcn/ui</span>{" "}
          components
        </p>
      </div>

      {/* Tech Stack Logos */}
      <div className="flex items-center gap-8 py-8">
        <Link
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity hover:scale-105"
        >
          <ShadcnLogo className="h-8 w-8 text-foreground" />
          <span className="text-sm font-medium">shadcn/ui</span>
        </Link>
        <div className="h-6 w-px bg-border" />
        <Link
          href="https://www.radix-ui.com/colors/docs/palette-composition/scales"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity hover:scale-105"
        >
          <RadixLogo className="h-8 w-8 text-foreground" />
          <span className="text-sm font-medium">Radix Colors</span>
        </Link>
        <div className="h-6 w-px bg-border" />
        <Link
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity hover:scale-105"
        >
          <TailwindLogo className="h-8 w-8" />
          <span className="text-sm font-medium">Tailwind CSS</span>
        </Link>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button asChild size="lg" className="text-base px-8">
          <Link href="/generator">
            Generate Your Theme
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="text-base px-8" asChild>
          <Link href="#examples">View Examples</Link>
        </Button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">🎨 Perfect Harmony</h3>
          <p className="text-sm text-muted-foreground">
            Generate color scales that work beautifully together across light
            and dark modes
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">⚡ Instant Export</h3>
          <p className="text-sm text-muted-foreground">
            Copy CSS variables or download theme files ready for your project
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">🔧 Developer First</h3>
          <p className="text-sm text-muted-foreground">
            Built for modern React apps with TypeScript and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
