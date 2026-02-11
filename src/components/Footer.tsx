import { Linkedin, Mail, MapPin } from "lucide-react";
import logoLime from "@/assets/logo-lime.png";

const PLATFORM_URL = "https://demo.localloop-merseyside.co.uk";

const socialLinks = [
  { href: "https://linkedin.com/company/localloop", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:hello@localloop.io", icon: Mail, label: "Email" },
];

const sectionLinks = [
  { href: "#hero", label: "Home" },
  { href: "#problem", label: "The Problem" },
  { href: "#founding-members", label: "Founding Members" },
  { href: "#guide", label: "Free Guide" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-hero text-primary-foreground">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src={logoLime} alt="Local Loop" className="h-10 w-auto mb-4" />
            <p className="text-primary-foreground/80 max-w-sm mb-6">
              Building a trusted payment network for local businesses across Merseyside. 
              Get paid faster, strengthen your community.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>Liverpool, Merseyside, UK</span>
              </li>
              <li>
                <a
                  href="mailto:hello@localloop.io"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>hello@localloop.io</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Local Loop. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Liverpool, Merseyside
          </p>
        </div>
      </div>
    </footer>
  );
};
