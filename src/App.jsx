import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import BlogsPage from "./pages/BlogsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
