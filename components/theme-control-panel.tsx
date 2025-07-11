"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRadixTheme } from "./radix-theme-provider";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Palette, X } from "lucide-react";
import { radixGrayScales, allRadixPalettes } from "@/lib/colors/themes";
import { cn } from "@/lib/utils";

// Créer un cercle avec gradient de toute la palette
const createPaletteGradient = (paletteName: string) => {
  const palette =
    allRadixPalettes[paletteName as keyof typeof allRadixPalettes];
  if (!palette) return "#8B8D98";

  const colors = Object.values(palette.light);
  const step = 360 / colors.length;

  return `conic-gradient(${colors
    .map(
      (color, index) => `${color} ${index * step}deg ${(index + 1) * step}deg`
    )
    .join(", ")})`;
};

export function ThemeControlPanel() {
  const [isOpen, setIsOpen] = useState(true); // Ouvert par défaut
  const {
    config,
    availableThemes,
    compatibleBrands,
    setBase,
    setBrand,
    setPrimaryIntensity,
  } = useRadixTheme();

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
            className="fixed top-1/2 right-4 -translate-y-1/2 z-50"
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
        className="fixed top-1/2 -translate-y-1/2 right-4 z-40 w-72"
      >
        <Card className="shadow-xl h-[85vh] flex flex-col bg-background/20 backdrop-blur-sm">
          <CardHeader className="pb-3 flex-shrink-0">
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
          <CardContent className="flex-1 overflow-y-auto">
            <TooltipProvider>
              <div className="space-y-6">
                {/* Current Theme Display */}
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <div
                    className="w-6 h-6 rounded-full border-2 border-border"
                    style={{ background: createPaletteGradient(config.base) }}
                  />
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
                        <Badge variant="secondary" className="text-xs">
                          {config.brand}
                        </Badge>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Base Palette Selection */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">Base Palette</h3>

                  {/* Neutral Themes */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Neutral</p>
                    <div className="grid grid-cols-6 gap-2">
                      {neutralThemes.map((theme) => (
                        <Tooltip key={theme}>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setBase(theme)}
                              className={cn(
                                "h-6 w-6 p-0 rounded-full transition-all duration-200",
                                config.base === theme && "ring-2 ring-primary"
                              )}
                              style={{
                                background: createPaletteGradient(theme),
                              }}
                            >
                              {config.base === theme && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="text-white text-xs font-bold drop-shadow-md"
                                >
                                  ✓
                                </motion.span>
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{theme}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>

                  {/* Brand Themes */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Monotone</p>
                    <div className="grid grid-cols-6 gap-2">
                      {brandThemes.map((theme) => (
                        <Tooltip key={theme}>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setBase(theme)}
                              className={cn(
                                "h-6 w-6 p-0 rounded-full transition-all duration-200",
                                config.base === theme && "ring-2 ring-primary"
                              )}
                              style={{
                                background: createPaletteGradient(theme),
                              }}
                            >
                              {config.base === theme && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="text-white text-xs font-bold drop-shadow-md"
                                >
                                  ✓
                                </motion.span>
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{theme}</p>
                          </TooltipContent>
                        </Tooltip>
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
                        <div className="grid grid-cols-6 gap-2">
                          {compatibleBrands.map((brand) => (
                            <Tooltip key={brand}>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setBrand(brand)}
                                  className={cn(
                                    "h-6 w-6 p-0 rounded-full transition-all duration-200",
                                    config.brand === brand &&
                                      "ring-2 ring-primary"
                                  )}
                                  style={{
                                    background: createPaletteGradient(brand),
                                  }}
                                >
                                  {config.brand === brand && (
                                    <motion.span
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="text-white text-xs font-bold drop-shadow-md"
                                    >
                                      ✓
                                    </motion.span>
                                  )}
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{brand}</p>
                              </TooltipContent>
                            </Tooltip>
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
