import RotatingText from "@/components/ui/RotatingText";
import { WavyBackground } from "../components/ui/wavy-background";

const Home = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20">
      {/* Wave - di belakang semua */}
      <div className="absolute inset-0 z-0">
        <WavyBackground />
      </div>

        
      {/* Konten Teks - di depan */}
      <div className="relative z-10 text-center max-w-7xl mx-auto">

        <div className="flex items-center justify-center">
          <div className="text-black dark:text-white rounded-lg px-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Portfolio
          </div>
          <RotatingText
            texts={["Raihan", "Alvian", "Nuryansyah", "Student"]}
            mainClassName="bg-black dark:bg-white text-white dark:text-black rounded-lg px-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <p className="font-bold text-black dark:text-white transition-colors duration-300 mb-4 lg:mb-6">
          
        </p>
        
      </div>
    </section>
  );
};

export default Home;
