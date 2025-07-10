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

const toVars = (
  map: MappingEntry[],
  palette: Record<string, string>,
  paletteA: Record<string, string>,
  mode: Mode,
  paletteName: string
): string[] => {
  const base = map.map(({ token, scale, variant, comment }) => {
    const pal = variant === "alpha" ? paletteA : palette;
    const key = `${paletteName}${variant === "alpha" ? "A" : ""}${scale}`;
    const value = pal[key];
    return `  --${token}: ${value}; /* ${comment} */`;
  });

  const destructiveName = getDestructiveColor(
    paletteName as keyof typeof allRadixPalettes
  ) as keyof typeof allRadixPalettes;
  const destructiveLight = (
    allRadixPalettes[destructiveName].light as Record<string, string>
  )[`${destructiveName}9`];
  const destructiveDark = (
    allRadixPalettes[destructiveName].dark as Record<string, string>
  )[`${destructiveName}9`];

  base.push(
    `  --destructive: ${
      mode === "light" ? destructiveLight : destructiveDark
    }; /* radix ${destructiveName} 9 */`
  );

  return base;
};

const generateCSS = (
  name: keyof typeof allRadixPalettes,
  lightPalette: Record<string, string>,
  darkPalette: Record<string, string>,
  lightMap: MappingEntry[],
  darkMap: MappingEntry[]
) => {
  const lightVars = toVars(
    lightMap,
    lightPalette,
    allRadixPalettes[name].lightA,
    "light",
    name
  ).join("\n");
  const darkVars = toVars(
    darkMap,
    darkPalette,
    allRadixPalettes[name].darkA,
    "dark",
    name
  ).join("\n");

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
