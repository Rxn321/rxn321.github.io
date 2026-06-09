import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { getTheme } from "../styles/theme"
import { projects } from "../data/Projects"
import useIsMobile from "../styles/mobile"

export default function Projects({ darkMode }) {
  
  const theme = getTheme(darkMode)
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)
  useEffect(() => {
    startInterval()
    return () => clearInterval(intervalRef.current)
  }, [])

  const startInterval = () => {
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length)
    }, 4000)
  }

  const pauseInterval = () => {
    clearInterval(intervalRef.current)
  }

  const resetInterval = () => {
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length)
    }, 4000)
  }


  const getIndex = (offset) =>
    (active + offset + projects.length) % projects.length

{/* MOBILE SWIPE */}
  const handleSwipe = (e, info) => {
    const threshold = 60
    let changed = false

    if (info.offset.x > threshold) {
      setActive((p) => (p - 1 + projects.length) % projects.length)
      changed = true
    } else if (info.offset.x < -threshold) {
      setActive((p) => (p + 1) % projects.length)
      changed = true
    }

    if (changed) {
      resetInterval()
    }
  }

  return (
    <section
      id="projects"
      className={`max-w-6xl mx-auto px-6 pt-40 space-y-10 ${theme.text.main}`}
    >
      <h2 className={`text-3xl font-semibold leading-normal text-center ${theme.text.gradientText}`}>
        Projects
      </h2>
{/* MOBILE SWIPE */}     
      {isMobile ? (
        <div className="flex justify-center">
          <motion.div
            key={projects[active].title}
            drag="x"
            dragConstraints={{ left: 2, right: 2 }}
            onDragEnd={handleSwipe}
            className={`
              w-[80%]
              h-[560px]
              rounded-2xl
              border
              backdrop-blur-md
              cursor-grab
              overflow-hidden
              ${theme.card.bg}
              ${theme.card.border}
              ${theme.glow.shadow}
              ${theme.hero.shadow}
            `}
          >
            {/* IMAGE */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={projects[active].img}
                alt={projects[active].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="h-full p-5">
              <h3 className={`text-lg font-semibold mb-2 ${theme.glow.text}`}>
                {projects[active].title}
              </h3>

              <p className={`text-md leading-relaxed ${theme.text.muted}`}>
                {projects[active].desc}
              </p>

              <div className="flex gap-2 flex-wrap mt-3">
                {projects[active].tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full border ${theme.card.border}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                  className={`mt-4 h-1 w-16 rounded-full ${theme.glow.bar}`}
              />    
              {projects[active].link && (
                <a
                  href={projects[active].link}
                  target="_blank"
                  className="text-s mt-4 inline-block opacity-90"
                >
                  View project →
                </a>
              )}
            </div>
          </motion.div>
        </div>
      ) : (

      <div className={`flex items-center gap-8 ${isMobile ? "flex-col" : "flex-row justify-center"}`}>
        {[-1, 0, 1].map((offset) => {
          const index = getIndex(offset)
          const isCenter = offset === 0
          const project = projects[index]

          return (
            <motion.div
              key={project.title}
              onClick={() => {setActive(index); startInterval()}}
              onMouseEnter={pauseInterval}
              onMouseLeave={startInterval}
              animate={{
                scale: isMobile ? 1 : (isCenter ? 1 : 1),
                opacity: isMobile ? 1 : (isCenter ? 1 : 1),
                y: isMobile ? 0 : (isCenter ? -20 : 0),
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={`
                w-[380px]
                h-[560px]
                rounded-2xl
                border
                backdrop-blur-md
                cursor-pointer
                overflow-hidden
                transition-all duration-500
                ${theme.card.bg}
                ${
                  isCenter
                    ? `shadow-lg ${theme.glow.border} ${theme.glow.shadow}`
                    : `${theme.card.border} ${theme.hero.shadow}`
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
              <div className="h-full p-5">
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors  ${
                    isCenter ? theme.glow.text : ""
                  }`}
                >
                  {project.title}
                </h3>

                <p className={`text-md leading-relaxed ${theme.text.muted}`}>
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
                    className={`mt-4 h-1 w-16 rounded-full ${theme.glow.bar}`}
                  />
                )}

                {isCenter && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-s mt-3 inline-block opacity-90 hover:opacity-100"
                  >
                    View project →
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
      )}
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
                  ? `w-8 h-2 ${theme.glow.dot}`
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