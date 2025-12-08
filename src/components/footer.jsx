/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Users,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

const programLinks = [
  { label: "Volunteer", href: "/volunteers" },
  { label: "Training", href: "/programs" },
  { label: "Membership", href: "/programs" },
  { label: "Campaigns", href: "/events" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Subscribed!",
          description: "You've been added to our newsletter.",
        });
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">United People's Party</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Empowering members, strengthening the party. Together we build a
              brighter future for all.
            </p>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="outline"
                data-testid="social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                data-testid="social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                data-testid="social-youtube"
              >
                <Youtube className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                data-testid="social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  <span
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    data-testid={`footer-link-${link.label
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <nav className="flex flex-col gap-2">
              {programLinks.map((link) => (
                <Link key={link.label} to={link.href}>
                  <span
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    data-testid={`footer-program-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest news and campaigns.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                data-testid="button-newsletter-submit"
              >
                <Mail className="w-4 h-4 mr-2" />
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>123 Democracy Avenue, Capital City</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>info@unitedpeoplesparty.org</span>
              </div>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span className="hover:text-foreground cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-foreground cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            © 2024 United People's Party. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
