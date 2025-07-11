"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRadixTheme } from "./radix-theme-provider";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Copy, Palette, X } from "lucide-react";
import { radixGrayScales, allRadixPalettes } from "@/lib/colors/themes";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

function PaletteSwatch({
  paletteName,
  mode,
}: {
  paletteName: string;
  mode: "light" | "dark";
}) {
  const palette =
    allRadixPalettes[paletteName as keyof typeof allRadixPalettes];
  if (!palette) return null;
  const colors = Object.values(palette[mode]);
  return (
    <div className="flex flex-col items-center">
      {colors.map((color, i) => (
        <div key={i} className="w-3 h-1" style={{ background: color }} />
      ))}
    </div>
  );
}

function PaletteButton({
  paletteName,
  mode,
  isSelected,
  onClick,
  tooltipLabel,
}: {
  paletteName: string;
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

export function ThemeControlPanel() {
  const [isOpen, setIsOpen] = useState(true); // Ouvert par défaut
  const { theme: resolvedTheme } = useTheme();
  const {
    config,
    availableThemes,
    compatibleBrands,
    setBase,
    setBrand,
    setPrimaryIntensity,
  } = useRadixTheme();

  const isDark = resolvedTheme === "dark";
  const mode = isDark ? "dark" : "light";

  const isNeutralBase = (radixGrayScales as readonly string[]).includes(
    config.base
  );

  const neutralThemes = radixGrayScales;
  const brandThemes = availableThemes.filter(
    (theme) => !(radixGrayScales as readonly string[]).includes(theme)
  );

  return (
    <>
      {/* Toggle Button - Seulement visible quand fermé */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 right-8 -translate-y-1/2 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="icon"
              variant="outline"
              className="h-12 w-12 rounded-full shadow-lg"
            >
              <Palette className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-1/2 -translate-y-1/2 right-4 z-40 w-90"
      >
        <Card className="shadow-xl  flex flex-col bg-background/20 backdrop-blur-sm">
          <CardHeader className="flex-shrink-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Theme Control</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="flex-1 overflow-y-auto">
            <TooltipProvider>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-foreground font-medium">
                      Current Theme
                    </p>
                    <ModeToggle />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground capitalize">
                      <p className="border-r border-border pr-2">{mode}</p>
                      <p>{config.base}</p>
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
                    </div>
                    <Button variant="ghost" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Separator />
                {/* <div className="flex items-center gap-2 p-3 rounded-lg">
                  <span className="font-medium capitalize">{config.base}</span>
                  <AnimatePresence mode="wait">
                    {config.brand && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-muted-foreground">+</span>
                        <span>{config.brand}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div> */}

                {/* Base Palette Selection */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">Base Palette</h3>
                  {/* Neutral Themes */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Neutral</p>
                    <div className="flex gap-2">
                      {neutralThemes.map((theme) => (
                        <PaletteButton
                          key={theme}
                          paletteName={theme}
                          mode={mode}
                          isSelected={config.base === theme}
                          onClick={() => setBase(theme)}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Brand Themes */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Monotone</p>
                    <div className="flex gap-2 flex-wrap">
                      {brandThemes.map((theme) => (
                        <PaletteButton
                          key={theme}
                          paletteName={theme}
                          mode={mode}
                          isSelected={config.base === theme}
                          onClick={() => setBase(theme)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Brand Accent Selection (only for neutral bases) */}
                <AnimatePresence mode="wait">
                  {isNeutralBase && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <Separator />
                      <div className="space-y-3 pt-6">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-sm">Brand Accent</h3>
                          <AnimatePresence>
                            {config.brand && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setBrand(undefined)}
                                  className="h-6 px-2 text-xs"
                                >
                                  Clear
                                </Button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {compatibleBrands.map((brand) => (
                            <PaletteButton
                              key={brand}
                              paletteName={brand}
                              mode={mode}
                              isSelected={config.brand === brand}
                              onClick={() => setBrand(brand)}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Primary Intensity (only when brand is selected) */}
                <AnimatePresence mode="wait">
                  {config.brand && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <Separator />
                      <div className="space-y-3 pt-6">
                        <h3 className="font-medium text-sm">
                          Primary Intensity
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            variant={
                              config.primaryIntensity === "vibrant"
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() => setPrimaryIntensity("vibrant")}
                            className="text-xs transition-all duration-200"
                          >
                            Vibrant
                          </Button>
                          <Button
                            variant={
                              config.primaryIntensity === "high-contrast"
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() => setPrimaryIntensity("high-contrast")}
                            className="text-xs transition-all duration-200"
                          >
                            High Contrast
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
