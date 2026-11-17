import React from "react";
import type { SocialLink } from "@/types";
import { SocialIcon } from "./SocialIcons";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  showLabels?: boolean;
}

export default function SocialLinks({
  links,
  className,
  showLabels = false,
}: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 rounded border border-border/70 bg-transparent px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          aria-label={link.label}
        >
          <SocialIcon name={link.icon} size={15} />
          {showLabels && (
            <span className="font-mono text-xs">{link.label}</span>
          )}
        </a>
      ))}
    </div>
  );
}
