import { ReactNode } from "react";

interface PillProps {
  href?: string;
  variant?: "solid" | "ghost";
  children: ReactNode;
  className?: string;
}

export default function Pill({
  href,
  variant = "solid",
  children,
  className = "",
}: PillProps) {
  const base =
    "inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium transition-colors";
  const variants = {
    solid: "bg-[--foreground] text-[--background] hover:bg-[--foreground]/90",
    ghost:
      "border border-[--foreground]/10 text-[--foreground] hover:bg-[--foreground]/5",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return <span className={classes}>{children}</span>;
}
