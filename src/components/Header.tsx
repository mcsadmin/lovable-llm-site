import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPurple from "@/assets/logo-purple.png";

const PLATFORM_URL = "https://demo.localloop-merseyside.co.uk";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#problem", label: "The Problem" },
  { href: "#founding-members", label: "Founding Members" },
  { href: "#guide", label: "Free Guide" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-ll-sm"
          : "bg-background/80 backdrop-blur-lg border-b border-border"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleAnchorClick(e, "#hero")}
            className="flex items-center"
          >
            <img src={logoPurple} alt="Local Loop" className="h-8 md:h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:text-primary text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href={`${PLATFORM_URL}/signup`} target="_blank" rel="noopener noreferrer">
                Join Local Loop
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-site py-4 space-y-2">
              {/* Mobile CTA */}
              <Button variant="hero" size="lg" className="w-full mb-4" asChild>
                <a href={`${PLATFORM_URL}/signup`} target="_blank" rel="noopener noreferrer">
                  Join Local Loop
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="block px-4 py-3 text-base font-medium rounded-lg transition-colors text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
