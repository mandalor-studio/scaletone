import React from "react";
import { cn } from "@/lib/utils";

type HtmlTextTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";
// Section Container - Inchangé, bien structuré
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "flex flex-col container mx-auto max-w-6xl px-4 lg:px-0",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "SiteSection";

// Section Title - Amélioré avec tailles sémantiques
interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: HtmlTextTag;
  className?: string;
  children: React.ReactNode;
  isHero?: boolean;
}

export const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  SectionTitleProps
>(({ className, children, tag = "h2", isHero = false, ...props }, ref) => {
  let Component = tag;

  if (isHero) {
    Component = "h1";
    return (
      <Component
        ref={ref}
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }

  // Tailles basées sur la sémantique HTML
  const getSizeClasses = (tag: HtmlTextTag) => {
    switch (tag) {
      case "h1":
        return "text-4xl md:text-6xl lg:text-7xl font-bold";
      case "h2":
        return "text-2xl md:text-3xl lg:text-4xl font-bold";
      case "h3":
        return "text-xl md:text-2xl lg:text-3xl font-semibold";
      case "h4":
        return "text-lg md:text-xl lg:text-2xl font-semibold";
      case "h5":
        return "text-base md:text-lg lg:text-xl font-semibold";
      case "h6":
        return "text-sm md:text-base lg:text-lg font-semibold";
      default:
        return "text-2xl md:text-3xl lg:text-4xl font-bold";
    }
  };

  return (
    <Component
      ref={ref}
      className={cn(getSizeClasses(Component), className)}
      {...props}
    >
      {children}
    </Component>
  );
});

SectionTitle.displayName = "SectionTitle";

// Section Description - Amélioré avec différenciation hero/section
interface SectionDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  isHero?: boolean;
}

export const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  SectionDescriptionProps
>(({ className, children, isHero = false, ...props }, ref) => {
  if (isHero) {
    return (
      <p
        ref={ref}
        className={cn(
          "text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground font-medium",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }

  return (
    <p
      ref={ref}
      className={cn(
        "text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
});

SectionDescription.displayName = "SectionDescription";

// Nouveau composant pour les overlines
interface SectionOverlineProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const SectionOverline = React.forwardRef<
  HTMLSpanElement,
  SectionOverlineProps
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "text-xs md:text-sm uppercase tracking-wide font-semibold text-primary mb-2 block",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

SectionOverline.displayName = "SectionOverline";

// Nouveau composant pour le contenu de base
interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SectionContent = React.forwardRef<
  HTMLDivElement,
  SectionContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "text-base lg:text-lg leading-relaxed space-y-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

SectionContent.displayName = "SectionContent";
