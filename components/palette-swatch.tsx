import { allRadixPalettes } from "../lib/colors/themes";
import { cn } from "../lib/utils";

export function PaletteSwatch({
  paletteName,
  mode,
  className,
}: {
  paletteName: keyof typeof allRadixPalettes;
  mode: "light" | "dark";
  className?: string;
}) {
  const palette = allRadixPalettes[paletteName];
  if (!palette) return null;
  const colors = Object.values(palette[mode]);
  return (
    <div className="flex flex-col items-center">
      {colors.map((color, i) => (
        <div
          key={i}
          className={cn("w-3 h-1", className)}
          style={{ background: color }}
        />
      ))}
    </div>
  );
}
