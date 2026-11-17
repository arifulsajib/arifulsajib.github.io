import React from "react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import SocialLinks from "@/components/ui/SocialLinks";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="rounded-xl border border-border/80 bg-card/70 p-6 md:p-8 transition-all duration-300 hover:border-accent/40 shadow-sm">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Connect & Collaborate
      </h2>

      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        I am always keen to discuss research ideas, trajectory representation learning, sequence modelling architectures, or potential research collaborations. Feel free to reach out directly via email or connect through academic networks.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline transition-opacity hover:opacity-85"
        >
          <Mail size={16} />
          <span>{profile.email}</span>
        </a>

        <div className="inline-flex items-center gap-1.5 text-xs text-muted">
          <MapPin size={15} />
          <span>{profile.institution}</span>
        </div>
      </div>

      <div className="mt-6 border-t border-border/50 pt-5">
        <SocialLinks links={socialLinks} showLabels />
      </div>
    </div>
  );
}
