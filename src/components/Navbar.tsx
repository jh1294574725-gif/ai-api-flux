import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Models", href: "#models" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-foreground">
          <Zap className="w-6 h-6 text-primary" />
          NexusAI
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
          <Button variant="ghost" size="sm" className="text-foreground">Login</Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="sm" className="text-foreground flex-1">Login</Button>
              <Button size="sm" className="bg-primary text-primary-foreground flex-1">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
