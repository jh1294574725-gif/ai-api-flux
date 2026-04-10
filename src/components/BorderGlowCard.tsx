import { useRef, useState, useCallback, ReactNode } from "react";

interface BorderGlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: number;
}

const BorderGlowCard = ({
  children,
  className = "",
  glowColor = "195, 100%, 50%",
  borderRadius = 16,
}: BorderGlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const edgeSensitivity = 40;

      const distTop = y;
      const distBottom = rect.height - y;
      const distLeft = x;
      const distRight = rect.width - x;
      const minDist = Math.min(distTop, distBottom, distLeft, distRight);

      if (minDist < edgeSensitivity) {
        const intensity = 1 - minDist / edgeSensitivity;
        setGlowStyle({
          background: `radial-gradient(circle at ${x}px ${y}px, hsla(${glowColor}, ${intensity * 0.6}) 0%, transparent 60%)`,
        });
      } else {
        setGlowStyle({});
      }
    },
    [glowColor]
  );

  const handleMouseLeave = useCallback(() => setGlowStyle({}), []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={glowStyle}
      />
      <div className="absolute inset-0 rounded-[inherit] border border-border/50 pointer-events-none z-10" />
      {children}
    </div>
  );
};

export default BorderGlowCard;
