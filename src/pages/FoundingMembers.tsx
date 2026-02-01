import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const foundingMembers = [
  { id: 1, name: "Baltic Creative", industry: "Creative Hub", description: "A hub for Liverpool's creative and digital community." },
  { id: 2, name: "Liverpool BID", industry: "Business Improvement", description: "Working to make Liverpool city centre a better place for business." },
  { id: 3, name: "Make Liverpool", industry: "Manufacturing", description: "A maker space and community for local craftspeople." },
  { id: 4, name: "DoES Liverpool", industry: "Maker Space", description: "A community of makers, hackers, and creators." },
  { id: 5, name: "Agent Academy", industry: "Education", description: "Training the next generation of creative professionals." },
  { id: 6, name: "Homebaked", industry: "Food & Drink", description: "Community bakery and kitchen serving Anfield." },
  { id: 7, name: "Kazimier Garden", industry: "Hospitality", description: "An independent venue in Liverpool's creative quarter." },
  { id: 8, name: "Sound City", industry: "Events", description: "Music festival and conference celebrating new music." },
];

const FoundingMembers = () => {
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
                Founding Members
              </h1>
              <p className="text-xl text-muted-foreground">
                These pioneering businesses are building a fairer payment ecosystem 
                for Merseyside. Join them.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Members Grid */}
        <section className="py-16 md:py-24">
          <div className="container-site">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {foundingMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-ll-sm hover:shadow-ll-md transition-shadow"
                >
                  <div className="w-16 h-16 rounded-xl bg-ll-lime-soft flex items-center justify-center mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{member.industry}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container-site text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Become a Founding Member
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Join these businesses and be part of the movement to fix late payments 
                in Merseyside. Founding members get priority access and exclusive benefits.
              </p>
              <Button variant="lime" size="xl" asChild>
                <a href="https://platform.localloop.io/signup" target="_blank" rel="noopener noreferrer">
                  Join Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FoundingMembers;
