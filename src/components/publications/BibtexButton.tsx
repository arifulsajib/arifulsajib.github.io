"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface BibtexButtonProps {
  bibtex: string;
}

export default function BibtexButton({ bibtex }: BibtexButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Graceful fallback if clipboard API is unavailable
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline hover:opacity-80 focus-visible:outline-none"
      aria-label="Copy BibTeX citation"
    >
      {copied ? (
        <>
          <Check size={13} className="text-emerald-600 dark:text-emerald-400" />
          <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
        </>
      ) : (
        <>
          <Copy size={13} />
          <span>BibTeX</span>
        </>
      )}
    </button>
  );
}
