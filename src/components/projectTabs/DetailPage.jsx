import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectData } from "./ProjectsTab";
import { experienceData } from "./ExperienceTab";

const DetailPage = ({ type, id, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const data = type === 'project' ? projectData[id] : experienceData[id];
  
  if (!data) return null;

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % data.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + data.images.length) % data.images.length);
  };

  // Function to render text with line breaks and bold formatting
  const renderTextWithLineBreaks = (text) => {
    if (!text) return null;
    
    return text.split('\n').map((line, lineIndex, array) => (
      <span key={lineIndex}>
        {renderBoldText(line)}
        {lineIndex < array.length - 1 && <br />}
      </span>
    ));
  };

  // Function to render bold text using **text** or __text__ format
  const renderBoldText = (text) => {
    if (!text) return text;
    
    // First handle ** patterns
    let result = text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
        return <strong key={`bold-${index}`}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    // Then handle __ patterns for parts that aren't already JSX elements
    return result.map((part, index) => {
      if (typeof part === 'string') {
        return part.split(/(__[^_]+__)/g).map((subPart, subIndex) => {
          if (subPart.startsWith('__') && subPart.endsWith('__') && subPart.length > 4) {
            return <strong key={`bold-${index}-${subIndex}`}>{subPart.slice(2, -2)}</strong>;
          }
          return subPart;
        });
      }
      return part;
    }).flat();
  };

  return (
    <motion.div
      className="pt-[80px] px-4 md:px-8 lg:px-16" // Background dihapus
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="mb-6 flex items-center space-x-2 text-white hover:text-[#916BBF] transition-colors duration-300"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold">Kembali</span>
        </motion.button>

        {/* Content Container */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Header */}
          <div className="p-6">
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {data.title}
            </motion.h1>
            {type === 'experience' && (
              <motion.div
                className="text-[#916BBF] font-semibold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-lg">{data.company}</p>
                <p className="text-gray-300 text-sm">{data.period}</p>
              </motion.div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex flex-col">
            {/* Image Section */}
            <motion.div
              className="w-full relative mb-2"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="relative h-48 md:h-64 lg:h-80 max-w-2xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={data.images[currentImageIndex]}
                    alt={`${data.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {data.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#916BBF] bg-opacity-70 text-white p-1 rounded-full hover:bg-opacity-90 transition-all z-10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#916BBF] bg-opacity-70 text-white p-1 rounded-full hover:bg-opacity-90 transition-all z-10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-80 bg-[#916BBF] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {currentImageIndex + 1} / {data.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Dot Indicators */}
              {data.images.length > 1 && (
                <div className="flex justify-center py-3 space-x-2 ">
                  {data.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-[#916BBF] scale-125' 
                          : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="w-full p-6 lg:p-4"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-xl font-semibold text-white mb-4 border-b border-[#916BBF] border-opacity-30">
                Deskripsi
              </h2>
              <div className="text-gray-200 leading-relaxed text-justify">
                {renderTextWithLineBreaks(data.description)}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DetailPage;