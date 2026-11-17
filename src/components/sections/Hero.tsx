import React from "react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import SocialLinks from "@/components/ui/SocialLinks";
import { FileDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_auto] md:items-center gap-8 md:gap-10">
      <div>
        <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
          {profile.primaryRole} · {profile.institution.split(",")[0]}
        </p>

        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {profile.name}{" "}
          {profile.preferredName && (
            <span className="font-sans text-xl font-normal text-muted sm:text-2xl">
              ({profile.preferredName})
            </span>
          )}
        </h1>

        <p className="mt-1 font-serif text-lg font-normal text-accent">
          {profile.tagline}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {profile.bioShort}
        </p>

        {/* Quick action buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 rounded bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <span>Research Focus</span>
            <ArrowRight size={14} />
          </Link>

          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <FileDown size={14} />
              <span>Download CV</span>
            </a>
          )}
        </div>

        {/* Academic Profiles & Social Links */}
        <div className="mt-6 border-t border-border/60 pt-4">
          <SocialLinks links={socialLinks} showLabels />
        </div>
      </div>

      {/* Profile Photo - strictly center aligned on mobile/small screen */}
      <div className="flex flex-col items-center justify-center mx-auto md:mx-0 shrink-0">
        <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm sm:h-52 sm:w-52 md:h-60 md:w-60 transition-transform duration-300 hover:scale-[1.01]">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            priority
            sizes="(max-width: 768px) 176px, 240px"
            className="object-cover object-top"
          />
        </div>
        <p className="mt-2.5 text-center font-mono text-[11px] text-muted">
          Chongqing, China
        </p>
      </div>
    </div>
  );
}
