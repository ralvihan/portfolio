import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const sectionMap = {
  "/projects": "projects",
  "/about": "about",
  "/contact": "contact",
};

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const id = sectionMap[location.pathname];
    if (id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}