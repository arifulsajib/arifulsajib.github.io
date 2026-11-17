import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://arifulsajib.github.io";

  const staticRoutes = [
    "",
    "/research",
    "/publications",
    "/projects",
    "/achievements",
    "/gallery",
  ];

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}/`,
    lastModified: new Date(),
  }));
}
