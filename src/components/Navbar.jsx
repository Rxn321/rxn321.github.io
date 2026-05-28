import {AiFillGithub, AiOutlineStock} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {HiMenu, HiX} from "react-icons/hi";
import {useState, useEffect} from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  useEffect(() => {
  const sections = ["hero","about", "projects", "contact"];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

   return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center">
      <div
        className="relative flex items-center justify-between
        rounded-full bg-white/5 backdrop-blur-xl
        border border-white/10 px-6 md:px-10 py-4 md:py-6
        w-[95%] max-w-4xl"
      >
{/* Left icon */}
        <div className="hidden md:flex items-center text-white/70 gap-6">
          <AiOutlineStock size={22} />
        </div>

{/* Center NAV */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-12 text-lg text-white/90">

{/* Home */}
        <div className="relative w-20 text-center">
          {active === "hero" && (
            <motion.div
              layoutId="nav-circle"
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            /> 
          )}
          <a href="#hero" className="hover:text-white transition">
            Home
          </a>
        </div>

{/* About */}
        <div className="relative w-20 text-center">
          {active === "about" && (
            <motion.div
              layoutId="nav-circle"
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-200 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            /> 
          )}
          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </div>

{/* Projects */}
        <div className="relative w-24 text-center">
          {active === "projects" && (
            <motion.div
              layoutId="nav-circle"
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-200 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            />
          )}
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
        </div>

{/* Contact */}
        <div className="relative w-20 text-center">
          {active === "contact" && (
            <motion.div
              layoutId="nav-circle"
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-200 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            />
          )}
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>

{/* Right icons */}
      <div className="flex justify-center gap-6 pt-2">
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
);}
   {/*Update link to project*/}