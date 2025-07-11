import { ThemeControlPanel } from "@/components/theme-control-panel";

import { ComponentShowcaseGrid } from "../../components/component-showcase-grid";

export default function GeneratorPage() {
  return (
    <div className="min-h-screen">
      <ThemeControlPanel />
      <ComponentShowcaseGrid />
    </div>
  );
}
