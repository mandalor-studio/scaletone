export function BenefitsSection() {
  return (
    <section>
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
