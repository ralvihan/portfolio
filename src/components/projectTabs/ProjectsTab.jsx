import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projectData = {
  1: {
    title: "Sentiment Analysis of YouTube App Reviews on Google Play Store using Machine Learning: A Comparative Study of SVM, Logistic Regression, XGBoost, and CatBoost",
    shortDescription: "Python",
    description: `Proyek ini bertujuan menganalisis sentimen ulasan pengguna aplikasi YouTube di Google Play Store menggunakan machine learning. Karena banyaknya data, digunakan pendekatan otomatis untuk mengelompokkan komentar menjadi positif, negatif, atau netral.
    
    **Algoritma yang Dibandingkan:**
    Empat algoritma dibandingkan performanya, yaitu SVM, Logistic Regression, XGBoost, dan CatBoost, untuk menentukan metode terbaik dalam klasifikasi sentimen. Hasil penelitian menunjukkan bahwa metode **XGBoost** memberikan akurasi terbaik dalam mengklasifikasikan sentimen ulasan pengguna.

    **Peran dari Proyek ini:**
    Setiap anggota memiliki peran masing-masing dalam mengerjakan proyek ini, diantaranya:

    **1. Raihan Alvian Nuryansyah (Saya):**
    - Bertanggung jawab dalam pembuatan code program untuk scraping data, preprocessing, ekstraksi fitur TF-IDF, pelatihan model machine learning, serta evaluasi hasil menggunakan Python dan Google Colab.
    - Mendesain dan menyusun poster ilmiah, termasuk pemilihan elemen visual (diagram, word cloud, grafik), layout akademik, dan struktur narasi yang informatif.

    **Acmad Sandy Wijaya:**
    - Mencari dan menganalisis berbagai referensi jurnal serta artikel ilmiah yang berkaitan dengan metode sentiment analysis.
    - Berperan dalam pengembangan ide analisis, pengolahan data, dan kontribusi dalam penulisan deskripsi metodologi.

    **Yuni Ramawati:**
    - Membantu dalam perumusan metodologi penelitian, penyusunan tujuan, serta validasi isi poster agar sesuai dengan kaidah akademik.
    - Melakukan evaluasi terhadap hasil akhir untuk memastikan kesesuaian antara hasil analisis dan visualisasi data.
    
    **Tools yang digunakan:**
    - Google Colab: untuk penulisan dan eksekusi kode Python berbasis cloud.
    - Python Libraries: nltk, sastrawi, scikit-learn, wordcloud, pandas, matplotlib, seaborn – untuk scraping, preprocessing, visualisasi, dan evaluasi model.
    - Machine Learning Models: Support Vector Machine (SVM), Logistic Regression Extreme Gradient Boosting (XGBoost), Categorical Boosting (CatBoost).
    - TF-IDF Vectorizer: untuk ekstraksi fitur dari teks ulasan.
    - Google PlayStore: untuk pengambilan data ulasan pengguna YouTube.
    - Canva: untuk pembuatan dan penyusunan poster ilmiah dengan desain yang menarik dan informatif.`,
    images: [
      "/assets/projects/sentiment/img2.png",
      "/assets/projects/sentiment/poster.png",
      "/assets/projects/sentiment/img1.png",
      "/assets/projects/sentiment/img3.png",
      "/assets/projects/sentiment/img4.png",
      "assets/projects/sentiment/img5.png",
      "/assets/projects/sentiment/img6.png",
      "/assets/projects/sentiment/img7.png"
    ]
  },
  2: {
    title: "Development of an Interactive ChatBot with GUI and Voice Using Python-Based NLP and Manually Defined Response Logic",
    shortDescription: "Python",
    description: `Proyek ini merupakan pengembangan sistem Artificial Intelligence berbasis Natural Language Processing (NLP) menggunakan bahasa Python. Proyek ini dirancang untuk menghadirkan pengalaman percakapan interaktif dalam bentuk GUI chatbot yang mendukung teks dan suara, memberikan respons dinamis secara manual, serta menyediakan reaksi seperti emoji, tombol suka/tidak suka, dan fitur salin pesan.
    
    **Tools yang digunakan:**
    - Python
    - Library Internal: difflib, datetime, threading, tkinter
    - Library Eksternal: SpeechRecognition, pyttsx3, pyperclip, Pillow
    - VSCode`,

    images: [
      "/assets/projects/chatbot-gui/chatbot1.png",
      "/assets/projects/chatbot-gui/chatbot2.png",
      "/assets/projects/chatbot-gui/chatbot3.png",
      "/assets/projects/chatbot-gui/chatbot4.png"
    ]
  },
  3: {
    title: "Decision Support System - SAW Method",
    shortDescription: "Python",
    description: `Proyek ini bertujuan untuk membangun sebuah Sistem Pendukung Keputusan (SPK) berbasis metode SAW (Simple Additive Weighting) yang dapat membantu pengguna dalam menilai dan menentukan alternatif terbaik berdasarkan kriteria dan bobot tertentu. Aplikasi ini dilengkapi dengan antarmuka grafis (GUI) menggunakan Tkinter, memungkinkan interaksi pengguna yang intuitif dan efisien.
Fitur yang dikembangkan mencakup:
1. Input data alternatif dan kriteria (benefit/cost)
2. Perhitungan nilai menggunakan metode SAW
3. Visualisasi hasil perhitungan dalam bentuk grafik
4. Analisis sensitivitas terhadap perubahan bobot kriteria
5. Ekspor hasil perhitungan ke file .csv

**Tools yang digunakan:**
- Python
- Tkinter
- Library Eksternal: Pandas, NumPy, Matplotlib, Seaborn, Datetime, os, csv`,
    images: [
      "/assets/projects/saw/saw1.png",
      "/assets/projects/saw/saw2.png",
      "/assets/projects/saw/saw3.png",
      "/assets/projects/saw/saw4.png",
      "/assets/projects/saw/saw5.png",
      "/assets/projects/saw/saw6.png",
      "/assets/projects/saw/saw7.png"
    ]
  },
  4: {
    title: "Real-Time Indonesian License Plate Detection with OpenCV and Visualization",
    shortDescription: "Python",
    description: `Proyek ini dikembangkan menggunakan Python dengan pustaka utama OpenCV untuk deteksi plat nomor kendaraan Indonesia secara real-time dan Matplotlib untuk visualisasi. Sistem memanfaatkan Haar Cascade Classifier melalui file haarcascade_indonesian_plate_number.xml untuk mengenali plat nomor dari video yang ditangkap oleh kamera/webcam. Selama 15 detik pertama, sistem mencatat jumlah deteksi per frame dan menampilkannya dalam bentuk grafik. Setelahnya, deteksi tetap berjalan hingga dihentikan. Proyek ini juga menggunakan pustaka tambahan seperti numpy dan time untuk mendukung proses.
    
    **Tools yang digunakan:**
    - Python
    - Library: OpenCV, Matplotlib, NumPy, Time
    - Classifier: haarcascade_indonesian_plate_number.xml
    - Webcam
    - VSCode`,
    images: [
      "/assets/projects/plate/plate1.png",
      "/assets/projects/plate/plate2.png"
    ]
  },
  5: {
    title: "Face, Eye, and Smile Detection using Haar Cascade in Python",
    shortDescription: "Python",
    description: `Mengembangkan sebuah proyek sederhana berbasis Python menggunakan OpenCV untuk melakukan deteksi wajah, mata, dan senyuman secara real-time melalui kamera. Proyek ini terdiri dari beberapa variasi program, seperti deteksi wajah saja, deteksi wajah dengan mata, deteksi wajah dengan senyum, hingga deteksi wajah lengkap dengan mata dan senyum. Selain itu, juga membuat visualisasi grafik untuk menunjukkan jumlah deteksi secara real-time selama 15 detik. Tujuan dari proyek ini adalah untuk memahami dan menerapkan konsep computer vision dasar dengan pemanfaatan algoritma Haar Cascade Classifier.
    
    **Tools yang digunakan:**
    - Python
    - Library: OpenCV, Numpy, Matplotlib, Time
    - Webcam
    - VSCode`,
    images: [
      "/assets/projects/face-detection/figure.png",
      "/assets/projects/face-detection/eyes_smile.png",
      "/assets/projects/face-detection/eyes.png",
      "/assets/projects/face-detection/face.png",
      "/assets/projects/face-detection/smile.png",
    ]
  },
  6: {
    title: "Web portfolio",
    shortDescription: "Python",
    description: "Deskripsi lengkap untuk project keenam. Aplikasi mobile-first dengan cross-platform compatibility dan real-time synchronization capabilities.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    ]
  },
  7: {
    title: "Image Classification: Messy vs Clean Room using TensorFlow & Keras",
    shortDescription: "Python",
    description: `Membangun model klasifikasi gambar menggunakan CNN untuk membedakan kondisi kamar yang rapi (clean) dan berantakan (messy). Model dilatih menggunakan dataset dari Dicoding di Google Colab, dengan augmentasi gambar untuk meningkatkan performa. Model mencapai akurasi validasi 92% dan mampu mengklasifikasikan gambar baru dengan hasil memuaskan.
    
    **Tools yang digunakan:**
    - Python
    - TensorFlow & Keras
    - Google Colab
    - CNN (Convolutional Neural Network)
    - Dataset dari Dicoding`,
    images: [
      "/assets/projects/classification-messy-clean/messy-clean-image6.png",
      "/assets/projects/classification-messy-clean/messy-clean-image7.png",
      "/assets/projects/classification-messy-clean/messy-clean-image1.png",
      "/assets/projects/classification-messy-clean/messy-clean-image2.png",
      "/assets/projects/classification-messy-clean/messy-clean-image3.png",
      "/assets/projects/classification-messy-clean/messy-clean-image4.png",
      "/assets/projects/classification-messy-clean/messy-clean-image5.png",
    ]
  },
  8: {
    title: "Multi-Class Image Classification: Rock, Paper, Scissors using TensorFlow",
    shortDescription: "Python",
    description: `Mengembangkan model deep learning berbasis CNN untuk mengenali gesture tangan (batu, kertas, gunting) dari gambar secara otomatis. Menggunakan dataset GitHub dan augmentasi gambar agar model tidak overfitting. Model berhasil mencapai akurasi validasi di atas 95% dan mampu mengenali gesture dari gambar luar dataset.
    
    **Tools yang digunakan:**
    - Python
    - TensorFlow & Keras
    - ImageDataGenerator
    - Gooble Colab`,
    images: [
      
      "/assets/projects/classification-rock-paper-scissors/rps-image6.png",
      "/assets/projects/classification-rock-paper-scissors/rps-image7.png",
      "/assets/projects/classification-rock-paper-scissors/rps-image8.png",
      "/assets/projects/classification-rock-paper-scissors/rps-image1.png",
      "/assets/projects/classification-rock-paper-scissors/rps-image2.png",
      "/assets/projects/classification-rock-paper-scissors/rps-image3.png",
      "/assets/projects/classification-rock-paper-scissors/rps-image4.png",
      "/assets/projects/classification-rock-paper-scissors/rps-image5.png"
    ]
  },
  9: {
    title: "Binary Image Classifier: Dog vs Cat with TensorFlow",
    shortDescription: "Python",
    description: `Membuat model klasifikasi biner menggunakan CNN untuk membedakan gambar anjing dan kucing. Dataset disimpan di Google Drive dan dilatih di Google Colab. Model mencapai akurasi pelatihan di atas 90% dan disimpan dalam format .h5 untuk deployment lebih lanjut. Proyek ini menjadi fondasi pemahaman image classification dengan deep learning.
    
    **Tools yang digunakan:**
    - Python
    - TensorFlow & Keras
    - Google Drive
    - Matplotlib`,
    images: [
      "/assets/projects/classification-dog-cat/dc-image8.png",
      "/assets/projects/classification-dog-cat/dc-image9.png",
      "/assets/projects/classification-dog-cat/dc-image6.png",
      "/assets/projects/classification-dog-cat/dc-image1.png",
      "/assets/projects/classification-dog-cat/dc-image2.png",
      "/assets/projects/classification-dog-cat/dc-image3.png",
      "/assets/projects/classification-dog-cat/dc-image4.png",
      "/assets/projects/classification-dog-cat/dc-image5.png",
      "/assets/projects/classification-dog-cat/dc-image7.png",
    ]
  },
  10: {
    title: "Survival Prediction on Titanic Passengers using Machine Learning",
    shortDescription: "Python",
    description: "Deskripsi lengkap untuk project kesepuluh. Dashboard interaktif untuk visualisasi data dengan berbagai chart dan graph yang informatif.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
    ]
  },
  11: {
    title: "Smart Home IoT System",
    shortDescription: "C++",
    description: "Deskripsi lengkap untuk project kesebelas. Sistem IoT untuk smart home dengan kontrol otomatis perangkat elektronik dan monitoring real-time.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
    ]
  }
};

const ProjectsTab = ({ isVisible, animationKey, openDetailPage }) => {
  const [carouselIndexes, setCarouselIndexes] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndexes((prev) => {
        const updated = { ...prev };
        for (let id in updated) {
          const images = projectData[id]?.images || [];
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((id, index) => (
          <motion.div 
            key={`${id}-${animationKey}`} 
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
                src={projectData[id].images[carouselIndexes[id]]}
                alt={`Project ${id}`}
                className="w-full h-32 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </figure>
            <div className="card-body bg-[#2E073F] text-sm p-4">
              <h2 className="card-title text-base line-clamp-2">
                {projectData[id].title}
              </h2>
              <p className="line-clamp-3 text-ellipsis overflow-hidden break-words">{projectData[id].shortDescription}</p>
              <div className="card-actions font-semibold justify-end">
                <motion.button 
                  className="bg-sm rounded-full px-2 bg-[#542269]"
                  onClick={() => openDetailPage('project', id)}
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

export { projectData };
export default ProjectsTab;