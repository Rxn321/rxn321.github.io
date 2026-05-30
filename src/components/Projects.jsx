import { motion } from "framer-motion"
import { getTheme } from "../styles/theme"
import { projects } from "../data/projects"
import ProjectsDisplay from "../components/ProjectsDisplay"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function Projects({ darkMode }) {
  const theme = getTheme(darkMode)

  return (
    <section
      id="projects"
      className={`max-w-6xl mx-auto px-6 py-40 ${theme.text.main}`}
    >
      <motion.div variants={container} initial="hidden" whileInView="show">
        <motion.h2 variants={item} className="text-3xl font-semibold mb-10">
          Projects
        </motion.h2>

        <motion.div variants={item}>
          <ProjectsDisplay projects={projects} theme={theme} />
        </motion.div>
      </motion.div>
    </section>
  )
}