import {
  allRadixPalettes,
  radixGrayScales,
  naturalPairings,
  destructivePairings,
  radixBrandScalesWithLightForeground,
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

// A Radix color scale is a record of color steps (e.g., "blue1", "blue2") to HSL values.
type RadixScale = Record<string, string>;

export function getThemeType(config: ThemeConfig): ThemeType {
  if ((radixGrayScales as readonly string[]).includes(config.base)) {
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
  const isLightForeground = (
    radixBrandScalesWithLightForeground as readonly string[]
  ).includes(brand);

  if (intensity === "high-contrast") {
    // High contrast: light foreground in light mode, dark foreground in dark mode
    return mode === "light"
      ? (palette.light as RadixScale)[`${brand}1`]!
      : (palette.dark as RadixScale)[`${brand}1`]!;
  }

  // Vibrant (scale 9): depends on the brand color
  return isLightForeground ? "#fff" : "#1D211C";
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
      ? (palette.lightA as RadixScale)[`${brand}A${scale}`]!
      : (palette.light as RadixScale)[`${brand}${scale}`]!;
  } else {
    return intensity === "high-contrast"
      ? (palette.darkA as RadixScale)[`${brand}A${scale}`]!
      : (palette.dark as RadixScale)[`${brand}${scale}`]!;
  }
}

export function generateChartColors(
  brand: AllRadixBrandScales,
  mode: "light" | "dark"
): Record<string, string> {
  const palette = allRadixPalettes[brand];
  const colors = (
    mode === "light" ? palette.light : palette.dark
  ) as RadixScale;

  return {
    "chart-1": colors[`${brand}9`]!,
    "chart-2": colors[`${brand}7`]!,
    "chart-3": colors[`${brand}3`]!,
    "chart-4": colors[`${brand}5`]!,
    "chart-5": colors[`${brand}12`]!,
  };
}

function generateStaticThemeCSS(
  basePalette: string,
  includeComments: boolean = true
): string {
  const palette =
    allRadixPalettes[basePalette as keyof typeof allRadixPalettes];
  const destructiveColor = getDestructiveColor({
    base: basePalette,
    primaryIntensity: "vibrant",
  } as ThemeConfig);
  const destructivePalette = allRadixPalettes[destructiveColor];

  let css = includeComments ? `/* Generated theme: ${basePalette} */\n\n` : "";

  // Light mode
  css += ":root {\n";
  lightMap.forEach((entry: MappingEntry) => {
    let value: string;
    let comment: string;

    if (entry.token === "destructive") {
      value = (destructivePalette.light as RadixScale)[`${destructiveColor}9`]!;
      comment = `${destructiveColor} 9`;
    } else {
      // Use base palette
      const colors = (
        entry.variant === "alpha" ? palette.lightA : palette.light
      ) as RadixScale;
      const colorKey =
        entry.variant === "alpha"
          ? `${basePalette}A${entry.scale}`
          : `${basePalette}${entry.scale}`;
      value = colors[colorKey]!;
      comment = `${basePalette} ${entry.scale}${
        entry.variant === "alpha" ? " A" : ""
      }`;
    }

    css += includeComments
      ? `  --${entry.token}: ${value}; /* ${comment} */\n`
      : `  --${entry.token}: ${value};\n`;
  });
  css += "}\n\n";

  // Dark mode
  css += ".dark {\n";
  darkMap.forEach((entry: MappingEntry) => {
    let value: string;
    let comment: string;

    if (entry.token === "destructive") {
      value = (destructivePalette.dark as RadixScale)[`${destructiveColor}9`]!;
      comment = `${destructiveColor} 9`;
    } else {
      // Use base palette
      const colors = (
        entry.variant === "alpha" ? palette.darkA : palette.dark
      ) as RadixScale;
      const colorKey =
        entry.variant === "alpha"
          ? `${basePalette}A${entry.scale}`
          : `${basePalette}${entry.scale}`;
      value = colors[colorKey]!;
      comment = `${basePalette} ${entry.scale}${
        entry.variant === "alpha" ? " A" : ""
      }`;
    }

    css += includeComments
      ? `  --${entry.token}: ${value}; /* ${comment} */\n`
      : `  --${entry.token}: ${value};\n`;
  });
  css += "}\n";

  return css;
}

export function generateThemeCSS(
  config: ThemeConfig,
  includeComments: boolean = true
): string {
  const themeType = getThemeType(config);
  const basePalette = config.base;
  const destructiveColor = getDestructiveColor(config);

  // For monotone and neutral themes, generate CSS from palettes
  if (themeType === "monotone" || themeType === "neutral") {
    return generateStaticThemeCSS(basePalette, includeComments);
  }

  // For neutral + brand themes, generate custom CSS
  const neutralPalette = allRadixPalettes[basePalette as RadixGrayScale];
  const destructivePalette = allRadixPalettes[destructiveColor];

  let css = includeComments
    ? `/* Generated theme: ${basePalette} + ${config.brand} (${config.primaryIntensity}) */\n\n`
    : "";

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
          : (radixBrandScalesWithLightForeground as readonly string[]).includes(
              config.brand!
            )
          ? "1"
          : "12"
      }`;
    } else if (entry.token.startsWith("chart-")) {
      const chartColors = generateChartColors(config.brand!, "light");
      value = chartColors[entry.token]!;
      comment = `${config.brand} ${entry.scale}`;
    } else if (entry.token === "destructive") {
      value = (destructivePalette.light as RadixScale)[`${destructiveColor}9`]!;
      comment = `${destructiveColor} 9`;
    } else {
      // Use neutral palette
      const colors = (
        entry.variant === "alpha" ? neutralPalette.lightA : neutralPalette.light
      ) as RadixScale;
      const colorKey =
        entry.variant === "alpha"
          ? `${basePalette}A${entry.scale}`
          : `${basePalette}${entry.scale}`;
      value = colors[colorKey]!;
      comment = `${basePalette} ${entry.scale}${
        entry.variant === "alpha" ? " A" : ""
      }`;
    }

    css += includeComments
      ? `  --${entry.token}: ${value}; /* ${comment} */\n`
      : `  --${entry.token}: ${value};\n`;
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
          ? "1"
          : (radixBrandScalesWithLightForeground as readonly string[]).includes(
              config.brand!
            )
          ? "12"
          : "1"
      }`;
    } else if (entry.token.startsWith("chart-")) {
      const chartColors = generateChartColors(config.brand!, "dark");
      value = chartColors[entry.token]!;
      comment = `${config.brand} ${entry.scale}`;
    } else if (entry.token === "destructive") {
      value = (destructivePalette.dark as RadixScale)[`${destructiveColor}9`]!;
      comment = `${destructiveColor} 9`;
    } else {
      // Use neutral palette
      const colors = (
        entry.variant === "alpha" ? neutralPalette.darkA : neutralPalette.dark
      ) as RadixScale;
      const colorKey =
        entry.variant === "alpha"
          ? `${basePalette}A${entry.scale}`
          : `${basePalette}${entry.scale}`;
      value = colors[colorKey]!;
      comment = `${basePalette} ${entry.scale}${
        entry.variant === "alpha" ? " A" : ""
      }`;
    }

    css += includeComments
      ? `  --${entry.token}: ${value}; /* ${comment} */\n`
      : `  --${entry.token}: ${value};\n`;
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
