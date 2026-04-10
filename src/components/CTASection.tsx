import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-glow-radial" />
      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            准备好用 <span className="text-gradient-primary">AI</span> 构建了吗？
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 px-2">
            加入 10,000+ 开发者的行列，注册即送 $1 免费额度。
          </p>
          <Button size="lg" className="w-full sm:w-auto text-base px-10 h-12 md:h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
            开始使用
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
