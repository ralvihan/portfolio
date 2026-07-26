const projects = [
  {
    index: "01",
    slug: "website-sekolah",
    title: "MTs Al-Mukhsin Website",
    description: "Official school website built for real-world use — from admissions info to academic content, optimized for performance and accessibility.",
    stack: ["Laravel", "Inertia.js", "React", "Tailwind"],
  },
  {
    index: "02",
    slug: "sipamat",
    title: "SIPAMAT — Eye Infection Diagnosis",
    description: "Expert system web app using the Certainty Factor method, built with direct input from an eye specialist to model real diagnostic reasoning.",
    stack: ["Laravel", "Inertia.js", "React", "MySQL"],
  },
  {
    index: "03",
    slug: "silent-screen",
    title: "Silent Screen",
    description: "A solo-developed first-person psychological horror game exploring the weight of verbal harassment and silence — three chapters, three endings.",
    stack: ["Godot 4.7", "GDScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-[var(--color-line)]">
      <h2 className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)] mb-8 sm:mb-12">
        02 / selected_projects
      </h2>
      <div className="space-y-px">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group py-6 sm:py-8 border-b border-[var(--color-line)] grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-3 sm:gap-6 items-start"
          >
            <span className="font-[var(--font-mono)] text-[var(--color-muted)]">
              {project.index}
            </span>
            <div>
              <h3 className="font-[var(--font-display)] text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[var(--color-muted)] max-w-lg">
                {project.description}
              </p>
            </div>
            <div className="flex md:flex-col gap-2 flex-wrap">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-[var(--font-mono)] text-xs px-2 py-1 bg-[var(--color-accent-soft)] text-[var(--color-accent)] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}