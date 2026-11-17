import React from "react";
import type { Author } from "@/types";

interface AuthorListProps {
  authors: Author[];
  className?: string;
}

export default function AuthorList({ authors, className }: AuthorListProps) {
  return (
    <span className={className}>
      {authors.map((author, index) => {
        const isLast = index === authors.length - 1;
        const separator = isLast ? "" : ", ";

        if (author.isMe) {
          return (
            <React.Fragment key={`${author.name}-${index}`}>
              <strong className="font-semibold text-foreground underline decoration-accent/40 underline-offset-2">
                {author.name}
              </strong>
              {separator}
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={`${author.name}-${index}`}>
            <span className="text-muted">{author.name}</span>
            {separator}
          </React.Fragment>
        );
      })}
    </span>
  );
}
