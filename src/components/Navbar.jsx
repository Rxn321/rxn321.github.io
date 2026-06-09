import { AiFillGithub, AiOutlineStock } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getTheme } from "../styles/theme";

export default function Navbar({ darkMode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const theme = getTheme(darkMode);

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex justify-center w-full">
      <div
        className={`relative flex items-center justify-between
        rounded-full backdrop-blur-xl
        border px-6 md:px-10 py-4 md:py-6
        w-[95%] max-w-4xl transition-colors duration-500
        ${theme.ui.bg} ${theme.ui.border} ${theme.text.main}`}
      >

        {/* Left icon */}
        <div className={`flex items-center gap-6 ${theme.text.muted}`}>
          <a href="https://portfolio-optimization-ryanliu.streamlit.app/" target="_blank" rel="noopener noreferrer">
            <AiOutlineStock size={22} />
          </a>
        </div>

        {/* Center NAV */}
        <div className={`hidden lg:flex absolute left-1/2 -translate-x-3/5 gap-12 text-lg ${theme.text.muted}`}>
          <NavItem active={active === "hero"} theme={theme} id="hero" label="Home" />
          <NavItem active={active === "about"} theme={theme} id="about" label="About" />
          <NavItem active={active === "projects"} theme={theme} id="projects" label="Projects" />
          <NavItem active={active === "contact"} theme={theme} id="contact" label="Contact" />
        </div>

        {/* Right icons */}
        <div className={`flex items-center gap-5 ${theme.text.muted}`}>
          <a href="https://github.com/Rxn321">
            <AiFillGithub size={22} />
          </a>

          <a href="https://www.linkedin.com/in/ryantyl/">
            <FaLinkedin size={22} />
          </a>

          <a href="mailto:ryantyl@gmail.com">
            <MdEmail size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}

/* Reusable Nav Item */
function NavItem({ active, theme, id, label }) {
  return (
    <div className="relative w-20 text-center">
      {active && (
        <motion.div
          layoutId="nav-circle"
          className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${theme.ui.dot} shadow-[0_0_10px_rgba(255,255,255,0.7)] animate-pulse`}
        />
      )}

      <a href={`#${id}`} className="hover:opacity-100 opacity-80 transition">
        {label}
      </a>
    </div>
  );
}