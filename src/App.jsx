import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { initLenis, destroyLenis } from "./lib/lenis";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import AllProjects from "./pages/AllProjects";
import ExperienceDetail from "./pages/ExperienceDetail";
import AllExperience from "./pages/AllExperience";
import NotFound from "./pages/NotFound";

export default function App() {
    useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/techstack" element={<HomePage />} />
      <Route path="/projects" element={<HomePage />} />
      <Route path="/experience" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/contact" element={<HomePage />} />
      <Route path="/all-projects" element={<AllProjects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/experience/:slug" element={<ExperienceDetail />} />
      <Route path="/all-experience" element={<AllExperience />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}