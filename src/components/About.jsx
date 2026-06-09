import collage from "../assets/collage.png";
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {currently.map((item, i) => (
          <p
            key={i}
            className={`leading-relaxed text-center text-lg py-2 ${theme.text.main}`}
          >
            {item.text}
          </p>
          ))}
        </motion.div>


        {/* Skills Carousel */}
        <h2 className={`text-3xl font-semibold text-center pt-8 leading-normal ${theme.text.gradientText}`}>
          Skills...
        </h2>
        <div className={`w-md md:w-2xl overflow-hidden rounded-3xl py-3 backdrop-blur-sm border bg-white/5 ${theme.ui.bg} ${theme.ui.border}`}>
          <div className="flex animate-carousel gap-6">
            {duplicated.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={index}
                  className="flex min-w-fit flex-col items-center gap-1 px-4 transition-transform duration-300 hover:scale-110"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white${theme.hero.shadow}`}
                  >
                    <Icon className={`h-8 w-8 ${darkMode ? "text-orange-400/70" : "text-indigo-500/70"}`} />
                  </div>

                  <span className={`text-sm ${theme.text.muted}`}>
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <h2 className={`text-3xl font-semibold text-center pt-8 leading-normal ${theme.text.gradientText}`}>
          Interests...
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* RIGHT: image */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex-1 flex justify-center">
                <img
                  src= {collage}
                  alt="Pics of Interest"
                  className="w-72 object-cover shadow-lg"
                />
              </div>
            </motion.div>
            <ul className="list-disc pl-5 space-y-4 text-left flex-1">
            {hobby.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className={`leading-relaxed text-lg ${theme.text.main}`}
              >
                {item.text}
              </motion.li>
            ))}
          </ul>
          
        </div>
        
      </section>

  )
}