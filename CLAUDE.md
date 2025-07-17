# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build the application for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint linter

## Project Architecture

This is a **Shadcn/ui + Radix Theme Generator** built with Next.js 15 and React 19. The application generates themes by mapping Radix color palettes to CSS variables that work with shadcn/ui components.

### Core Theme System

The theme generation system is located in `/lib/colors/`:

- `themes.ts` - Defines all Radix palettes (gray scales, brand colors, alpha variants) and their natural pairings
- `color-mapping.ts` - Maps Radix color scales to CSS variables used by shadcn/ui
- `theme-generator.ts` - Core logic for generating CSS themes dynamically

**Three Theme Types:**

1. **Neutral** - Pure grayscale themes (no accent color)
2. **Monotone** - Single brand palette used as both base and accent
3. **Neutral + Brand** - Gray base with brand accent (requires dynamic CSS generation)

### Key Components

- `ThemeControlPanel` - Main theme selection interface
- `BentoGrid` - Showcase grid displaying components with current theme
- `components/ui/` - Complete shadcn/ui component library
- `RadixThemeProvider` - Theme context provider for the application

### Color System Logic

**Primary Intensity Options:**

- `vibrant` (scale 9) - Standard vibrancy
- `high-contrast` (scale 12) - High contrast variant

**Natural Pairings:** Certain gray scales pair well with specific brand colors:

- `gray` → All brand colors (universal)
- `mauve` → tomato, red, ruby, crimson, pink, plum, purple, violet
- `slate` → iris, indigo, blue, cyan, sky
- `sage` → mint, teal, jade, green
- `olive` → grass, lime
- `sand` → yellow, amber, orange, brown

**Destructive Color Pairing:** Each brand has an associated destructive color (e.g., blue → ruby, green → red)

### Application Structure

- `/app/(landing)/` - Marketing landing page with hero, about, showcase sections
- `/app/generator/` - Main theme generator interface
- `/app/generator/_bento/` - Bento grid showcase components
- `/public/themes/` - Pre-generated CSS files for neutral/monotone themes

### Theme Generation Process

1. **Static Themes:** Neutral and monotone themes use pre-generated CSS files from `/public/themes/`
2. **Dynamic Themes:** Neutral + brand combinations generate CSS dynamically via `generateThemeCSS()`
3. **CSS Variables:** All themes map to the same CSS variable names used by shadcn/ui

### Important Files

- `generate-themes.ts` - Script to regenerate static theme CSS files
- `components.json` - Shadcn/ui configuration
- `tailwind.config.ts` - Tailwind CSS configuration with CSS variable integration
