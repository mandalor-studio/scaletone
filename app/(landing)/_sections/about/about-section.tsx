import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Section,
  SectionTitle,
  SectionDescription,
} from "@/components/layout/section";

export function AboutSection() {
  return (
    <Section id="about" className="max-w-3xl mx-auto text-center space-y-12">
      {/* About */}
      <div className="space-y-4">
        <SectionTitle>Who’s behind this?</SectionTitle>
        <SectionDescription>
          This tool was built by <strong>Mandalor Studio</strong>, a small team
          crafting custom tools and design systems for modern web products. We
          focus on simplicity, performance, and real-world usefulness.
        </SectionDescription>
        <p className="text-muted-foreground text-sm">
          Want a custom theme or a tailored app? Reach out — we build things
          fast and clean.
        </p>
      </div>

      {/* Contact form */}
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="space-y-4 text-left"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Input name="name" placeholder="Your name" required />
          <Input name="email" type="email" placeholder="Your email" required />
        </div>
        <Textarea
          name="message"
          rows={4}
          placeholder="Your message..."
          required
        />
        <Button type="submit" className="w-full md:w-auto">
          Send message
        </Button>
      </form>

      {/* Optional link back */}
      <p className="text-xs text-muted-foreground">
        Curious about who we are?{" "}
        <Link href="https://evaandjo.com" target="_blank" className="underline">
          Meet us at evaandjo.com
        </Link>
      </p>
    </Section>
  );
}
