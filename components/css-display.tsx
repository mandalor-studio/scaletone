"use client";

import { useState } from "react";
import { useRadixTheme } from "./radix-theme-provider";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Copy, Check, Code } from "lucide-react";
import { getThemeType } from "@/lib/colors/theme-generator";

export function CSSDisplay() {
  const { config, generatedCSS } = useRadixTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCSS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy CSS:", error);
    }
  };

  const themeType = getThemeType(config as any);
  const isCustomCSS = themeType === "neutral-with-brand";

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Generated CSS
            </CardTitle>
            <CardDescription>
              Copy and paste this CSS to use your theme
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {config.base}
              {(config as any).brand && ` + ${(config as any).brand}`}
              {(config as any).brand && ` (${config.primaryIntensity})`}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="flex items-center gap-2"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isCustomCSS ? (
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{generatedCSS}</code>
            </pre>
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p className="text-sm">This theme uses a static CSS file:</p>
            <code className="text-sm font-mono bg-muted px-2 py-1 rounded mt-2 inline-block">
              /themes/{config.base}.css
            </code>
            <p className="text-xs mt-2">
              No additional CSS needed for this theme configuration.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
