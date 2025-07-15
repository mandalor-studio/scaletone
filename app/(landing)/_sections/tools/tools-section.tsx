import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";

import ShadcnLogo from "@/components/logos/shadcn";
import TailwindLogo from "@/components/logos/tailwind";
import RadixLogo from "@/components/logos/radix";
import Link from "next/link";
import React from "react";
import type { SVGProps } from "react";

type Tool = {
  name: string;
  icon: string;
  shortDescription: string;
  link: string;
  logo: React.ReactNode;
};

const tools = [
  {
    name: "shadcn/ui",
    icon: "shadcn/ui",
    shortDescription:
      "Beautiful, accessible React components built with Tailwind CSS",
    link: "https://ui.shadcn.com/",
    logo: <ShadcnLogo />,
  },
  {
    name: "tailwindcss",
    icon: "tailwindcss",
    shortDescription:
      "Utility-first CSS framework for fast and responsive UI development",
    link: "https://tailwindcss.com/",
    logo: <TailwindLogo />,
  },
  {
    name: "radix colors",
    icon: "radix-colors",
    shortDescription:
      "A consistent, composable color system for accessible UI design",
    link: "https://www.radix-ui.com/",
    logo: <RadixLogo />,
  },
] satisfies Tool[];

export function ToolsSection() {
  return (
    <Section className="py-12 gap-8 md:py-20  md:gap-14">
      <div className="flex flex-col items-center text-center justify-center w-full">
        <SectionTitle>Crafted for modern web</SectionTitle>
        <SectionDescription>
          Built following radix colors principles for shadcn and tailwind.
        </SectionDescription>
      </div>
      <div className="flex gap-6 max-w-6xl mx-auto w-full justify-around flex-wrap">
        {tools.map((tool) => (
          <ToolItem key={tool.name} tool={tool} />
        ))}
      </div>
    </Section>
  );
}

const ToolItem = ({ tool }: { tool: Tool }) => {
  return (
    <Link
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="flex flex-col items-center text-center gap-4 max-w-40">
        <div className="relative">
          <div className="w-10 h-10 md:w-16 md:h-16 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 relative z-10">
            {React.cloneElement(
              tool.logo as React.ReactElement<SVGProps<SVGSVGElement>>,
              {
                className: "w-full h-full",
              }
            )}
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 md:w-10 md:h-2 bg-foreground/50 rounded-full blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300 -z-10" />
        </div>
        <div className="flex flex-col ">
          <h3 className="text-sm font-medium md:text-base">{tool.name}</h3>
          <p className="text-xs text-muted-foreground text-balance ">
            {tool.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
};
