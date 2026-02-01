import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPurple from "@/assets/logo-purple.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/founding-members", label: "Founding Members" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoPurple} alt="Local Loop" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:text-primary ${
                  isActive(link.href) 
                    ? "text-primary bg-secondary" 
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://platform.localloop.io" target="_blank" rel="noopener noreferrer">
                Log In
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="https://platform.localloop.io/signup" target="_blank" rel="noopener noreferrer">
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
                <a href="https://platform.localloop.io/signup" target="_blank" rel="noopener noreferrer">
                  Join Local Loop
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Button variant="hero-outline" size="lg" className="w-full mt-2" asChild>
                <a href="https://platform.localloop.io" target="_blank" rel="noopener noreferrer">
                  Log In
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
