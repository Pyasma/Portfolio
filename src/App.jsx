import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogsPage from "./pages/BlogsPage";
import NotFoundPage from "./pages/NotFoundPage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-page">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function FloatingCal() {
  return (
    <a
      href="https://cal.com/piyush-mudgal-1k0win"
      target="_blank"
      rel="noopener noreferrer"
      className="
      group
       fixed bottom-6 right-6
       flex items-center
       gap-2
       p-4
       h-14
       w-14
       hover:w-40
       overflow-hidden
       rounded-full
       bg-gray-900
       text-white
       transition-all
       duration-300
      "
    >
      <svg
        className="w-6 h-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>

      <span
        className="
          max-w-0
          overflow-hidden
          whitespace-nowrap
          opacity-0
          transition-all duration-300
          group-hover:max-w-40
          group-hover:opacity-100
        "
      >
        Book a Call
      </span>
    </a>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-20">
        <AnimatedRoutes />
      </div>
      <FloatingCal />
    </BrowserRouter>
  );
}
