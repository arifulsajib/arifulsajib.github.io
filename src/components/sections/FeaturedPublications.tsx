import React from "react";
import Link from "next/link";
import { publications } from "@/data/publications";
import PublicationCard from "@/components/publications/PublicationCard";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedPublications() {
  const featured = publications.filter((p) => p.featured);

  if (featured.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Selected Publications
          </h2>
          <p className="mt-1 text-sm text-muted">
            Peer-reviewed papers and submissions in trajectory learning and applied AI
          </p>
        </div>
        <Link
          href="/publications"
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
        >
          <span>All Publications ({publications.length})</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        {featured.map((pub) => (
          <PublicationCard key={pub.id} publication={pub} />
        ))}
      </div>
    </div>
  );
}
