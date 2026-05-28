import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY

      if (y > window.innerHeight * 0.15) {
        setScrolledPast(true)
      } else {
        setScrolledPast(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      
{/* Background */}
    <div className="fixed inset-0 z-10 bg-gradient-to-b from-zinc-800 via-neutral-700 to-stone-600"/>
    
{/* Overlay */}
      <motion.div
        className="fixed inset-0 z-10 bg-gradient-to-b from-orange-300/50 via-zinc-500/30 to-neutral-600/10"
        animate={{
          y: scrolledPast ? "-130%" : "0%",
          skewY: scrolledPast ? -12 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 18
        }}
        style={{
          transformOrigin: "top"
        }}
      />

      <div className="relative z-20">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </div>

    </div>
  )
}

export default App