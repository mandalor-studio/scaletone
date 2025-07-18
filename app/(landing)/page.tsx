import { ShowcaseSection } from "./_sections/showcase/showcase-section";
import { HeroSection } from "./_sections/hero/hero-section";
import { ToolsSection } from "./_sections/tools/tools-section";
import { WhySection } from "./_sections/why/why-section";
import { AboutSection } from "./_sections/about/about-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scaletone - Professional Theme Generator for shadcn/ui & Radix UI",
  description:
    "Create beautiful, accessible themes for shadcn/ui and Radix UI components in minutes. Generate consistent design systems with Radix Colors. Perfect for developers and designers.",
  keywords: [
    "shadcn/ui themes",
    "Radix UI themes",
    "theme generator tool",
    "design system generator",
    "React component themes",
    "CSS variables generator",
    "accessibility themes",
    "color palette generator",
  ],
  openGraph: {
    title: "Scaletone - Consistent Theme Generator for shadcn/ui & Radix UI",
    description:
      "Create beautiful, accessible themes for shadcn/ui and Radix UI components in minutes. Generate consistent design systems with Radix Colors.",
    url: "https://scaletone.mandalor.studio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Scaletone Homepage - Theme Generator for shadcn/ui and Radix UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaletone - Professional Theme Generator for shadcn/ui & Radix UI",
    description:
      "Create beautiful, accessible themes for shadcn/ui and Radix UI components in minutes.",
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "https://scaletone.mandalor.studio",
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ToolsSection />
      <ShowcaseSection />
      <WhySection />
      <AboutSection />
    </div>
  );
}
