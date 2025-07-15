"use client";

import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import Image from "next/image";

type ThemeImage = {
  name: string;
  lightSrc: string;
  darkSrc: string;
};

const themeImages = [
  {
    name: "Neutral Gray",
    lightSrc: "/themes-examples/neutral-gray-light.png",
    darkSrc: "/themes-examples/neutral-gray-dark.png",
  },
  {
    name: "Grass Monotone",
    lightSrc: "/themes-examples/grass-monotone-light.png",
    darkSrc: "/themes-examples/grass-monotone-dark.png",
  },
  {
    name: "Gray Pink High Contrast",
    lightSrc: "/themes-examples/gray-pink-high-contrast-light.png",
    darkSrc: "/themes-examples/gray-pink-high-contrast-dark.png",
  },
  {
    name: "Lime Monotone",
    lightSrc: "/themes-examples/lime-monotone-light.png",
    darkSrc: "/themes-examples/lime-monotone-dark.png",
  },
  {
    name: "Mauve Pink Vibrant",
    lightSrc: "/themes-examples/mauve-pink-vibrant-light.png",
    darkSrc: "/themes-examples/mauve-pink-vibrant-dark.png",
  },
  {
    name: "Mauve Ruby Vibrant",
    lightSrc: "/themes-examples/mauve-ruby-vibrant-light.png",
    darkSrc: "/themes-examples/mauve-ruby-vibrant-dark.png",
  },
  {
    name: "Olive Grass Vibrant",
    lightSrc: "/themes-examples/olive-grass-vibrant-light.png",
    darkSrc: "/themes-examples/olive-grass-vibrant-dark.png",
  },
  {
    name: "Olive Lime Vibrant",
    lightSrc: "/themes-examples/olive-lime-vibrant-light.png",
    darkSrc: "/themes-examples/olive-lime-vibrant-dark.png",
  },
  {
    name: "Sage Mint Vibrant",
    lightSrc: "/themes-examples/sage-mint-vibrant-light.png",
    darkSrc: "/themes-examples/sage-mint-vibrant-dark.png",
  },
  {
    name: "Sage Neutral",
    lightSrc: "/themes-examples/sage-neutral-light.png",
    darkSrc: "/themes-examples/sage-neutral-dark.png",
  },
  {
    name: "Sand Amber Vibrant",
    lightSrc: "/themes-examples/sand-amber-vibrant-light.png",
    darkSrc: "/themes-examples/sand-amber-vibrant-dark.png",
  },
  {
    name: "Sand Orange Vibrant",
    lightSrc: "/themes-examples/sand-orange-vibrant-light.png",
    darkSrc: "/themes-examples/sand-orange-vibrant-dark.png",
  },
  {
    name: "Slate Blue High Contrast",
    lightSrc: "/themes-examples/slate-blue-high-contrast-light.png",
    darkSrc: "/themes-examples/slate-blue-high-contrast-dark.png",
  },
  {
    name: "Slate Cyan Vibrant",
    lightSrc: "/themes-examples/slate-cyan-vibrant-light.png",
    darkSrc: "/themes-examples/slate-cyan-vibrant-dark.png",
  },
  {
    name: "Slate Iris Vibrant",
    lightSrc: "/themes-examples/slate-iris-vibrant-light.png",
    darkSrc: "/themes-examples/slate-iris-vibrant-dark.png",
  },
  {
    name: "Violet Monotone",
    lightSrc: "/themes-examples/violet-monotone-light.png",
    darkSrc: "/themes-examples/violet-monotone-dark.png",
  },
] satisfies ThemeImage[];

export function DoubleMarquee() {
  const firstRowImages = themeImages.slice(0, 9);
  const secondRowImages = themeImages.slice(9, 18);

  return (
    <div className=" -mx-6 w-screen relative left-1/2 -translate-x-1/2">
      <div className="relative overflow-hidden">
        <div className="space-y-8">
          {/* First marquee row - left to right */}
          <Marquee
            speed={60}
            gradient={true}
            gradientColor="var(--background)"
            pauseOnHover={true}
          >
            {firstRowImages.map((image, index) => (
              <MarqueeItem key={`first-${index}`} image={image} index={index} />
            ))}
          </Marquee>

          {/* Second marquee row - right to left */}
          <Marquee
            direction="right"
            speed={40}
            gradient={true}
            gradientColor="var(--background)"
            pauseOnHover={true}
          >
            {secondRowImages.map((image, index) => (
              <MarqueeItem
                key={`second-${index}`}
                image={image}
                index={index}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

const MarqueeItem = ({
  image,
  index,
}: {
  image: ThemeImage;
  index: number;
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <div className="relative overflow-hidden rounded-lg mr-6 bg-transparent  border w-[400px] h-[250px]">
      <Image
        src={isDark ? image.darkSrc : image.lightSrc}
        alt={`${image.name} theme example`}
        width={400}
        height={400}
        className="object-contain transition-all w-full h-full"
        priority={index < 2}
      />
      <div className="absolute inset-0 bg-gradient-to-t dark:from-background/60 from-foreground/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-medium text-sm">{image.name}</h3>
      </div>
    </div>
  );
};
