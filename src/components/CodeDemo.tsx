import { motion } from "framer-motion";
import BorderGlowCard from "./BorderGlowCard";

const codeSnippet = `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.nexusai.dev/v1",
  apiKey: "your-api-key",
});

const response = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(response.choices[0].message);`;

const CodeDemo = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start in <span className="text-gradient-accent">Minutes</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Just swap your base URL — zero code migration needed. Compatible with any OpenAI SDK, LangChain, or HTTP client.
            </p>
            <ul className="space-y-4">
              {["Drop-in OpenAI replacement", "Automatic model routing", "Built-in retries & fallback"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <BorderGlowCard glowColor="195, 100%, 50%" className="bg-card">
              <div className="px-4 py-3 border-b border-border/50 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/40" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">index.ts</span>
              </div>
              <pre className="p-6 text-sm font-mono text-foreground/80 overflow-x-auto leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            </BorderGlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
