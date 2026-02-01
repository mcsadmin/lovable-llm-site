import { motion } from "framer-motion";
import { TrendingDown, Clock, AlertCircle, ArrowRight, TrendingUp, Handshake, Shield } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Late Payments",
    description: "UK SMEs wait an average of 23 days past invoice due date for payment.",
  },
  {
    icon: TrendingDown,
    title: "Cash Flow Crunch",
    description: "50,000 UK businesses fail each year due to cash flow issues caused by late payments.",
  },
  {
    icon: AlertCircle,
    title: "Unpredictable Income",
    description: "Without reliable payment timing, planning and growth become nearly impossible.",
  },
];

const solutions = [
  {
    icon: TrendingUp,
    title: "Predictable Cash Flow",
    description: "Know exactly when you'll be paid with our mutual commitment network.",
  },
  {
    icon: Handshake,
    title: "Trust-Based Network",
    description: "Trade with verified local businesses committed to fair payment practices.",
  },
  {
    icon: Shield,
    title: "Protected Payments",
    description: "Built-in accountability means everyone pays on time, every time.",
  },
];

export const ProblemSolutionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container-site">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            The Late Payment Problem
          </h2>
          <p className="text-lg text-muted-foreground">
            Late payments cost UK SMEs £22,000 per year on average. 
            Local Loop is building a better way.
          </p>
        </motion.div>

        {/* Problems */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-destructive/20 shadow-ll-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Arrow Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-ll-md">
            <ArrowRight className="h-8 w-8 text-primary-foreground rotate-90" />
          </div>
        </motion.div>

        {/* Solutions Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-gradient-primary">Local Loop</span> Solution
          </h2>
          <p className="text-lg text-muted-foreground">
            A mutual credit network where local businesses trade with trust and get paid on time.
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-ll-sm hover:shadow-ll-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-ll-lime-soft flex items-center justify-center mb-4">
                <solution.icon className="h-6 w-6 text-ll-purple" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
