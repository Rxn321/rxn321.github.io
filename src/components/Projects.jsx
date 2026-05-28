import rocket1 from "../assets/rocket-1.jpg"
import rocket2 from "../assets/meAndRocket.jpg"
import plate from "../assets/plate.jpg"

import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Projects({ darkMode }) {

  const textMain = darkMode ? "text-white/90" : "text-black/80"
  const textMuted = darkMode ? "text-white/70" : "text-black/60"
  const cardBg = darkMode ? "bg-white/5" : "bg-black/5"
  const cardBorder = darkMode ? "border-white/10" : "border-black/10"
  const hoverBg = darkMode ? "hover:bg-white/10" : "hover:bg-black/10"
  const tagBg = darkMode ? "bg-white/10" : "bg-black/10"

  return (
    <section
      id="projects"
      className={`max-w-4xl mx-auto px-6 pt-80 transition-colors duration-500 ${textMain}`}
    >

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >

        <h2 className="text-3xl font-semibold mb-8">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-1">

          {/* Project 1 */}
          <motion.div
            variants={item}
            className={`${cardBg} border ${cardBorder} p-6 rounded-2xl transition-colors duration-300 ${hoverBg}`}
          >
            <h3 className="font-semibold">Portfolio Website</h3>

            <p className={`text-sm mt-2 ${textMuted}`}>
              Developed a personal portfolio website using React and Tailwind CSS to showcase my projects and skills,
              featuring responsive design and smooth animations with Framer Motion.
            </p>

            <div className="flex gap-2 flex-wrap mt-3">
              <span className={`text-xs ${tagBg} px-3 py-1 rounded-full`}>
                You are here 📍
              </span>
            </div>

            <a href="https://github.com/Rxn321/Portfolio-Website" target="_blank">
              <button className="mt-4 px-4 py-2 text-sm hover:text-blue-400 transition">
                View Project →
              </button>
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            variants={item}
            className={`${cardBg} border ${cardBorder} p-6 rounded-2xl transition-colors duration-300 ${hoverBg}`}
          >
            <h3 className="font-semibold">Portfolio Optimization</h3>

            <p className={`text-sm mt-2 ${textMuted}`}>
              Python-based data analysis project for portfolio optimization using historical stock data to evaluate risk and returns and improve investment decisions.
              So I can stop losing money on stocks.
            </p>

            <div className="flex gap-2 flex-wrap mt-3">
              <span className={`text-xs ${tagBg} px-3 py-1 rounded-full`}>Python</span>
              <span className={`text-xs ${tagBg} px-3 py-1 rounded-full`}>Data Analysis</span>
              <span className={`text-xs ${tagBg} px-3 py-1 rounded-full`}>Optimization</span>
            </div>

            <a href="https://github.com/Rxn321/Portfolio-Optimization" target="_blank">
              <button className="mt-4 px-4 py-2 text-sm hover:text-blue-400 transition">
                View Project →
              </button>
            </a>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            variants={item}
            className={`${cardBg} border ${cardBorder} p-6 rounded-2xl transition-colors duration-300 ${hoverBg}`}
          >
            <h3 className="font-semibold">UBC Rocket</h3>

            <p className={`text-sm mt-2 ${textMuted}`}>
              Worked on the UBC Rocket team for the 2025 “Cloudburst” competition rocket, using SolidWorks and Fusion 360 for CAD design.
              Applied machining techniques including CNC, lathe, waterjet, and milling, along with 3D printing and engineering analysis.
            </p>

            <div className="flex gap-2 flex-wrap mt-3">
              <span className={`text-xs ${tagBg} px-3 py-1 rounded-full`}>CAD</span>
              <span className={`text-xs ${tagBg} px-3 py-1 rounded-full`}>FEA</span>
              <span className={`text-xs ${tagBg} px-3 py-1 rounded-full`}>Manufacturing</span>
            </div>

            <a href="https://www.ubcrocket.com/project-COTS.html#subteam-A" target="_blank">
              <button className="mt-4 px-4 py-2 text-sm hover:text-blue-400 transition">
                View Project →
              </button>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}