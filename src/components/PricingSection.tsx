import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import BorderGlowCard from "./BorderGlowCard";

const plans = [
  {
    name: "Starter",
    price: "$0",
    desc: "For hobbyists & testing",
    features: ["$1 free credit", "All models access", "100 RPM rate limit", "Community support", "Standard latency"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    desc: "For production workloads",
    features: ["$35 in credits", "All models access", "1000 RPM rate limit", "Priority support", "Low latency", "Usage analytics"],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For teams at scale",
    features: ["Volume discounts", "All models access", "Unlimited RPM", "Dedicated support", "Lowest latency", "SLA guarantee", "Custom billing"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 relative" id="pricing">
      <div className="absolute inset-0 bg-glow-radial opacity-50" />
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-gradient-primary">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Up to 35% cheaper than official API pricing. Pay as you go.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BorderGlowCard
                glowColor={plan.highlighted ? "195, 100%, 50%" : "230, 15%, 30%"}
                className={`bg-card p-8 h-full flex flex-col ${plan.highlighted ? "border border-primary/30 glow-border" : ""}`}
              >
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
                <div className="mt-6 mb-8">
                  <span className="text-5xl font-bold text-gradient-primary">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground ml-1">/mo</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted text-foreground hover:bg-muted/80"}`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </BorderGlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
