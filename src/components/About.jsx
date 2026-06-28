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
      className={`w-full mx-auto px-4 sm:px-6 pt-28 pb-28 space-y-6 overflow-x-hidden overflow-y-visible transition-colors duration-500 ${theme.text.main}`}
    >

      {/* SKILLS FIRST */}
      <h2 className={`text-3xl font-semibold text-center leading-normal ${theme.text.gradientText}`}>
        Skills...
      </h2>

      <div className={`w-full max-w-2xl mx-auto overflow-hidden rounded-3xl py-3 backdrop-blur-sm border bg-white/5 ${theme.ui.bg} ${theme.ui.border}`}>
        <div className="flex animate-carousel gap-6 w-max">
          {duplicated.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="flex min-w-fit flex-col items-center gap-1 px-4 transition-transform duration-300 hover:scale-110"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ${theme.hero.shadow}`}
                >
                  <Icon
                    className={`h-8 w-8 ${theme.text.main}`}
                  />
                </div>

                <span className={`text-sm ${theme.text.muted}`}>
                  {skill.name}
                </span>

              </div>
            );
          })}
        </div>
      </div>


      {/* IMAGE + TEXT CONTAINER */}
      <div className="grid md:grid-cols-2 items-center gap-4 pt-10">


        {/* IMAGE LEFT */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }
        }
        >
          <img
            src={collage}
            alt="Pics of Interest"
            className="w-40 md:w-72 object-cover shadow-lg hover:rotate-5"
          />
        </motion.div>


        {/* TEXT RIGHT */}
        <div className="space-y-8">


          {/* CURRENTLY */}
          <div className="text-center md:text-left">
            <h2 className={`text-3xl font-semibold leading-normal ${theme.text.gradientText}`}>
              Currently...
            </h2>

            {currently.map((item, i) => (
              <p
                key={i}
                className={`leading-relaxed text-lg py-2 ${theme.text.main}`}
              >
                {item.text}
              </p>
            ))}
          </div>



          {/* INTERESTS */}
          <div className="text-center md:text-left">
            <h2 className={`text-3xl font-semibold leading-normal ${theme.text.gradientText}`}>
              Interests...
            </h2>

            <ul className="list-none space-y-4">

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

                  className={`before:content-['✦'] before:mr-3 leading-relaxed text-lg ${theme.text.main}`}
                >
                  {item.text}
                </motion.li>

              ))}

            </ul>
          </div>

        </div>

      </div>

    </section>
  )
}