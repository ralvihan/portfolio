const base = import.meta.env.BASE_URL;

export const projects = [
  {
    index: "01",
    slug: "website-sekolah",
    title: "MTs Al-Mukhsin Website Profile School",
    period: "Bulan Tahun — Bulan Tahun", // TODO: ganti ke rentang pengerjaan asli
    description: "Official school website built for real-world use — from admissions info to academic content, optimized for performance and accessibility.",
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
    period: "Bulan Tahun — Bulan Tahun", // TODO: ganti ke rentang pengerjaan asli
    description: "Expert system web app using the Certainty Factor method, built with direct input from an eye specialist to model real diagnostic reasoning.",
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
    period: "Bulan Tahun — Bulan Tahun", // TODO: ganti ke rentang pengerjaan asli
    description: "A solo-developed first-person psychological horror game exploring the weight of verbal harassment and silence — three chapters, three endings.",
    stack: ["Godot 4.7", "GDScript"],
    detail: "A first-person psychological horror game developed solo in Godot 4.7. Structured as a prologue flashback followed by three chapters, closing with three distinct playable endings. The story centers on a fictional case of verbal harassment gone viral in a campus chat group, with player choices shaping the outcome.",
    images: [
      `${base}images/projects/silent-screen1.webp`,
    ],
  },
];