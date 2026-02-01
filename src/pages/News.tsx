import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Local Loop Launches Founding Member Program",
    date: "2026-01-15",
    excerpt: "We're excited to announce the official launch of our founding member program, offering early access to Merseyside businesses.",
  },
  {
    id: 2,
    title: "Partnership with Liverpool City Region Combined Authority",
    date: "2026-01-10",
    excerpt: "Local Loop partners with the Combined Authority to support SME growth across the Liverpool City Region.",
  },
  {
    id: 3,
    title: "New Guide: Getting Paid on Time",
    date: "2026-01-05",
    excerpt: "Download our comprehensive guide with practical tips for improving payment collection and cash flow management.",
  },
  {
    id: 4,
    title: "Beta Platform Now Live",
    date: "2025-12-20",
    excerpt: "Our beta platform is now available for founding members to explore and provide feedback.",
  },
];

const News = () => {
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
                News & Updates
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay up to date with the latest from Local Loop.
              </p>
            </motion.div>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 md:py-24">
          <div className="container-site">
            <div className="max-w-3xl mx-auto space-y-8">
              {newsItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-ll-sm hover:shadow-ll-md transition-shadow cursor-pointer group"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <time>{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
