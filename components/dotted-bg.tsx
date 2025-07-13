import { cn } from "../lib/utils";

export function DottedBg({ className }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      className={cn(
        "absolute inset-0 pt-10 -z-10 opacity-20 dark:opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
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
          <circle cx="1" cy="1" r="1" fill="var(--primary)" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}
