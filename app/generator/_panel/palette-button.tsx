"use client";

import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { allRadixPalettes } from "@/lib/colors/themes";
import { cn } from "@/lib/utils";
import { PaletteSwatch } from "./palette-swatch";

export function PaletteButton({
  paletteName,
  mode,
  isSelected,
  onClick,
  tooltipLabel,
}: {
  paletteName: keyof typeof allRadixPalettes;
  mode: "light" | "dark";
  isSelected: boolean;
  onClick: () => void;
  tooltipLabel?: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className={cn(
            "transition-all rounded-sm gap-2 duration-200 flex items-center justify-center",
            isSelected && "flex-col"
          )}
        >
          {isSelected && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-foreground text-xs font-bold drop-shadow-md"
            >
              ✓
            </motion.span>
          )}
          <PaletteSwatch paletteName={paletteName} mode={mode} />
        </button>
      </TooltipTrigger>
      <TooltipContent
        className="bg-accent text-foreground"
        arrowClassName="bg-accent fill-accent"
      >
        <p className="capitalize">{tooltipLabel || paletteName}</p>
      </TooltipContent>
    </Tooltip>
  );
}
