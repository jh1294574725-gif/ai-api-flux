import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModelsSection from "@/components/ModelsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CodeDemo from "@/components/CodeDemo";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Halo AI - 统一AI API接口 | 一个接口访问500+模型</title>
        <meta name="description" content="通过一个兼容OpenAI协议的API接口，访问GPT-4、Claude、Gemini、DeepSeek等500+AI模型。按量计费，极速响应，透明定价。" />
        <meta name="keywords" content="AI API, OpenAI API, Claude API, GPT-4 API, AI模型, 统一接口, API聚合" />
        <link rel="canonical" href="https://haloai.dev" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Halo AI",
          applicationCategory: "DeveloperApplication",
          description: "统一AI API平台，500+模型一键接入",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        })}</script>
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ModelsSection />
        <FeaturesSection />
        <CodeDemo />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
