"use client";

import { useRadixTheme } from "./radix-theme-provider";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Palette } from "lucide-react";

function ThemeSelectorContent() {
  const { theme, setTheme, availableThemes } = useRadixTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-96 overflow-y-auto">
        {availableThemes.map((themeName) => (
          <DropdownMenuItem
            key={themeName}
            onClick={() => setTheme(themeName)}
            className={theme === themeName ? "bg-accent" : ""}
          >
            <div className="flex items-center gap-2">
              <span className="capitalize">{themeName}</span>
              {theme === themeName && (
                <span className="ml-auto text-xs text-muted-foreground">✓</span>
              )}
            </div>
          </DropdownMenuItem>
        ))}
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
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }
}
