import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import {
  allRadixPalettes,
  destructivePairings,
  radixGrayScales,
  RadixGrayScale,
} from "./lib/colors/themes";
import { lightMap, darkMap } from "./lib/colors/color-mapping";

type Mode = "light" | "dark";
type Variant = "solid" | "alpha";

type MappingEntry = {
  token: string;
  scale: number;
  variant: Variant;
  comment: string;
};

// Pour trouver la couleur destructive liée à une palette donnée
const getDestructiveColor = (
  paletteName: keyof typeof allRadixPalettes
): keyof typeof allRadixPalettes => {
  return radixGrayScales.includes(paletteName as RadixGrayScale)
    ? "red"
    : (destructivePairings[
        paletteName as keyof typeof destructivePairings
      ] as keyof typeof allRadixPalettes);
};
// Récupère la valeur hex d’un token radix
const getHex = (
  palette: Record<string, string>,
  scale: number,
  variant: Variant
): string => {
  return palette[`${scale}${variant === "alpha" ? "A" : ""}`];
};

const generateCSS = (
  name: keyof typeof allRadixPalettes,
  lightPalette: Record<string, string>,
  darkPalette: Record<string, string>,
  lightMap: MappingEntry[],
  darkMap: MappingEntry[]
) => {
  const destructiveName = getDestructiveColor(
    name
  ) as keyof typeof allRadixPalettes;
  const destructiveLight = (
    allRadixPalettes[destructiveName].light as Record<string, string>
  )[`${destructiveName}9`];
  const destructiveDark = (
    allRadixPalettes[destructiveName].dark as Record<string, string>
  )[`${destructiveName}9`];

  const toVars = (
    map: MappingEntry[],
    palette: Record<string, string>,
    mode: Mode
  ): string[] => {
    const base = map.map(({ token, scale, variant, comment }) => {
      const value = getHex(palette, scale, variant);
      return `  --${token}: ${value}; /* ${comment} */`;
    });

    base.push(
      `  --destructive: ${
        mode === "light" ? destructiveLight : destructiveDark
      }; /* radix ${destructiveName} 9 */`
    );

    return base;
  };

  const lightVars = toVars(lightMap, lightPalette, "light").join("\n");
  const darkVars = toVars(darkMap, darkPalette, "dark").join("\n");

  return `/* Generated theme: ${name} */\n\n:root {\n${lightVars}\n}\n\n.dark {\n${darkVars}\n}`;
};

const outputDir = join(process.cwd(), "public", "themes");
mkdirSync(outputDir, { recursive: true });

Object.entries(allRadixPalettes).forEach(([paletteName, paletteData]) => {
  const css = generateCSS(
    paletteName as keyof typeof allRadixPalettes,
    paletteData.light,
    paletteData.dark,
    lightMap,
    darkMap
  );

  const path = join(outputDir, `${paletteName}.css`);
  writeFileSync(path, css, "utf8");
  console.log(`✅ Generated ${path}`);
});
