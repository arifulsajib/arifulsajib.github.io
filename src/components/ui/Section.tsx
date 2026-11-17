import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  width?: "prose" | "wide" | "full";
  className?: string;
  id?: string;
}

export default function Section({
  children,
  width = "wide",
  className,
  id,
  ...props
}: SectionProps) {
  const widthClasses = {
    prose: "max-w-3xl",
    wide: "max-w-5xl",
    full: "max-w-7xl",
  };

  return (
    <section
      id={id}
      className={cn("px-6 py-12 md:px-10 lg:px-16", className)}
      {...props}
    >
      <div className={cn("mx-auto", widthClasses[width])}>{children}</div>
    </section>
  );
}
