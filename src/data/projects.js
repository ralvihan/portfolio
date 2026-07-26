const base = import.meta.env.BASE_URL;

export const projects = [
  {
    index: "01",
    slug: "website-sekolah",
    title: "MTs Al-Mukhsin Website Profile School",
    period: "September 2025 — Februari 2026",
    stack: ["Laravel", "Inertia.js", "React", "Tailwind"],
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
    stack: ["Laravel", "Inertia.js", "React", "MySQL"],
    detail: "An expert system that diagnoses eye infections using the Certainty Factor method. Involved direct interviews with an eye specialist to translate real diagnostic reasoning into the system's rule base. Includes admin panel, landing page, and a PHP/MySQL prototype phase.",
    images: [
      `${base}images/projects/sipamat1.webp`,
      `${base}images/projects/sipamat2.webp`,
      `${base}images/projects/sipamat3.webp`,
      `${base}images/projects/sipamat4.webp`,
      `${base}images/projects/sipamat5.webp`,
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
];