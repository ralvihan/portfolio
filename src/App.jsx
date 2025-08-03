import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import FadeInSection from "./components/effects/FadeInSection";
import Aurora from "./components/effects/Aurora";
import BackToTop from "./components/common/BackToTop";
import './index.css'


function App() {
  
  return (
    
<div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Lightning */}
      <div className="fixed inset-0 -z-10 w-full">
       <Aurora
  colorStops={["#2E073F", "#000000", "#2E073F"]}
  blend={0.5}
  amplitude={1.0}
  speed={1}
/>
      </div>

      {/* Konten utama */}
      <Navbar />
      <FadeInSection id="Home"><Home /></FadeInSection>
      <FadeInSection id="AboutMe"><About /></FadeInSection>
      <FadeInSection id="Projects"><Projects /></FadeInSection>
      <FadeInSection id="Contact"><Contact /></FadeInSection>

      <BackToTop />
    </div>
  );
}

export default App;
