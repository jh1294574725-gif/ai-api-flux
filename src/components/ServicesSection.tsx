import { motion } from "framer-motion";
import { BookOpen, DollarSign, Cpu, Link, CloudCog, Award } from "lucide-react";

const services = [
  { icon: BookOpen, title: "快速上手指南", desc: "注册、充值、获取 API Key —— 几分钟即可开始构建。" },
  { icon: DollarSign, title: "透明定价", desc: "低至官方价格 6.5 折起，所有模型按量计费，清晰透明。" },
  { icon: Cpu, title: "500+ 模型", desc: "支持 GPT-4o、Claude 3.5、Gemini、DeepSeek、Grok 等主流模型。" },
  { icon: Link, title: "无缝集成", desc: "一个接口，所有模型。切换供应商无需修改代码。" },
  { icon: CloudCog, title: "全球边缘网络", desc: "全球节点部署，随时随地享受低延迟访问。" },
  { icon: Award, title: "久经考验", desc: "稳定运行超过两年，服务数千名开发者。" },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 relative" id="services">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            全方位 <span className="text-gradient-accent">服务</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            我们处理模型集成 —— 您只需注册即可使用
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 group"
            >
              <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
