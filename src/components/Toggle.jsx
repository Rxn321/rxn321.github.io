import { motion } from "framer-motion"
import { HiSun, HiMoon } from "react-icons/hi"

export default function Toggle({ darkMode, toggleTheme }) {
  return (
    <button
    onClick={toggleTheme}
    className={`w-10 h-12 md:h-16 flex items-center justify-center rounded-full backdrop-blur-xl border transition
        ${
        darkMode
            ? "bg-white/10 border-white/10"
            : "bg-black/10 border-black/10"
        }
    `}
    >
    {/* Track */}
    <div className="relative w-full h-full flex items-center justify-center">

        <motion.div
        animate={{
            y: darkMode ? -12 : 12
        }}
        transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
        }}
        className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md
            ${
            darkMode
                ? "bg-white/10 text-amber-200"
                : "text-white"
            }
        `}
        >
        {darkMode ? <HiMoon size={14} /> : <HiSun size={14} />}
        </motion.div>
    </div>
    </button>
  )
}