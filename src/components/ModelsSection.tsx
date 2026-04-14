import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ModelLogoMarquee from "./ModelLogoMarquee";

const ModelsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const marqueeScale = useTransform(scrollYProgress, [0, 0.3], [0.96, 1]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative" id="models">
      <div className="container px-4 sm:px-6">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-gradient-primary">500+</span> 模型可用
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            从 GPT-4o 到开源模型 —— 通过一个接口全部访问
          </p>
        </motion.div>
      </div>
      <motion.div style={{ scale: marqueeScale }}>
        <ModelLogoMarquee />
      </motion.div>
    </section>
  );
};

export default ModelsSection;
