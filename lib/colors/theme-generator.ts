import {
  allRadixPalettes,
  radixGrayScales,
  naturalPairings,
  destructivePairings,
  radixBrandScalesWithLightForeground,
  radixBrandScalesWithDarkForeground,
  type AllRadixBrandScales,
  type RadixGrayScale,
  type DestructiveColor,
} from "./themes";
import { lightMap, darkMap, type MappingEntry } from "./color-mapping";

export type PrimaryIntensity = "vibrant" | "high-contrast";

export type ThemeConfig = {
  base: RadixGrayScale | AllRadixBrandScales;
  brand?: AllRadixBrandScales;
  primaryIntensity: PrimaryIntensity;
};

export type ThemeType = "monotone" | "neutral" | "neutral-with-brand";

export function getThemeType(config: ThemeConfig): ThemeType {
  if (radixGrayScales.includes(config.base as RadixGrayScale)) {
    return config.brand ? "neutral-with-brand" : "neutral";
  }
  return "monotone";
}

export function getCompatibleBrands(
  neutral: RadixGrayScale
): AllRadixBrandScales[] {
  return naturalPairings[neutral];
}

export function getDefaultBrand(neutral: RadixGrayScale): AllRadixBrandScales {
  return naturalPairings[neutral][0];
}

export function getDestructiveColor(config: ThemeConfig): DestructiveColor {
  if (config.brand) {
    return destructivePairings[config.brand];
  }
  return "red";
}

export function getPrimaryForegroundColor(
  brand: AllRadixBrandScales,
  intensity: PrimaryIntensity,
  mode: "light" | "dark"
): string {
  const palette = allRadixPalettes[brand];
  const isLightForeground = radixBrandScalesWithLightForeground.includes(
    brand as any
  );

  if (intensity === "high-contrast") {
    // High contrast: light foreground in light mode, dark foreground in dark mode
    return mode === "light"
      ? (palette.light as any)[`${brand}1`]
      : (palette.dark as any)[`${brand}12`];
  }

  // Vibrant (scale 9): depends on the brand color
  if (isLightForeground) {
    return "#fff";
  } else {
    return "#1D211C";
  }
}

export function getPrimaryColor(
  brand: AllRadixBrandScales,
  intensity: PrimaryIntensity,
  mode: "light" | "dark"
): string {
  const palette = allRadixPalettes[brand];
  const scale = intensity === "high-contrast" ? 12 : 9;

  if (mode === "light") {
    return intensity === "high-contrast"
      ? (palette.lightA as any)[`${brand}${scale}`]
      : (palette.light as any)[`${brand}${scale}`];
  } else {
    return intensity === "high-contrast"
      ? (palette.darkA as any)[`${brand}${scale}`]
      : (palette.dark as any)[`${brand}${scale}`];
  }
}

export function generateChartColors(
  brand: AllRadixBrandScales,
  mode: "light" | "dark"
): Record<string, string> {
  const palette = allRadixPalettes[brand];
  const colors = mode === "light" ? palette.light : palette.dark;

  return {
    "chart-1": (colors as any)[`${brand}9`],
    "chart-2": (colors as any)[`${brand}7`],
    "chart-3": (colors as any)[`${brand}3`],
    "chart-4": (colors as any)[`${brand}5`],
    "chart-5": (colors as any)[`${brand}12`],
  };
}

export function generateThemeCSS(config: ThemeConfig): string {
  const themeType = getThemeType(config);
  const basePalette = config.base;
  const destructiveColor = getDestructiveColor(config);

  // For monotone themes, use existing CSS files
  if (themeType === "monotone") {
    return `/* Use existing CSS file: /themes/${basePalette}.css */`;
  }

  // For neutral themes without brand, use existing CSS files
  if (themeType === "neutral") {
    return `/* Use existing CSS file: /themes/${basePalette}.css */`;
  }

  // For neutral + brand themes, generate custom CSS
  const neutralPalette = allRadixPalettes[basePalette as RadixGrayScale];
  const brandPalette = allRadixPalettes[config.brand!];
  const destructivePalette = allRadixPalettes[destructiveColor];

  let css = `/* Generated theme: ${basePalette} + ${config.brand} (${config.primaryIntensity}) */\n\n`;

  // Light mode
  css += ":root {\n";
  lightMap.forEach((entry: MappingEntry) => {
    let value: string;
    let comment: string;

    // Override primary colors with brand
    if (entry.token === "primary") {
      value = getPrimaryColor(config.brand!, config.primaryIntensity, "light");
      comment = `${config.brand} ${
        config.primaryIntensity === "high-contrast" ? "12 A" : "9"
      }`;
    } else if (entry.token === "primary-foreground") {
      value = getPrimaryForegroundColor(
        config.brand!,
        config.primaryIntensity,
        "light"
      );
      comment = `${config.brand} ${
        config.primaryIntensity === "high-contrast"
          ? "1"
          : radixBrandScalesWithLightForeground.includes(config.brand! as any)
          ? "1"
          : "12"
      }`;
    } else if (entry.token.startsWith("chart-")) {
      const chartColors = generateChartColors(config.brand!, "light");
      value = chartColors[entry.token];
      comment = `${config.brand} ${entry.scale}`;
    } else if (entry.token === "destructive") {
      value = (destructivePalette.light as any)[`${destructiveColor}9`];
      comment = `${destructiveColor} 9`;
    } else {
      // Use neutral palette
      const colors =
        entry.variant === "alpha"
          ? neutralPalette.lightA
          : neutralPalette.light;
      const colorKey =
        entry.variant === "alpha"
          ? `${basePalette}A${entry.scale}`
          : `${basePalette}${entry.scale}`;
      value = (colors as any)[colorKey];
      comment = `${basePalette} ${entry.scale}${
        entry.variant === "alpha" ? " A" : ""
      }`;
    }

    css += `  --${entry.token}: ${value}; /* ${comment} */\n`;
  });
  css += "}\n\n";

  // Dark mode
  css += ".dark {\n";
  darkMap.forEach((entry: MappingEntry) => {
    let value: string;
    let comment: string;

    // Override primary colors with brand
    if (entry.token === "primary") {
      value = getPrimaryColor(config.brand!, config.primaryIntensity, "dark");
      comment = `${config.brand} ${
        config.primaryIntensity === "high-contrast" ? "12 A" : "9"
      }`;
    } else if (entry.token === "primary-foreground") {
      value = getPrimaryForegroundColor(
        config.brand!,
        config.primaryIntensity,
        "dark"
      );
      comment = `${config.brand} ${
        config.primaryIntensity === "high-contrast"
          ? "12"
          : radixBrandScalesWithLightForeground.includes(config.brand! as any)
          ? "12"
          : "1"
      }`;
    } else if (entry.token.startsWith("chart-")) {
      const chartColors = generateChartColors(config.brand!, "dark");
      value = chartColors[entry.token];
      comment = `${config.brand} ${entry.scale}`;
    } else if (entry.token === "destructive") {
      value = (destructivePalette.dark as any)[`${destructiveColor}9`];
      comment = `${destructiveColor} 9`;
    } else {
      // Use neutral palette
      const colors =
        entry.variant === "alpha" ? neutralPalette.darkA : neutralPalette.dark;
      const colorKey =
        entry.variant === "alpha"
          ? `${basePalette}A${entry.scale}`
          : `${basePalette}${entry.scale}`;
      value = (colors as any)[colorKey];
      comment = `${basePalette} ${entry.scale}${
        entry.variant === "alpha" ? " A" : ""
      }`;
    }

    css += `  --${entry.token}: ${value}; /* ${comment} */\n`;
  });
  css += "}\n";

  return css;
}

export function applyThemeCSS(config: ThemeConfig) {
  const themeType = getThemeType(config);

  // Remove existing dynamic styles
  const existingStyle = document.getElementById("dynamic-theme-style");
  if (existingStyle) {
    existingStyle.remove();
  }

  // For monotone and neutral themes, use existing CSS files
  if (themeType === "monotone" || themeType === "neutral") {
    const stylesheet = document.getElementById(
      "theme-stylesheet"
    ) as HTMLLinkElement;
    if (stylesheet) {
      stylesheet.href = `/themes/${config.base}.css`;
    }
    return;
  }

  // For neutral + brand themes, inject dynamic CSS
  const css = generateThemeCSS(config);
  const style = document.createElement("style");
  style.id = "dynamic-theme-style";
  style.textContent = css;
  document.head.appendChild(style);

  // Remove the static stylesheet
  const stylesheet = document.getElementById(
    "theme-stylesheet"
  ) as HTMLLinkElement;
  if (stylesheet) {
    stylesheet.href = "";
  }
}
