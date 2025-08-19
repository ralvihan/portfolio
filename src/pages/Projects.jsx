import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsTab from "../components/projectTabs/ProjectsTab";
import SkillsTab from "../components/projectTabs/SkillsTab";
import ExperienceTab from "../components/projectTabs/ExperienceTab";
import CertificateTab from "../components/projectTabs/CertificateTab";
import DetailPage from "../components/projectTabs/DetailPage";

const tabs = [
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "certificate", title: "Certificate"},
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [currentPage, setCurrentPage] = useState("main"); // "main", "detail"
  const [selectedItem, setSelectedItem] = useState({ type: null, id: null });
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = useRef(null);

  // Intersection Observer untuk deteksi visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimationKey(prev => prev + 1);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Trigger animation when tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setAnimationKey(prev => prev + 1);
  };

  // Navigate to detail page
  const openDetailPage = (type, id) => {
    setSelectedItem({ type, id });
    setCurrentPage("detail");
  };

  // Navigate back to main page
  const backToMain = () => {
    setCurrentPage("main");
    setSelectedItem({ type: null, id: null });
  };

  // Main content rendering
  const renderContent = () => {
    if (activeTab === "projects") {
      return <ProjectsTab isVisible={isVisible} animationKey={animationKey} openDetailPage={openDetailPage} />;
    }
    if (activeTab === "skills") {
      return <SkillsTab isVisible={isVisible} animationKey={animationKey} />;
    }
    if (activeTab === "experience") {
      return <ExperienceTab isVisible={isVisible} animationKey={animationKey} openDetailPage={openDetailPage} />;
    }
    if (activeTab === "certificate") {
      return <CertificateTab isVisible={isVisible} animationKey={animationKey} />;
    }
    return null;
  };

  // Render detail page or main page
  if (currentPage === "detail") {
    return (
      <DetailPage 
        type={selectedItem.type} 
        id={selectedItem.id} 
        onBack={backToMain} 
      />
    );
  }

  return (
    <div ref={containerRef} className="pt-28 px-6 md:px-12 lg:px-20">
      <div className="h-full flex items-center">
        <div className="w-full overflow-x-auto">
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex mb-0 overflow-x-auto">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => handleTabChange(tab.id)}
      className={`px-2 sm:px-4 py-3 font-semibold transition-all duration-300 relative ${
        activeTab === tab.id
          ? "bg-white dark:bg-[#030202] text-black dark:text-gray-100 border-gray-200 dark:border-[#030202] z-10 rounded-t-lg"
          : "text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-gray-100 hover:bg-white dark:hover:bg-[#030202] hover:bg-opacity-50 rounded-t-lg"
      }`}
      style={{
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        marginRight: '0', // Hilangkan margin antar tab
      }}
    >
      {tab.title}
    </button>
  ))}
</div>

            {/* Content Box */}
            <div 
              className="bg-white dark:bg-[#030202] border-gray-200 dark:border-[#030202] rounded-lg shadow-2xl dark:shadow-gray-900/50 p-8 h-[400px] overflow-y-auto transition-colors duration-300"
              style={{
                borderTopLeftRadius: activeTab === "projects" ? '0' : '0rem',
                borderTopRightRadius: '0rem',
                borderBottomLeftRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;