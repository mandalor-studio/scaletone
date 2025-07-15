import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Logo } from "../logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/60 backdrop-blur-sm border-b-4 border-background">
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          {/* Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.label.trim().toLowerCase()}
                href={link.href}
                label={link.label}
              />
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <ModeToggle />
            <Link href="https://evaandjo.com" className="hidden sm:block">
              <Avatar>
                <AvatarImage src="/eva&gio.png" />
                <AvatarFallback>EJ</AvatarFallback>
              </Avatar>
            </Link>
            <Button
              variant="default"
              asChild
              size="sm"
              className="text-xs md:text-sm"
            >
              <Link href="/generator">
                <span className="hidden sm:inline">Try it out</span>
                <span className="sm:hidden">Try</span>
                <ArrowRightIcon className="h-3 w-3 md:h-4 md:w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

type NavLinkProps = {
  href: string;
  label: React.ReactNode;
};

const navLinks = [
  { href: "/#showcase", label: "See examples" },
  { href: "/#why-radix-shadcn", label: "Why radix & shadcn" },
  { href: "/#contact", label: "Contact" },
] satisfies { href: string; label: string }[];

const NavLink = ({ href, label }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground border-l-4 border-transparent hover:border-primary px-2 hover:text-foreground transition-all duration-300 hover:translate-x-1"
    >
      {label}
    </Link>
  );
};
