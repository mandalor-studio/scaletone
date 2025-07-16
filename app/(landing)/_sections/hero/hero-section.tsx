import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import { DottedBg } from "@/components/dotted-bg";
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
            Generate accessible and consistent themes using{" "}
            <span className="font-semibold text-foreground">Radix Colors</span>{" "}
            for <span className="font-semibold text-foreground">shadcn/ui</span>{" "}
            components.
            <br />
          </SectionDescription>
        </div>
        <Image
          src="/hero-img-dark.png"
          alt="Hero Image"
          width={864}
          height={545}
          className="sm:hidden w-full h-auto "
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
          alt="Hero Image"
          width={1000}
          height={1000}
          className="hidden sm:block w-full h-auto self-end max-w-[864px]"
        />
      </div>
    </Section>
  );
}
