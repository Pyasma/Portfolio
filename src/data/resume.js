import resumePdf from "../assets/resume/PiyushResume.pdf";

export const profile = {
  name: "Piyush Mudgal",
  handle: "Pyasma",
  tagline: "Software Engineer · AI/ML · Open Source",
  location: "New Delhi, India",
  timezone: "Asia/Kolkata",
  github: "https://github.com/Pyasma",
  linkedin: "https://www.linkedin.com/in/piyush-mudgal",
  twitter: "https://x.com/MudgalPiyu49658",
  cal: "https://cal.com/piyush-mudgal-1k0win",
  status: "learning neovim, working on OSS",
  intro:
    "Shipped my first website at 18 and haven't stopped since. Full-stack developer working mostly in backend systems, machine learning, and data pipelines, with most of my energy going into open source. 100+ PRs merged.",
  resumeUrl: resumePdf,
  openToWork: true,
};

export const socials = [
  { label: "github", href: profile.github },
  { label: "linkedin", href: profile.linkedin },
  { label: "x", href: profile.twitter },
  { label: "cal", href: profile.cal },
];

export const wakatime = {
  username: "Pyasma",
  userId: "8d840055-21c4-48ea-97c2-a2dbcfa43600",
  profileUrl: "https://wakatime.com/@8d840055-21c4-48ea-97c2-a2dbcfa43600",
  badgeUrl:
    "https://wakatime.com/badge/user/8d840055-21c4-48ea-97c2-a2dbcfa43600.svg?style=flat-square",
  since: "Apr 5 2026",
};

export const experience = [
  {
    role: "Software Engineer, Product & DX",
    company: "Compyle (YC-backed)",
    type: "Contract",
    location: "Remote",
    period: "Nov 2025 – Feb 2026",
    summary: "Built the Compyle Apps Showcase, a self-serve publishing platform.",
    bullets: [
      "Shipped the showcase from scratch, removing the team's submission bottleneck.",
      "Built a reusable component library and email template system with live preview.",
    ],
    tech: "Next.js, TypeScript, Drizzle ORM, Resend, Vercel, CI/CD",
  },
  {
    role: "ML Research Intern",
    company: "Kyushu Institute of Technology",
    location: "Fukuoka, Japan",
    period: "Feb 2025 – May 2025",
    summary: "CNN + LSTM robotic perception at 95% detection accuracy.",
    bullets: [
      "95% object detection and 90%+ gesture recognition on 100K+ samples.",
      "Rebuilt the preprocessing pipeline, cutting training time by 60%.",
      "Co-authored a paper accepted at ICIEV/IVPR.",
    ],
    tech: "Python, PyTorch, OpenCV, LSTM",
  },
];

export const projects = [
  {
    title: "CodeMemory",
    stack: [
      "Next.js",
      "TypeScript",
      "Turborepo",
      "Cognee AI",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Gemini API",
    ],
    github: "https://github.com/Pyasma/CodeMemory",
    live: "https://code-memory-codememory-pnrb.vercel.app",
    featured: true,
    summary: "Indexes GitHub repos into graph-based memory for codebase recall.",
  },
  {
    title: "ReflectAI: Developer Journal",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Supabase",
      "Gemini API",
      "GitHub OAuth",
    ],
    github: "https://github.com/Pyasma/reflectai-dev-journal",
    live: "https://reflect-ai-journal.netlify.app",
    featured: true,
    summary: "AI journaling for developers with Gemini-powered session summaries.",
  },
  {
    title: "Compyle Apps Showcase",
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "pnpm"],
    github: "https://github.com/Pyasma/compyle",
    live: "https://compyle.tracepanic.com",
    featured: true,
    summary: "Self-serve app publishing platform for a YC-backed dev tools company.",
  },
  {
    title: "Piwu: Endless Driving Game",
    stack: ["JavaScript", "HTML5", "CSS", "Three.js"],
    github: "https://github.com/Pyasma/slow-verse",
    live: "https://slow-verse-try.vercel.app",
    featured: true,
    summary: "3D endless driving game with randomized tracks, installable as a PWA.",
  },
  {
    title: "Gemini Chef",
    stack: ["React", "Vite", "Google Gemini 2.5 Flash"],
    github: "https://github.com/Pyasma/gemini-chef",
    live: "https://gemini-chef-six.vercel.app",
    summary: "AI recipe generator built on Gemini 2.5 Flash.",
  },
  {
    title: "Assembly: Endgame",
    stack: ["React", "TypeScript", "Vite"],
    github: "https://github.com/Pyasma/Re-assembly-endgame",
    live: "https://re-assembly-endgame.vercel.app",
    summary: "Word game where every wrong guess kills a programming language.",
  },
  {
    title: "Paranormal",
    stack: ["JavaScript", "HTML", "CSS", "Node.js"],
    github: "https://github.com/Pyasma/Paranormal",
    summary: "Event-driven web app with a modular Node.js backend.",
  },
  {
    title: "Search.com",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://searchdotcom.netlify.app",
    summary: "Minimal search interface on the Wikipedia API.",
  },
  {
    title: "Visit Delhi",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://visitdelhi.netlify.app",
    summary: "Travel guide for Delhi.",
  },
  {
    title: "Basketball Scoring Board",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://scoringboard-games.netlify.app",
    summary: "Real-time basketball scoreboard.",
  },
  {
    title: "Travel Journal",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://travel-journal-ochre-eight.vercel.app",
    summary: "Trip logging interface.",
  },
  {
    title: "Blackjack",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://cheerful-fairy-229f93.netlify.app",
    summary: "Browser Blackjack in vanilla JavaScript.",
  },
];

// The handful of things I actually reach for daily. Rendered as a slow
// rotating strip in the About section.
export const coreStack = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Git",
  "Turborepo",
  "Arch Linux",
];

export const education = [
  {
    degree: "B.Tech CSE (AI/ML)",
    school: "Dronacharya College of Engineering",
    period: "Nov 2021 – Jul 2025",
    detail: "CGPA 7.2",
  },
];

export const achievements = [
  "Paper on robotic vision accepted at ICIEV/IVPR.",
  "Only student from my college picked for the Kyushu Institute of Technology robotics lab.",
];

export const blogs = [
  {
    title: "Git Guide: Your Project's Storybook",
    url: "https://git-for-everyone.hashnode.dev/git-guide-your-projects-storybook",
    date: "2025",
    summary: "A beginner-friendly guide to Git.",
  },
];
