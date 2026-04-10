import { motion } from "framer-motion";
import ModelLogoMarquee from "./ModelLogoMarquee";

const ModelsSection = () => {
  return (
    <section className="py-24 relative" id="models">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">500+</span> Models Available
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From GPT-4o to open-source models — access them all through a single endpoint.
          </p>
        </motion.div>
      </div>
      <ModelLogoMarquee />
    </section>
  );
};

export default ModelsSection;
