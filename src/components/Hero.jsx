import me from "../assets/meAndRocket.jpg";
import { motion } from "framer-motion";
import { getTheme } from "../styles/theme";

export default function Hero({ darkMode }) {
  const theme = getTheme(darkMode);

  return (
    <main
      id="hero"
      className={`flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 pt-48 md:pt-40 gap-8 md:gap-12 text-center 
      md:text-left transition-colors duration-500 ${theme.hero.textMain}`}
    >

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl"
      >
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight">
          Ryan Liu
        </h1>

        <p className={`mt-6 text-2xl font-serif ${theme.hero.textMuted}`}>
          I am a second-year Applied Mathematics student who enjoys building hands-on projects that connect data-driven methods with real-world applications.
        </p>
      </motion.div>

      {/* Image */}
      <div
        className={`${theme.hero.cardBg} p-3 pb-6 ${theme.hero.shadow} rotate-[-4deg] hover:rotate-0 transition duration-300`}
      >
        <img
          src={me}
          alt="Ryan"
          className="w-32 h-32 md:w-64 md:h-64 object-cover rounded-md shadow-xl"
        />
      </div>

    </main>
  );
}