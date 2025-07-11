"use client";

import { useRadixTheme } from "./radix-theme-provider";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { Palette, X } from "lucide-react";
import { radixGrayScales } from "@/lib/colors/themes";

function ThemeSelectorContent() {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Theme selector</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {/* Base Theme Selection */}
        <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
          Base Palette
        </div>
        <DropdownMenuSeparator />

        {/* Neutral Palettes */}
        <div className="px-2 py-1 text-xs font-medium text-muted-foreground">
          Neutral
        </div>
        {radixGrayScales.map((neutral) => (
          <DropdownMenuItem
            key={neutral}
            onClick={() => setBase(neutral)}
            className={config.base === neutral ? "bg-accent" : ""}
          >
            <div className="flex items-center justify-between w-full">
              <span className="capitalize">{neutral}</span>
              {config.base === neutral && (
                <span className="text-xs text-muted-foreground">✓</span>
              )}
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        {/* Monotone Palettes */}
        <div className="px-2 py-1 text-xs font-medium text-muted-foreground">
          Monotone
        </div>
        {availableThemes
          .filter(
            (theme) => !(radixGrayScales as readonly string[]).includes(theme)
          )
          .map((brand) => (
            <DropdownMenuItem
              key={brand}
              onClick={() => setBase(brand)}
              className={config.base === brand ? "bg-accent" : ""}
            >
              <div className="flex items-center justify-between w-full">
                <span className="capitalize">{brand}</span>
                {config.base === brand && (
                  <span className="text-xs text-muted-foreground">✓</span>
                )}
              </div>
            </DropdownMenuItem>
          ))}

        {/* Brand Selection (only for neutral bases) */}
        {isNeutralBase && (
          <>
            <DropdownMenuSeparator />
            <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
              Brand Accent
            </div>

            {/* Current Brand Display */}
            <div className="px-2 py-1 flex items-center gap-2">
              {config.brand ? (
                <Badge variant="secondary" className="text-xs">
                  {config.brand}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 ml-1"
                    onClick={() => setBrand(undefined)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ) : (
                <span className="text-xs text-muted-foreground">None</span>
              )}
            </div>

            {/* Brand Options */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="text-sm">
                Choose Brand
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="max-h-64 overflow-y-auto">
                {compatibleBrands.map((brand) => (
                  <DropdownMenuItem
                    key={brand}
                    onClick={() => setBrand(brand)}
                    className={config.brand === brand ? "bg-accent" : ""}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="capitalize">{brand}</span>
                      {config.brand === brand && (
                        <span className="text-xs text-muted-foreground">✓</span>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </>
        )}

        {/* Primary Intensity (only when brand is selected) */}
        {config.brand && (
          <>
            <DropdownMenuSeparator />
            <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
              Primary Intensity
            </div>

            <DropdownMenuItem
              onClick={() => setPrimaryIntensity("vibrant")}
              className={
                config.primaryIntensity === "vibrant" ? "bg-accent" : ""
              }
            >
              <div className="flex items-center justify-between w-full">
                <span>Vibrant</span>
                {config.primaryIntensity === "vibrant" && (
                  <span className="text-xs text-muted-foreground">✓</span>
                )}
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => setPrimaryIntensity("high-contrast")}
              className={
                config.primaryIntensity === "high-contrast" ? "bg-accent" : ""
              }
            >
              <div className="flex items-center justify-between w-full">
                <span>High Contrast</span>
                {config.primaryIntensity === "high-contrast" && (
                  <span className="text-xs text-muted-foreground">✓</span>
                )}
              </div>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeSelector() {
  try {
    return <ThemeSelectorContent />;
  } catch {
    return (
      <Button variant="outline" size="icon" disabled>
        <Palette className="h-4 w-4" />
        <span className="sr-only">Theme selector</span>
      </Button>
    );
  }
}
