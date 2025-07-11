import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconAccessible,
  IconPalette,
  IconCode,
  IconRocket,
  IconShield,
  IconUsers,
} from "@tabler/icons-react";
import ShadcnLogo from "@/components/logos/shadcn";
import RadixLogo from "@/components/logos/radix";
import TailwindLogo from "@/components/logos/tailwind";

const benefits = [
  {
    icon: IconAccessible,
    title: "Accessibility First",
    description:
      "Built-in ARIA attributes, keyboard navigation, and screen reader support out of the box.",
  },
  {
    icon: IconPalette,
    title: "Consistent Design",
    description:
      "Radix Colors provides scientifically-crafted color scales that work perfectly together.",
  },
  {
    icon: IconCode,
    title: "Developer Experience",
    description:
      "Copy-paste components with TypeScript support and excellent documentation.",
  },
  {
    icon: IconRocket,
    title: "Performance",
    description:
      "Lightweight, tree-shakeable components with minimal runtime overhead.",
  },
  {
    icon: IconShield,
    title: "Production Ready",
    description:
      "Battle-tested by thousands of developers and used in production apps worldwide.",
  },
  {
    icon: IconUsers,
    title: "Community",
    description:
      "Active community, regular updates, and extensive ecosystem of plugins and tools.",
  },
];

export function WhyRadixShadcnSection() {
  return (
    <section id="why-radix-shadcn" className="py-16 space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="px-4 py-2">
          🤔 Why Choose This Stack?
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold">
          The Perfect Combination
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Radix UI, shadcn/ui, and Tailwind CSS form the ultimate trio for
          building modern, accessible, and beautiful user interfaces.
        </p>
      </div>

      {/* Tech Stack Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <RadixLogo className="h-8 w-8 text-foreground" />
            </div>
            <CardTitle>Radix UI</CardTitle>
            <CardDescription>
              Unstyled, accessible components for building high-quality design
              systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• WAI-ARIA compliant</li>
              <li>• Keyboard navigation</li>
              <li>• Focus management</li>
              <li>• Screen reader support</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <ShadcnLogo className="h-8 w-8 text-foreground" />
            </div>
            <CardTitle>shadcn/ui</CardTitle>
            <CardDescription>
              Beautifully designed components built on top of Radix UI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Copy & paste components</li>
              <li>• Full customization</li>
              <li>• TypeScript support</li>
              <li>• Consistent design</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <TailwindLogo className="h-8 w-8" />
            </div>
            <CardTitle>Tailwind CSS</CardTitle>
            <CardDescription>
              Utility-first CSS framework for rapid UI development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Utility-first approach</li>
              <li>• Responsive design</li>
              <li>• Dark mode support</li>
              <li>• Optimized builds</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Benefits Grid */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Why Developers Love This Stack
          </h3>
          <p className="text-muted-foreground">
            Here&apos;s what makes this combination so powerful for modern web
            development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 pt-8">
        <h3 className="text-xl font-semibold">
          Ready to Build Something Amazing?
        </h3>
        <p className="text-muted-foreground">
          Start generating your perfect theme and see the magic happen in
          real-time.
        </p>
      </div>
    </section>
  );
}
