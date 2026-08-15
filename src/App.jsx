import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto min-h-screen w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<Navigate to="/#experience" replace />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route path="/blogs" element={<Navigate to="/#blogs" replace />} />
          <Route path="/skills" element={<Navigate to="/#about" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
