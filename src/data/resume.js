export const profile = {
  name: "Piyush Mudgal",
  tagline: "Graduate Software Engineer · Open Source Contributor · Linux (Arch)",
  location: "New Delhi, India",
  email: "pranyasharma55555@gmail.com",
  phone: "+91 8178283764",
  github: "https://github.com/Pyasma",
  linkedin: "https://www.linkedin.com/in/piyush-mudgal",
  heroDescription:
    "Shipped my first website at 18 and haven't stopped since. I'm a full-stack developer with a deep interest in backend systems, machine learning, and data pipelines — comfortable anywhere from crafting REST APIs to training neural networks. These days I spend most of my energy in open source, contributing to real codebases and learning from engineers far more experienced than me. I think the best developers slow down before they write a single line — because a well-framed problem almost writes its own solution.",
  ossStatus:
    "Currently contributing to Apache Airflow (Apache Software Foundation). Merged 10+ PRs across providers, core, and E2E testing.",
  openToWork: true,
};

export const experience = [
  {
    role: "Software Engineer — Product & Developer Experience",
    company: "Compyle (YC-backed)",
    location: "Remote",
    period: "Nov 2025 – Feb 2026",
    bullets: [
      "Built the Compyle Apps Showcase — a full-stack platform for discovering and sharing community-built applications, enabling self-serve publishing for the first time. (TypeScript, REST APIs)",
      "Authored end-to-end developer documentation covering project setup, deployment workflows, and Git practices — adopted as the canonical onboarding reference for all new contributors.",
    ],
  },
  {
    role: "ML Intern — Robotics & Computer Vision",
    company: "Kyushu Institute of Technology",
    location: "Fukuoka, Japan",
    period: "Feb 2025 – May 2025",
    bullets: [
      "Built a vision-based robotic perception system using Python + Intel RealSense, achieving 95% object detection accuracy with real-time distance estimation.",
      "Trained a CNN + LSTM gesture recognition pipeline on 100K+ hand gesture samples, enabling real-time robotic arm control with 90%+ accuracy.",
      "Reduced model training time by 60% through redesigned preprocessing and feature engineering pipelines.",
      "Co-authored a research paper accepted at ICIEV/IVPR (oral + poster) — advancing robotic vision perception.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Apache Airflow",
    companyUrl: "https://github.com/apache/airflow",
    location: "Global",
    period: "2025 – Present",
    bullets: [
      "Merged 10+ PRs across providers, testing, and core — fixes include a multi-worker race condition (atomic file locking), SQLAlchemy URL property implementations across 3 provider hooks, and Playwright E2E test stability via locator-based waits.",
      "Engaged directly with core maintainers Jarek Potiuk and Jason Liu on architecture trade-offs — iterating design decisions via Slack and GitHub before opening PRs to shorten review cycles.",
    ],
    tech: "Python, SQLAlchemy, Pytest, Playwright",
  },
];

export const projects = [
  {
    title: "ReflectAI — Developer Journal",
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "Gemini API", "GitHub OAuth"],
    github: "https://github.com/Pyasma/reflectai-dev-journal",
    live: "https://reflect-ai-journal.netlify.app",
    bullets: [
      "Full-stack journaling platform that auto-generates AI summaries of coding sessions using Gemini, with GitHub OAuth integration and repository sync.",
      "Built rich text editing (Tiptap), a timeline view, analytics dashboard, and full-text search across all journal entries.",
      "Supports three session types (Development, Maintenance, Planning) with customizable AI prompts per session.",
    ],
  },
  {
    title: "Gemini Chef",
    stack: ["React", "Vite", "Google Gemini 2.5 Flash"],
    github: "https://github.com/Pyasma/gemini-chef",
    live: "https://gemini-chef-six.vercel.app",
    bullets: [
      "AI-powered recipe generator — input your available ingredients and Gemini 2.5 Flash produces a structured, formatted recipe.",
      "Validates a minimum of 4 ingredients before generation; renders output as markdown for clean, readable results.",
    ],
  },
  {
    title: "Compyle Apps Showcase",
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "pnpm"],
    github: "https://github.com/Pyasma/compyle",
    live: "https://compyle.tracepanic.com",
    bullets: [
      "Platform for discovering and sharing applications built with Compyle — enabling self-serve publishing for the first time.",
      "Includes a custom component library, email template system with preview UI, and a Drizzle ORM data layer.",
    ],
  },
  {
    title: "Assembly: Endgame",
    stack: ["React", "TypeScript", "Vite"],
    github: "https://github.com/Pyasma/Re-assembly-endgame",
    live: "https://re-assembly-endgame.vercel.app",
    bullets: [
      "Word-guessing game with a programming twist — each wrong guess eliminates a programming language from existence.",
      "Built with React Compiler enabled for performance optimization and full TypeScript type safety.",
    ],
  },
  {
    title: "Piwu — Endless Driving Game",
    stack: ["JavaScript", "HTML5", "CSS", "Three.js"],
    github: "https://github.com/Pyasma/slow-verse",
    live: "https://slowverseopppp.vercel.app",
    bullets: [
      "Browser-based endless driving game with 3D assets, custom Lightning McQueen character models, and ambient gameplay.",
      "Features Python-processed OBJ models, PWA manifest for installability, and randomized generation via Alea.js.",
    ],
  },
  {
    title: "Paranormal",
    stack: ["JavaScript", "HTML", "CSS", "Node.js"],
    github: "https://github.com/Pyasma/Paranormal",
    bullets: [
      "Event-driven web application with a Node.js server backend, structured around modular event handlers and utility layers.",
    ],
  },
  {
    title: "Search.com",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://searchdotcom.netlify.app",
    bullets: [
      "Minimal search interface powered by Wikipedia — type a query and get encyclopedia-sourced results instantly.",
    ],
  },
  {
    title: "Visit Delhi",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://visitdelhi.netlify.app",
    bullets: [
      "Atmospheric travel guide for Delhi — highlights iconic spots like Chandni Chowk, India Gate, and Humayun's Tomb with evocative editorial copy.",
    ],
  },
  {
    title: "Basketball Scoring Board",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://scoringboard-games.netlify.app",
    bullets: [
      "Real-time digital scoreboard for basketball — tracks home and guest scores with +1/+2/+3 increment buttons and a game reset.",
    ],
  },
  {
    title: "Blackjack",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://cheerful-fairy-229f93.netlify.app",
    bullets: [
      "Browser-based Blackjack implementation — start a round, see your cards, track your running sum, and reset for the next hand.",
    ],
  },
  {
    title: "Travel Journal",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://travel-journal-ochre-eight.vercel.app",
    bullets: [
      "A clean travel journal UI for logging trips and destinations, styled for readability and easy browsing.",
    ],
  },
  {
    title: "ReZero (WIP)",
    stack: ["React", "Vite"],
    live: "https://rezero-sigma.vercel.app",
    bullets: [
      "Work in progress — currently in early development.",
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
    degree: "B.Tech — Computer Science & Engineering (AI/ML Specialization)",
    school: "Dronacharya College of Engineering",
    location: "Gurugram, Haryana",
    period: "Nov 2021 – Jul 2025",
    detail: "CGPA: 7.2 · Coursework: DSA, Distributed Systems, Neural Networks, Operating Systems",
  },
];

export const achievements = [
  "Research paper accepted at ICIEV/IVPR (oral + poster) for advancements in robotics and computer vision — co-authored during international research internship at Kyushu Institute of Technology, Japan.",
  "Selected for international ML research internship in Japan as an undergraduate — sole student from institution placed at Kyushu Institute of Technology's robotics lab.",
];

export const blogs = [
  {
    title: "Git Guide: Your Project's Storybook",
    url: "https://git-for-everyone.hashnode.dev/git-guide-your-projects-storybook",
    date: "2025",
    summary: "A beginner-friendly guide to Git — treating your project's history as a storybook of decisions, changes, and progress.",
  },
];
