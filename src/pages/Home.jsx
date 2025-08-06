import { WavyBackground } from "../components/ui/wavy-background";
import TextPressure from "@/components/ui/TextPressure";

const Home = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20">
      {/* Wave - di belakang semua */}
      <div className="absolute inset-0 z-0">
        <WavyBackground />
      </div>

      {/* Text di tengah-tengah layar */}
      <div className="relative z-10 flex items-center justify-center text-black dark:text-white h-full w-full">
        <div style={{ position: 'relative', height: 'auto', width: '100%' }}>
          <TextPressure
            text="PORTFOLIO!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="text-black dark:text-white"
            strokeColor="#ff0000"
            minFontSize={64} // ukuran lebih besar
            maxFontSize={120} // kamu bisa tambahkan ini kalau komponen TextPressure support
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
