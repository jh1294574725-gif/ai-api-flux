import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlowText from "./GlowText";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Parallax mesh blobs */}
      <motion.div style={{ y: bgY1 }} className="absolute top-10 md:top-20 -left-20 md:-left-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/[0.07] animate-blob blur-[60px] md:blur-[80px]" />
      <motion.div style={{ y: bgY2 }} className="absolute top-20 md:top-40 -right-10 md:right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-secondary/[0.06] animate-blob blur-[60px] md:blur-[80px]" />
      <motion.div style={{ y: bgY3 }} className="absolute -bottom-10 md:-bottom-20 left-1/4 md:left-1/3 w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-accent/[0.05] animate-blob blur-[60px] md:blur-[80px]" />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />

      <div className="container relative z-10 text-center px-4 sm:px-6">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-primary font-medium">500+ AI 模型 · 一个接口搞定</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]">
              <GlowText>统一 AI 接口</GlowText>
              <br />
              <span className="text-foreground">为开发者而生</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
              通过一个兼容 OpenAI 协议的接口，轻松接入 GPT-4、Claude、Gemini、DeepSeek 等 500+ 模型。按量计费，极速响应。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 h-12 md:h-13 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                开始使用
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 h-12 md:h-13 border-border text-foreground hover:bg-muted">
                查看 API 文档
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats with parallax */}
        <motion.div
          style={{ y: statsY }}
          className="mt-14 md:mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "500+", label: "AI 模型" },
              { value: "99.9%", label: "可用性" },
              { value: "<100ms", label: "响应延迟" },
              { value: "10K+", label: "开发者" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
