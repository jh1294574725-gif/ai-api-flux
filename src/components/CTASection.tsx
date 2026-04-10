import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-glow-radial" />
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build with <span className="text-gradient-primary">AI</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join 10,000+ developers using our API. Get $1 free credit when you sign up.
          </p>
          <Button size="lg" className="text-base px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
