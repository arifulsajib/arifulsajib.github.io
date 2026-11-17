import React from "react";
import type { Publication } from "@/types";
import AuthorList from "./AuthorList";
import Badge from "@/components/ui/Badge";
import BibtexButton from "./BibtexButton";
import { ExternalLink, FileText, Code2, Link as LinkIcon } from "lucide-react";

interface PublicationCardProps {
  publication: Publication;
  compact?: boolean;
}

export default function PublicationCard({
  publication,
  compact = false,
}: PublicationCardProps) {
  const statusBadges: Record<
    Publication["status"],
    { label: string; variant: "default" | "accent" | "outline" | "solid" }
  > = {
    "under-review": { label: "Under Review", variant: "outline" },
    accepted: { label: "Accepted", variant: "default" },
    published: { label: "Published", variant: "accent" },
  };

  const statusInfo = statusBadges[publication.status];

  return (
    <article className="group rounded-lg border border-border/80 bg-card/60 p-5 md:p-6 transition-all duration-300 hover:border-accent/50 hover:bg-card hover:-translate-y-1 hover:shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
        <span className="font-mono text-xs text-muted">{publication.year}</span>
      </div>

      <h3 className="mt-2.5 font-serif text-lg font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
        {publication.title}
      </h3>

      <div className="mt-2 text-sm leading-relaxed">
        <AuthorList authors={publication.authors} />
      </div>

      <p className="mt-1 font-serif text-sm italic text-muted">
        {publication.venue}
      </p>

      {!compact && publication.description && (
        <p className="mt-3 text-sm leading-relaxed text-muted/90">
          {publication.description}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border/40 pt-3 text-xs font-mono">
        {publication.links.paper && (
          <a
            href={publication.links.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline transition-opacity hover:opacity-80"
          >
            <FileText size={13} />
            <span>Paper</span>
          </a>
        )}

        {publication.links.doi && (
          <a
            href={publication.links.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline transition-opacity hover:opacity-80"
          >
            <ExternalLink size={13} />
            <span>DOI</span>
          </a>
        )}

        {publication.links.code && (
          <a
            href={publication.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline transition-opacity hover:opacity-80"
          >
            <Code2 size={13} />
            <span>Code</span>
          </a>
        )}

        {publication.links.pdf && (
          <a
            href={publication.links.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline transition-opacity hover:opacity-80"
          >
            <LinkIcon size={13} />
            <span>PDF</span>
          </a>
        )}

        {publication.bibtex && <BibtexButton bibtex={publication.bibtex} />}
      </div>
    </article>
  );
}
