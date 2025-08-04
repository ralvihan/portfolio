import { useEffect } from 'react';
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import FadeInSection from "./components/effects/FadeInSection";
import BackToTop from "./components/common/BackToTop";
import './index.css'

function App() {
  
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Handle page visibility change (when user switches tabs and comes back)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        window.scrollTo(0, 0);
      }
    };
    
    // Handle beforeunload (before page refresh)
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Cleanup event listeners
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
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