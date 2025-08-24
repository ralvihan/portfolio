import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const experienceData = {
  1: {
    title: "Data Entry",
    company: "PT. Ciptadra Softindo",
    period: "Januari 2022 - April 2022",
    label: "PKL/INTERN",
    labelColor: "bg-black",
    description: "Mengembangkan aplikasi web menggunakan React.js dan implementasi responsive design dengan Tailwind CSS. Kolaborasi dengan tim backend untuk integrasi API dan optimasi performa aplikasi.\n\nBertanggung jawab dalam data entry dan validasi data untuk berbagai proyek client. Melakukan quality assurance untuk memastikan akurasi data yang diinput.\n\nMenggunakan tools seperti Excel, Google Sheets, dan database management systems. Bekerja dalam tim yang dinamis dengan deadline yang ketat.\n\nMengembangkan sistem tracking untuk monitoring progress pekerjaan. Melakukan backup dan maintenance data secara berkala untuk memastikan integritas informasi.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
    ]
  },
  2: {
    title: "Koordinator Abdimas",
    company: "Jakarta Global University",
    period: "Desember 2023",
    label: "VOLUNTEER",
    labelColor: "bg-black",
    description: "Memberikan dukungan teknis untuk sistem komputer dan jaringan. Melakukan maintenance hardware dan software, serta training penggunaan aplikasi untuk staff.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
    ]
  },
  3: {
    title: "Liaison Officer PBAK",
    company: "Jakarta Global University",
    period: "09 September - 17 September 2024",
    label: "COMMITTEE",
    labelColor: "bg-black",
    description: "Mengajar dasar-dasar pemrograman Python dan Java kepada mahasiswa tingkat awal. Membuat materi pembelajaran dan mentoring project akhir mahasiswa.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
    ]
  },
  4: {
    title: "Liaison Officer Wisuda",
    company: "Jakarta Global University",
    period: "Oktober 2024",
    label: "COMMITTEE",
    labelColor: "bg-black",
    description: "Mengajar dasar-dasar pemrograman Python dan Java kepada mahasiswa tingkat awal. Membuat materi pembelajaran dan mentoring project akhir mahasiswa.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
    ]
  },
  5: {
    title: "Media & Communication",
    company: "English Club",
    period: "November 2024 - Sekarang",
    label: "ORGANIZATION",
    labelColor: "bg-black",
    description: "Membantu tim design dalam pembuatan wireframe dan prototype menggunakan Figma. Melakukan user research dan testing untuk meningkatkan user experience aplikasi mobile.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
    ]
  },
  6: {
    title: "Pengembangan Sumber Daya Anggota (PSDA)",
    company: "Himpunan Mahasiswa Teknik Informatika (HIMATIF)",
    period: "November 2024 - Sekarang",
    label: "ORGANIZATION",
    labelColor: "bg-black",
    description: "Mempelajari pengelolaan database MySQL dan PostgreSQL. Melakukan backup data, optimasi query, dan monitoring performa database untuk berbagai aplikasi client.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
    ]
  },
  7: {
    title: "Publikasi, Dekorasi, dan Dokumentasi (PDD)",
    company: "HIMATIF - Educare Himatif Berbagi 2025",
    period: "Maret 2025",
    label: "COMMITTEE",
    labelColor: "bg-black",
    description: "Mengajar dasar-dasar pemrograman Python dan Java kepada mahasiswa tingkat awal. Membuat materi pembelajaran dan mentoring project akhir mahasiswa.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
    ]
  },
  8: {
    title: "Publikasi, Dekorasi, dan Dokumentasi (PDD)",
    company: "HIMATIF - IT's Day",
    period: "12 Mei - 5 Juli 2025",
    label: "COMMITTEE",
    labelColor: "bg-black",
    description: "Mengajar dasar-dasar pemrograman Python dan Java kepada mahasiswa tingkat awal. Membuat materi pembelajaran dan mentoring project akhir mahasiswa.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
    ]
  }
};

const ExperienceTab = ({ isVisible, animationKey, openDetailPage }) => {
  const [experienceCarouselIndexes, setExperienceCarouselIndexes] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setExperienceCarouselIndexes((prev) => {
        const updated = { ...prev };
        for (let id in updated) {
          const images = experienceData[id]?.images || [];
          updated[id] = (updated[id] + 1) % images.length;
        }
        return updated;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white text-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id, index) => (
          <motion.div 
            key={`exp-${id}-${animationKey}`} 
            className="card bg-base-100 w-64 shadow-sm cursor-pointer"
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
          >
            <figure className="relative overflow-hidden">
              <motion.img
                src={experienceData[id].images[experienceCarouselIndexes[id]]}
                alt={`Experience ${id}`}
                className="w-full h-32 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Label/Badge di pojok kanan atas gambar */}
              <div className={`absolute top-2 right-2 rounded-lg ${experienceData[id].labelColor} text-gray-100 px-2 py-1 text-xs font-bold shadow-lg z-10`}>
                {experienceData[id].label}
              </div>
            </figure>
            <div className="card-body bg-gray-100 dark:bg-[#1C1B1B] text-black dark:text-white text-sm p-4">
              <h2 className="card-title text-base line-clamp-2">
                {experienceData[id].title}
              </h2>
              <p className="text-xs text-gray-400 font-semibold">{experienceData[id].company}</p>
              <p className="text-xs text-gray-950 dark:text-gray-300">{experienceData[id].period}</p>
              <div className="card-actions font-semibold justify-end">
                <motion.button 
                  className="bg-[#1C1B1B] hover:bg-[#030202] dark:bg-[#030202] dark:hover:bg-gray-950 rounded-full px-3 py-1 text-white transition-colors duration-200"
                  onClick={() => openDetailPage('experience', id)}
                  whileHover={{ 
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { experienceData };
export default ExperienceTab;