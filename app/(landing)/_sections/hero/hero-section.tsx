import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import { DottedBg } from "@/components/layout/dotted-bg";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <Section className="relative lg:min-h-[calc(100vh-100px)] max-w-none lg:justify-center px-0">
      <DottedBg />
      <div className="container px-4 flex flex-col gap-6 pt-6 pb-18 max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-4 w-full ">
          <SectionTitle isHero>
            Easy consistent themes
            <br /> for
            <span className="text-primary"> shadcn/ui</span>
          </SectionTitle>
          <SectionDescription isHero className="max-w-xl">
            Smart, accessible theming with the best of{" "}
            <span className="font-semibold text-foreground">Radix Colors</span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              shadcn/ui
            </span>{" "}
          </SectionDescription>
        </div>
        <Image
          src="/hero-img-dark.png"
          alt="Scaletone theme generator interface showing shadcn/ui components with different color themes"
          width={864}
          height={545}
          sizes="(max-width: 640px) 100vw, 864px"
          className="sm:hidden w-full h-auto "
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="flex flex-col sm:flex-row w-full gap-4 ">
          <Button asChild size="lg">
            <Link href="/generator">
              Generate Your Theme
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#showcase">View Examples</Link>
          </Button>
        </div>
        <Image
          src="/hero-img-dark.png"
          alt="Scaletone theme generator interface showing shadcn/ui components with different color themes"
          width={1000}
          height={1000}
          sizes="(max-width: 640px) 0px, (max-width: 1200px) 100vw, 864px"
          className="hidden sm:block w-full h-auto self-end max-w-[864px]"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
    </Section>
  );
}
