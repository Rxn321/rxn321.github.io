import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Toggle from './components/Toggle'

function App() {
  const [scrolledPast, setScrolledPast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY

      if (y > window.innerHeight * 0.30) {
        setScrolledPast(true)
      } else {
        setScrolledPast(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${
        darkMode ? "text-white" : "text-black"
      }`}
    >

      {/* Background */}
      <div
        className={`fixed inset-0 z-0 bg-gradient-to-b transition-colors duration-500 ${
          darkMode
            ? "from-zinc-800 via-neutral-700 to-stone-700"
            : "from-white via-slate-100 to-slate-200"
        }`}
      />

      {/* Overlay */}
      <motion.div
        className={`fixed inset-0 z-10 bg-gradient-to-b ${
          darkMode
            ? "from-orange-300/40 via-zinc-600/30 to-neutral-700/10"
            : "from-indigo-300/40 via-white/40 to-white/20"
        }`}
        animate={{
          y: scrolledPast ? "-130%" : "0%",
          skewY: scrolledPast ? -16 : 0
        }}
        transition={{
          type: "tween",
          duration: 0.9,
          ease: "easeInOut"
        }}
        style={{
          transformOrigin: "top"
        }}
      />
      {/* Navbar */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center">
        <div className="relative flex items-center justify-between w-[95%] max-w-4xl">
          <Navbar darkMode={darkMode} />
          <Toggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contacts darkMode={darkMode} />
      </div>

    </div>
  )
}

export default App