import React from "react";
import { educationList } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Education
      </h2>

      <div className="mt-6 space-y-6">
        {educationList.map((edu, index) => (
          <div
            key={`${edu.institution}-${index}`}
            className="relative flex items-start gap-4 border-l-2 border-accent/40 pl-5"
          >
            <div className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs text-muted">{edu.period}</span>
              </div>

              <p className="font-serif text-sm font-medium text-accent">
                {edu.institution}
                {edu.location ? ` · ${edu.location}` : ""}
              </p>

              {edu.details && (
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {edu.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
