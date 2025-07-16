import { ThemeControlPanel } from "@/components/theme-control-panel";

import { BentoGrid } from "./_bento/bento-grid";

export default function GeneratorPage() {
  return (
    <div className="min-h-screen">
      <ThemeControlPanel />
      <BentoGrid />
    </div>
  );
}
