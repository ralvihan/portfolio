import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificateData = {
  1: {
    title: "AWS Cloud Practitioner Essentials Day",
    images: [
      "/assets/certificate/aws.jpg"
    ]
  },
  2: {
    title: "Dicoding — Belajar Dasar Visualisasi Data",
    images: [
      "/assets/certificate/dbdvd.jpg",
      "/assets/certificate/dbdvd1.jpg",
    ]
  },
  3: {
    title: "Dicoding — Memulai Pemrograman dengan Python",
    images: [
      "/assets/certificate/dmpdp.jpg",
      "/assets/certificate/dmpdp1.jpg",
      "/assets/certificate/dmpdp2.jpg",
    ]
  },
  4: {
    title: "JGU — Student Orientation (PBAK) 2024, Liaison Officer",
    images: [
      "/assets/certificate/pbak.jpg"
    ]
  },
  5: {
    title: "English Club — 3rd Anniversary Event, Media Division Committee",
    images: [
      "/assets/certificate/mediaAnnivEc.jpg"
    ]
  },
  6: {
    title: "HIMATIF JGU — HIMATIF Berbagi 2025, Decoration & Documentation Division Member (PDD)",
    images: [
      "/assets/certificate/pddPuasa.jpg"
    ]
  },
  7: {
    title: "Samsung Innovation Campus — Logic Test Batch 6 (2024/2025) — Participant",
    images: [
      "/assets/certificate/sicBatch6.jpg"
    ]
  }
};

const CertificateTab = ({ isVisible, animationKey }) => {
  const [carouselIndexes, setCarouselIndexes] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0
  });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedCertId, setSelectedCertId] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndexes((prev) => {
        const updated = { ...prev };
        for (let id in updated) {
          // Hanya slide jika card sedang di-hover
          if (hoveredCard === id) {
            const images = certificateData[id]?.images || [];
            updated[id] = (updated[id] + 1) % images.length;
          }
        }
        return updated;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [hoveredCard]);

  const handleImageClick = (id) => {
    const currentImageIndex = carouselIndexes[id];
    setSelectedCertId(id);
    setModalImageIndex(currentImageIndex);
    setSelectedImage(certificateData[id].images[currentImageIndex]);
    setSelectedTitle(certificateData[id].title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
    setSelectedCertId(null);
    setModalImageIndex(0);
  };

  const goToPrevImage = () => {
    if (selectedCertId) {
      const images = certificateData[selectedCertId].images;
      const newIndex = modalImageIndex === 0 ? images.length - 1 : modalImageIndex - 1;
      setModalImageIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  const goToNextImage = () => {
    if (selectedCertId) {
      const images = certificateData[selectedCertId].images;
      const newIndex = (modalImageIndex + 1) % images.length;
      setModalImageIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  return (
    <div className="text-white text-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {Object.keys(certificateData).map((id, index) => (
          <motion.div
            key={`cert-${id}-${animationKey}`}
            className="card bg-base-100 w-64 shadow-sm cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
            whileHover={{
              scale: 1.08,
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            onMouseEnter={() => setHoveredCard(id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleImageClick(id)}
          >
            <figure className="relative overflow-hidden h-44">
              <motion.img
                src={certificateData[id].images[carouselIndexes[id]]}
                alt={`Certificate ${id}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <h2 className="text-white text-sm font-semibold p-3 leading-tight">
                  {certificateData[id].title}
                </h2>
              </div>
            </figure>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="pt-28 px-6 md:px-12 lg:px-20 fixed inset-0 bg-gray-100/85 dark:bg-[#1C1B1B]/85 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-[#030202] rounded-lg overflow-hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 z-20 text-black dark:text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                onClick={closeModal}
              >
                ×
              </button>
              
              {/* Modal Header */}
              <div className="bg-white dark:bg-black text-black dark:text-white p-4 pr-12">
                <h3 className="text-lg font-semibold">{selectedTitle}</h3>
              </div>
              
              {/* Modal Image with Navigation - Style dari DetailPage */}
              <div className="relative bg-white dark:bg-black p-4">
                <div className="relative h-48 md:h-64 lg:h-80 max-w-2xl mx-auto bg-white dark:bg-[#030202] rounded-lg overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={modalImageIndex}
                      src={selectedImage}
                      alt={selectedTitle}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows - Style dari DetailPage */}
                  {selectedCertId && certificateData[selectedCertId].images.length > 1 && (
                    <>
                      <button
                        onClick={goToPrevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 text-gray-900 dark:text-gray-100 p-2 rounded-full hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all z-10 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={goToNextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 text-gray-900 dark:text-gray-100 p-2 rounded-full hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all z-10 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Image Counter - Style dari DetailPage */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-black bg-opacity-90 dark:bg-opacity-90 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {modalImageIndex + 1} / {certificateData[selectedCertId].images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Dot Indicators - Langsung di background yang sama */}
                {selectedCertId && certificateData[selectedCertId].images.length > 1 && (
                  <div className="flex justify-center pt-3 space-x-2">
                    {certificateData[selectedCertId].images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setModalImageIndex(index);
                          setSelectedImage(certificateData[selectedCertId].images[index]);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === modalImageIndex 
                            ? 'bg-gray-900 dark:bg-gray-100 scale-125' 
                            : 'bg-gray-400 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { certificateData };
export default CertificateTab;