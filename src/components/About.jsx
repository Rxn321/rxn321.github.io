import rocket from "../assets/rocket-1.jpg";
import snow1 from "../assets/snow-1.PNG";
import snow3 from "../assets/snow-3.jpg";
import { motion } from "framer-motion";
import { getTheme } from "../styles/theme";

export default function About({ darkMode }) {
  const theme = getTheme(darkMode);

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

        <p className={`leading-relaxed ${theme.text.muted}`}>
          B. Sc. Computer Science @ UBC
        </p>

        <div className="flex gap-6 flex-wrap">

          {/* Card 1 */}
          <div className={`${theme.card.bg} backdrop-blur-md p-4 rounded-2xl border ${theme.card.border} shadow-lg hover:scale-105 transition`}>
            <img src={rocket} alt="rocket" className="w-56 h-36 object-cover rounded-xl" />
            <p className={`text-xs mt-2 text-center ${theme.text.muted}`}>
              Hollyburn rocket on Hollyburn mountain
            </p>
          </div>

          {/* Card 2 */}
          <div className={`${theme.card.bg} backdrop-blur-md p-4 rounded-2xl border ${theme.card.border} shadow-lg hover:scale-105 transition`}>
            <img src={snow1} alt="snow" className="w-56 h-36 object-cover rounded-xl" />
            <p className={`text-xs mt-2 text-center ${theme.text.muted}`}>
              No fall damage after snowfall
            </p>
          </div>

          {/* Card 3 */}
          <div className={`${theme.card.bg} backdrop-blur-md p-4 rounded-2xl border ${theme.card.border} shadow-lg hover:scale-105 transition`}>
            <img src={snow3} alt="snow" className="w-56 h-36 object-cover rounded-xl" />
            <p className={`text-xs mt-2 text-center ${theme.text.muted}`}>
              Evening view on the slopes
            </p>
          </div>

        </div>
      </section>
    </motion.div>
  );
}