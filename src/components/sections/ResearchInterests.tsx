import React from "react";
import Link from "next/link";
import { researchInterestGroups } from "@/data/research";
import { ArrowUpRight } from "lucide-react";

export default function ResearchInterests() {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Research Interests
          </h2>
          <p className="mt-1 text-sm text-muted">
            Primary focus on representation learning & sequence modelling for spatiotemporal streams
          </p>
        </div>
        <Link
          href="/research"
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline transition-opacity hover:opacity-85"
        >
          <span>Research Statement</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {researchInterestGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border/80 bg-card/60 p-5 transition-all duration-300 hover:border-accent/50 hover:bg-card hover:-translate-y-1 hover:shadow-sm"
          >
            <h3 className="font-serif text-base font-medium text-foreground">
              {group.category}
            </h3>
            <ul className="mt-3 space-y-2 border-t border-border/50 pt-3 text-sm text-muted">
              {group.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
