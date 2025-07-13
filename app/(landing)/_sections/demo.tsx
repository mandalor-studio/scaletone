"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const themeImages = [
  {
    name: "Blue Monotone",
    lightSrc: "/themes-examples/blue-monotone-light.png",
    darkSrc: "/themes-examples/blue-monotone-dark.png",
  },
  {
    name: "Gold Monotone",
    lightSrc: "/themes-examples/gold-monotone-light.png",
    darkSrc: "/themes-examples/gold-monotone-dark.png",
  },
  {
    name: "Mauve Pink Vibrant",
    lightSrc: "/themes-examples/mauve-pink-vibrant-light.png",
    darkSrc: "/themes-examples/mauve-pink-vibrant-dark.png",
  },
  {
    name: "Olive Lime Vibrant",
    lightSrc: "/themes-examples/olive-lime-vibrant-light.png",
    darkSrc: "/themes-examples/olive-lime-vibrant-dark.png",
  },
  {
    name: "Sage Mint High Contrast",
    lightSrc: "/themes-examples/sage-mint-high-contrast-light.png",
    darkSrc: "/themes-examples/sage-mint-high-contrast-dark.png",
  },
  {
    name: "Slate Iris Vibrant",
    lightSrc: "/themes-examples/slate-iris-vibrant-light.png",
    darkSrc: "/themes-examples/slate-iris-vibrant-dark.png",
  },
];

export function DemoSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  const firstRowImages = themeImages.slice(0, 3);
  const secondRowImages = themeImages.slice(3, 6);

  return (
    <section
      id="examples"
      className="py-16 lg:py-24 -mx-6 w-screen relative left-1/2 -translate-x-1/2"
    >
      <div className="px-6 max-w-6xl mx-auto">
        <div className="text-left space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            See your themes in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Real
            applications showing how different Radix Color combinations create
            unique, cohesive interfaces.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="space-y-8">
          {/* First marquee row - left to right */}
          <Marquee speed={30} gradient={false} className="[&>div]:gap-8">
            {firstRowImages.map((image, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-4">
                <div className="relative overflow-hidden rounded-lg border bg-background shadow-sm w-[400px] h-[300px]">
                  <Image
                    src={isDark ? image.darkSrc : image.lightSrc}
                    alt={`${image.name} theme example`}
                    width={400}
                    height={300}
                    className="object-cover transition-all hover:scale-105 w-full h-full"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium text-sm">
                      {image.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>

          {/* Second marquee row - right to left */}
          <Marquee
            direction="right"
            speed={30}
            gradient={false}
            className="[&>div]:gap-8"
          >
            {secondRowImages.map((image, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-4">
                <div className="relative overflow-hidden rounded-lg border bg-background shadow-sm w-[400px] h-[300px]">
                  <Image
                    src={isDark ? image.darkSrc : image.lightSrc}
                    alt={`${image.name} theme example`}
                    width={400}
                    height={300}
                    className="object-cover transition-all hover:scale-105 w-full h-full"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium text-sm">
                      {image.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />

        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
      </div>

      <div className="px-6 max-w-6xl mx-auto">
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All interfaces automatically adapt to your selected theme colors and
            respect light/dark mode preferences
          </p>
        </div>
      </div>
    </section>
  );
}
