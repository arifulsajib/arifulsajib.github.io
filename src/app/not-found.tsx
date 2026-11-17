import Link from "next/link";
import Section from "@/components/ui/Section";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Section width="prose" className="pt-24 pb-32 text-center md:pt-32">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        Error 404
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-3 text-base text-muted">
        The requested academic resource or page could not be located.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline underline-offset-4 hover:opacity-80"
        >
          <ArrowLeft size={14} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </Section>
  );
}
