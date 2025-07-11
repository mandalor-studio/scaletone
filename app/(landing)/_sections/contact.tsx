import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  IconMail,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
} from "@tabler/icons-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Eva Wild",
    role: "Design & Frontend",
    bio: "Passionate about creating beautiful, accessible user interfaces. Loves experimenting with color theory and design systems.",
    avatar: "/eva&gio.png",
    email: "eva@evaandjo.com",
    twitter: "https://twitter.com/evawild",
    github: "https://github.com/evawild",
    linkedin: "https://linkedin.com/in/evawild",
  },
  {
    name: "Jo Rabbitt",
    role: "Development & Architecture",
    bio: "Full-stack developer with a passion for clean code and performance optimization. Enjoys building scalable applications.",
    avatar: "/eva&gio.png",
    email: "jo@evaandjo.com",
    twitter: "https://twitter.com/jorabbitt",
    github: "https://github.com/jorabbitt",
    linkedin: "https://linkedin.com/in/jorabbitt",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="px-4 py-2">
          👋 Get in Touch
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;re Eva & Jo, a design and development duo passionate about
          creating beautiful, accessible web experiences.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Avatar className="h-24 w-24 mx-auto border-4 border-primary/10">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">{member.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <Button variant="outline" size="icon" asChild>
                  <Link href={`mailto:${member.email}`}>
                    <IconMail className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandTwitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandGithub className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandLinkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Information */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Let&apos;s Work Together</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? Need help with your design system? We&apos;d
            love to hear from you and discuss how we can help bring your ideas
            to life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="mailto:hello@evaandjo.com">
              <IconMail className="h-5 w-5 mr-2" />
              Send us an email
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://evaandjo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit our website
            </Link>
          </Button>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <IconMapPin className="h-4 w-4" />
          <span>Based in France & Canada</span>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-muted/30 rounded-lg p-6 text-center space-y-4">
        <h4 className="font-semibold">Open Source & Community</h4>
        <p className="text-sm text-muted-foreground">
          This project is open source and we believe in giving back to the
          community. Feel free to contribute, report issues, or suggest
          improvements on our GitHub repository.
        </p>
        <Button variant="outline" asChild>
          <Link
            href="https://github.com/evaandjo/scaletone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub className="h-4 w-4 mr-2" />
            View on GitHub
          </Link>
        </Button>
      </div>
    </section>
  );
}
