import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { initLenis, destroyLenis } from "./lib/lenis";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import AllProjects from "./pages/AllProjects";
import EducationDetail from "./pages/EducationDetail";
import EducationActivityDetail from "./pages/EducationActivityDetail";
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
      <Route path="/about" element={<HomePage />} />
      <Route path="/contact" element={<HomePage />} />
      <Route path="/all-projects" element={<AllProjects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/education/:slug" element={<EducationDetail />} />
      <Route path="/education/:slug/:activitySlug" element={<EducationActivityDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}