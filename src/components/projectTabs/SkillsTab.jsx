import { motion } from "framer-motion";

const SkillsTab = ({ isVisible, animationKey }) => {
    return (
        <div className="text-gray-900 dark:text-gray-100 text-lg">
        <div className="flex flex-col items-center justify-center h-full space-y-8">
            
            {/* Hard Skills Section */}
            <motion.div 
            key={`hard-skills-${animationKey}`}
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >
            <motion.h2 
                className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Hard Skills
            </motion.h2>
            
            <motion.div 
                className="flex flex-wrap justify-center gap-3 mb-4"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {[
                { src: "./assets/icons/HTML.svg", alt: "HTML" },
                { src: "./assets/icons/CSS.svg", alt: "CSS" },
                { src: "./assets/icons/JavaScript.svg", alt: "JavaScript" },
                { src: "./assets/icons/Java-Dark.svg", alt: "Java" },
                { src: "./assets/icons/Python.svg", alt: "Python" },
                { src: "./assets/icons/CPP.svg", alt: "C++" },
                { src: "./assets/icons/ReactJS.svg", alt: "React JS" },
                { src: "./assets/icons/TailwindCSS.svg", alt: "Tailwind" },
                { src: "./assets/icons/MySQL.svg", alt: "MySQL" },
                { src: "./assets/icons/Wordpress.svg", alt: "WordPress" },
                { src: "./assets/icons/Figma.svg", alt: "Figma" },
                { src: "./assets/icons/VSCode.svg", alt: "VS Code" },
                { src: "./assets/icons/Github.svg", alt: "GitHub" },
                { src: "./assets/icons/Office.svg", alt: "MS Office" },
                { src: "./assets/icons/Canva.svg", alt: "Canva" }
                ].map((icon, index) => (
                <motion.img 
                    key={`${icon.alt}-${animationKey}`}
                    src={icon.src} 
                    alt={icon.alt} 
                    className="w-12 h-12 cursor-pointer filter dark:brightness-110 dark:contrast-110"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                    whileHover={{ 
                    scale: 1.3,
                    rotate: 360,
                    filter: "drop-shadow(0 0 15px rgba(107, 114, 128, 0.5))"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + (index * 0.05),
                    ease: "easeOut"
                    }}
                />
                ))}
            </motion.div>
            
            <motion.div 
                className="flex flex-wrap justify-center gap-2 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                {[
                "HTML", "CSS", "JavaScript", "Java", "Python", "C++", "React JS", 
                "Tailwind CSS", "MySQL", "WordPress", "Figma", "VS Code", "GitHub", "MS Office", "Canva"
                ].map((skill, index) => (
                <motion.span 
                    key={`${skill}-${animationKey}`}
                    className="bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-500 dark:hover:bg-gray-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                    duration: 0.4, 
                    delay: 0.9 + (index * 0.05),
                    ease: "easeOut"
                    }}
                >
                    {skill}
                </motion.span>
                ))}
            </motion.div>
            </motion.div>

            {/* Soft Skills Section */}
            <motion.div 
            key={`soft-skills-${animationKey}`}
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
            <motion.h2 
                className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1.3 }}
            >
                Soft Skills
            </motion.h2>
            <motion.div 
                className="flex flex-wrap justify-center gap-2 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
            >
                {[
                "Problem Solving", "Team Work", "Communication", "Critical Thinking",
                "Time Management", "Adaptability", "Leadership", "Creative Thinking"
                ].map((skill, index) => (
                <motion.span 
                    key={`${skill}-${animationKey}`}
                    className="bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-500 dark:hover:bg-gray-500"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ 
                    duration: 0.4, 
                    delay: 1.5 + (index * 0.05),
                    ease: "easeOut"
                    }}
                >
                    {skill}
                </motion.span>
                ))}
            </motion.div>
            </motion.div>
        </div>
        </div>
    );
};

export default SkillsTab;