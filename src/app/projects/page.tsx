import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import MotionSection from "@/components/ui/MotionSection";
import { researchProjects, softwareProjects } from "@/data/projects";
import {
  ResearchProjectCard,
  SoftwareProjectCard,
} from "@/components/projects/ProjectCard";
import { Layers, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research initiatives and software engineering systems by MD Ariful Islam (Sajib).",
};

export default function ProjectsPage() {
  return (
    <>
      <Section width="wide" className="pt-12 pb-8 border-b border-border/40">
        <MotionSection yOffset={8}>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            Applied Systems & Prototypes
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Projects
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            A collection of research implementations, experimental sequence modeling architectures, and verified software engineering applications.
          </p>
        </MotionSection>
      </Section>

      {/* Primary: Research Projects */}
      <Section width="wide" className="py-10 border-b border-border/40">
        <MotionSection>
          <div className="mb-6">
            <div className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
              <Layers size={20} className="text-accent" />
              <h2>Research Projects</h2>
            </div>
            <p className="mt-1 text-sm text-muted">
              Algorithm design, model implementations, and benchmark evaluations in trajectory representation and machine learning
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {researchProjects.map((project) => (
              <ResearchProjectCard key={project.id} project={project} />
            ))}
          </div>
        </MotionSection>
      </Section>

      {/* Secondary: Software Engineering Projects */}
      {softwareProjects.length > 0 && (
        <Section width="wide" className="pt-10 pb-16">
          <MotionSection>
            <div className="mb-6">
              <div className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
                <Terminal size={20} className="text-accent" />
                <h2>Software Engineering Projects</h2>
              </div>
              <p className="mt-1 text-sm text-muted">
                Full-stack web applications demonstrating scalable architecture, database modeling, and interactive frontend development
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {softwareProjects.map((project) => (
                <SoftwareProjectCard key={project.id} project={project} />
              ))}
            </div>
          </MotionSection>
        </Section>
      )}
    </>
  );
}
