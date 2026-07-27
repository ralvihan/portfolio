import Button from "./Button";

export default function Hero() {
  return (
    <section id="home" className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-10 sm:pb-16 flex flex-col items-center text-center">
      <p className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-accent)] mb-4">
        status: available for internship
      </p>
      <h1 className="font-[var(--font-display)] text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] md:leading-[1.05] max-w-3xl">
        Full-Stack Developer
      </h1>
      <p className="mt-2 font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)]">
        Turning Ideas into Full Stack Solutions
      </p>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[var(--color-muted)] max-w-xl">
        Informatics Engineering student focused on full-stack web development —
        from diagnostic systems to interactive 3D experiences.
      </p>
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <Button to="/projects">view_projects()</Button>
        <Button to="/contact" variant="outline">say_hello()</Button>
      </div>
    </section>
  );
}