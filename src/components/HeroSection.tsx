import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const benefits = [
  "Improve cash flow",
  "Get paid faster",
  "Build local connections",
];

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 opacity-5">
        <img 
          src={logoIcon} 
          alt="" 
          className="w-full h-full object-contain animate-float" 
        />
      </div>

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ll-lime-15 text-foreground text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Now accepting founding members
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Local Loop which gets you{" "}
              <span className="text-gradient-primary">paid on time</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Local Loop is a trusted payment network for SMEs across Merseyside. 
              Join a community of businesses committed to fair payment practices.
            </p>

            {/* Benefits List */}
            <ul className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="https://demo.localloop-merseyside.co.uk/signup" target="_blank" rel="noopener noreferrer">
                  Join Local Loop
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#guide">
                  <Download className="h-5 w-5 mr-2" />
                  Free Guide
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-ll-lime-50 animate-pulse-soft" />
              <div className="absolute inset-8 rounded-full border-2 border-secondary" />
              <div className="absolute inset-16 rounded-full bg-gradient-hero shadow-ll-lg" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-5xl font-display font-bold mb-2">£0</div>
                  <div className="text-sm opacity-80">Late payment fees</div>
                </div>
              </div>

              {/* Floating stats */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-1/4 bg-card rounded-2xl p-4 shadow-ll-lg border border-border"
              >
                <div className="text-2xl font-display font-bold text-primary">7+ days</div>
                <div className="text-sm text-muted-foreground">Faster payments</div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-4 bottom-1/3 bg-card rounded-2xl p-4 shadow-ll-lg border border-border"
              >
                <div className="text-2xl font-display font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Local businesses</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
