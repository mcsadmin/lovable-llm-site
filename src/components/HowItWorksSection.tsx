import { motion } from "framer-motion";
import { UserPlus, Users, FileCheck, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up",
    description: "Create your free account and complete a simple verification process.",
  },
  {
    icon: Users,
    step: "02",
    title: "Join the Network",
    description: "Connect with other local businesses and start building trusted relationships.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Trade with Confidence",
    description: "Send invoices knowing your partners are committed to fair payment practices.",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Get Paid On Time",
    description: "Receive payments within agreed terms, every time. No exceptions.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How Local Loop Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Join in minutes. Start trading with confidence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              {/* Step circle */}
              <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center mb-6 shadow-ll-md">
                <step.icon className="h-10 w-10 text-primary-foreground" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground">
                  {step.step}
                </div>
              </div>

              <h3 className="font-display font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="https://platform.localloop.io/signup" target="_blank" rel="noopener noreferrer">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
