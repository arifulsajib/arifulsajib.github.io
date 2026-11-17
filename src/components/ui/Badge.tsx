import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "solid";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variantStyles = {
    default: "bg-accent-soft text-accent border border-border/80",
    accent: "bg-accent text-white border-transparent",
    outline: "border border-border text-muted bg-transparent",
    solid: "bg-foreground text-background font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2.5 py-0.5 text-xs font-mono tracking-tight transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
