"use client";

import { useState } from "react";
import { useRadixTheme } from "./radix-theme-provider";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Palette, X, ChevronRight } from "lucide-react";
import { radixGrayScales } from "@/lib/colors/themes";
import { cn } from "@/lib/utils";

const themeColors = {
  // Neutral colors
  gray: "#8B8D98",
  mauve: "#8E8D95",
  slate: "#8B8F98",
  sage: "#87948B",
  olive: "#8B918B",
  sand: "#908B86",

  // Brand colors
  bronze: "#A0815E",
  gold: "#978365",
  brown: "#A08072",
  orange: "#FF8B3E",
  tomato: "#E5484D",
  red: "#E5484D",
  ruby: "#E54B4B",
  crimson: "#E93D82",
  pink: "#E93D82",
  plum: "#AB4ABA",
  purple: "#8E4EC6",
  violet: "#6E56CF",
  iris: "#5B5BD6",
  indigo: "#3E63DD",
  blue: "#0090FF",
  cyan: "#00A2C7",
  teal: "#12A594",
  jade: "#29A383",
  green: "#46A758",
  grass: "#46A758",
  sky: "#7CE2FE",
  mint: "#86EAD4",
  lime: "#BDEE63",
  yellow: "#FFE629",
  amber: "#FFC53D",
};

export function ThemeControlPanel() {
  const [isOpen, setIsOpen] = useState(false);
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
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        variant="outline"
        className="fixed top-1/2 right-4 -translate-y-1/2 z-50 h-12 w-12 rounded-full shadow-lg"
      >
        {isOpen ? (
          <ChevronRight className="h-5 w-5" />
        ) : (
          <Palette className="h-5 w-5" />
        )}
      </Button>

      {/* Control Panel */}
      <div
        className={cn(
          "fixed top-1/2 -translate-y-1/2 right-4 z-40 w-80 transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Card className="shadow-xl">
          <CardHeader className="pb-3">
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
          <CardContent className="space-y-6">
            {/* Current Theme Display */}
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    themeColors[config.base as keyof typeof themeColors],
                }}
              />
              <span className="font-medium capitalize">{config.base}</span>
              {config.brand && (
                <>
                  <span className="text-muted-foreground">+</span>
                  <Badge variant="secondary" className="text-xs">
                    {config.brand}
                  </Badge>
                </>
              )}
            </div>

            {/* Base Palette Selection */}
            <div className="space-y-3">
              <h3 className="font-medium text-sm">Base Palette</h3>

              {/* Neutral Themes */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Neutral</p>
                <div className="grid grid-cols-6 gap-2">
                  {neutralThemes.map((theme) => (
                    <Button
                      key={theme}
                      variant="ghost"
                      size="sm"
                      onClick={() => setBase(theme)}
                      className={cn(
                        "h-8 w-8 p-0 rounded-full",
                        config.base === theme && "ring-2 ring-primary"
                      )}
                      style={{
                        backgroundColor:
                          themeColors[theme as keyof typeof themeColors],
                      }}
                      title={theme}
                    >
                      {config.base === theme && (
                        <span className="text-white text-xs">✓</span>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Brand Themes */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Monotone</p>
                <div className="grid grid-cols-6 gap-2">
                  {brandThemes.map((theme) => (
                    <Button
                      key={theme}
                      variant="ghost"
                      size="sm"
                      onClick={() => setBase(theme)}
                      className={cn(
                        "h-8 w-8 p-0 rounded-full",
                        config.base === theme && "ring-2 ring-primary"
                      )}
                      style={{
                        backgroundColor:
                          themeColors[theme as keyof typeof themeColors],
                      }}
                      title={theme}
                    >
                      {config.base === theme && (
                        <span className="text-white text-xs">✓</span>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Brand Accent Selection (only for neutral bases) */}
            {isNeutralBase && (
              <>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-sm">Brand Accent</h3>
                    {config.brand && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setBrand(undefined)}
                        className="h-6 px-2 text-xs"
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {compatibleBrands.map((brand) => (
                      <Button
                        key={brand}
                        variant="ghost"
                        size="sm"
                        onClick={() => setBrand(brand)}
                        className={cn(
                          "h-8 w-8 p-0 rounded-full",
                          config.brand === brand && "ring-2 ring-primary"
                        )}
                        style={{
                          backgroundColor:
                            themeColors[brand as keyof typeof themeColors],
                        }}
                        title={brand}
                      >
                        {config.brand === brand && (
                          <span className="text-white text-xs">✓</span>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Primary Intensity (only when brand is selected) */}
            {config.brand && (
              <>
                <Separator />
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">Primary Intensity</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={
                        config.primaryIntensity === "vibrant"
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => setPrimaryIntensity("vibrant")}
                      className="text-xs"
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
                      className="text-xs"
                    >
                      High Contrast
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
