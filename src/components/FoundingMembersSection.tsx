import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Placeholder founding members - these would come from a CMS in production
const foundingMembers = [
  { id: 1, name: "Baltic Creative", industry: "Creative Hub" },
  { id: 2, name: "Liverpool BID", industry: "Business Improvement" },
  { id: 3, name: "Make Liverpool", industry: "Manufacturing" },
  { id: 4, name: "DoES Liverpool", industry: "Maker Space" },
  { id: 5, name: "Agent Academy", industry: "Education" },
  { id: 6, name: "Homebaked", industry: "Food & Drink" },
  { id: 7, name: "Kazimier Garden", industry: "Hospitality" },
  { id: 8, name: "Sound City", industry: "Events" },
];

export const FoundingMembersSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our Founding Members
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            These pioneering local businesses are building a fairer payment ecosystem for Merseyside.
          </p>
        </motion.div>

        {/* Scrolling carousel */}
        <div className="relative mb-12">
          <div className="flex animate-scroll-left">
            {[...foundingMembers, ...foundingMembers].map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="flex-shrink-0 w-48 mx-4"
              >
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                  <div className="w-16 h-16 rounded-xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{member.name}</h3>
                  <p className="text-xs text-primary-foreground/60">{member.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="lime" size="lg" asChild>
            <Link to="/founding-members">
              View All Members
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
