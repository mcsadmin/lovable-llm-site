import { motion } from "framer-motion";
import { Mail, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to backend when ready
    console.log("Lead magnet email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section id="guide" className="py-20 md:py-28 bg-muted/30">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Download className="h-8 w-8 text-primary" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Free Guide: Getting Paid on Time
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Not ready to sign up yet? Download our practical guide with proven strategies 
              for improving cash flow and getting invoices paid faster.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 rounded-full px-5 border-2 border-border focus:border-primary"
                />
                <Button type="submit" variant="hero" size="lg" className="rounded-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Get the Guide
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-accent/15 max-w-md mx-auto"
              >
                <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                <p className="font-medium text-foreground">
                  Thanks! Check your email for the guide.
                </p>
              </motion.div>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
