import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import MotionSection from "@/components/ui/MotionSection";
import { researchStatement, researchInterestGroups } from "@/data/research";
import { researchProjects } from "@/data/projects";
import { ResearchProjectCard } from "@/components/projects/ProjectCard";
import { Compass, Sparkles, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research directions, statements, and methodologies in spatiotemporal representation learning, sequence modelling, and applied machine learning.",
};

export default function ResearchPage() {
  return (
    <>
      {/* Header */}
      <Section width="wide" className="pt-12 pb-8 border-b border-border/40">
        <MotionSection yOffset={8}>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            Academic Vision & Focus
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Research Directions
          </h1>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">
            Developing principled, scalable sequence models and representation learning techniques for continuous spatiotemporal data, mobility analytics, and complex real-world dynamic systems.
          </p>
        </MotionSection>
      </Section>

      {/* Primary Direction Statement */}
      <Section width="wide" className="py-10 border-b border-border/40">
        <MotionSection>
          <div className="rounded-xl border border-border/80 bg-accent-soft/30 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              <Compass size={15} />
              <span>Primary Research Direction</span>
            </div>
            <p className="mt-3 font-serif text-xl font-medium text-foreground sm:text-2xl">
              {researchStatement.primaryDirection}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {researchStatement.summary}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
              <BookOpen size={20} className="text-accent" />
              <span>Research Statement</span>
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
              {researchStatement.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </MotionSection>
      </Section>

      {/* Structured Interest Domains */}
      <Section width="wide" className="py-10 border-b border-border/40">
        <MotionSection>
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Broad Research Domains
            </h2>
            <p className="mt-1 text-sm text-muted">
              Categorized research topics spanning foundational machine learning to intelligent transportation
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {researchInterestGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-lg border border-border/80 bg-card/60 p-6 transition-all duration-300 hover:border-accent/50 hover:bg-card hover:-translate-y-1 hover:shadow-sm"
              >
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2.5 border-t border-border/50 pt-4 text-sm text-muted">
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
        </MotionSection>
      </Section>

      {/* Ongoing & Completed Research Projects */}
      <Section width="wide" className="pt-10 pb-16">
        <MotionSection>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
                <Sparkles size={18} className="text-accent" />
                <span>Active Research Initiatives</span>
              </h2>
              <p className="mt-1 text-sm text-muted">
                Concrete implementations and experimental frameworks derived from our research inquiries
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {researchProjects.map((project) => (
              <ResearchProjectCard key={project.id} project={project} />
            ))}
          </div>
        </MotionSection>
      </Section>
    </>
  );
}
