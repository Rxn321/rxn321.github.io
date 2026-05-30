import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue } from "framer-motion"
import { getTheme } from "../styles/theme"

const projects = [
  {
    title: "Portfolio Website",
    desc: "React + Tailwind portfolio with smooth animations.",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Portfolio Optimization",
    desc: "Python-based stock analysis tool for risk optimization.",
    tags: ["Python", "Data"],
  },
  {
    title: "UBC Rocket",
    desc: "CAD + manufacturing for Cloudburst rocket project.",
    tags: ["CAD", "FEA"],
  },
]

export default function Projects({ darkMode }) {
  const theme = getTheme(darkMode)

  const containerRef = useRef(null)
  const x = useMotionValue(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const looped = [...projects, ...projects]

  // ---------- infinite scroll ----------
  useEffect(() => {
    let pos = 0
    let frame

    const speed = 0.5

    const animate = () => {
      pos -= speed

      if (containerRef.current) {
        const width = containerRef.current.scrollWidth / 2
        if (Math.abs(pos) >= width) pos = 0
      }

      x.set(pos)
      frame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(frame)
  }, [x])

  // ---------- center detection ----------
  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return

      const cards = containerRef.current.children
      const containerRect = containerRef.current.getBoundingClientRect()
      const centerX = containerRect.left + containerRect.width / 2

      let closest = 0
      let minDist = Infinity

      Array.from(cards).forEach((card, i) => {
        const rect = card.getBoundingClientRect()
        const cardCenter = rect.left + rect.width / 2
        const dist = Math.abs(centerX - cardCenter)

        if (dist < minDist) {
          minDist = dist
          closest = i % projects.length
        }
      })

      setActiveIndex(closest)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="projects"
      className={`max-w-6xl mx-auto px-6 py-40 overflow-hidden ${theme.text.main}`}
    >
      <h2 className="text-3xl font-semibold mb-10">
        Projects
      </h2>

      <div className="relative overflow-hidden">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-0 z-10 mask-fade" />

        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-6 w-max"
        >
          {looped.map((project, i) => {
            const isActive =
              i % projects.length === activeIndex

            return (
              <div
                key={i}
                className={`
                  w-[320px]
                  h-[240px]
                  flex-shrink-0
                  rounded-2xl
                  border
                  backdrop-blur-md
                  p-6
                  shadow-lg
                  transition-all duration-500 ease-in-out

                  ${
                    isActive
                      ? "opacity-100 border-orange-300/40 shadow-[0_0_40px_rgba(251,146,60,0.15)]"
                      : "opacity-60 border-white/10"
                  }

                  ${theme.card.bg}
                `}
              >
                <h3
                  className={`
                    text-lg font-semibold mb-2 transition-all duration-500
                    ${
                      isActive
                        ? "text-orange-300"
                        : theme.text.main
                    }
                  `}
                >
                  {project.title}
                </h3>

                <p className={`text-sm ${theme.text.muted}`}>
                  {project.desc}
                </p>

                <div className="flex gap-2 flex-wrap mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border ${theme.card.border}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* glow indicator */}
                {isActive && (
                  <div className="mt-5 h-1 w-16 bg-orange-300/40 rounded-full blur-[1px]" />
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}