import { motion } from "framer-motion";
import TiltedCard from "../components/common/TiltedCard";

const About = () => {
    return (
        <div className="about min-h-screen pt-20 px-6 md:px-12 lg:px-20 flex items-center justify-center"> {/* padding global */}
        <div className="hero-content flex-col lg:flex-row-reverse items-center gap-12">
            <TiltedCard
                imageSrc="./assets/her.jpg"
                altText="Raihan Alvian - Photo"
                captionText="Raihan Alvian - Photo"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <p className="tilted-card-demo-text">
                    Raihan Alvian Nuryansyah
                    </p>
                }
                />
            <div>
            <h1 className="text-4xl font-bold">Hi, I'm Raihan Alvian Nuryansyah!</h1>
            <p className="py-6">
                Saya merupakan mahasiswa aktif Semester 5 Program Studi Teknik Informatika di Jakarta Global University dengan ketertarikan dalam pengembangan website dan perangkat lunak.
                Saya menguasai beberapa bahasa pemrograman seperti {" "}<span className="bg-[#542269] px-0.5 rounded-sm">Java, Python, dan C++,</span>{" "} serta memiliki kemampuan di bidang front-end development menggunakan {" "}<span className="bg-[#542269] px-0.5 rounded-sm">HTML, CSS, JavaScript, React JS, dan Tailwind CSS.</span>{" "}
                Saya juga berpengalaman menggunakan {" "}<span className="bg-[#542269] px-0.5 rounded-sm">MySQL</span>{" "}untuk pengelolaan basis data dalam proyek aplikasi. Aktif dalam organisasi kampus dan memiliki kemampuan komunikasi yang baik, saya mampu bekerja secara mandiri maupun dalam tim.
                Saya memiliki semangat belajar yang tinggi dan saat ini sedang mencari kesempatan magang untuk mengembangkan keterampilan teknis serta mendapatkan pengalaman di lingkungan profesional.
            </p>
            
            <div className="pt-14">
            <motion.button
                whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(145, 107, 191, 1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 bg-[#542269] text-white px-4 py-2 rounded-lg w-fit"
            >
                <svg
                className="w-[24px] h-[24px] text-white"
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
                href="/portfolio/CV RAIHAN ALVIAN NURYANSYAH.pdf"
                download
                className="text-white font-semibold"
                >
                Curriculum Vitae
                </a>
            </motion.button>
            </div>
            </div>
        </div>
        </div>
        
    );
};

export default About;