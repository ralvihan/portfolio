import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "../lib/lenis";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const sectionMap = {
  "/techstack": "techstack",
  "/projects": "projects",
  "/about": "about",
  "/contact": "contact",
};

const idToPath = {
  home: "/portfolio",
  techstack: "/portfolio/techstack",
  projects: "/portfolio/projects",
  about: "/portfolio/about",
  contact: "/portfolio/contact",
};

export default function HomePage() {
  const location = useLocation();
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const id = sectionMap[location.pathname];
    isProgrammaticScroll.current = true;

    const lenis = getLenis();

    if (id) {
    const el = document.getElementById(id);
    if (el) {
        if (lenis) lenis.scrollTo(el);
        else el.scrollIntoView({ behavior: "smooth" });
    }
    } else {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const timeout = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 700);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    const ids = ["home", "techstack", "projects", "about", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;

        const nextPath = idToPath[visible.target.id];
        if (nextPath && window.location.pathname !== nextPath) {
          window.history.replaceState(null, "", nextPath);
        }
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}