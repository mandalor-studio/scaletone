import Link from "next/link";
import ShadcnLogo from "@/components/logos/shadcn";
import RadixLogo from "@/components/logos/radix";
import TailwindLogo from "@/components/logos/tailwind";

export function StackLogos() {
  return (
    <div className="flex md:hidden  items-center gap-4  bg-gradient-to-r from-background via-secondary/20 to-background">
      <Link
        href="https://ui.shadcn.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity hover:scale-105"
      >
        <ShadcnLogo className="h-4 w-4 text-foreground" />
      </Link>
      <Link
        href="https://www.radix-ui.com/colors/docs/palette-composition/scales"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity hover:scale-105"
      >
        <RadixLogo className="h-4 w-4 text-foreground" />
      </Link>
      <Link
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity hover:scale-105"
      >
        <TailwindLogo className="h-4 w-4" />
      </Link>
    </div>
  );
}
