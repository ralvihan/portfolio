import { useState, useEffect } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        isVisible && (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#916BBF] text-white px-3 py-2 rounded-full shadow-lg hover:bg-[#4e1c63] transition-all"
        >
            ↑
        </button>
        )
    );
};

export default BackToTop;
