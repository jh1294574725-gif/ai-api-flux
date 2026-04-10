const AI_MODELS = [
  { name: "OpenAI", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/openai-text.png" },
  { name: "Claude", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/claude-color.png" },
  { name: "Gemini", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/gemini-color.png" },
  { name: "DeepSeek", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/deepseek-color.png" },
  { name: "Mistral", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/mistral-color.png" },
  { name: "Meta", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/meta-color.png" },
  { name: "Midjourney", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/midjourney.png" },
  { name: "Stability AI", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/stability-color.png" },
  { name: "Cohere", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/cohere-color.png" },
  { name: "Perplexity", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/perplexity-color.png" },
  { name: "Groq", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/groq-color.png" },
  { name: "Qwen", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.14.0/files/light/qwen-color.png" },
];

const ModelLogoMarquee = () => {
  const logos = [...AI_MODELS, ...AI_MODELS];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Row 1 */}
      <div className="flex animate-marquee mb-6">
        {logos.map((model, i) => (
          <div
            key={`r1-${i}`}
            className="flex items-center gap-3 mx-4 px-5 py-3 rounded-2xl bg-card border border-border/60 whitespace-nowrap shrink-0 glow-card"
          >
            <img
              src={model.icon}
              alt={model.name}
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
            <span className="text-sm font-medium text-foreground/70">{model.name}</span>
          </div>
        ))}
      </div>

      {/* Row 2 reverse */}
      <div className="flex animate-marquee-reverse">
        {logos.map((model, i) => (
          <div
            key={`r2-${i}`}
            className="flex items-center gap-3 mx-4 px-5 py-3 rounded-2xl bg-card border border-border/60 whitespace-nowrap shrink-0 glow-card"
          >
            <img
              src={model.icon}
              alt={model.name}
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
            <span className="text-sm font-medium text-foreground/70">{model.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelLogoMarquee;
