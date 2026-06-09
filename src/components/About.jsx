import { motion } from "framer-motion"
import { getTheme } from "../styles/theme"
import { currently, hobby, skills } from "../data/about"

export default function About({ darkMode }) {
  const theme = getTheme(darkMode)
  const duplicated = [...skills, ...skills]
  
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


        {/* Skills Carousel */}
        <h2 className={`text-3xl font-semibold text-center leading-normal ${theme.text.gradientText}`}>
          Skills...
        </h2>
        <div className={`w-md md:w-2xl overflow-hidden rounded-3xl py-3 backdrop-blur-sm border ${theme.ui.bg} ${theme.ui.border}`}>
          <div className="flex animate-carousel gap-8">
            {duplicated.map((skill, index) => (
              <div
                key={index}
                className="flex min-w-fit flex-col items-center gap-1 px-4"
              >
                <div className= {`flex h-12 w-12 items-center justify-center rounded-2xl bg-white ${theme.hero.shadow}`}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-8 w-8"
                  />
                </div>
                <span className={`text-sm ${theme.text.muted}`}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
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