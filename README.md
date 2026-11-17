# MD Ariful Islam (Sajib) — Academic Portfolio Website

Personal academic homepage and research portfolio for **MD Ariful Islam (Sajib)**, Master's student in Computer Technology at Chongqing University, China.

Research focuses on **learning meaningful representations from complex sequential and spatiotemporal data**, with primary investigations into **vehicle trajectory representation learning, efficient sequence modelling, and intelligent transportation systems**.

- **Target Repository:** [github.com/arifulsajib/arifulsajib.github.io](https://github.com/arifulsajib/arifulsajib.github.io)
- **Live Website:** [arifulsajib.github.io](https://arifulsajib.github.io/)

---

## Technical Stack

- **Framework:** Next.js (App Router, static HTML export)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with custom academic color tokens
- **Theming:** `next-themes` (light and dark mode with persistent user preference)
- **Icons:** `lucide-react` and custom SVG academic badges (Google Scholar, ORCID, OpenReview, ResearchGate)
- **Deployment:** GitHub Pages via GitHub Actions workflow (`.github/workflows/deploy.yml`)

---

## Key Architecture & Features

1. **Content-Presentation Separation:**
   All personal information, publications, research projects, education history, and skills are maintained purely in typed TypeScript data files inside `src/data/`. You never need to touch JSX or CSS to update your website.
2. **Academic Publication Presentation:**
   Structured publications with automatic bolding of author name (`isMe: true`), status indicators (`Under Review`, `Accepted`, `Published`), direct DOI / paper links, and a built-in one-click BibTeX copy utility.
3. **Research-First Information Hierarchy:**
   Dedicated sections for research statements, trajectory learning methodologies, and sequence modelling domains, with secondary highlights for software engineering projects.
4. **Lightweight & Fast:**
   Zero server dependencies, zero database queries at runtime, no heavy analytics or external tracking scripts. Compiles to static HTML, CSS, and JS.
5. **Dark & Light Modes:**
   Muted academic navy aesthetic with high-contrast, comfortable typography in both modes.

---

## Directory Structure

```text
arifulsajib.github.io/
│
├── public/
│   ├── images/
│   │   ├── profile.jpg          # Profile photo
│   │   ├── projects/            # Project screenshots
│   │   └── gallery/             # Conference & campus photography
│   ├── documents/
│   │   └── cv.pdf               # Curriculum Vitae PDF
│   └── .nojekyll                # Prevents GitHub Pages Jekyll processing
│
├── src/
│   ├── app/
│   │   ├── globals.css          # Academic color variables and typography
│   │   ├── layout.tsx           # Base layout with SEO metadata & JSON-LD
│   │   ├── page.tsx             # Homepage
│   │   ├── not-found.tsx        # 404 page
│   │   ├── robots.ts            # Dynamic robots.txt
│   │   ├── sitemap.ts           # Dynamic XML sitemap
│   │   ├── research/page.tsx    # Research statement & focus domains
│   │   ├── publications/page.tsx# Complete publication catalog
│   │   ├── projects/page.tsx    # Research & software projects
│   │   ├── achievements/page.tsx# Awards & milestones
│   │   └── gallery/page.tsx     # Photo gallery
│   │
│   ├── components/
│   │   ├── layout/              # Navbar, Footer
│   │   ├── sections/            # Hero, About, ResearchInterests, Publications, etc.
│   │   ├── publications/        # PublicationCard, AuthorList, BibtexButton
│   │   ├── projects/            # ResearchProjectCard, SoftwareProjectCard
│   │   └── ui/                  # Badge, Section, ThemeToggle, ThemeProvider
│   │
│   ├── data/
│   │   ├── profile.ts           # Biography, institution, contact info
│   │   ├── research.ts          # Research statement & topics
│   │   ├── publications.ts      # Structured publications array
│   │   ├── projects.ts          # Research & software engineering projects
│   │   ├── education.ts         # Academic degrees timeline
│   │   ├── skills.ts            # Grouped technical proficiencies
│   │   ├── news.ts              # Verified milestones & updates
│   │   ├── achievements.ts      # Honors & awards
│   │   ├── service.ts           # Academic service records
│   │   ├── gallery.ts           # Image records
│   │   ├── social.ts            # Academic profiles (Scholar, ORCID, GitHub, etc.)
│   │   └── README.md            # Detailed content management manual
│   │
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   │
│   └── lib/
│       ├── utils.ts             # Tailwind class merging utility
│       └── nav.ts               # Navigation items
│
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── next.config.ts               # Static export configuration
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── eslint.config.mjs            # ESLint configuration
└── README.md                    # Project documentation
```

---

## Local Development

To run the site locally:

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build & Static Export

To test the static export locally before deploying:

```bash
# Compile and build static export to ./out
npm run build
```

The resulting `out/` folder contains pure static HTML, CSS, and assets ready to be served by any static host.

---

## GitHub Pages Deployment

Deployment is fully automated using GitHub Actions:

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
2. In your GitHub repository settings under **Settings > Pages**:
   - Set **Source** to **GitHub Actions**.
3. The `.github/workflows/deploy.yml` action will trigger, build the static export, and deploy it to `https://arifulsajib.github.io/`.

For a full guide on editing any section of your portfolio, see [src/data/README.md](src/data/README.md).
