import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import MotionSection from "@/components/ui/MotionSection";
import { publications } from "@/data/publications";
import PublicationCard from "@/components/publications/PublicationCard";
import { BookMarked } from "lucide-react";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed publications, conference submissions, and preprints by MD Ariful Islam (Sajib) in machine learning, sequence modelling, and trajectory representations.",
};

export default function PublicationsPage() {
  const publishedAndAccepted = publications.filter(
    (p) => p.status === "published" || p.status === "accepted"
  );
  const underReview = publications.filter((p) => p.status === "under-review");

  return (
    <>
      <Section width="wide" className="pt-12 pb-8 border-b border-border/40">
        <MotionSection yOffset={8}>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
            <BookMarked size={14} />
            <span>Scholarly Output</span>
          </div>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Publications & Preprints
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            All peer-reviewed conference articles, journal publications, and ongoing conference submissions. Author order is preserved, and links to preprints, code, or digital object identifiers (DOIs) are provided where officially released.
          </p>
        </MotionSection>
      </Section>

      {/* Under Review Submissions */}
      {underReview.length > 0 && (
        <Section width="wide" className="py-10 border-b border-border/40">
          <MotionSection>
            <div className="mb-6">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Manuscripts Under Review
              </h2>
              <p className="font-mono text-xs text-muted">
                Submitted papers undergoing single-blind or double-blind peer review
              </p>
            </div>

            <div className="space-y-4">
              {underReview.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))}
            </div>
          </MotionSection>
        </Section>
      )}

      {/* Accepted & Published Papers */}
      <Section width="wide" className="pt-10 pb-16">
        <MotionSection>
          <div className="mb-6">
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Accepted & Published Papers
            </h2>
            <p className="font-mono text-xs text-muted">
              Peer-reviewed articles accepted for presentation and official proceedings
            </p>
          </div>

          <div className="space-y-4">
            {publishedAndAccepted.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        </MotionSection>
      </Section>
    </>
  );
}
