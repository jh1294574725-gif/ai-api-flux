import { Sparkles, Mail, MessageCircle, Send } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/40 py-10 md:py-16 relative">
    {/* Background decoration */}
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />

    <div className="container px-4 sm:px-6 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="/" className="flex items-center gap-2 font-heading font-bold text-lg text-foreground mb-4">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            Halo
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            一个接口，500+ 模型。最快捷的方式将 AI 集成到你的应用中。
          </p>
        </div>

        {/* Links */}
        {[
          { title: "产品", links: ["定价", "模型列表", "API 文档", "服务状态"] },
          { title: "公司", links: ["关于我们", "博客", "加入我们", "联系我们"] },
          { title: "法律", links: ["隐私政策", "服务条款", "SLA 协议"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm">{col.title}</h4>
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

      {/* Bottom bar with social */}
      <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground order-2 sm:order-1">
          © {new Date().getFullYear()} Halo AI. 保留所有权利。
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3 order-1 sm:order-2">
          {/* 微信 */}
          <a
            href="#"
            title="微信"
            className="social-icon bg-[#07C160]/10 hover:bg-[#07C160]/20"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#07C160">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.108.24-.245 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.18 2.768c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.36 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z" />
            </svg>
          </a>

          {/* 邮箱 */}
          <a
            href="mailto:contact@haloai.dev"
            title="邮箱"
            className="social-icon bg-primary/10 hover:bg-primary/20"
          >
            <Mail className="w-5 h-5 text-primary" />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/haloai"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
            className="social-icon bg-[#26A5E4]/10 hover:bg-[#26A5E4]/20"
          >
            <Send className="w-5 h-5 text-[#26A5E4]" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="social-icon bg-[#25D366]/10 hover:bg-[#25D366]/20"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
