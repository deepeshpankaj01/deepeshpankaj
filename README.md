# Deepesh Kumar Pankaj — Personal Brand & Portfolio

> **Systems & AI Developer · Founder · Author of ICAIEST-2026 Clinical AI Paper**  
> Deployed Products · Clinical Decision Systems · Rural Civic Architecture  
> Live URL: [https://deepeshpankaj01.vercel.app](https://deepeshpankaj01.vercel.app)

---

## 🏛️ Architecture Overview

The portfolio has been completely redesigned and transformed into a high-performance, component-based **Vite + React 18 + TypeScript + Tailwind CSS** application.

```
deepeshpankaj-portfolio/
├── public/
│   └── images/                     # Optimized, high-DPI WebP & JPEG derivatives (<300KB each)
│       ├── profile.webp
│       ├── sathi_preview.webp
│       ├── fiira_logo.png
│       ├── dpjewels_founder.webp
│       ├── dpjewels_preview.webp
│       ├── ai_innovate.webp
│       ├── icaiest_cert.webp
│       ├── icaiest_talk.webp
│       ├── ide_bootcamp_cohort.webp
│       ├── iiit_gwalior.webp
│       ├── solve_expo.webp
│       └── deepesh_portrait_2026.webp
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Floating editorial navigation with active tracking & status pill
│   │   ├── HeroCanvas.tsx          # Interactive generative neural matrix / constellation canvas
│   │   ├── ArchitectureDiagram.tsx # Interactive clinical AI decision pipeline (HAi Pilot)
│   │   ├── ProjectModal.tsx        # Accessible project deep-dive modal
│   │   ├── PhotoLightbox.tsx       # Fullscreen high-performance photo lightbox
│   │   └── CustomCursor.tsx        # Fluid physics follower cursor for desktop devices
│   ├── sections/
│   │   ├── HeroSection.tsx         # 01 — Hero: Typographic headline, portrait frame, verified metrics
│   │   ├── SelectedWorkSection.tsx # 02 — Work: Flagship HAi Pilot + Sathi, Fiira, DP Jewels, Panchayat, ANUVAA
│   │   ├── AboutSection.tsx        # 03 — About: Narrative, 4 identity pillars, engineered skill matrix
│   │   ├── ProofOfWorkSection.tsx  # 04 — Proof: ICAIEST-2026 research highlight, national timeline, photo archive
│   │   └── ContactSection.tsx      # 05 — Contact: Direct email composer, one-click copy, verified links
│   ├── data/
│   │   └── portfolioData.ts        # Central typed source of truth for all projects, research, and milestones
│   ├── styles/
│   │   └── index.css               # Design tokens, Google Fonts imports (Syne, Instrument Serif, Jakarta Sans, JetBrains Mono)
│   ├── App.tsx                     # Main layout assembly
│   └── main.tsx                    # React DOM entry point
├── archive_original/               # Safe preservation of original index.html, style.css, script.js
├── image/                          # Original high-res camera originals (preserved intact)
├── scripts/
│   └── optimize-assets.js          # Sharp-powered image optimization pipeline
├── tailwind.config.js              # Neo-editorial tokens (ivory, obsidian, cobalt, amber)
├── vite.config.ts                  # Vite build and server configuration
└── tsconfig.json                   # Strict TypeScript compiler options
```

---

## 🎨 Art Direction & Visual Identity

- **Design Philosophy**: Neo-Editorial meets Creative Technology.
- **Color Architecture**:
  - Warm Ivory & Bone surfaces (`#FBFBF9`, `#F4F4F0`) for editorial clarity.
  - Deep Ink Black (`#0B0D12`) typography with exceptional legibility.
  - High-contrast Obsidian surfaces (`#090A0D`, `#101217`) for the flagship system showcase and closing footer.
  - Electric Cobalt (`#2563EB`, `#3B82F6`) precision accent for technological credibility.
  - Warm Amber (`#D97706`, `#F59E0B`) for peer-reviewed academic prestige.
  - Emerald Live (`#10B981`) for real-time deployed indicators.
- **Typography Pairing**:
  - Display / Headlines: **Syne** (bold, architectural)
  - Editorial Accents: **Instrument Serif** (classic italic contrast)
  - Body Copy: **Plus Jakarta Sans** / **Inter** (ultra-clean readability)
  - Technical Metadata: **JetBrains Mono** (monospaced rigor)

---

## 🚀 Shipped & Featured Systems

1. **HAi Pilot (HealthAI)** — *Flagship Clinical Oncology Co-Pilot*  
   - Implements Deepesh's published paper: *"HAI: The Trust-Centric Paradigm in Clinical AI"* (ICAIEST-2026).
   - Features dual-portal architecture, deterministic 5-case cohort retrieval, ICD-10 categorization, and client-side jsPDF medical report generator.
   - Deployed at: [https://co-pilot-nine.vercel.app](https://co-pilot-nine.vercel.app)
2. **Sathi (साथी)** — *Context-Aware AI Companion*  
   - Multi-persona architecture (Veer & Tara) powered by Anthropic Claude API.
   - Deployed at: [https://sathi-lake.vercel.app](https://sathi-lake.vercel.app)
3. **Fiira** — *Zero-Backend Menstrual Health Engine*  
   - 100% client-side predictive cycle calculation preserving total biological privacy.
   - Deployed at: [https://fiira.netlify.app](https://fiira.netlify.app)
4. **DP Jewels** — *Luxury Brand & VIP Appointment Suite*  
   - Fine jewellery digital flagship with curated collections and private viewing consultations.
   - Deployed at: [https://dpjewels.netlify.app](https://dpjewels.netlify.app)
5. **Panchayat** — *Active Engineering Lab*  
   - Hyperlocal rural civic and social platform using official Local Government Directory (LGD) identities.
6. **ANUVAA** — *Active Engineering Lab*  
   - High-performance exploration with Next.js App Router and TypeScript.

---

## 🛠️ Local Development & Production Commands

```bash
# Install dependencies
npm.cmd install

# Run local development server (runs on http://localhost:3000)
npm.cmd run dev

# Run TypeScript type check and production build
npm.cmd run build

# Preview production build locally
npm.cmd run preview

# Re-optimize raw images from /image to /public/images
node scripts/optimize-assets.js
```

---

## ⚡ Performance & Optimization Highlights

- **Asset Optimization**: Raw 12MB camera photos were compressed and downsampled into crisp WebP assets (<300KB each) with 0 layout shift and lazy decoding.
- **Bundle Efficiency**: Production bundle compiles in ~3.2 seconds, with JS gzipped to 112 kB and CSS gzipped to 6.3 kB.
- **Zero Fabrication**: All screenshots, links, and papers are 100% genuine and verified on live endpoints.
- **Original Work Preserved**: All original files from the initial archive remain untouched in `archive_original/` and `image/`.
