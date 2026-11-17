export interface Author {
  name: string;
  isMe: boolean;
}

export type PublicationStatus = "accepted" | "published" | "under-review";

export interface PublicationLinks {
  paper?: string;
  doi?: string;
  code?: string;
  pdf?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  status: PublicationStatus;
  description: string;
  links: PublicationLinks;
  bibtex?: string;
  featured: boolean;
}

export interface ResearchProject {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  approach: string;
  results?: string;
  technologies: string[];
  status: PublicationStatus;
  publicationId?: string;
  links?: { label: string; url: string }[];
  featured: boolean;
}

export interface SoftwareProject {
  id: string;
  title: string;
  role?: string;
  period: string;
  description: string;
  problem: string;
  approach: string;
  result: string;
  technologies: string[];
  image?: string;
  links: { label: string; url: string }[];
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description?: string;
  link?: { label: string; url: string };
  category?: "publication" | "academic" | "presentation" | "general";
}

export interface AchievementItem {
  id: string;
  title: string;
  organization?: string;
  date: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption?: string;
  date?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon:
    | "github"
    | "linkedin"
    | "mail"
    | "scholar"
    | "orcid"
    | "openreview"
    | "researchgate"
    | "globe";
}

export interface Profile {
  name: string;
  preferredName?: string;
  tagline: string;
  primaryRole: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  about: string;
  bioShort: string;
  researchFocus: string;
  email: string;
  avatar: string;
  cvUrl?: string;
}

export interface ResearchInterestGroup {
  category: string;
  topics: string[];
}

export interface ResearchStatement {
  primaryDirection: string;
  summary: string;
  paragraphs: string[];
}
