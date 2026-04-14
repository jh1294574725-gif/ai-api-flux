import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BorderGlowCard from "./BorderGlowCard";

const codeSnippet = `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.haloai.dev/v1",
  apiKey: "your-api-key",
});

const response = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "你好！" }],
});

console.log(response.choices[0].message);`;

const CodeDemo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.4], [-60, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div style={{ x: leftX, opacity }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-gradient-accent">几分钟</span>即可上手
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              只需替换 Base URL，零代码迁移。兼容任何 OpenAI SDK、LangChain 或 HTTP 客户端。
            </p>
            <ul className="space-y-3 md:space-y-4">
              {["无缝替换 OpenAI 接口", "智能模型路由", "内置重试与故障转移"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div style={{ x: rightX, opacity }}>
            <BorderGlowCard glowColor="217, 91%, 60%" className="bg-card">
              <div className="px-4 py-3 border-b border-border/50 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">index.ts</span>
              </div>
              <pre className="p-4 md:p-6 text-xs sm:text-sm font-mono text-foreground/80 overflow-x-auto leading-relaxed">
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
