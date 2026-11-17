import React from "react";
import Image from "next/image";
import type { ResearchProject, SoftwareProject } from "@/types";
import Badge from "@/components/ui/Badge";
import { ExternalLink, Sparkles } from "lucide-react";

interface ResearchProjectCardProps {
  project: ResearchProject;
}

export function ResearchProjectCard({ project }: ResearchProjectCardProps) {
  const statusLabels: Record<ResearchProject["status"], string> = {
    "under-review": "Under Review",
    accepted: "Accepted",
    published: "Published",
  };

  return (
    <article className="rounded-lg border border-border/80 bg-card/60 p-6 transition-all duration-300 hover:border-accent/50 hover:bg-card hover:-translate-y-1 hover:shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent">
          <Sparkles size={13} />
          {project.category}
        </span>
        <Badge variant={project.status === "under-review" ? "outline" : "default"}>
          {statusLabels[project.status]}
        </Badge>
      </div>

      <h3 className="mt-3 font-serif text-xl font-medium text-foreground">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 space-y-2.5 rounded border border-border/60 bg-accent-soft/30 p-3.5 text-xs leading-relaxed">
        <div>
          <span className="font-semibold text-foreground">Challenge: </span>
          <span className="text-muted">{project.problem}</span>
        </div>
        <div>
          <span className="font-semibold text-foreground">Methodology: </span>
          <span className="text-muted">{project.approach}</span>
        </div>
        {project.results && (
          <div>
            <span className="font-semibold text-accent">Impact / Findings: </span>
            <span className="text-foreground/90 font-mono">{project.results}</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="text-[11px]">
            {tech}
          </Badge>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4 border-t border-border/40 pt-3 text-xs font-mono">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline transition-opacity hover:opacity-80"
            >
              <ExternalLink size={12} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

interface SoftwareProjectCardProps {
  project: SoftwareProject;
}

export function SoftwareProjectCard({ project }: SoftwareProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border/80 bg-card/60 transition-all duration-300 hover:border-accent/50 hover:bg-card hover:-translate-y-1 hover:shadow-md">
      {project.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-muted/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-muted">{project.period}</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-3 space-y-1.5 text-xs text-muted">
          <p>
            <strong className="text-foreground">Approach:</strong>{" "}
            {project.approach}
          </p>
          <p>
            <strong className="text-foreground">Outcome:</strong>{" "}
            {project.result}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-[11px]">
              {tech}
            </Badge>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3 border-t border-border/40 pt-3 text-xs font-mono">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline transition-opacity hover:opacity-80"
              >
                <ExternalLink size={12} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
