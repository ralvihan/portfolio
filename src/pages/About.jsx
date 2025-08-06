import { motion } from "framer-motion";
import { useState } from "react";
import TiltedCard from "../components/common/TiltedCard";
import Education from "./Education";

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

                    {/* Tombol Curriculum Vitae */}
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(128, 128, 128, 0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg w-fit transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
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

                        <a
                            href="./CV RAIHAN ALVIAN NURYANSYAH.pdf"
                            download
                            className="text-white dark:text-black font-semibold transition-colors duration-300 text-sm sm:text-base"
                        >
                            Curriculum Vitae
                        </a>
                    </motion.button>
                </div>
                <div className="flex-1 lg:text-left">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white transition-colors duration-300 mb-4 lg:mb-6">
                        Hi, I'm Raihan Alvian Nuryansyah!
                    </h1>
                    <p className="text-sm sm:text-base text-black dark:text-gray-300 transition-colors duration-300 leading-relaxed mb-6 lg:mb-8">
                        Saya merupakan mahasiswa aktif Semester 5 Program Studi Teknik Informatika di Jakarta Global University dengan ketertarikan dalam pengembangan website dan perangkat lunak.
                        Saya menguasai beberapa bahasa pemrograman seperti {" "}
                        <span className="bg-gray-300 dark:bg-gray-600 px-1 py-0.5 rounded-sm transition-colors duration-300">
                            Java, Python, dan C++,
                        </span>{" "}
                        serta memiliki kemampuan di bidang front-end development menggunakan {" "}
                        <span className="bg-gray-300 dark:bg-gray-600 px-1 py-0.5 rounded-sm transition-colors duration-300">
                            HTML, CSS, JavaScript, React JS, dan Tailwind CSS.
                        </span>{" "}
                        Saya juga berpengalaman menggunakan {" "}
                        <span className="bg-gray-300 dark:bg-gray-600 px-1 py-0.5 rounded-sm transition-colors duration-300">
                            MySQL
                        </span>{" "}
                        untuk pengelolaan basis data dalam proyek aplikasi. Aktif dalam organisasi kampus dan memiliki kemampuan komunikasi yang baik, saya mampu bekerja secara mandiri maupun dalam tim.
                        Saya memiliki semangat belajar yang tinggi dan saat ini sedang mencari kesempatan magang untuk mengembangkan keterampilan teknis serta mendapatkan pengalaman di lingkungan profesional.
                    </p>

                    <div className="flex items-center text-sm text-black dark:text-white hover:opacity-80 transition cursor-pointer mt-4"
                        onClick={() => setShowEducation(!showEducation)}
                    >
                        <span className="text-sm mr-1">{showEducation ? "\u2193" : "\u2192"}</span>
                        <span>{showEducation ? "Sembunyikan Education" : "Tampilkan Education"}</span>
                    </div>


                    {showEducation && (
                        <div className="mt-4 text-black dark:text-white font-semibold">
                            <Education />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
