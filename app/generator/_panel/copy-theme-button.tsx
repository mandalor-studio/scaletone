"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { useRadixTheme } from "@/components/providers/radix-theme-provider";

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
      toast.custom(
        (t) => (
          <div
            className="bg-background border border-border pl-6 pr-8 py-4 gap-4 rounded-xl shadow flex items-center min-w-[200px]"
            onClick={() => toast.dismiss(t)}
          >
            <Check className="h-4 w-4 " />
            <div className="flex flex-col ">
              <span className="text-foreground text-sm">
                Theme copied to clipboard!
              </span>
              <span className="text-primary text-sm capitalize">
                {config.base}
                {config.brand ? ` + ${config.brand}` : ""} theme copied
              </span>
            </div>
          </div>
        ),
        {
          duration: 2000,
        }
      );
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
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
}
