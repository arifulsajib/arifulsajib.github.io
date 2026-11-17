import React from "react";
import Link from "next/link";
import { researchProjects, softwareProjects } from "@/data/projects";
import { ResearchProjectCard, SoftwareProjectCard } from "@/components/projects/ProjectCard";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {
  const featuredResearch = researchProjects.filter((p) => p.featured);
  const featuredSoftware = softwareProjects.filter((p) => p.featured);

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Featured Research Projects
          </h2>
          <p className="mt-1 text-sm text-muted">
            Core investigations in vehicle trajectory representations and spatiotemporal sequence models
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
        >
          <span>All Projects</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Primary Research Projects */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {featuredResearch.map((project) => (
          <ResearchProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Secondary Software Development Projects */}
      {featuredSoftware.length > 0 && (
        <div className="mt-12">
          <div className="border-t border-border/60 pt-8">
            <h3 className="font-serif text-xl font-medium text-foreground">
              Software Engineering Highlights
            </h3>
            <p className="mt-1 text-sm text-muted">
              Practical full-stack web applications demonstrating scalable architecture and real-world system design
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {featuredSoftware.map((project) => (
              <SoftwareProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
