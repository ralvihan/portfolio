const base = import.meta.env.BASE_URL;

export const education = [
  {
    slug: "smkn3depok",
    institution: "SMK Negeri 3 Depok",
    degree: "Teknik Komputer dan Jaringan",
    period: "2020 — 2023",
    logo: `${base}images/education/smkn3depok.png`,
    logoClass: "w-24 h-24 sm:w-28 sm:h-28",
    description: "Menempuh pendidikan menengah kejuruan dengan fokus pada jaringan komputer.",
  },
  {
    slug: "jgu",
    institution: "Universitas Global Jakarta",
    degree: "S1 Teknik Informatika",
    period: "2023 — Sekarang",
    logo: `${base}images/education/jgu.png`,
    logoClass: "w-32 h-32 sm:w-40 sm:h-40",
    description: "Melanjutkan studi S1 Teknik Informatika sambil aktif di berbagai kegiatan kampus.",
  },
];