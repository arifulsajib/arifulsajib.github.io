import React from "react";
import { newsItems } from "@/data/news";
import { ExternalLink } from "lucide-react";

export default function News() {
  if (newsItems.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Recent Updates
      </h2>

      <div className="mt-6 divide-y divide-border/60">
        {newsItems.map((item) => (
          <div key={item.id} className="py-3.5 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
              <span className="shrink-0 font-mono text-xs text-muted">
                [{item.date}]
              </span>
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {item.title}
                </p>
                {item.description && (
                  <p className="text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                )}
                {item.link && (
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline"
                  >
                    <span>{item.link.label}</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
