import { useRef, useState, useCallback } from "react";

interface GlowTextProps {
  children: string;
  className?: string;
}

const GlowText = ({ children, className = "" }: GlowTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <span
      ref={textRef}
      className={`relative inline-block cursor-default ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ position: "relative" }}
    >
      {/* Base gradient text */}
      <span className="text-gradient-primary relative z-10">{children}</span>

      {/* Moving glow overlay */}
      {isHovering && (
        <span
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, 
              hsla(217, 91%, 70%, 0.8) 0%, 
              hsla(270, 70%, 65%, 0.4) 30%, 
              transparent 70%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            transition: "opacity 0.15s ease",
          }}
        >
          {children}
        </span>
      )}

      {/* Ambient glow behind text */}
      {isHovering && (
        <span
          className="absolute inset-0 pointer-events-none z-0 blur-lg opacity-60"
          style={{
            background: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, 
              hsla(217, 91%, 60%, 0.35) 0%, 
              hsla(270, 70%, 60%, 0.15) 40%, 
              transparent 70%)`,
          }}
        />
      )}
    </span>
  );
};

export default GlowText;
