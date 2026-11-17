import React from "react";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Technical Proficiencies
      </h2>
      <p className="mt-1 text-sm text-muted">
        Core languages, scientific libraries, deep learning frameworks, and development tools
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="rounded-lg border border-border/80 bg-card/60 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-card hover:-translate-y-0.5 hover:shadow-sm"
          >
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              {cat.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-border/80 bg-accent-soft/30 px-2.5 py-1 text-xs text-foreground font-mono transition-colors hover:border-accent/60"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
