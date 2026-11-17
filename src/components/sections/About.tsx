import React from "react";
import { profile } from "@/data/profile";

export default function About() {
  const paragraphs = profile.about.split("\n\n");

  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        About Me
      </h2>
      <div className="mt-4 space-y-3.5 text-base leading-relaxed text-muted">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}
