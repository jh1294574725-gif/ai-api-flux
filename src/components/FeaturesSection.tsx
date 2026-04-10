import { motion } from "framer-motion";
import { Wallet, Blocks, BarChart3, Activity, Shield, Globe } from "lucide-react";
import BorderGlowCard from "./BorderGlowCard";

const features = [
  {
    icon: Wallet,
    title: "Pay As You Go",
    desc: "No subscriptions. Pay only for what you use, balance never expires.",
    glow: "195, 100%, 50%",
  },
  {
    icon: Blocks,
    title: "OpenAI Compatible",
    desc: "Drop-in replacement. Works with any OpenAI SDK or client app.",
    glow: "260, 80%, 60%",
  },
  {
    icon: BarChart3,
    title: "Transparent Billing",
    desc: "Track every request cost in real-time. No hidden fees, ever.",
    glow: "170, 80%, 45%",
  },
  {
    icon: Activity,
    title: "High Concurrency",
    desc: "Enterprise-grade infrastructure handles thousands of requests per second.",
    glow: "195, 100%, 50%",
  },
  {
    icon: Shield,
    title: "99.9% Uptime",
    desc: "Multi-region deployment with automatic failover for maximum reliability.",
    glow: "260, 80%, 60%",
  },
  {
    icon: Globe,
    title: "Global Access",
    desc: "Edge nodes worldwide ensure low latency from anywhere on the planet.",
    glow: "170, 80%, 45%",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative" id="features">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient-primary">Our API</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Built for developers who demand speed, reliability, and simplicity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BorderGlowCard glowColor={f.glow} className="bg-card p-8 h-full glow-card">
                <f.icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </BorderGlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
