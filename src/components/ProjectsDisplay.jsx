import { useState } from "react"
import { motion, animate, useMotionValue } from "framer-motion"
import { projects } from "../data/projects"
import { getTheme } from "../styles/theme"

export default function ProjectsDisplay({ darkMode }) {
  const theme = getTheme(darkMode)

  const x = useMotionValue(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const cardWidth = 320 + 24
  const looped = [...projects, ...projects, ...projects]

  const goTo = (index) => {
    setActiveIndex(index)

    animate(x, -index * cardWidth, {
      type: "spring",
      stiffness: 120,
      damping: 20,
    })
  }

  const handleIndex = (i) => {
    const len = projects.length
    return ((i % len) + len) % len
  }

  return (
    <section className={`py-40 ${theme.text.main}`}>
      <h2 className="text-3xl font-semibold mb-10 text-center">
        My Projects
      </h2>

      {/* CAROUSEL */}
      <div className="overflow-hidden w-[1040px] mx-auto relative">
        <motion.div style={{ x }} className="flex gap-6 w-max">
          {looped.map((project, i) => {
            const realIndex = handleIndex(i)
            const isActive = realIndex === activeIndex

            return (
              <div
                key={i}
                onClick={() => goTo(realIndex)}
                className={`
                  w-[320px]
                  h-[240px]
                  flex-shrink-0
                  rounded-2xl
                  border
                  backdrop-blur-md
                  p-6
                  shadow-lg
                  cursor-pointer
                  transition-all duration-500

                  ${
                    isActive
                      ? "opacity-100 border-orange-300/40 shadow-[0_0_35px_rgba(251,146,60,0.18)]"
                      : "opacity-60 border-white/10"
                  }

                  ${theme.card.bg}
                `}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isActive ? "text-orange-300" : ""
                  }`}
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

                {isActive && (
                  <div className="mt-5 h-1 w-16 bg-orange-300/40 rounded-full blur-[1px]" />
                )}
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-8">
        {projects.map((_, i) => {
          const isActive = i === activeIndex

          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300
                ${
                  isActive
                    ? "bg-orange-300 scale-125 shadow-[0_0_10px_rgba(251,146,60,0.5)]"
                    : "bg-white/30 hover:bg-white/50"
                }
              `}
            />
          )
        })}
      </div>
    </section>
  )
}