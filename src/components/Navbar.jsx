import { AiFillGithub, AiOutlineStock } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { HiMenu, HiX } from "react-icons/hi"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar({ darkMode }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const textMain = darkMode ? "text-white/90" : "text-black"
  const textMuted = darkMode ? "text-white/70" : "text-black/60"
  const borderColor = darkMode ? "border-white/10" : "border-black/10"
  const bgColor = darkMode ? "bg-white/5" : "bg-black/5"
  const dotColor = darkMode ? "bg-white" : "bg-black"

  return (
    <nav className="flex justify-center w-full">
      <div
        className={`relative flex items-center justify-between
        rounded-full backdrop-blur-xl
        border border-white/10
        px-6 md:px-10 py-4 md:py-6
        w-[95%] max-w-4xl transition-colors duration-500
        ${bgColor} ${borderColor} ${textMain}`}
      >

        {/* Left icon */}
        <div className={`hidden md:flex items-center gap-6 ${textMuted}`}>
          <AiOutlineStock size={22} />
        </div>

        {/* Center NAV */}
        <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 gap-12 text-lg ${textMain}`}>

          {/* Home */}
          <div className="relative w-20 text-center">
            {active === "hero" && (
              <motion.div
                layoutId="nav-circle"
                className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${dotColor} animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.7)]`}
              />
            )}
            <a href="#hero" className="hover:opacity-100 opacity-80 transition">
              Home
            </a>
          </div>

          {/* About */}
          <div className="relative w-20 text-center">
            {active === "about" && (
              <motion.div
                layoutId="nav-circle"
                className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${dotColor}`}
              />
            )}
            <a href="#about" className="hover:opacity-100 opacity-80 transition">
              About
            </a>
          </div>

          {/* Projects */}
          <div className="relative w-24 text-center">
            {active === "projects" && (
              <motion.div
                layoutId="nav-circle"
                className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${dotColor}`}
              />
            )}
            <a href="#projects" className="hover:opacity-100 opacity-80 transition">
              Projects
            </a>
          </div>

          {/* Contact */}
          <div className="relative w-20 text-center">
            {active === "contact" && (
              <motion.div
                layoutId="nav-circle"
                className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${dotColor}`}
              />
            )}
            <a href="#contact" className="hover:opacity-100 opacity-80 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Right icons */}
        <div className={`flex justify-center items-center gap-5 pt-2 ${textMuted}`}>

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
  )
}