"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { useRadixTheme } from "./radix-theme-provider";

interface CopyThemeButtonProps {
  variant?: "ghost" | "outline" | "default";
  size?: "sm" | "icon" | "default";
  className?: string;
}

export function CopyThemeButton({
  variant = "ghost",
  size = "icon",
  className,
}: CopyThemeButtonProps) {
  const [copied, setCopied] = useState(false);
  const { config, generatedCSS } = useRadixTheme();

  const handleCopyTheme = async () => {
    try {
      await navigator.clipboard.writeText(generatedCSS);
      setCopied(true);
      toast.success("Theme copied to clipboard!", {
        description: `${config.base}${
          config.brand ? ` + ${config.brand}` : ""
        } theme copied`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy theme:", error);
      toast.error("Failed to copy theme");
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopyTheme}
      className={`transition-all duration-200 ${className}`}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
}
