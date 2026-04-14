import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wallet, Blocks, BarChart3, Activity, Shield, Globe } from "lucide-react";
import BorderGlowCard from "./BorderGlowCard";

const features = [
  { icon: Wallet, title: "按量计费", desc: "无需订阅，用多少付多少，余额永不过期。", glow: "217, 91%, 60%" },
  { icon: Blocks, title: "兼容 OpenAI", desc: "完全兼容 OpenAI SDK，无需修改代码即可迁移。", glow: "270, 70%, 60%" },
  { icon: BarChart3, title: "透明账单", desc: "实时追踪每次请求的费用，无任何隐藏费用。", glow: "170, 80%, 42%" },
  { icon: Activity, title: "高并发", desc: "企业级架构，轻松处理每秒数千次请求。", glow: "217, 91%, 60%" },
  { icon: Shield, title: "99.9% 可用性", desc: "多区域部署，自动故障转移，确保最大可靠性。", glow: "270, 70%, 60%" },
  { icon: Globe, title: "全球加速", desc: "全球边缘节点部署，确保低延迟极速访问。", glow: "170, 80%, 42%" },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative" id="features">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            为什么选择 <span className="text-gradient-primary">Halo</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            为追求速度、稳定和简洁的开发者打造
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            >
              <BorderGlowCard glowColor={f.glow} className="bg-card p-6 md:p-8 h-full glow-card">
                <f.icon className="w-8 md:w-10 h-8 md:h-10 text-primary mb-4 md:mb-5" />
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">{f.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{f.desc}</p>
              </BorderGlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
