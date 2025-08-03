import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const experienceData = {
  1: {
    title: "Entry Data",
    company: "PT. Ciptadra Softindo",
    period: "Januari 2022 - April 2022",
    description: "Mengembangkan aplikasi web menggunakan React.js dan implementasi responsive design dengan Tailwind CSS. Kolaborasi dengan tim backend untuk integrasi API dan optimasi performa aplikasi.\n\nBertanggung jawab dalam data entry dan validasi data untuk berbagai proyek client. Melakukan quality assurance untuk memastikan akurasi data yang diinput.\n\nMenggunakan tools seperti Excel, Google Sheets, dan database management systems. Bekerja dalam tim yang dinamis dengan deadline yang ketat.\n\nMengembangkan sistem tracking untuk monitoring progress pekerjaan. Melakukan backup dan maintenance data secara berkala untuk memastikan integritas informasi.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
    ]
  },
  2: {
    title: "Daily Worker Shopee",
    company: "Various Clients",
    period: "September 2023 - Januari 2024",
    description: "Membuat website company profile dan e-commerce menggunakan WordPress dan custom HTML/CSS. Menangani lebih dari 10 proyek dengan tingkat kepuasan klien 100%.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
    ]
  },
  3: {
    title: "Koordinator Abdimas",
    company: "Jakarta Global University",
    period: "Desember 2023",
    description: "Memberikan dukungan teknis untuk sistem komputer dan jaringan. Melakukan maintenance hardware dan software, serta training penggunaan aplikasi untuk staff.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
    ]
  },
  4: {
    title: "Media & Communication",
    company: "English Club",
    period: "November 2024 - Sekarang",
    description: "Membantu tim design dalam pembuatan wireframe dan prototype menggunakan Figma. Melakukan user research dan testing untuk meningkatkan user experience aplikasi mobile.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
    ]
  },
  5: {
    title: "Pengembangan Sumber Daya Anggota (PSDA)",
    company: "Himpunan Mahasiswa Teknik Informatika",
    period: "November 2024 - Sekarang",
    description: "Mempelajari pengelolaan database MySQL dan PostgreSQL. Melakukan backup data, optimasi query, dan monitoring performa database untuk berbagai aplikasi client.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
    ]
  },
  6: {
    title: "Liaison Officer PBAK",
    company: "Jakarta Global University",
    period: "September 2024",
    description: "Mengajar dasar-dasar pemrograman Python dan Java kepada mahasiswa tingkat awal. Membuat materi pembelajaran dan mentoring project akhir mahasiswa.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
    ]
  },
  7: {
    title: "Liaison Officer Wisuda",
    company: "Jakarta Global University",
    period: "Oktober 2024",
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
    period: "Oktober 2024",
    description: "Mengajar dasar-dasar pemrograman Python dan Java kepada mahasiswa tingkat awal. Membuat materi pembelajaran dan mentoring project akhir mahasiswa.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
    ]
  },
  9: {
    title: "Publikasi, Dekorasi, dan Dokumentasi (PDD)",
    company: "HIMATIF - Educare Himatif Berbagi",
    period: "Oktober 2024",
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
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id, index) => (
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
            <figure>
              <motion.img
                src={experienceData[id].images[experienceCarouselIndexes[id]]}
                alt={`Experience ${id}`}
                className="w-full h-32 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </figure>
            <div className="card-body bg-[#2E073F] text-sm p-4">
              <h2 className="card-title text-base line-clamp-2">
                {experienceData[id].title}
              </h2>
              <p className="text-xs text-[#916BBF] font-semibold">{experienceData[id].company}</p>
              <p className="text-xs text-gray-300">{experienceData[id].period}</p>
              <div className="card-actions font-semibold justify-end">
                <motion.button 
                  className="bg-sm rounded-full px-2 bg-[#916BBF]"
                  onClick={() => openDetailPage('experience', id)}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(145, 107, 191, 0.5)"
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