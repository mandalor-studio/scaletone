"use client";

import { motion, AnimatePresence } from "motion/react";
import { useRadixTheme } from "./radix-theme-provider";
import { ModeToggle } from "./mode-toggle";
import { CopyThemeButton } from "./copy-theme-button";
import { radixGrayScales } from "@/lib/colors/themes";

interface CurrentThemeDisplayProps {
  mode: "light" | "dark";
}

export function CurrentThemeDisplay({ mode }: CurrentThemeDisplayProps) {
  const { config } = useRadixTheme();

  const isNeutralBase = (radixGrayScales as readonly string[]).includes(
    config.base
  );

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm text-foreground font-medium">Current Theme</p>
        <ModeToggle />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground capitalize">
          <p className="border-r border-border pr-2">{mode}</p>
          <p>{config.base}</p>
          <AnimatePresence mode="wait">
            {config.brand && (
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="border-l border-border pl-2"
              >
                {config.brand}
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {config.primaryIntensity && (
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="border-l border-border pl-2"
              >
                {isNeutralBase && config.brand
                  ? config.primaryIntensity
                  : isNeutralBase
                  ? "Neutral"
                  : "Monotone"}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <CopyThemeButton />
      </div>
    </div>
  );
}
