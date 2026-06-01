import { useEffect, useRef } from "react"
import { motion, useMotionValue } from "framer-motion"
import { getTheme } from "../styles/theme"
import { experiences } from "../data/experiences"

export default function Experiences({ darkMode }) {
  const theme = getTheme(darkMode)

  const containerRef = useRef(null)
  const x = useMotionValue(0)

  const looped = [...experiences, ...experiences]

  // ---------- infinite auto-scroll ----------
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

  return (
    <section
      id="experiences"
      className={`max-w-6xl mx-auto px-6 py-40 overflow-hidden ${theme.text.main}`}
    >
      <h2 className="text-3xl font-semibold mb-10">
        Experiences
      </h2>

      {/* SCROLLER */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-10 mask-fade" />

        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-6 w-max"
        >
          {looped.map((experience, i) => (
            <div
              key={i}
              className={`
                w-[320px]
                h-[240px]
                flex-shrink-0
                rounded-2xl
                border
                p-6
                transition-all duration-300 ease-in-out

                ${theme.card.bg}
                border-white/10
              `}
            >
              <h3 className="text-lg font-semibold mb-2">
                {experience.title}
              </h3>

              <p className={`text-sm ${theme.text.muted}`}>
                {experience.desc}
              </p>

              <div className="flex gap-2 flex-wrap mt-4">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full border ${theme.card.border}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}