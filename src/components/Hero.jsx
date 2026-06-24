import me from "../assets/meAndRocket.jpg";
import { motion } from "framer-motion";
import { getTheme } from "../styles/theme";
import useIsMobile from "../styles/mobile";

export default function Hero({ darkMode }) {
  const theme = getTheme(darkMode);
  const isMobile = useIsMobile();
  
  return (
    <main
      id="hero"
      className={`flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 pt-48 md:pt-32 gap-8 md:gap-12 text-center 
      md:text-left transition-colors duration-500 ${theme.hero.textMain}`}
    >

      <motion.div
        initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="flex flex-row items-center gap-6 md:gap- justify-center md:justify-start">
          {!isMobile && (
            <div
              className={`${theme.hero.cardBg} ${theme.hero.shadow}
              transition duration-300
              rotate-[-4deg] hover:rotate-0 p-3 pb-6`}
            >
              <img
                src={me}
                alt="Ryan"
                className="w-64 h-64 object-cover rounded-md shadow-xl"
              />
            </div>
          )}

          <div>
            <h1 className="text-4xl md:text-6xl tracking-tight">
              Hey, I'm
              <span className="inline-block origin-[70%_70%] animate-[wave_1.5s_ease-in-out_infinite] ml-2">
                👋
              </span>
            </h1>

            <h1 className={`text-5xl md:text-7xl text-transparent pb-4 ${theme.hero.gradientText}`}>
              Ryan Liu
            </h1>

            <p
              className={`mt-6 tracking-wide ${theme.hero.textMuted} ${
                isMobile ? "text-lg" : "text-xl"
              } max-w-md text-center md:text-left`}
            >
              I am a second-year Applied Mathematics student who enjoys building
              hands-on projects that connect data-driven methods with real-world
              applications.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}