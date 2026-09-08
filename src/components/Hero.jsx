import me from "../assets/me.avif";
import heroBg from "../assets/heroBg.avif";
import { motion } from "framer-motion";
import { getTheme } from "../styles/theme";
import useIsMobile from "../styles/mobile";

export default function Hero({ darkMode }) {
  const theme = getTheme(darkMode);
  const isMobile = useIsMobile();
  
  return (
    <main
          id="hero"
          className={`relative flex flex-col md:flex-row items-center justify-center
          min-h-screen px-6 gap-8 md:gap-12 text-center md:text-left
          bg-cover bg-center bg-no-repeat
          transition-colors duration-500 ${!isMobile ? "bg-fixed" : ""} ${theme.hero.textMain}`}
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
            {/* Dark overlay */}
      <div
        className={`absolute inset-0 z-0 ${darkMode ? "bg-stone-600/60" : "bg-slate-200/60"}`}
      />

      <div className = "relative z-10"> 
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
          className={`hero-description font-medium mt-6 tracking-wide ${theme.hero.textMuted} ${isMobile ? "text-lg" : "text-2xl"
          } max-w-md text-center md:text-left`}
        >
          I am a second-year Mathematics student at the University of British Columbia
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="flex flex-row items-center gap-6 md:gap-20 justify-center md:justify-start">
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
        </div>
      </motion.div>
    </main>
  );
}