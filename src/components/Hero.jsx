import me from "../assets/me.jpg"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 pt-48 md:pt-69 gap-8 md:gap-12 text-center md:text-left">

      <motion.div
        initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl"
      >
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          Hi, I’m Ryan
        </h1>

        <p className="mt-6 text-white/80 text-lg">
         —I'm a second year applied mathematics student at the University of British Columbia. 
        I have a background in IT support and I enjoy building hand-on projects that combine data and real-world applications.
        </p>
      </motion.div>

<div className="bg-white p-3 pb-6 shadow-xl rotate-[-4deg] hover:rotate-0 transition duration-300"> 
  <img src={me} alt="Ryan" className="w-32 h-32 md:w-64 md:h-64 object-cover rounded-md shadow-xl"/> 
    </div>
    </main>
  )
}