import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <a href="/" className="flex items-center gap-2 font-heading font-bold text-lg text-foreground mb-4">
            <Zap className="w-5 h-5 text-primary" />
            NexusAI
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed">
            One API, 500+ models. The fastest way to integrate AI into your applications.
          </p>
        </div>
        {[
          { title: "Product", links: ["Pricing", "Models", "API Docs", "Status"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy Policy", "Terms of Service", "SLA"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-foreground mb-4 text-sm">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} NexusAI. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
