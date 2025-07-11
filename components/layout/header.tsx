import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 sticky top-0 z-10 bg-background/60 backdrop-blur-sm border-b-4 border-background">
      <div className="flex flex-col border-l-4 pl-6  border-primary">
        <span className="font-bold">Scaletone</span>
        <div className="text-xs text-muted-foreground flex flex-col">
          <span>shadcn/radix colors</span>
          <span>theme generator</span>
        </div>
      </div>
      <nav className="flex items-center gap-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.label.trim().toLowerCase()}
            href={link.href}
            label={link.label}
          />
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Link href="https://evaandjo.com">
          <Avatar>
            <AvatarImage src="/eva&gio.png" />
            <AvatarFallback>EJ</AvatarFallback>
          </Avatar>
        </Link>
        <Button variant="default" asChild>
          <Link href="/generator">
            Try it out <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </header>
  );
}
type NavLinkProps = {
  href: string;
  label: React.ReactNode;
};

const navLinks = [
  { href: "/#", label: "Examples" },
  { href: "/#", label: "Why radix & shadcn" },
  { href: "/#", label: "Contact" },
] satisfies { href: string; label: string }[];

const NavLink = ({ href, label }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground border-l-4 border-transparent hover:border-primary px-2 hover:text-foreground transition-all duration-300  hover:translate-x-1 font-semibold"
    >
      {label}
    </Link>
  );
};
