"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRadixTheme } from "./radix-theme-provider";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { TooltipProvider } from "./ui/tooltip";
import { Palette, X } from "lucide-react";
import { radixGrayScales } from "@/lib/colors/themes";
import { CurrentThemeDisplay } from "./current-theme-display";
import { PaletteButton } from "./palette-button";

const MotionCard = motion(Card);

export function ThemeControlPanel() {
  const [isOpen, setIsOpen] = useState(true);
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
        <MotionCard
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shadow-xl flex flex-col bg-background/95 backdrop-blur-sm"
        >
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
          <CardContent className="flex-1 overflow-hidden">
            <TooltipProvider>
              <motion.div layout className="space-y-6 will-change-transform">
                <CurrentThemeDisplay mode={mode} />
                <Separator />
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
                <AnimatePresence initial={false}>
                  {isNeutralBase && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <Separator className="mt-6" />
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
                              tooltipLabel={`Brand: ${brand}`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Primary Intensity (only when brand is selected) */}
                <AnimatePresence initial={false}>
                  {config.brand && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <Separator className="mt-6" />
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
              </motion.div>
            </TooltipProvider>
          </CardContent>
        </MotionCard>
      </motion.div>
    </>
  );
}
