import { ThemeControlPanel } from "@/components/theme-control-panel";
import { BentoGrid } from "./_bento/bento-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theme Generator - Create Custom shadcn/ui & Radix UI Themes | Scaletone",
  description:
    "Interactive theme generator for shadcn/ui and Radix UI components. Choose from Radix Colors, customize your design system, and generate production-ready CSS themes instantly.",
  keywords: [
    "theme generator",
    "shadcn/ui customization",
    "Radix UI styling",
    "design system builder",
    "CSS theme generator",
    "React component theming",
    "Radix Colors picker",
    "UI theme creator",
  ],
  openGraph: {
    title: "Theme Generator - Create Custom shadcn/ui & Radix UI Themes",
    description:
      "Interactive theme generator for shadcn/ui and Radix UI components. Choose from Radix Colors and generate production-ready CSS themes instantly.",
    url: "https://scaletone.com/generator",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Scaletone Theme Generator - Interactive theme builder interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theme Generator - Create Custom shadcn/ui & Radix UI Themes",
    description:
      "Interactive theme generator for shadcn/ui and Radix UI components. Generate production-ready CSS themes instantly.",
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "https://scaletone.com/generator",
  },
};

export default function GeneratorPage() {
  return (
    <div className="min-h-screen">
      <ThemeControlPanel />
      <BentoGrid />
    </div>
  );
}
