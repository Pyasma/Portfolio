import resumePdf from "../assets/resume/PiyushResume.pdf";

export const profile = {
  name: "Piyush Mudgal",
  handle: "Pyasma",
  headline: "I write code.",
  tagline: "AI/ML Engineer · Open Source Engineer · Linux (Arch / Ubuntu)",
  location: "New Delhi, India",
  timezone: "Asia/Kolkata",
  email: "pranyasharma55555@gmail.com",
  github: "https://github.com/Pyasma",
  linkedin: "https://www.linkedin.com/in/piyush-mudgal",
  twitter: "https://x.com/MudgalPiyu49658",
  cal: "https://cal.com/piyush-mudgal-1k0win",
  website: "https://pyasma.vercel.app",
  status: "learning neovim, and working on OSS 🫡",
  bio: "Full-stack engineer working mostly in backend systems, ML pipelines, and open source. 25+ PRs merged into Apache Airflow.",
  heroDescription:
    "Shipped my first website at 18 and haven't stopped since. I'm a full-stack developer with a deep interest in backend systems, machine learning, and data pipelines, comfortable anywhere from crafting REST APIs to training neural networks. These days I spend most of my energy in open source, contributing to real codebases and learning from engineers far more experienced than me. I think the best developers slow down before they write a single line, because a well-framed problem almost writes its own solution.",
  ossStatus: "Actively contributing to OSS.",
  resumeUrl: resumePdf,
  openToWork: true,
};

export const wakatime = {
  username: "Pyasma",
  userId: "8d840055-21c4-48ea-97c2-a2dbcfa43600",
  profileUrl: "https://wakatime.com/@8d840055-21c4-48ea-97c2-a2dbcfa43600",
  badgeUrl:
    "https://wakatime.com/badge/user/8d840055-21c4-48ea-97c2-a2dbcfa43600.svg?style=flat-square",
  since: "Apr 5 2026",
};

export const openSource = [
  {
    project: "Apache Airflow",
    role: "Contributor",
    period: "2025 – Present",
    url: "https://github.com/apache/airflow",
    blurb: "Data orchestration platform with 44k+ GitHub stars.",
    summary:
      "25+ PRs merged across core, providers, and testing — race conditions, SQLAlchemy hooks, connection URIs.",
    bullets: [
      "Fixed a race condition in FabAuthManager and resolved a startup race condition in the API server, eliminating database integrity errors.",
      "Implemented SQLAlchemy-compatible sqlalchemy_url properties for Presto, Vertica, and Impala hooks, and fixed Connection.get_uri() for non-string extras.",
      "25+ PRs merged across core, providers, and testing; engaged with core maintainers to align designs with community norms before opening PRs.",
    ],
    tech: "Python, SQLAlchemy, Pytest, Playwright",
  },
  {
    project: "Observal (BlazeUp-AI)",
    role: "Contributor · Moderator",
    period: "2026 – Present",
    url: "https://github.com/BlazeUp-AI",
    blurb: "Agent registry and analytics platform for AI coding agents (2.1k+ stars).",
    summary:
      "Wrote the observal_cli test suite and a coverage ratchet that blocks regressions.",
    bullets: [
      "Authored unit test suites for observal_cli, covering command parsing, output formatting, and edge-case handling.",
      "Implemented a coverage threshold ratchet to enforce incremental coverage gains and prevent regressions in untested modules.",
      "Resolved patch-target and mocking issues flagged during PR review, aligning test mocks with unittest.mock best practices.",
    ],
    tech: "Python, Pytest, unittest.mock",
  },
];

export const experience = [
  {
    role: "Software Engineer, Product & DX",
    company: "Compyle (YC-backed)",
    type: "Contract",
    location: "Remote",
    period: "Nov 2025 – Feb 2026",
    summary:
      "Built the Compyle Apps Showcase, a self-serve publishing platform, plus the component and email systems behind it.",
    bullets: [
      "Designed and built the Compyle Apps Showcase from scratch, a self-serve publishing platform removing the team's main submission bottleneck.",
      "Built a reusable component library and email template system with live preview, improving frontend consistency across the platform.",
      "Authored official engineering documentation covering setup, deployment, and Git practices.",
    ],
    tech: "Next.js, TypeScript, Drizzle ORM, REST APIs, Resend, Vercel, GitHub Actions, CI/CD",
  },
  {
    role: "ML Research Intern",
    company: "Kyushu Institute of Technology",
    location: "Fukuoka, Japan",
    period: "Feb 2025 – May 2025",
    summary:
      "CNN + LSTM robotic perception system at 95% detection accuracy; paper accepted at ICIEV/IVPR.",
    bullets: [
      "Designed and implemented a CNN + LSTM based robotic perception system, achieving 95% object detection and 90%+ gesture recognition accuracy on a dataset of over 100K samples.",
      "Redesigned the data preprocessing pipeline, reducing model training time by 60% and enabling significantly faster experimentation cycles.",
      "Co-authored a research paper accepted at ICIEV/IVPR and presented findings on robotic perception at the conference.",
    ],
    tech: "Python, PyTorch, OpenCV, LSTM",
  },
];

export const community = [
  {
    org: "Observal (BlazeUp-AI)",
    role: "Moderator & Contributor",
    period: "2026 – Present",
    detail: "Review and merge community contributions, onboard new contributors.",
  },
  {
    org: "Compyle (YC-backed)",
    role: "Community Manager & Moderator",
    period: "2025 – Present",
    detail: "Moderate the developer community and route feedback to engineering.",
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
    summary:
      "Indexes GitHub repos into a graph-based memory using Cognee AI, enabling contextual codebase recall across sessions.",
    bullets: [
      "Built a full-stack app that indexes GitHub repos into a structured, graph-based memory using Cognee AI, enabling contextual codebase recall across sessions.",
      "Designed a monorepo architecture with Turborepo, shared Prisma schema, and Next.js apps for workspace review and commit diff exploration.",
      "Implemented commit syncing, expandable IDE-style diffs, and agent-ready repo memory tied to user accounts.",
    ],
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
    summary:
      "AI journaling platform for developers with Gemini-powered session summaries and a full reflection workflow.",
    bullets: [
      "Designed and built a full-stack AI journaling platform with GitHub OAuth, Gemini-powered session summaries, and Supabase persistence across 3 session types: Development, Maintenance, and Planning.",
      "Implemented rich text editing (Tiptap), an activity timeline, analytics dashboard, and full-text search, delivering a complete developer reflection workflow in a single app.",
      "Enabled per-session customizable AI prompts, giving users direct control over how Gemini interprets and summarizes their work.",
    ],
  },
  {
    title: "Compyle Apps Showcase",
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "pnpm"],
    github: "https://github.com/Pyasma/compyle",
    live: "https://compyle.tracepanic.com",
    featured: true,
    summary:
      "Community app showcase platform enabling self-serve publishing for a YC-backed developer tools company.",
    bullets: [
      "Designed and launched a community app showcase platform enabling self-serve publishing for the first time, built on Next.js with Drizzle ORM and TypeScript.",
      "Built a custom component library, an email template system with live preview UI, and a structured database layer using Drizzle ORM.",
    ],
  },
  {
    title: "Piwu: Endless Driving Game",
    stack: ["JavaScript", "HTML5", "CSS", "Three.js"],
    github: "https://github.com/Pyasma/slow-verse",
    live: "https://slow-verse-try.vercel.app",
    featured: true,
    summary:
      "Browser-based 3D endless driving game with randomized track generation and PWA installability.",
    bullets: [
      "Developed a browser-based 3D endless driving game featuring custom Lightning McQueen character models pre-processed via Python OBJ scripts.",
      "Implemented randomized track generation using Alea.js and added a PWA manifest for mobile installability.",
    ],
  },
  {
    title: "Gemini Chef",
    stack: ["React", "Vite", "Google Gemini 2.5 Flash"],
    github: "https://github.com/Pyasma/gemini-chef",
    live: "https://gemini-chef-six.vercel.app",
    summary:
      "AI recipe generator producing structured, markdown-formatted recipes from user ingredients.",
    bullets: [
      "Built an AI-powered recipe generator using Google Gemini 2.5 Flash that produces structured, markdown-formatted recipes from user-provided ingredients.",
      "Enforced a minimum 4-ingredient threshold before generation and rendered output via react-markdown for clean, readable results.",
    ],
  },
  {
    title: "Assembly: Endgame",
    stack: ["React", "TypeScript", "Vite"],
    github: "https://github.com/Pyasma/Re-assembly-endgame",
    live: "https://re-assembly-endgame.vercel.app",
    summary:
      "Word-guessing game where every wrong guess eliminates a programming language.",
    bullets: [
      "Developed a word-guessing game where each incorrect guess eliminates a programming language, built with React 19 and TypeScript.",
      "Enabled React Compiler for automatic performance optimization and maintained full TypeScript type safety throughout.",
    ],
  },
  {
    title: "Paranormal",
    stack: ["JavaScript", "HTML", "CSS", "Node.js"],
    github: "https://github.com/Pyasma/Paranormal",
    summary: "Event-driven web app with a modular Node.js backend.",
    bullets: [
      "Built an event-driven web application with a modular Node.js backend, organized across dedicated event handler, data, and utility layers.",
    ],
  },
  {
    title: "Search.com",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://searchdotcom.netlify.app",
    summary: "Minimal search interface powered by the Wikipedia API.",
    bullets: [
      "Built a minimal search interface powered by the Wikipedia API, delivering instant encyclopedia-sourced results through a clean, single-input UI.",
    ],
  },
  {
    title: "Visit Delhi",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://visitdelhi.netlify.app",
    summary: "Atmospheric travel guide for Delhi with curated cultural highlights.",
    bullets: [
      "Designed an atmospheric travel guide for Delhi featuring curated cultural highlights including Chandni Chowk, India Gate, and Humayun's Tomb with editorial copy.",
    ],
  },
  {
    title: "Basketball Scoring Board",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://scoringboard-games.netlify.app",
    summary: "Real-time basketball scoreboard with increment controls and game reset.",
    bullets: [
      "Developed a real-time basketball scoreboard tracking home and guest scores with +1, +2, and +3 increment controls and a full game reset.",
    ],
  },
  {
    title: "Travel Journal",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://travel-journal-ochre-eight.vercel.app",
    summary: "Trip logging interface with a clean, readable layout.",
    bullets: [
      "Built a travel journal interface for logging trips and destinations with a clean, readable layout using HTML, CSS, and JavaScript.",
    ],
  },
  {
    title: "Blackjack",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://cheerful-fairy-229f93.netlify.app",
    summary: "Browser Blackjack with card dealing and round management in vanilla JS.",
    bullets: [
      "Implemented a browser-based Blackjack game with card dealing, running sum tracking, and round management using vanilla JavaScript.",
    ],
  },
];

export const skills = [
  { label: "Languages", value: "Python, TypeScript" },
  {
    label: "Frontend / Backend",
    value:
      "React, Next.js, REST APIs, Microservices, Docker, AWS, CI/CD, pre-commit hooks, MonoRepo, Clerk, Auth",
  },
  {
    label: "AI / ML",
    value:
      "PyTorch, Scikit-Learn, CNN, RNN, LSTM, RAG, LLMs, Prompt Engineering, OpenAI API, Gemini API, Vector Databases, Agents",
  },
  {
    label: "Databases & Tools",
    value:
      "PostgreSQL, MySQL, MongoDB, Git, GitHub, Postman, SQLAlchemy, Playwright, Vitest",
  },
  {
    label: "Linux & Open Source",
    value:
      "Arch Linux (daily driver), Neovim, Hyprland, GNOME, AUR, Apache Airflow Breeze",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI/ML Specialization)",
    school: "Dronacharya College of Engineering",
    location: "Gurugram, Haryana",
    period: "Nov 2021 – Jul 2025",
    detail: "CGPA 7.2",
  },
];

export const achievements = [
  "Paper on robotic vision perception accepted at ICIEV/IVPR.",
  "Only student from my institution picked for the Kyushu Institute of Technology robotics lab.",
  "25+ PRs merged into Apache Airflow, working toward committer status.",
];

export const blogs = [
  {
    title: "Git Guide: Your Project's Storybook",
    url: "https://git-for-everyone.hashnode.dev/git-guide-your-projects-storybook",
    date: "2025",
    summary:
      "A beginner-friendly guide to Git, treating your project's history as a storybook of decisions, changes, and progress.",
  },
];
