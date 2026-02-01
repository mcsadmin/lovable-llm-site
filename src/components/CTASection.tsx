import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with a mailing service
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Paid on Time?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join the growing network of Merseyside businesses building a fairer 
              payment ecosystem. Sign up is free during our founding member period.
            </p>
            <Button variant="lime" size="xl" asChild>
              <a href="https://platform.localloop.io/signup" target="_blank" rel="noopener noreferrer">
                Join Local Loop Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Secondary CTA - Guide Download */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-ll-md"
          >
            <div className="w-14 h-14 rounded-2xl bg-ll-lime-soft flex items-center justify-center mb-6">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Free Guide: Getting Paid on Time
            </h3>
            <p className="text-muted-foreground mb-6">
              Download our comprehensive guide with practical tips for improving 
              your payment collection and cash flow management.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 rounded-full px-5 border-2 border-border focus:border-primary"
                />
                <Button type="submit" variant="hero" size="lg">
                  Get Guide
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-ll-lime-soft">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Mail className="h-4 w-4 text-accent-foreground" />
                </div>
                <p className="text-sm font-medium">Check your email for the guide!</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
