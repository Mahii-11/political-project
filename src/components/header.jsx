import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { useTheme } from "../lib/theme-context";
import { Menu, Sun, Moon, Users, Heart } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Media", href: "/media" },
  { label: "Volunteers", href: "/volunteers" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg hidden sm:block">
              United People's Party
            </span>
            <span className="font-bold text-lg sm:hidden">UPP</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={location === item.href ? "secondary" : "ghost"}
                  size="sm"
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>

            <Link href="/programs" className="hidden sm:block">
              <Button variant="outline" size="sm" data-testid="button-join-now">
                <Users className="w-4 h-4 mr-1" />
                Join Now
              </Button>
            </Link>

            <Link href="/programs" className="hidden sm:block">
              <Button size="sm" data-testid="button-donate">
                <Heart className="w-4 h-4 mr-1" />
                Donate
              </Button>
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  size="icon"
                  variant="ghost"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant={location === item.href ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                  <div className="border-t border-border my-4" />
                  <Link href="/programs" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full"
                      data-testid="mobile-button-join"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Join Now
                    </Button>
                  </Link>
                  <Link href="/programs" onClick={() => setIsOpen(false)}>
                    <Button
                      className="w-full"
                      data-testid="mobile-button-donate"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Donate
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
