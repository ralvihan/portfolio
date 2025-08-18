import { motion } from "framer-motion";
import { useState } from "react";
import TiltedCard from "../components/common/TiltedCard";

const About = () => {
    const [showEducation, setShowEducation] = useState(false);

    return (
        <div className="about pt-28 pb-16 px-6 md:px-12 lg:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12 max-w-7xl mx-auto w-full py-8 lg:py-0">
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <TiltedCard
                imageSrc="./assets/profile-1.jpg"
                altText="Raihan Alvian - Photo"
                captionText="Raihan Alvian - Photo"
                containerHeight="250px"
                containerWidth="250px"
                imageHeight="250px"
                imageWidth="250px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                <p className="tilted-card-demo-text text-sm">
                    Raihan Alvian Nuryansyah
                </p>
                }
            />
            </div>

            <div className="flex-1 lg:text-left">
  <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-[#EEEEEE] transition-colors duration-300 mb-4 lg:mb-6">
    Hi, I'm Raihan Alvian Nuryansyah!
  </h1>
  <p className="text-sm sm:text-base text-black dark:text-[#EEEEEE] transition-colors duration-300 leading-relaxed mb-6 lg:mb-8">
    Saya merupakan mahasiswa aktif Semester 5 Program Studi Teknik
    Informatika di Jakarta Global University dengan ketertarikan dalam
    pengembangan website dan perangkat lunak. Saya menguasai beberapa
    bahasa pemrograman seperti{" "}
    <span className="bg-black text-white dark:bg-[#EEEEEE] dark:text-black px-1 py-0.5 rounded-lg transition-colors duration-300">
      Java, Python, dan C++,
    </span>{" "}
    serta memiliki kemampuan di bidang front-end development menggunakan{" "}
    <span className="bg-black text-white dark:bg-[#EEEEEE] dark:text-black px-1 py-0.5 rounded-lg transition-colors duration-300">
      HTML, CSS, JavaScript, React JS, dan Tailwind CSS.
    </span>{" "}
    Saya juga berpengalaman menggunakan{" "}
    <span className="bg-black text-white dark:bg-[#EEEEEE] dark:text-black px-1 py-0.5 rounded-lg transition-colors duration-300">
      MySQL
    </span>{" "}
    untuk pengelolaan basis data dalam proyek aplikasi. Aktif dalam
    organisasi kampus dan memiliki kemampuan komunikasi yang baik, saya
    mampu bekerja secara mandiri maupun dalam tim. Saya memiliki semangat
    belajar yang tinggi dan saat ini sedang mencari kesempatan magang untuk
    mengembangkan keterampilan teknis serta mendapatkan pengalaman di
    lingkungan profesional.
  </p>

            {/* Tombol CV + Education sejajar */}
            <div className="flex flex-wrap items-center gap-4">
                {/* Curriculum Vitae */}
                <motion.a
                href="./CV RAIHAN ALVIAN NURYANSYAH.pdf"
                download
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(128, 128, 128, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex items-center gap-2 bg-black dark:bg-white text-[#EEEEEE] dark:text-black px-4 py-2 rounded-lg w-fit transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                <svg
                    className="w-5 h-5 text-white dark:text-black transition-colors duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    fillRule="evenodd"
                    d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 15 15.375v-1.75A2.626 2.626 0 0 0 12.375 11H11Zm1 5v-3h.375a.626.626 0 0 1 .625.626v1.748a.625.625 0 0 1-.626.626H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z"
                    clipRule="evenodd"
                    />
                </svg>
                Curriculum Vitae
                </motion.a>

                
               {/* Buka Education */}
<button
  onClick={() => setShowEducation(true)}
  className="underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
>
  {"Riwayat Pendidikan >"}
</button>

{/* Modal Education */}
{showEducation && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 flex items-center justify-center bg-[#1C1B1B] bg-opacity-50 z-50"
    onClick={() => setShowEducation(false)} // Klik luar modal untuk close
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-[#030202] rounded-xl shadow-xl p-6 max-w-2xl w-full mx-4 relative"
      onClick={(e) => e.stopPropagation()} // biar klik dalam modal ga nutup
    >
      {/* Tombol close */}
      <button
        onClick={() => setShowEducation(false)}
        className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
      >
        ✕
      </button>

      {/* Isi Riwayat Pendidikan */}
      <h2 className="text-xl font-bold mb-4 text-black dark:text-[#EEEEEE] hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
        Riwayat Pendidikan
      </h2>
      <ul className="list-disc list-inside space-y-2 text-black dark:text-[#EEEEEE]">
        <li>SDN Mekarjaya 13 Depok (2010 - 2016)</li>
        <li>SMP PGRI Depok II Tengah (2017 - 2020)</li>
        <li>SMK Negeri 3 Depok - Teknik Komputer dan Jaringan (2020 - 2023)</li>
        <li>Jakarta Global University - Teknik Informatika (2023 - Sekarang)</li>
      </ul>
    </motion.div>
  </motion.div>
)} 

            </div>
            </div>
        </div>
        </div>
    );
};

export default About;
