import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { galleryPhotos } from "@/data/gallery";
import Image from "next/image";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Academic conferences, laboratory research, and university campus activities.",
};

export default function GalleryPage() {
  return (
    <Section width="wide" className="pt-14 pb-16">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
        <Camera size={15} />
        <span>Photographic Records</span>
      </div>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
        Academic Gallery
      </h1>
      <p className="mt-2 text-sm text-muted">
        Capturing academic conference attendances, research presentations, and campus life at Chongqing University.
      </p>

      {galleryPhotos.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((photo) => (
            <figure
              key={photo.id}
              className="overflow-hidden rounded-md border border-border/80 bg-background/50"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={photo.imageUrl}
                  alt={photo.title}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="p-3 text-xs text-muted">
                <p className="font-medium text-foreground">{photo.title}</p>
                {photo.caption && <p className="mt-0.5">{photo.caption}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-border/70 bg-accent-soft/20 p-8 text-center">
          <p className="font-serif text-base text-foreground">
            Academic event and presentation photography will be documented here.
          </p>
          <p className="mt-2 text-xs text-muted">
            Photographs from upcoming conferences and campus symposiums will be uploaded following respective events.
          </p>
        </div>
      )}
    </Section>
  );
}
