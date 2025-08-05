import { motion } from "framer-motion";

const CertificateTab = ({ isVisible, animationKey }) => {
  return (
    <div className="text-gray-900 dark:text-gray-100 text-lg space-y-6">
      <motion.h2
        key={`certificate-title-${animationKey}`}
        className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
      </motion.h2>

      <div className="carousel rounded-box w-64 border border-gray-200 dark:border-gray-700">
        <div className="carousel-item w-full">
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="w-full"
            alt="Certificate 1" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="w-full"
            alt="Certificate 2" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="w-full"
            alt="Certificate 3" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="w-full"
            alt="Certificate 4" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="w-full"
            alt="Certificate 5" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="w-full"
            alt="Certificate 6" />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="w-full"
            alt="Certificate 7" /> */}
        </div>
      </div>
    </div>
  );
};

export default CertificateTab;