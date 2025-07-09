# Gemini Codebase Best Practices

This document outlines best practices for working with this codebase. Adhering to these guidelines will ensure clarity, maintainability, and optimal comprehension by the Gemini AI assistant.

## General Principles

- **File and Folder Structure:** Follow the existing project structure. Keep components, hooks, and utilities in their designated directories.
- **Naming Conventions:**
  - Use `PascalCase` for component files and types (e.g., `MyComponent.tsx`, `type UserProfile`).
  - Use `kebab-case` for other files (e.g., `api-helpers.ts`).
  - Use `camelCase` for variables and functions.
- **Comments:** Use comments to explain the _why_, not the _what_. For complex logic, a brief explanation can be very helpful.
- **Environment Variables:** Store all secrets and environment-specific configurations in `.env.local` and use the `NEXT_PUBLIC_` prefix for variables that need to be exposed to the browser.

## TypeScript

- **Strict Mode:** Keep `strict: true` enabled in `tsconfig.json`.
- **Avoid `any`:** Use specific types whenever possible. If a type is unknown, prefer `unknown` over `any` and perform type checking.
- **Type Definitions:** Define explicit types or interfaces for all function parameters, return values, and complex objects.
- **Zod:** Use `zod` for schema definition and validation, especially for forms and API route handlers to ensure data integrity.

## React & Next.js

- **Component Granularity:**
  - **`components/ui`**: For generic, reusable UI elements (Button, Card, etc.).
  - **`components/`**: For application-specific components composed of UI elements.
- **Server vs. Client Components:** Be explicit. Add `"use client"` at the top of files that require client-side interactivity. Default to Server Components wherever possible.
- **Data Fetching:**
  - **Server Components:** Fetch data directly within Server Components using `async/await`.
  - **Client Components:** Use libraries like `SWR` or `React Query` for data fetching, caching, and mutations.
- **API Routes & Server Actions:**
  - Place API route handlers in `app/api/...`.
  - Use Server Actions for mutations that can be called directly from Server Components. Keep them co-located with the components that use them if they are specific, or in a central `app/actions.ts` file if they are reusable.

## Styling

- **Tailwind CSS:** This project uses Tailwind CSS v4 as its primary styling engine.
- **shadcn/ui:** The components in `components/ui` are built using shadcn/ui. You can add new components using the `shadcn-ui` CLI.

## Tooling & Linting

- **ESLint & Prettier:** This project is configured with ESLint and Prettier. Run `npm run lint` to check for issues and ensure code is formatted correctly before committing.
- **Type Checking:** Run `npm run typecheck` (or `tsc --noEmit`) to catch any TypeScript errors.

---

## Project Vision & Goal

This project is being developed by "Eva & Jo", a company that creates custom mini-apps for entrepreneurs, solopreneurs, and small businesses.

The primary goal of this repository is to build a free, open-source **Theme Generator** inspired by radix colors principles and palettes for shadcn/ui and Tailwind CSS.

This tool will serve several purposes:

1.  **Marketing:** Act as a promotional tool to attract potential clients for the mini-app business.
2.  **Showcase:** Demonstrate the power and flexibility of the chosen tech stack (Next.js, shadcn/ui, etc.).
3.  **Design System Playground:** Allow users and potential clients to visualize a complete design system, see all the components in action, and customize their theme to fit their brand.

The project is inspired by the Radix UI Themes Playground and aims to provide a similar level of interactivity and utility.

## Inspiration

- https://zippystarter.com/tools/shadcn-ui-theme-generator
- https://github.com/jnsahaj/tweakcn
- https://tweakcn.com/editor/theme

## Radix colors principles

- https://www.radix-ui.com/colors/docs/palette-composition/scales
- https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette
- https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale
