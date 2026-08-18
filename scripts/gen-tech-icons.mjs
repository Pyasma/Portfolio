import * as si from "simple-icons";
import { writeFileSync } from "node:fs";

// Tech label (as written in src/data/resume.js) -> simple-icons slug.
// Icons simple-icons no longer ships (AWS, OpenAI, Playwright) fall back to
// a plain text chip.
const MAP = {
  Python: "python",
  TypeScript: "typescript",
  JavaScript: "javascript",
  React: "react",
  "React 19": "react",
  "Next.js": "nextdotjs",
  "Next.js 15": "nextdotjs",
  "Node.js": "nodedotjs",
  Vite: "vite",
  Docker: "docker",
  "CI/CD": "githubactions",
  "GitHub Actions": "githubactions",
  "pre-commit hooks": "precommit",
  Clerk: "clerk",
  PyTorch: "pytorch",
  "Scikit-Learn": "scikitlearn",
  OpenCV: "opencv",
  "Gemini API": "googlegemini",
  "Google Gemini 2.5 Flash": "googlegemini",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  MongoDB: "mongodb",
  Supabase: "supabase",
  Prisma: "prisma",
  "Drizzle ORM": "drizzle",
  Turborepo: "turborepo",
  pnpm: "pnpm",
  Resend: "resend",
  Vercel: "vercel",
  Git: "git",
  GitHub: "github",
  "GitHub OAuth": "github",
  Postman: "postman",
  SQLAlchemy: "sqlalchemy",
  Pytest: "pytest",
  Vitest: "vitest",
  "unittest.mock": "python",
  "Arch Linux (daily driver)": "archlinux",
  "Arch Linux": "archlinux",
  AUR: "archlinux",
  Neovim: "neovim",
  Hyprland: "hyprland",
  GNOME: "gnome",
  "Apache Airflow Breeze": "apacheairflow",
  "Apache Airflow": "apacheairflow",
  "Three.js": "threedotjs",
  HTML5: "html5",
  HTML: "html5",
  CSS: "css",
  Netlify: "netlify",
};

const slugToKey = (slug) =>
  "si" + slug.charAt(0).toUpperCase() + slug.slice(1);

const out = {};
const missing = [];

for (const [label, slug] of Object.entries(MAP)) {
  const icon = si[slugToKey(slug)];
  if (!icon) {
    missing.push(`${label} (${slug})`);
    continue;
  }
  out[label] = { title: icon.title, hex: `#${icon.hex}`, path: icon.path };
}

const body = `// Generated from the simple-icons package. Regenerate with
// scripts/gen-tech-icons.mjs after adding a tech to src/data/resume.js.
const techIcons = ${JSON.stringify(out, null, 2)};

export default techIcons;
`;

writeFileSync(process.argv[2], body);
console.log(`wrote ${Object.keys(out).length} icons`);
if (missing.length) console.log("MISSING:", missing.join(", "));
