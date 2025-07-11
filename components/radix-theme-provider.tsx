"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  allRadixPalettes,
  radixGrayScales,
  type AllRadixBrandScales,
  type RadixGrayScale,
} from "../lib/colors/themes";
import {
  type ThemeConfig,
  type PrimaryIntensity,
  getCompatibleBrands,
  getDefaultBrand,
  applyThemeCSS,
  generateThemeCSS,
} from "../lib/colors/theme-generator";

type RadixTheme = keyof typeof allRadixPalettes;

interface RadixThemeContextType {
  config: ThemeConfig;
  setConfig: (config: ThemeConfig) => void;
  availableThemes: RadixTheme[];
  compatibleBrands: AllRadixBrandScales[];
  generatedCSS: string;
  setBase: (base: RadixGrayScale | AllRadixBrandScales) => void;
  setBrand: (brand: AllRadixBrandScales | undefined) => void;
  setPrimaryIntensity: (intensity: PrimaryIntensity) => void;
}

const RadixThemeContext = createContext<RadixThemeContextType | undefined>(
  undefined
);

const THEME_CONFIG_KEY = "radix-theme-config";

export function RadixThemeProvider({
  children,
  defaultConfig = {
    base: "sage",
    primaryIntensity: "vibrant",
  },
}: {
  children: React.ReactNode;
  defaultConfig?: ThemeConfig;
}) {
  const [config, setConfigState] = useState<ThemeConfig>(defaultConfig);
  const [mounted, setMounted] = useState(false);

  const availableThemes: RadixTheme[] = Object.keys(
    allRadixPalettes
  ) as RadixTheme[];

  const compatibleBrands =
    config.base && radixGrayScales.includes(config.base as RadixGrayScale)
      ? getCompatibleBrands(config.base as RadixGrayScale)
      : [];

  const generatedCSS = generateThemeCSS(config);

  // Load config from localStorage on mount
  useEffect(() => {
    const storedConfig = localStorage.getItem(THEME_CONFIG_KEY);
    if (storedConfig) {
      try {
        const parsed = JSON.parse(storedConfig) as ThemeConfig;
        setConfigState(parsed);
      } catch (error) {
        console.warn("Failed to parse stored theme config:", error);
      }
    }
    setMounted(true);
  }, []);

  // Apply theme when config changes
  useEffect(() => {
    if (!mounted) return;

    applyThemeCSS(config);
    localStorage.setItem(THEME_CONFIG_KEY, JSON.stringify(config));
  }, [config, mounted]);

  const setConfig = (newConfig: ThemeConfig) => {
    setConfigState(newConfig);
  };

  const setBase = (base: RadixGrayScale | AllRadixBrandScales) => {
    const newConfig: ThemeConfig = {
      base,
      primaryIntensity: config.primaryIntensity,
    };

    // If switching to a neutral palette and we had a brand, try to keep a compatible brand
    if (radixGrayScales.includes(base as RadixGrayScale)) {
      const compatibleBrands = getCompatibleBrands(base as RadixGrayScale);
      if (config.brand && compatibleBrands.includes(config.brand)) {
        newConfig.brand = config.brand;
      } else if (config.brand) {
        // Fallback to default brand if current brand is not compatible
        newConfig.brand = getDefaultBrand(base as RadixGrayScale);
      }
    }

    setConfigState(newConfig);
  };

  const setBrand = (brand: AllRadixBrandScales | undefined) => {
    setConfigState({
      ...config,
      brand,
    });
  };

  const setPrimaryIntensity = (intensity: PrimaryIntensity) => {
    setConfigState({
      ...config,
      primaryIntensity: intensity,
    });
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <RadixThemeContext.Provider
      value={{
        config,
        setConfig,
        availableThemes,
        compatibleBrands,
        generatedCSS,
        setBase,
        setBrand,
        setPrimaryIntensity,
      }}
    >
      {children}
    </RadixThemeContext.Provider>
  );
}

export function useRadixTheme() {
  const context = useContext(RadixThemeContext);
  if (!context) {
    if (process.env.NODE_ENV === "development") {
      console.warn("useRadixTheme used outside of RadixThemeProvider");
    }
    const defaultConfig: ThemeConfig = {
      base: "sage",
      primaryIntensity: "vibrant",
    };
    return {
      config: defaultConfig,
      setConfig: () => {},
      availableThemes: Object.keys(allRadixPalettes) as RadixTheme[],
      compatibleBrands: getCompatibleBrands("sage"),
      generatedCSS: generateThemeCSS(defaultConfig),
      setBase: () => {},
      setBrand: () => {},
      setPrimaryIntensity: () => {},
    };
  }
  return context;
}
