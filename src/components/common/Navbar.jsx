import { useEffect, useState } from "react";

const Navbar = () => {
    const NavItem = ["Home", "About Me", "Projects", "Contact"];
    const [activeSection, setActiveSection] = useState("Home");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // ✅ state burger menu

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <div className="fixed w-full top-0 left-0 z-50 px-7 md:px-9 lg:px-8">
            <div
                className={`w-full rounded-b-3xl transition-all duration-500 ease-in-out ${
                    scrolled ? "py-0" : "py-2"
                } backdrop-blur-xl shadow-[0_4px_20px_#610094] bg-[#000000]`}
            >
                <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16">
                    {/* Logo */}
                    <div className="Logo flex items-center gap-2">
                        <img src="/white-logo.png" alt="Logo" className="w-12 h-12 transition-transform duration-500" />
                        <h1 className="text-2xl font-bold text-white">Portfolio</h1>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 md:gap-10 font-medium text-white">
                        {NavItem.map((item) => {
                            const id = item.replace(/\s+/g, "");
                            const isActive = activeSection === id;
                            return (
                                <li key={item}>
                                    <a
                                        href={`#${id}`}
                                        className={`px-0 py-0.5 rounded transition-all duration-200 hover:border-b-2 hover:border-[#916BBF] ${
                                            isActive ? "border-b-2 border-[#916BBF]" : ""
                                        }`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Burger menu (mobile only) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {/* Icon burger */}
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Dropdown menu for mobile */}
                {menuOpen && (
                    <ul className="md:hidden flex flex-col items-end gap-4 py-4 font-medium text-white ">
                        {NavItem.map((item) => {
                            const id = item.replace(/\s+/g, "");
                            const isActive = activeSection === id;
                            return (
                                <li key={item}>
                                    <a
                                        href={`#${id}`}
                                        onClick={() => setMenuOpen(false)}
                                        className={`px-4 py-1 rounded transition-all duration-200 hover:border-b-2 hover:border-[#916BBF] ${
                                            isActive ? "border-b-2 border-[#916BBF]" : ""
                                        }`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
