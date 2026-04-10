import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "特性", href: "#features" },
  { label: "模型", href: "#models" },
  { label: "服务", href: "#services" },
  { label: "文档", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
      <div className="container flex items-center justify-between h-16 px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-foreground">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          Halo
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-foreground">登录</Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">注册</Button>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="sm" className="text-foreground flex-1">登录</Button>
              <Button size="sm" className="bg-primary text-primary-foreground flex-1">注册</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
