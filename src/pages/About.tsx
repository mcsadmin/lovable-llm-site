import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Eye, Heart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe in the power of local businesses supporting each other.",
  },
  {
    icon: Users,
    title: "Trust & Transparency",
    description: "Every transaction is built on mutual accountability and honest practices.",
  },
  {
    icon: Target,
    title: "Fair Trade",
    description: "Payment terms should be respected. Period. No exceptions.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-subtle">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient-primary">Local Loop</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're building a trusted payment network to help local businesses 
                thrive by eliminating the cash flow problems caused by late payments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="container-site">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-ll-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To create a regional payment ecosystem where small and medium 
                  businesses can trade with confidence, knowing they'll be paid 
                  on time, every time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-ll-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-ll-lime-soft flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  A thriving local economy where cash flow issues no longer 
                  prevent businesses from growing, innovating, and contributing 
                  to their communities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
                How Mutual Credit Works
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Local Loop uses a mutual credit system, a tried-and-tested model 
                  that has been used successfully by business networks around the world.
                </p>
                <p>
                  When you join the network, you commit to fair payment practices. 
                  You can trade with other members using a combination of regular 
                  currency and Local Loop credits, which helps manage cash flow 
                  while ensuring everyone gets paid on time.
                </p>
                <p>
                  The network is self-regulating: members who consistently pay late 
                  or default are excluded, maintaining trust throughout the system.
                </p>
              </div>
              <div className="text-center mt-8">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://platform.localloop.io/signup" target="_blank" rel="noopener noreferrer">
                    Join the Network
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
