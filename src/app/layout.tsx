import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://arifulsajib.github.io";

const siteDescription =
  "Academic portfolio of MD Ariful Islam (Sajib), Computer Science Researcher and Software Engineer at Chongqing University, China. Research in vehicle trajectory representation learning, efficient sequence modelling, and intelligent transportation systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} (${profile.preferredName}) | ${profile.tagline}`,
    template: `%s | ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "MD Ariful Islam",
    "Ariful Sajib",
    "Md Ariful Islam Sajib",
    "Computer Science Researcher",
    "Software Engineer",
    "Chongqing University",
    "Trajectory Representation Learning",
    "Sequence Modelling",
    "Intelligent Transportation Systems",
    "Deep Learning",
    "Machine Learning",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} | ${profile.tagline}`,
    description: siteDescription,
    url: siteUrl,
    siteName: `${profile.name} Academic Homepage`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.tagline}`,
    description: siteDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: "Ariful Sajib",
  jobTitle: profile.tagline,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Chongqing University",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Southwest Petroleum University",
  },
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: socialLinks.map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
