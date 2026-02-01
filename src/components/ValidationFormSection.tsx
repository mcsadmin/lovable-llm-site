import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Building2, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: "business-type",
    question: "What type of business do you run?",
    icon: Building2,
    options: [
      { value: "limited", label: "Limited Company" },
      { value: "sole-trader", label: "Sole Trader" },
      { value: "partnership", label: "Partnership" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "location",
    question: "Where is your business based?",
    icon: MapPin,
    options: [
      { value: "liverpool", label: "Liverpool" },
      { value: "merseyside", label: "Wider Merseyside" },
      { value: "northwest", label: "North West England" },
      { value: "other-uk", label: "Other UK Location" },
    ],
  },
  {
    id: "b2b-trade",
    question: "Do you trade with other businesses?",
    icon: Users,
    options: [
      { value: "yes-regularly", label: "Yes, regularly" },
      { value: "yes-sometimes", label: "Yes, sometimes" },
      { value: "no-consumers", label: "No, mostly consumers" },
      { value: "mixed", label: "Mix of both" },
    ],
  },
  {
    id: "payment-issues",
    question: "Do you experience late payment issues?",
    icon: Clock,
    options: [
      { value: "frequently", label: "Yes, frequently" },
      { value: "sometimes", label: "Sometimes" },
      { value: "rarely", label: "Rarely" },
      { value: "never", label: "Never" },
    ],
  },
];

export const ValidationFormSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (value: string) => {
    const question = questions[currentQuestion];
    setAnswers((prev) => ({ ...prev, [question.id]: value }));

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion((prev) => prev + 1), 300);
    } else {
      setTimeout(() => setIsComplete(true), 300);
    }
  };

  const isGoodFit = () => {
    const { location, "b2b-trade": b2bTrade } = answers;
    return (
      (location === "liverpool" || location === "merseyside") &&
      (b2bTrade === "yes-regularly" || b2bTrade === "yes-sometimes" || b2bTrade === "mixed")
    );
  };

  const resetForm = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Is Local Loop Right for You?
            </h2>
            <p className="text-lg text-muted-foreground">
              Answer a few quick questions to find out.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-ll-lg border border-border">
            <AnimatePresence mode="wait">
              {!isComplete ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Progress */}
                  <div className="flex gap-2 mb-8">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          index <= currentQuestion ? "bg-primary" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Question */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      {(() => {
                        const Icon = questions[currentQuestion].icon;
                        return (
                          <div className="w-10 h-10 rounded-xl bg-ll-lime-soft flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                        );
                      })()}
                      <span className="text-sm text-muted-foreground">
                        Question {currentQuestion + 1} of {questions.length}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold">
                      {questions[currentQuestion].question}
                    </h3>
                  </div>

                  {/* Options */}
                  <div className="grid gap-3">
                    {questions[currentQuestion].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className="w-full text-left p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-secondary transition-all"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  {isGoodFit() ? (
                    <>
                      <div className="w-20 h-20 rounded-full bg-ll-lime-soft flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-4">
                        You're a Great Fit!
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Based on your answers, Local Loop could help your business 
                        improve cash flow and build stronger local connections.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="hero" size="lg" asChild>
                          <a href="https://platform.localloop.io/signup" target="_blank" rel="noopener noreferrer">
                            Join Local Loop
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </Button>
                        <Button variant="hero-outline" size="lg" onClick={resetForm}>
                          Start Over
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                        <Building2 className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-4">
                        Stay Connected
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Local Loop is currently focused on the Merseyside region, 
                        but we're expanding soon. Join our newsletter to be the first to know.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="hero-outline" size="lg" onClick={resetForm}>
                          Start Over
                        </Button>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
