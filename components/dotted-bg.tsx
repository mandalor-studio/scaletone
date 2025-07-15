import { cn } from "../lib/utils";

export function DottedBg({ className }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      className={cn(
        "absolute inset-0 -z-10 opacity-50 dark:opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="var(--muted-foreground)" />
          <line
            x1="0"
            y1="0"
            x2="10"
            y2="10"
            stroke="var(--muted-foreground)"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}
