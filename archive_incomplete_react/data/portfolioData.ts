export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge?: string;
  isFlagship?: boolean;
  isLab?: boolean;
  status: 'live' | 'in-development' | 'research';
  summary: string;
  problem: string;
  solution: string;
  myContribution: string;
  technicalHighlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  researchLink?: string;
  previewImage?: string;
  aspectRatio?: string;
}

export interface ResearchPaper {
  title: string;
  conference: string;
  venue: string;
  dates: string;
  status: string;
  abstract: string;
  keyContributions: string[];
  tags: string[];
  certificateImage: string;
  talkImage: string;
}

export interface TimelineEvent {
  year: string;
  dateStr?: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  tag: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  event: string;
  location: string;
  year: string;
  imageSrc: string;
  aspect: 'wide' | 'standard' | 'portrait';
  caption: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: 'advanced' | 'proficient' | 'mastering'; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Deepesh Kumar Pankaj",
  shortName: "Deepesh Pankaj",
  role: "Systems & AI Developer · Software Builder",
  institution: "LNCT University, Bhopal",
  program: "Bachelor of Computer Applications (BCA)",
  cohort: "2025 – 2028 · Semester 3",
  school: "DAV Public School, Rihand Nagar (CBSE)",
  location: "Bhopal, Madhya Pradesh, India",
  email: "deepeshkumar79239@gmail.com",
  github: "https://github.com/deepeshpankaj01",
  linkedin: "https://www.linkedin.com/in/deepesh-pankaj-3ba960225",
  instagram: "https://www.instagram.com/deepeshpankaj01",
  status: "Available for Collaborations & Technical Roles",
  tagline: "I build real, production-grade AI systems, clinical decision engines, and rural software from first principles.",
  bio: "Currently pursuing BCA at LNCT University, Bhopal. Rather than waiting for graduation to write code, I have shipped 4 live production web applications, authored a peer-reviewed clinical AI research paper at ICAIEST-2026, and represented at premier national innovation bootcamps including MoE's IDE Bootcamp and India Innovates at Bharat Mandapam.",
};

export const METRICS = [
  { value: "4+", label: "Live Deployed Products", detail: "Active on Vercel & Netlify" },
  { value: "1st", label: "ICAIEST-2026 Paper", detail: "Clinical AI Decision Reliability" },
  { value: "5+", label: "National Bootcamps", detail: "MoE, Wadhwani, IIIT Gwalior" },
  { value: "Sem 3", label: "BCA Scholar", detail: "LNCT University, Bhopal" },
];

export const PROJECTS: Project[] = [
  {
    id: "haipilot",
    title: "HAi Pilot (HealthAI)",
    tagline: "Clinical Oncology AI Co-Pilot for Indian Healthcare",
    category: "Clinical Decision Support",
    badge: "Flagship · ICAIEST-2026 Research Backed",
    isFlagship: true,
    status: "live",
    summary:
      "A clinical oncology decision-support platform designed to alleviate high-pressure triage fatigue. Features deterministic historical case retrieval, ICD-10 categorization, and automated clinical case PDF documentation.",
    problem:
      "Oncologists and physicians face immense cognitive load analyzing multidimensional patient histories under severe time constraints. Generic generative LLMs pose hallucination risks in high-stakes oncology contexts.",
    solution:
      "Implemented a trust-centric dual-portal system: a structured intake interface for patient parameters, paired with a deterministic triage engine that algorithmically cross-references 5 matched historical cases and surfaces structured protocol guidance with human clinician oversight.",
    myContribution:
      "Conceived the trust-centric architecture from the ground up, developed the dual-portal frontend, built the client-side jsPDF medical report generator, and authored the academic paper presented at ICAIEST-2026.",
    technicalHighlights: [
      "Dual-Portal Architecture: High-throughput patient intake separated from clinical triage dashboard",
      "Algorithmic Cohort Matching: Evaluates patient biomarker profiles against historical oncology datasets",
      "Deterministic Decision Logic: ICD-10 cross-referencing and contraindication screening",
      "Client-Side jsPDF Engine: Instant zero-latency clinical summary generation for doctor rounds",
      "Peer-Reviewed Scholarly Foundation: Directly implements 'HAI: The Trust-Centric Paradigm in Clinical AI'"
    ],
    techStack: ["JavaScript", "Clinical AI APIs", "jsPDF Engine", "Responsive Grid", "Vercel"],
    liveUrl: "https://co-pilot-nine.vercel.app",
    githubUrl: "https://github.com/deepeshpankaj01/Co-pilot",
    researchLink: "#research",
    previewImage: "/images/icaiest_talk.webp",
  },
  {
    id: "sathi",
    title: "Sathi (साथी)",
    tagline: "Context-Aware Multi-Persona AI Companion",
    category: "Conversational Intelligence",
    badge: "Live Product",
    status: "live",
    summary:
      "Multi-persona AI companion built on the Anthropic Claude API. Provides adaptive conversational assistance across academic guidance, career direction, and supportive mentoring through distinct personality engines.",
    problem:
      "Traditional chatbots lack adaptive emotional tone, offering cold or repetitive responses to students and learners navigating complex career choices and academic burnout.",
    solution:
      "Designed a dynamic persona architecture featuring specialized modes (such as Veer for structured academic problem solving and Tara for empathetic career guidance) with persistent conversational context.",
    myContribution:
      "Engineered prompt architectures, dynamic persona routing, stateful conversation management, and responsive Next.js frontend deployed to Vercel.",
    technicalHighlights: [
      "Multi-Persona Engine: Instant context switching between distinct mentoring archetypes (Veer & Tara)",
      "Anthropic Claude API Integration: Nuanced natural language comprehension with rigorous safety parameters",
      "Dynamic Tone Modulation: Adapts depth and technical vocabulary based on user interaction history",
      "Mobile-First Interaction: Fluid chat typography optimized for handheld reading"
    ],
    techStack: ["Next.js", "TypeScript", "Anthropic Claude API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://sathi-lake.vercel.app",
    githubUrl: "https://github.com/deepeshpankaj01/Sathi",
    previewImage: "/images/sathi_preview.webp",
  },
  {
    id: "fiira",
    title: "Fiira",
    tagline: "Zero-Backend Menstrual Health & Cycle Prediction Engine",
    category: "Health Technology",
    badge: "Live Product",
    status: "live",
    summary:
      "A privacy-first menstrual health platform that runs predictive cycle algorithms directly inside the client browser, eliminating server storage of sensitive biological data.",
    problem:
      "Commercial period tracking applications harvest highly sensitive personal reproductive data onto remote cloud servers, creating severe privacy and surveillance vulnerabilities.",
    solution:
      "Engineered a zero-backend, client-side algorithmic engine that computes cycle phases, fertile windows, symptom correlations, and personalized hygiene advice entirely on the user's local device.",
    myContribution:
      "Developed client-side mathematical cycle calculation models, designed the brand identity and UI system, and deployed the production application on Netlify.",
    technicalHighlights: [
      "100% Client-Side Computation: Zero remote database storage for maximum biological data privacy",
      "Predictive Cycle Algorithms: Dynamically adjusts expected cycle duration from user interval inputs",
      "Evidence-Based Health Recommendations: Contextual hygiene and nutritional advice for each menstrual phase",
      "Zero Cold-Start: Sub-100ms initial load time with vanilla web performance"
    ],
    techStack: ["Vanilla JavaScript", "Modern CSS3", "HTML5 Semantic DOM", "Netlify"],
    liveUrl: "https://fiira.netlify.app",
    githubUrl: "https://github.com/deepeshpankaj01/fiira",
    previewImage: "/images/fiira_logo.webp",
  },
  {
    id: "dpjewels",
    title: "DP Jewels",
    tagline: "Luxury Fine Jewellery Digital Showcase & Appointment Suite",
    category: "E-Commerce & Brand",
    badge: "Live Product",
    status: "live",
    summary:
      "A high-end digital flagship crafted for a luxury jewellery label, combining classic high-fashion editorial typography with VIP appointment booking workflows.",
    problem:
      "Luxury jewellery requires an experience that conveys craftsmanship, weight, and exclusivity—attributes that standard e-commerce templates fail to communicate.",
    solution:
      "Crafted an editorial-grade web experience featuring curated collections (rings, artisanal necklaces, bridal sets) paired with an interactive private consultation reservation system.",
    myContribution:
      "Designed the complete visual identity, editorial layout, responsive interaction systems, and deployed the live brand flagship.",
    technicalHighlights: [
      "High-Fashion Editorial Layout: Harmonious typography, whitespace discipline, and curated imagery",
      "Interactive VIP Appointment Suite: Smooth reservation flow for private studio viewings",
      "Fluid Responsiveness: Pixel-perfect scaling across desktop viewports and mobile devices",
      "Optimized Asset Delivery: High-resolution jewellery rendering with sub-second page transitions"
    ],
    techStack: ["Modern CSS3", "Vanilla JavaScript", "Responsive Grid", "Netlify"],
    liveUrl: "https://dpjewels.netlify.app",
    githubUrl: "https://github.com/deepeshpankaj01/dpjewels",
    previewImage: "/images/dpjewels_founder.webp",
  },
  {
    id: "panchayat",
    title: "Panchayat",
    tagline: "Hyperlocal Rural Governance & Civic Network",
    category: "Civic Technology · Active Lab",
    badge: "In Active Development",
    isLab: true,
    status: "in-development",
    summary:
      "A civic network engineered specifically for rural India, anchored around official Local Government Directory (LGD) village identities to enable verified village updates and transparent governance.",
    problem:
      "Urban-centric social media platforms are rife with algorithmic noise, spam, and lack verified geographic identity, leaving rural citizens without a trusted channel for local governance and community commerce.",
    solution:
      "Architecting an identity system tied directly to India's official Local Government Directory (LGD) codes, enabling verifiable village-level communication, community alerts, and local marketplace interaction.",
    myContribution:
      "Formulating system architecture, civic data models, LGD integration logic, and regulatory compliance frameworks.",
    technicalHighlights: [
      "LGD Identity Architecture: Hierarchical state -> district -> block -> gram panchayat verification",
      "Civic Issue Redressal: Structured incident reporting with verifiable geolocation tags",
      "Hyperlocal Commerce: Facilitates rural peer-to-peer agriculture and trade without middleman fees"
    ],
    techStack: ["React.js", "Node.js", "LGD Directory Schema", "PostgreSQL / MongoDB"],
    githubUrl: "https://github.com/deepeshpankaj01/panchayat-legal",
  },
  {
    id: "anuvaa",
    title: "ANUVAA",
    tagline: "High-Performance Next.js Engineering Exploration",
    category: "Full-Stack Web · Active Lab",
    badge: "Engineering Exploration",
    isLab: true,
    status: "in-development",
    summary:
      "An exploratory web platform pushing modern React Server Components, localized responsive workflows, and modular design patterns.",
    problem:
      "Building web applications that balance server-side rendering speeds with rich dynamic interactivity requires rigorous component architecture experimentation.",
    solution:
      "Developing an end-to-end sandbox applying TypeScript strict mode, Next.js App Router conventions, and modular component boundaries.",
    myContribution:
      "Full-stack architecture, API route construction, and UI component engineering.",
    technicalHighlights: [
      "Next.js App Router Architecture with React Server Components (RSC)",
      "Strict TypeScript typing across domain models and data-fetching boundaries",
      "Modern Tailwind CSS token architecture with accessible micro-interactions"
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/deepeshpankaj01/anuvaa",
  }
];

export const RESEARCH_PAPER: ResearchPaper = {
  title: "HAI: The Trust-Centric Paradigm in Clinical AI",
  conference: "International Conference on Advanced Innovation in Engineering, Science and Technology (ICAIEST-2026)",
  venue: "LNCT University, Bhopal, Madhya Pradesh",
  dates: "February 27–28, 2026",
  status: "Presented & Peer-Reviewed",
  abstract:
    "AI adoption in critical clinical environments such as oncology is severely constrained by black-box opacity and decision fatigue. This paper establishes a trust-centric paradigm prioritizing explainability, deterministic historical case retrieval, and human-in-the-loop clinician validation over opaque generative inference. This research serves directly as the foundational architecture for the deployed HAi Pilot oncology co-pilot application.",
  keyContributions: [
    "Proposed a dual-gate decision architecture separating patient intake ingestion from clinical oncology protocol synthesis",
    "Introduced an algorithmic similarity scoring mechanism matching incoming patients with 5 historical validated clinical cohorts",
    "Standardized ICD-10 medical categorization cross-referencing to eliminate hallucinated treatment paths",
    "Demonstrated practical implementation via the live HAi Pilot clinical oncology co-pilot tool"
  ],
  tags: ["Clinical AI", "Explainable AI (XAI)", "Oncology Decision Support", "ICD-10", "Trust-Centric Architecture"],
  certificateImage: "/images/icaiest_cert.webp",
  talkImage: "/images/icaiest_talk.webp",
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2026",
    dateStr: "April 20–24, 2026",
    title: "IDE Bootcamp (Edition 3, Phase 2)",
    organization: "Ministry of Education (MoE), Wadhwani Foundation & SBI Foundation",
    location: "MITS Gwalior",
    description:
      "Selected for the intensive Innovation, Design and Entrepreneurship Bootcamp. Focused on product-market fit, design thinking, scalable technology architectures, and pitching to seasoned investors and founders.",
    tag: "National Bootcamp"
  },
  {
    year: "2026",
    dateStr: "March 28, 2026",
    title: "India Innovates 2026",
    organization: "Flagship National Innovation Summit",
    location: "Bharat Mandapam, New Delhi",
    description:
      "Represented at India's premier national innovation stage at Bharat Mandapam. Participated in national startup showcases, high-level technology panel discussions, and founder networks.",
    tag: "National Stage"
  },
  {
    year: "2026",
    dateStr: "February 27–28, 2026",
    title: "ICAIEST-2026 International Conference",
    organization: "LNCT University",
    location: "Bhopal, MP",
    description:
      "Presented peer-reviewed research paper 'HAI: The Trust-Centric Paradigm in Clinical AI'. Discussed explainable clinical systems with academic and clinical researchers.",
    tag: "Research Paper"
  },
  {
    year: "2026",
    dateStr: "2026",
    title: "Advanced Technical Bootcamp",
    organization: "ABV-IIITM Gwalior",
    location: "IIIT Gwalior",
    description:
      "Participated in rigorous technical systems and algorithm training focusing on computer systems architecture, algorithmic problem solving, and modern distributed frameworks.",
    tag: "Technical Training"
  },
  {
    year: "2026",
    dateStr: "2026",
    title: "Solve Expo Innovation Showcase",
    organization: "Solve Expo",
    location: "National Showcase",
    description:
      "Demonstrated technical solutions to real-world socio-economic and healthcare challenges alongside startup founders and academic leaders.",
    tag: "Innovation Expo"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "innovate-delhi",
    title: "India Innovates 2026",
    event: "Flagship National Innovation Summit",
    location: "Bharat Mandapam, New Delhi",
    year: "2026",
    imageSrc: "/images/ai_innovate.webp",
    aspect: "wide",
    caption: "Deepesh at India Innovates 2026 · Bharat Mandapam, New Delhi"
  },
  {
    id: "icaiest-certificate",
    title: "ICAIEST-2026 Paper Presentation",
    event: "International Conference Certificate Ceremony",
    location: "LNCT University, Bhopal",
    year: "2026",
    imageSrc: "/images/icaiest_cert.webp",
    aspect: "standard",
    caption: "Receiving the ICAIEST-2026 Research Presentation Certificate"
  },
  {
    id: "icaiest-podium",
    title: "Presenting Clinical AI Research",
    event: "ICAIEST-2026 Presentation Session",
    location: "LNCT University, Bhopal",
    year: "2026",
    imageSrc: "/images/icaiest_talk.webp",
    aspect: "portrait",
    caption: "Podium presentation of 'HAI: The Trust-Centric Paradigm in Clinical AI'"
  },
  {
    id: "ide-mits",
    title: "MoE Innovation Cell IDE Bootcamp",
    event: "Edition 3, Phase 2 Cohort",
    location: "MITS Gwalior",
    year: "2026",
    imageSrc: "/images/ide_bootcamp_cohort.webp",
    aspect: "wide",
    caption: "Ministry of Education & Wadhwani Foundation IDE Bootcamp session"
  },
  {
    id: "iiit-gwalior",
    title: "IIIT Gwalior Technical Training",
    event: "Advanced Systems Bootcamp",
    location: "ABV-IIITM Gwalior",
    year: "2026",
    imageSrc: "/images/iiit_gwalior.webp",
    aspect: "wide",
    caption: "Technical systems and algorithmic training at IIIT Gwalior campus"
  },
  {
    id: "solve-expo",
    title: "Solve Expo Participation",
    event: "Real-World Innovation Showcase",
    location: "National Showcase",
    year: "2026",
    imageSrc: "/images/solve_expo.webp",
    aspect: "portrait",
    caption: "Showcasing technology solutions at Solve Expo"
  },
  {
    id: "portrait-2026",
    title: "Deepesh Kumar Pankaj",
    event: "Personal Archive",
    location: "Bhopal, MP",
    year: "2026",
    imageSrc: "/images/deepesh_portrait_2026.webp",
    aspect: "standard",
    caption: "Deepesh Kumar Pankaj · Systems & AI Developer · 2026"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Core",
    iconName: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Python", highlight: true },
      { name: "C", level: "proficient" },
      { name: "SQL", level: "proficient" },
    ]
  },
  {
    title: "AI & Model Orchestration",
    iconName: "Cpu",
    skills: [
      { name: "Claude API", highlight: true },
      { name: "OpenAI APIs", highlight: true },
      { name: "Clinical Decision Logic", highlight: true },
      { name: "Explainable AI (XAI)", highlight: true },
      { name: "Prompt Architecture", level: "advanced" },
    ]
  },
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    skills: [
      { name: "React.js", highlight: true, level: "mastering" },
      { name: "Next.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5 Semantic DOM", level: "advanced" },
      { name: "Modern CSS3 / Motion", level: "advanced" },
    ]
  },
  {
    title: "Backend & Systems",
    iconName: "Server",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", level: "advanced" },
      { name: "RESTful API Architecture", level: "advanced" },
      { name: "MongoDB", level: "proficient" },
      { name: "MySQL", level: "proficient" },
    ]
  },
  {
    title: "CS Foundations & Tools",
    iconName: "Terminal",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Object-Oriented Design", level: "advanced" },
      { name: "Git & GitHub", highlight: true },
      { name: "Vercel / Netlify", level: "advanced" },
      { name: "PowerShell & Linux CLI", level: "proficient" },
    ]
  }
];
