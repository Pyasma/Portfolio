export const profile = {
  name: "Piyush Mudgal",
  tagline: "Graduate Software Engineer · Open Source Contributor · Linux (Arch)",
  location: "New Delhi, India",
  email: "pranyasharma55555@gmail.com",
  phone: "+91 8178283764",
  github: "https://github.com/Pyasma",
  linkedin: "https://www.linkedin.com/in/piyush-mudgal",
  heroDescription:
    "Shipped my first website at 18 and haven't stopped since. I'm a full-stack developer with a deep interest in backend systems, machine learning, and data pipelines, comfortable anywhere from crafting REST APIs to training neural networks. These days I spend most of my energy in open source, contributing to real codebases and learning from engineers far more experienced than me. I think the best developers slow down before they write a single line, because a well-framed problem almost writes its own solution.",
  ossStatus:
    "Currently contributing to Apache Airflow (Apache Software Foundation). Merged 10+ PRs across providers, core, and E2E testing.",
  openToWork: true,
};

export const experience = [
  {
    role: "Software Engineer: Product & Developer Experience",
    company: "Compyle (YC-backed)",
    location: "Remote",
    period: "Nov 2025 – Feb 2026",
    bullets: [
      "Built the Compyle Apps Showcase from scratch, a full-stack discovery platform enabling community self-serve app publishing for the first time. (TypeScript, REST APIs)",
      "Authored comprehensive developer documentation covering project setup, deployment workflows, and Git practices, adopted as the canonical onboarding reference across all new contributors.",
    ],
  },
  {
    role: "ML Intern: Robotics & Computer Vision",
    company: "Kyushu Institute of Technology",
    location: "Fukuoka, Japan",
    period: "Feb 2025 – May 2025",
    bullets: [
      "Designed and built a vision-based robotic perception system using Python and Intel RealSense, achieving 95% object detection accuracy with real-time distance estimation.",
      "Trained a CNN + LSTM gesture recognition pipeline on 100K+ hand gesture samples, enabling real-time robotic arm control at 90%+ accuracy.",
      "Reduced model training time by 60% through redesigned preprocessing and feature engineering pipelines.",
      "Co-authored a research paper accepted at ICIEV/IVPR (oral and poster presentation) on advances in robotic vision perception.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Apache Airflow",
    companyUrl: "https://github.com/apache/airflow",
    location: "Global",
    period: "2025 – Present",
    bullets: [
      "Merged 10+ PRs across providers, core, and testing infrastructure: resolved a multi-worker race condition via atomic file locking, implemented SQLAlchemy URL properties across 3 provider hooks, and stabilized Playwright E2E tests using locator-based waits.",
      "Collaborated directly with core maintainers Jarek Potiuk and Jason Liu on architecture decisions, iterating designs via Slack and GitHub reviews before opening PRs to shorten review cycles.",
    ],
    tech: "Python, SQLAlchemy, Pytest, Playwright",
  },
];

export const projects = [
  {
    title: "ReflectAI: Developer Journal",
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "Gemini API", "GitHub OAuth"],
    github: "https://github.com/Pyasma/reflectai-dev-journal",
    live: "https://reflect-ai-journal.netlify.app",
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
    bullets: [
      "Developed a word-guessing game where each incorrect guess eliminates a programming language, built with React 19 and TypeScript.",
      "Enabled React Compiler for automatic performance optimization and maintained full TypeScript type safety throughout.",
    ],
  },
  {
    title: "Paranormal",
    stack: ["JavaScript", "HTML", "CSS", "Node.js"],
    github: "https://github.com/Pyasma/Paranormal",
    bullets: [
      "Built an event-driven web application with a modular Node.js backend, organized across dedicated event handler, data, and utility layers.",
    ],
  },
  {
    title: "Search.com",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://searchdotcom.netlify.app",
    bullets: [
      "Built a minimal search interface powered by the Wikipedia API, delivering instant encyclopedia-sourced results through a clean, single-input UI.",
    ],
  },
  {
    title: "Visit Delhi",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://visitdelhi.netlify.app",
    bullets: [
      "Designed an atmospheric travel guide for Delhi featuring curated cultural highlights including Chandni Chowk, India Gate, and Humayun's Tomb with editorial copy.",
    ],
  },
  {
    title: "Basketball Scoring Board",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://scoringboard-games.netlify.app",
    bullets: [
      "Developed a real-time basketball scoreboard tracking home and guest scores with +1, +2, and +3 increment controls and a full game reset.",
    ],
  },
  {
    title: "Blackjack",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://cheerful-fairy-229f93.netlify.app",
    bullets: [
      "Implemented a browser-based Blackjack game with card dealing, running sum tracking, and round management using vanilla JavaScript.",
    ],
  },
  {
    title: "Travel Journal",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://travel-journal-ochre-eight.vercel.app",
    bullets: [
      "Built a travel journal interface for logging trips and destinations with a clean, readable layout using HTML, CSS, and JavaScript.",
    ],
  },
  {
    title: "ReZero (WIP)",
    stack: ["React", "Vite"],
    live: "https://rezero-sigma.vercel.app",
    bullets: [
      "Work in progress, currently in early development.",
    ],
  },
];

export const skills = [
  { label: "Languages", value: "Java, Python, R, SQL, TypeScript, HTML, CSS" },
  { label: "Frontend / Backend", value: "React, Next.js, Spring Boot, REST APIs, Spring Data JPA, Microservices, Docker, AWS, CI/CD, pre-commit hooks" },
  { label: "AI / ML", value: "PyTorch, Scikit-Learn, CNN, RNN, LSTM, RAG, LLMs, Prompt Engineering, OpenAI API, Gemini, Vector Databases" },
  { label: "Databases & Tools", value: "PostgreSQL, MySQL, MongoDB, Git, GitHub, Postman, SQLAlchemy, Playwright" },
  { label: "Linux & Open Source", value: "Arch Linux (daily driver), Hyprland, GNOME, AUR, Apache Airflow Breeze" },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI/ML Specialization)",
    school: "Dronacharya College of Engineering",
    location: "Gurugram, Haryana",
    period: "Nov 2021 – Jul 2025",
    detail: "CGPA: 7.2 · Coursework: DSA, Distributed Systems, Neural Networks, Operating Systems",
  },
];

export const achievements = [
  "Research accepted as oral and poster presentation at ICIEV/IVPR international conference for advancements in robotic vision perception, co-authored during a research internship at Kyushu Institute of Technology, Japan.",
  "Selected as the sole student from institution for an international ML research internship at Kyushu Institute of Technology's robotics lab in Fukuoka, Japan.",
];

export const blogs = [
  {
    title: "Git Guide: Your Project's Storybook",
    url: "https://git-for-everyone.hashnode.dev/git-guide-your-projects-storybook",
    date: "2025",
    summary: "A beginner-friendly guide to Git, treating your project's history as a storybook of decisions, changes, and progress.",
  },
];
