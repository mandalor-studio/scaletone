import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Logo } from "../scaletone-logo";

export default function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Generate consistent, beautiful themes for your shadcn/ui
              components.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/#showcase"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Examples
              </Link>
              <Link
                href="/#why"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Why Radix & shadcn
              </Link>
              <Link
                href="/generator"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Theme Generator
              </Link>
            </div>
          </div>

          {/* Made by Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Made by</h3>
            <Link
              href="https://evaandjo.com"
              target="_blank"
              className="flex items-center gap-3 group"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/eva&gio.png" />
                <AvatarFallback>EJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col max-w-[200px]">
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  Eva & Jo
                </span>
                <span className="text-xs text-muted-foreground text-balance">
                  We build custom mini-apps to help creative pros scale their
                  freedom.
                </span>
              </div>
            </Link>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                React
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Next.js
              </Badge>
              <Badge variant="secondary" className="text-xs">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Tailwind
              </Badge>
              <Badge variant="secondary" className="text-xs">
                shadcn/ui
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Radix UI
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © mandalor studio {new Date().getFullYear()} — A project by Eva &
              Jo. Built with shadcn/ui and Radix Colors.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/mandalor-studio"
                target="_blank"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://x.com/evaandjo"
                target="_blank"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                X
              </Link>
              <Link
                href="https://www.instagram.com/evaandjo_?igsh=bGMwZnNpcGt5YW0z"
                target="_blank"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://www.tiktok.com/@eva_and_jo?_t=ZN-8xirVxbEYNy&_r=1"
                target="_blank"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                TikTok
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
