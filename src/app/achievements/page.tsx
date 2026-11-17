import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { achievements } from "@/data/achievements";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Academic awards, honors, and scholarships.",
};

export default function AchievementsPage() {
  return (
    <Section width="prose" className="pt-14 pb-16">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
        <Award size={15} />
        <span>Honors & Recognitions</span>
      </div>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
        Achievements
      </h1>

      {achievements.length > 0 ? (
        <div className="mt-8 space-y-4">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="rounded-md border border-border/80 bg-background/50 p-5"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="font-serif text-lg font-medium text-foreground">
                  {item.title}
                </h2>
                <span className="font-mono text-xs text-muted">{item.date}</span>
              </div>
              {item.organization && (
                <p className="font-serif text-sm text-accent">
                  {item.organization}
                </p>
              )}
              {item.description && (
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-border/70 bg-accent-soft/20 p-8 text-center">
          <p className="font-serif text-base text-foreground">
            Academic honors and milestone awards will be cataloged here.
          </p>
          <p className="mt-2 text-xs text-muted">
            Currently maintaining focus on thesis progression, sequence model development, and manuscript peer review.
          </p>
        </div>
      )}
    </Section>
  );
}
