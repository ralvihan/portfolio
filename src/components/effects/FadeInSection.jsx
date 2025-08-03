import { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children, className = "", id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkIfVisible = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const isInViewport =
        rect.top < window.innerHeight && rect.bottom > 0;

      setIsVisible(isInViewport); // 🔁 akan true/false terus saat scroll
    };

    checkIfVisible();
    window.addEventListener("scroll", checkIfVisible);
    window.addEventListener("resize", checkIfVisible);

    return () => {
      window.removeEventListener("scroll", checkIfVisible);
      window.removeEventListener("resize", checkIfVisible);
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-1000 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default FadeInSection;
