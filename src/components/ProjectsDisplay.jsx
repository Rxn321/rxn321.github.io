import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { getTheme } from "../styles/theme"
import { projects } from "../data/Projects"

export default function Projects({ darkMode }) {
  const theme = getTheme(darkMode)

  const colors = {
    glow: darkMode
      ? {
          border: "border-orange-300/40",
          shadow: "shadow-orange-300/20",
          bar: "bg-orange-300/50",
          dot: "bg-orange-300",
          text: "text-orange-300",
        }
      : {
          border: "border-blue-400/40",
          shadow: "shadow-blue-400/20",
          bar: "bg-blue-400/50",
          dot: "bg-blue-400",
          text: "text-blue-500",
        },
  }

  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length)
    }, 4000)

    return () => clearInterval(intervalRef.current)
  }, [])

  const getIndex = (offset) =>
    (active + offset + projects.length) % projects.length

  return (
    <section
      id="projects"
      className={`max-w-6xl mx-auto px-6 pt-48 md:pt-80 space-y-10 ${theme.text.main}`}
    >
      <h2 className="text-3xl font-semibold text-center">
        Projects
      </h2>

      {/* 3 CARD VIEW */}
      <div className="flex justify-center items-center gap-8">
        {[-1, 0, 1].map((offset) => {
          const index = getIndex(offset)
          const isCenter = offset === 0
          const project = projects[index]

          return (
            <motion.div
              key={project.title}
              onClick={() => setActive(index)}
              animate={{
                scale: isCenter ? 1.1 : 0.9,
                opacity: isCenter ? 1 : 0.6,
                y: isCenter ? -20 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`
                w-[380px]   /* BIGGER */
                h-[320px]   /* BIGGER */
                rounded-2xl
                border
                backdrop-blur-md
                cursor-pointer
                overflow-hidden
                transition-all duration-500
                ${theme.card.bg}
                ${
                  isCenter
                    ? `${colors.glow.border} ${colors.glow.shadow}`
                    : theme.card.border
                }
              `}
            >
              {/* IMAGE */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors ${
                    isCenter ? colors.glow.text : ""
                  }`}
                >
                  {project.title}
                </h3>

                <p className={`text-sm ${theme.text.muted}`}>
                  {project.desc}
                </p>

                <div className="flex gap-2 flex-wrap mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border ${theme.card.border}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {isCenter && (
                  <div
                    className={`mt-4 h-1 w-16 rounded-full ${colors.glow.bar}`}
                  />
                )}

                {isCenter && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-xs mt-3 inline-block opacity-70 hover:opacity-100"
                  >
                    View project →
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 pt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              rounded-full transition-all duration-300
              ${
                i === active
                  ? `w-8 h-2 ${colors.glow.dot}`
                  : darkMode
                  ? "w-2 h-2 bg-white/20 hover:bg-white/40"
                  : "w-2 h-2 bg-black/20 hover:bg-black/40"
              }
            `}
          />
        ))}
      </div>
    </section>
  )
}