"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { allRadixPalettes } from "../lib/colors/themes";

type RadixTheme = keyof typeof allRadixPalettes;

const availableThemes: RadixTheme[] = Object.keys(
  allRadixPalettes
) as RadixTheme[];

interface RadixThemeContextType {
  theme: RadixTheme;
  setTheme: (theme: RadixTheme) => void;
  availableThemes: RadixTheme[];
}

const RadixThemeContext = createContext<RadixThemeContextType | undefined>(
  undefined
);

const THEME_STORAGE_KEY = "radix-theme";

export function RadixThemeProvider({
  children,
  defaultTheme = "sage",
}: {
  children: React.ReactNode;
  defaultTheme?: RadixTheme;
}) {
  const [theme, setThemeState] = useState<RadixTheme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as RadixTheme;
    if (storedTheme && availableThemes.includes(storedTheme)) {
      setThemeState(storedTheme);
    }
    setMounted(true);
  }, []);

  // Update stylesheet when theme changes
  useEffect(() => {
    if (!mounted) return;

    const stylesheet = document.getElementById(
      "theme-stylesheet"
    ) as HTMLLinkElement;
    if (stylesheet) {
      stylesheet.href = `/themes/${theme}.css`;
    }

    // Save to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: RadixTheme) => {
    if (availableThemes.includes(newTheme)) {
      setThemeState(newTheme);
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <RadixThemeContext.Provider
      value={{
        theme,
        setTheme,
        availableThemes,
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
    return {
      theme: "sage",
      setTheme: () => {},
      availableThemes: [],
    };
  }
  return context;
}
