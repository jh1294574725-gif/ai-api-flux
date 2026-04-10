import { motion } from "framer-motion";
import { BookOpen, DollarSign, Cpu, Link, CloudCog, Award } from "lucide-react";

const services = [
  { icon: BookOpen, title: "Quick Start Guide", desc: "Register, top up, get your API key — start building in minutes." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "65-78% off official prices. Clear per-token rates for every model." },
  { icon: Cpu, title: "500+ Models", desc: "GPT-4o, Claude 3.5, Gemini, DeepSeek, Grok, Runway and more." },
  { icon: Link, title: "Seamless Integration", desc: "One endpoint, all models. Switch providers without changing code." },
  { icon: CloudCog, title: "Global Edge Network", desc: "Low-latency access from anywhere with globally distributed nodes." },
  { icon: Award, title: "Battle Tested", desc: "Serving thousands of developers reliably for over two years." },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative" id="services">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete <span className="text-gradient-accent">Service</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We handle model integration — just register and start using.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 group"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
