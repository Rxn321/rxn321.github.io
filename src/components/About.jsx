import { motion } from "framer-motion"
import { getTheme } from "../styles/theme"
import { currently, hobby, skills } from "../data/about"

export default function About({ darkMode }) {
  const theme = getTheme(darkMode)

  return (
      <section
        id="about"
        className={`max-w-4xl mx-auto px-6 pt-20 md:pt-40 space-y-6 transition-colors duration-500 ${theme.text.main}`}
      >
        <h2 className={`text-3xl font-semibold text-center leading-normal ${theme.text.gradientText}`}>
          Currently...
        </h2>
        
        {currently.map((item, i) => (
          <p
            key={i}
            className={`leading-relaxed text-center text-lg ${theme.text.main}`}
          >
            {item.text}
          </p>
        ))}
        
        <h2 className={`text-3xl font-semibold text-center leading-normal ${theme.text.gradientText}`}>
          Interests...
        </h2>
        {hobby.map((item, i) => (
          <p
            key={i}
            className={`leading-relaxed text-center text-lg ${theme.text.main}`}
          >
            {item.text}
          </p>
        ))}
      </section>

  )
}