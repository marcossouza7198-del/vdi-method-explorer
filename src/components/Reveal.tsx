import { ReactNode, CSSProperties } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** translate distance in pixels */
  y?: number;
  as?: "div" | "section" | "article" | "li" | "span";
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 24,
  as: Tag = "div",
}: RevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
    opacity: isVisible ? 1 : 0,
    transitionProperty: "opacity, transform",
    transitionDuration: "700ms",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref as never} style={style} className={cn(className)}>
      {children}
    </Tag>
  );
};
