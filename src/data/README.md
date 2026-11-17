# Content Management & Maintenance Guide

Welcome to your academic website content guide!

This website is designed with a **strict separation of content and presentation**. You do **not** need to touch React components, JSX, layout files, or CSS stylesheets to update your portfolio.

All personal information, papers, projects, education history, and skills are maintained in typed data files inside `src/data/`.

---

## Quick Reference Table: Which File Controls What?

| Information / Section | Data File | What It Controls |
|---|---|---|
| Name, Bio, Tagline, Institution | `src/data/profile.ts` | Hero intro, About section, page titles, SEO metadata |
| Research Interests & Statement | `src/data/research.ts` | Research interest cards, research page vision & statement |
| Papers, Preprints, Authors | `src/data/publications.ts` | Selected publications on homepage & `/publications` page |
| Research & Software Projects | `src/data/projects.ts` | Research project cards & software development cards |
| Degrees & Academic History | `src/data/education.ts` | Education timeline on homepage |
| Programming & ML Skills | `src/data/skills.ts` | Technical proficiencies groups (Languages, PyTorch, Tools) |
| News & Milestones | `src/data/news.ts` | Recent updates list on homepage |
| Awards & Scholarships | `src/data/achievements.ts` | Honors list (gracefully hidden when empty) |
| Service & Volunteering | `src/data/service.ts` | Peer reviewing, conference volunteering |
| Photo Gallery | `src/data/gallery.ts` | Presentation and campus photos |
| Academic & Social Profiles | `src/data/social.ts` | Google Scholar, OpenReview, ResearchGate, ORCID, GitHub, LinkedIn |
| Profile Photo | `public/images/profile.jpg` | Headshot shown in the hero section |
| Curriculum Vitae (PDF) | `public/documents/cv.pdf` | Downloadable CV button file |

---

## 1. Updating Name, Title, and Biography

Edit `src/data/profile.ts`:

```typescript
import type { Profile } from "@/types";

export const profile: Profile = {
  name: "MD Ariful Islam",
  preferredName: "Sajib",
  tagline: "Computer Science Researcher | Software Engineer",
  primaryRole: "Master's Student in Computer Technology",
  degree: "MSc in Computer Technology",
  institution: "Chongqing University, China",
  location: "Chongqing, China",
  period: "September 2024 – Present",
  bioShort:
    "Master's student in Computer Technology at Chongqing University, interested in Artificial Intelligence, Machine Learning, efficient sequence modelling, and data-driven intelligent systems.",
  about:
    "I am a Computer Science graduate and Master's student in Computer Technology at Chongqing University, China. My interests span Artificial Intelligence, Machine Learning, Deep Learning, Data Science, and Software Engineering.\n\nMy research focuses on learning meaningful representations from complex sequential and spatiotemporal data, with particular interests in vehicle trajectory representation learning, efficient sequence modelling, and intelligent transportation systems.\n\nAlongside academic research, I have a background in software development and enjoy building practical, scalable applications.",
  researchFocus:
    "Efficient representation learning and sequence modelling for complex spatiotemporal data, particularly vehicle trajectories.",
  email: "arifulsajib347@gmail.com",
  avatar: "/images/profile.jpg",
  cvUrl: "/documents/cv.pdf",
};
```

---

## 2. Adding a New Publication

Edit `src/data/publications.ts`. Add a new object to the `publications` array:

```typescript
{
  id: "new-paper-2027",
  title: "Your New Paper Title Goes Here",
  authors: [
    { name: "Md Ariful Islam", isMe: true }, // Set isMe: true for yourself to automatically bold your name
    { name: "Collaborator One", isMe: false },
    { name: "Collaborator Two", isMe: false },
  ],
  venue: "NeurIPS 2027",
  year: 2027,
  status: "under-review", // "under-review" | "accepted" | "published"
  description:
    "A concise one-to-two sentence summary explaining the core method and findings.",
  links: {
    paper: "https://arxiv.org/abs/xxxx.xxxxx", // optional
    code: "https://github.com/arifulsajib/repo-name", // optional
    doi: "", // optional
  },
  bibtex: `@inproceedings{islam2027title,
  title={Your New Paper Title Goes Here},
  author={Islam, Md Ariful and One, Collaborator and Two, Collaborator},
  booktitle={Advances in Neural Information Processing Systems},
  year={2027}
}`,
  featured: true, // true to show on homepage, false for publications page only
}
```

---

## 3. Updating a Publication's Status

In `src/data/publications.ts`, locate the paper and change the `status` field:

- Change from `"under-review"` to `"accepted"` when the paper receives acceptance.
- Change from `"accepted"` to `"published"` once proceedings appear.

```typescript
// Example: Updating DeltaPath to accepted
{
  id: "deltapath-2027",
  title: "DeltaPath: Gated Delta-Rule Encoding for Efficient Vehicle Trajectory Representation Learning",
  status: "accepted", // Updated from "under-review"
  // ...
}
```

---

## 4. Adding or Removing Authors

Authors are stored in the `authors` array preserving the exact publication order.

```typescript
authors: [
  { name: "First Author", isMe: false },
  { name: "Md Ariful Islam", isMe: true }, // Automatically bolded in the UI
  { name: "Third Author", isMe: false },
]
```

- **Rule:** The `isMe: true` flag automatically bolds your name (handling `"Md Ariful Islam"`, `"MD Ariful Islam"`, etc.) without altering the text or author order.

---

## 5. Adding a Research Project

Edit `src/data/projects.ts`. Add an object to the `researchProjects` array:

```typescript
{
  id: "spatiotemporal-sequence-model",
  title: "Efficient Sequence Modelling for Large-Scale Vehicle Fleets",
  category: "Spatiotemporal Machine Learning",
  description: "Investigating linear recurrence algorithms to compress vehicle GPS trajectories in streaming environments.",
  problem: "High data rates in urban fleets saturate server memory when computing pairwise trajectory similarity.",
  approach: "Designed a lightweight streaming encoder using associative scan operators and spatial hashing.",
  results: "Reduced memory consumption by 4.2x with zero loss in route recovery accuracy.",
  technologies: ["Python", "PyTorch", "Sequence Modelling", "CUDA"],
  status: "under-review",
  links: [
    { label: "Code", url: "https://github.com/arifulsajib/project-code" },
  ],
  featured: true,
}
```

---

## 6. Adding a Software Development Project

Edit `src/data/projects.ts`. Add an object to the `softwareProjects` array:

```typescript
{
  id: "cloud-monitoring-dashboard",
  title: "CloudFleet — Real-Time Vehicle Telemetry Dashboard",
  role: "Full-Stack Engineer",
  period: "2024",
  description: "A responsive full-stack telemetry monitoring web portal for tracking fleet diagnostics in real-time.",
  problem: "Operators needed an interactive interface to visualize incoming sensor telemetry without page reloads.",
  approach: "Built frontend visualization using React and Tailwind CSS, backed by Node.js WebSocket streams and MongoDB.",
  result: "Successfully handled continuous live telemetry across 500+ simulated vehicular endpoints.",
  technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  image: "/images/projects/cloudfleet.png", // place image in public/images/projects/
  links: [
    { label: "Live Demo", url: "https://your-demo.netlify.app" },
  ],
  featured: true,
}
```

---

## 7. Updating Education

Edit `src/data/education.ts`:

```typescript
export const educationList: EducationItem[] = [
  {
    degree: "MSc in Computer Technology",
    institution: "Chongqing University",
    location: "Chongqing, China",
    period: "September 2024 – Present",
    details: "Focusing on Artificial Intelligence, Machine Learning, Sequence Modelling, and Vehicle Trajectory Representation Learning.",
  },
  {
    degree: "BSc in Computer Science",
    institution: "Southwest Petroleum University",
    period: "Completed",
    details: "Foundational coursework in Data Structures, Algorithms, Software Engineering, Database Systems, and Computer Networks.",
  },
];
```

---

## 8. Updating Research Interests

Edit `src/data/research.ts`:

```typescript
export const researchInterestGroups: ResearchInterestGroup[] = [
  {
    category: "Spatiotemporal & Trajectory Computing",
    topics: [
      "Vehicle Trajectory Representation Learning",
      "Pedestrian Trajectory Prediction",
      "Spatiotemporal Data Mining",
      "Intelligent Transportation Systems (ITS)",
      "Streaming Data Processing",
    ],
  },
  // Add or modify groups as desired
];
```

---

## 9. Updating Technical Skills

Edit `src/data/skills.ts`:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Machine Learning & Deep Learning",
    skills: ["PyTorch", "Deep Learning", "Representation Learning", "Sequence Modelling"],
  },
  // ...
];
```

*(Note: TensorFlow is excluded from this list).*

---

## 10. Adding a News Item

Edit `src/data/news.ts`:

```typescript
export const newsItems: NewsItem[] = [
  {
    id: "new-paper-accepted-2027",
    date: "March 2027",
    title: "Paper accepted: DeltaPath accepted for presentation at ICASSP 2027!",
    description: "Our work on gated delta-rule encoding will appear in IEEE ICASSP proceedings.",
    category: "publication",
    link: {
      label: "Conference Website",
      url: "https://2027.ieeeicassp.org",
    },
  },
  // Existing entries...
];
```

---

## 11. Adding an Achievement or Scholarship

Edit `src/data/achievements.ts`:

```typescript
export const achievements: AchievementItem[] = [
  {
    id: "presidents-scholarship",
    title: "Chongqing University Outstanding Graduate Fellowship",
    organization: "Chongqing University",
    date: "2025",
    description: "Awarded for demonstrated academic excellence and research potential.",
  },
];
```

*(When `achievements` is an empty array `[]`, the page displays a scholarly note instead of broken cards).*

---

## 12. Updating Social & Academic Links

Edit `src/data/social.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=dMDrI3IAAAAJ&hl=en",
    icon: "scholar",
  },
  {
    label: "GitHub",
    url: "https://github.com/arifulsajib",
    icon: "github",
  },
  // Supported icon values: "scholar", "openreview", "researchgate", "orcid", "github", "linkedin", "mail", "globe"
];
```

---

## 13. Adding or Updating Your Profile Photo

1. Place your new portrait image file in:
   `public/images/profile.jpg`
2. Next.js automatically serves it at `/images/profile.jpg`.
3. If you use a different filename (e.g. `headshot.jpg`), update `avatar: "/images/headshot.jpg"` in `src/data/profile.ts`.

---

## 14. Updating Your Curriculum Vitae (CV)

1. Export your CV as a PDF file.
2. Save it directly to:
   `public/documents/cv.pdf`
3. The "Download CV" button in the hero section points to `/documents/cv.pdf` and will immediately serve the updated file.
