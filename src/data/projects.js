const base = import.meta.env.BASE_URL;

export const projects = [
  {
    index: "01",
    slug: "profile-mtsalmukhsin",
    title: "MTs Al-Mukhsin Website Profile School",
    period: "September 2025 — Februari 2026",
    stack: ["Laravel", "Inertia.js", "React", "Tailwind", "MySQL"],
    detail: "Built as the official website for MTs Al-Mukhsin, covering school profile, admissions, and academic information. Focused on Lighthouse performance optimization — WebP image conversion, clean Form Request and Resource classes on the Laravel side.",
    images: [
      `${base}images/projects/mtsalmukhsin-profile1.webp`,
      `${base}images/projects/mtsalmukhsin-profile2.webp`,
    ],
  },
  {
    index: "02",
    slug: "sipamat",
    title: "SIPAMAT — Eye Infection Diagnosis",
    period: "Juli 2026",
    stack: ["Laravel", "Inertia.js", "React", "Tailwind", "MySQL"],
    detail: ["SIPAMAT adalah aplikasi web sistem pakar untuk membantu deteksi dini infeksi mata menggunakan metode Certainty Factor (CF). Pasien memilih gejala yang dialami, lalu sistem menghitung tingkat keyakinan (confidence value) untuk 4 jenis penyakit — Ulkus Kornea Bakterial, Ulkus Kornea Fungal, Konjungtivitis Bakterial, dan Infeksi Mata Akibat Lensa Kontak — berdasarkan basis pengetahuan (knowledge base) hasil wawancara dengan analis laboratorium mata berpengalaman, mencakup 15 gejala.", 
    "Dibangun dengan Laravel 11 sebagai backend dan React (Inertia.js) sebagai frontend, dilengkapi fitur autentikasi lengkap, riwayat diagnosis dengan ekspor PDF, serta panel admin untuk mengelola data penyakit, gejala, dan basis pengetahuan CF. Sistem ini mendukung dua peran pengguna (admin dan pasien) dengan middleware terpisah untuk masing-masing akses.",
    ],
    images: [
      `${base}images/projects/sipamat1.webp`,
      `${base}images/projects/sipamat2.webp`,
      `${base}images/projects/sipamat3.webp`,
    ],
  },
  {
  index: "03",
  slug: "silent-screen",
  title: "Silent Screen",
  period: "Juli 2026 - Sekarang",
  stack: ["Godot 4.7", "GDScript"],
  detail: [
    "Silent Screen adalah game horor psikologis first-person yang dikembangkan secara solo (solo developer) menggunakan Godot 4.7, mengangkat isu pelecehan seksual di lingkungan kampus sebagai inti ceritanya. Game ini dibangun dengan struktur naratif yang terdiri dari prolog berupa flashback, dilanjutkan tiga chapter utama yang membangun ketegangan psikologis secara bertahap. Pemain berperan sebagai karakter utama yang menjadi saksi dari sebuah kasus pelecehan yang menimpa mahasiswi lain di lingkungan kampus, dan dihadapkan pada dilema moral tentang bagaimana harus bersikap.",
    "Yang membuat game ini berbeda adalah sistem percabangan cerita yang sepenuhnya ditentukan oleh pilihan pemain sepanjang permainan, bermuara pada tiga ending yang berbeda: memilih untuk diam dan tidak melakukan apa-apa, ikut terlibat dan melakukan pelecehan terhadap korban, atau memilih untuk melaporkan pelaku ke pihak berwenang. Setiap pilihan membawa konsekuensi naratif dan emosional yang berbeda, dirancang untuk membuat pemain merefleksikan dampak dari sikap diam maupun keberpihakan dalam situasi nyata semacam ini.",
    "Selain aspek cerita, game ini juga menekankan atmosfer horor psikologis lewat elemen visual, suara, dan pacing yang dibangun manual — mulai dari desain level, scripting interaksi, hingga sistem branching ending — seluruhnya dikerjakan menggunakan GDScript.",
  ],
  images: [
    `${base}images/projects/silent-screen1.webp`,
    `${base}images/projects/silent-screen2.webp`,
    `${base}images/projects/silent-screen3.webp`,
    `${base}images/projects/silent-screen4.webp`,
  ],
},
{
  index: "04",
  slug: "sis-mtsalmukhsin",
  title: "SISMA (Sistem Informasi Sekolah MTs Al-Mukhsin)",
  period: "September 2025 - Februari 2026",
  stack: ["Laravel", "Inertia.js", "React", "Tailwind", "MySQL"],
  detail: [
    "Silent Screen adalah game horor psikologis first-person yang dikembangkan secara solo (solo developer) menggunakan Godot 4.7, mengangkat isu pelecehan seksual di lingkungan kampus sebagai inti ceritanya. Game ini dibangun dengan struktur naratif yang terdiri dari prolog berupa flashback, dilanjutkan tiga chapter utama yang membangun ketegangan psikologis secara bertahap. Pemain berperan sebagai karakter utama yang menjadi saksi dari sebuah kasus pelecehan yang menimpa mahasiswi lain di lingkungan kampus, dan dihadapkan pada dilema moral tentang bagaimana harus bersikap.",
    "Yang membuat game ini berbeda adalah sistem percabangan cerita yang sepenuhnya ditentukan oleh pilihan pemain sepanjang permainan, bermuara pada tiga ending yang berbeda: memilih untuk diam dan tidak melakukan apa-apa, ikut terlibat dan melakukan pelecehan terhadap korban, atau memilih untuk melaporkan pelaku ke pihak berwenang. Setiap pilihan membawa konsekuensi naratif dan emosional yang berbeda, dirancang untuk membuat pemain merefleksikan dampak dari sikap diam maupun keberpihakan dalam situasi nyata semacam ini.",
    "Selain aspek cerita, game ini juga menekankan atmosfer horor psikologis lewat elemen visual, suara, dan pacing yang dibangun manual — mulai dari desain level, scripting interaksi, hingga sistem branching ending — seluruhnya dikerjakan menggunakan GDScript.",
  ],
  images: [
    `${base}images/projects/sisma1.webp`,
    `${base}images/projects/sisma2.webp`,
    `${base}images/projects/sisma3.webp`,
    `${base}images/projects/sisma4.webp`,
  ],
},
{
    index: "05",
    slug: "portfolio",
    title: "Personal Portfolio Website",
    period: "Juli 2026 - Sekarang",
    stack: ["React", "Tailwind  "],
    detail: [
      "Website portfolio pribadi yang dibangun menggunakan React dan Vite, menampilkan showcase project, tech stack, riwayat pendidikan, hingga kontak dalam satu halaman single-page. Setiap section (home, techstack, projects, about, contact) tersinkronisasi dengan URL menggunakan IntersectionObserver, sehingga URL berubah otomatis mengikuti section yang sedang dilihat tanpa reload halaman.",
      "Struktur routing memakai React Router dengan halaman detail terpisah untuk setiap project dan riwayat pendidikan/kegiatan, lengkap dengan image slider dan highlight kata kunci otomatis pada deskripsi. Seluruh tampilan didesain responsif dan di-styling penuh menggunakan Tailwind CSS.",
    ],
    images: [
      `${base}images/projects/portfolio1.webp`,
    ],
  },
];