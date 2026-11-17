import React from "react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row md:px-10 lg:px-16">
        <div className="text-center sm:text-left">
          <p className="font-serif text-sm font-medium text-foreground">
            {profile.name}
          </p>
          <p className="font-mono text-xs text-muted">
            {profile.institution} · {currentYear}
          </p>
        </div>

        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  );
}
