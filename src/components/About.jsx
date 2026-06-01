import { motion } from "framer-motion"
import { getTheme } from "../styles/theme"
import { about } from "../data/about"

export default function About({ darkMode }) {
  const theme = getTheme(darkMode)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section
        id="about"
        className={`max-w-4xl mx-auto px-6 pt-48 md:pt-80 space-y-6 transition-colors duration-500 ${theme.text.main}`}
      >
        <h2 className="text-3xl font-semibold text-center">
          Currently...
        </h2>

        {currently.map((item, i) => (
          <p
            key={i}
            className={`leading-relaxed text-center ${theme.text.muted}`}
          >
            {item.text}
          </p>
        ))}
                <h2 className="text-3xl font-semibold text-center">
          Currently...
        </h2>
      </section>
    </motion.div>
  )
}