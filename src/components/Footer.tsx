import { Sparkles, Mail, MessageCircle, Send } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/40 py-8 md:py-10 relative">
    <div className="container px-4 sm:px-6 relative z-10">
      {/* Logo + Copyright + Social in one row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <a href="/" className="flex items-center gap-2 font-heading font-bold text-lg text-foreground">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            Halo
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Halo AI. 保留所有权利。
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a href="#" title="微信" className="social-icon bg-[#07C160]/10 hover:bg-[#07C160]/20">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#07C160">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.108.24-.245 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.18 2.768c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.36 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z" />
            </svg>
          </a>
          <a href="mailto:contact@haloai.dev" title="邮箱" className="social-icon bg-primary/10 hover:bg-primary/20">
            <Mail className="w-5 h-5 text-primary" />
          </a>
          <a href="https://t.me/haloai" target="_blank" rel="noopener noreferrer" title="Telegram" className="social-icon bg-[#26A5E4]/10 hover:bg-[#26A5E4]/20">
            <Send className="w-5 h-5 text-[#26A5E4]" />
          </a>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="social-icon bg-[#25D366]/10 hover:bg-[#25D366]/20">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
