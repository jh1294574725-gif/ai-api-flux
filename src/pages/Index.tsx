import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModelsSection from "@/components/ModelsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CodeDemo from "@/components/CodeDemo";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NexusAI - Unified AI API | Access 500+ Models via One Endpoint</title>
        <meta name="description" content="Access GPT-4, Claude, Gemini, DeepSeek and 500+ AI models through a single OpenAI-compatible API. Pay-as-you-go pricing, 99.9% uptime, blazing fast." />
        <meta name="keywords" content="AI API, OpenAI API, Claude API, GPT-4 API, AI models, unified API, cheap AI API" />
        <link rel="canonical" href="https://nexusai.dev" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "NexusAI",
          applicationCategory: "DeveloperApplication",
          description: "Unified AI API platform with 500+ models",
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
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
