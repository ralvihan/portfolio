import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/techstack" element={<HomePage />} />
      <Route path="/projects" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/contact" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}