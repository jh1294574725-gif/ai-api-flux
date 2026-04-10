import { motion } from "framer-motion";
import ModelLogoMarquee from "./ModelLogoMarquee";

const ModelsSection = () => {
  return (
    <section className="py-16 md:py-24 relative" id="models">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
      <ModelLogoMarquee />
    </section>
  );
};

export default ModelsSection;
