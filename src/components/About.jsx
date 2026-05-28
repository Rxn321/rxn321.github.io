
import rocket from "../assets/rocket-1.jpg"
import snow1 from "../assets/snow-1.PNG"
import snow3 from "../assets/snow-3.jpg"
import { motion } from "framer-motion"

export default function About() {
  return (
  <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <section id="about" className="max-w-4xl mx-auto px-6 pt-48 md:pt-80 space-y-6">
      <h2 className="text-3xl font-semibold mb-4">About</h2>
      <p className="text-white/90 leading-relaxed">
        UBC Math student working across IT, mechanical design, and data. I like turning ideas into systems that actually work.
      </p>
      
      <div className="flex gap-6 flex-wrap">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg hover:scale-120  transition">
          <img src={rocket} alt="rocket" className="w-56 h-36 object-cover rounded-xl" />
          <p className="text-xs text-white/60 mt-2 text-center">
            Hollyburn rocket on Hollyburn mountain
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition">
          <img src={snow1} alt="snow" className="w-56 h-36 object-cover rounded-xl" />
          <p className="text-xs text-white/60 mt-2 text-center">
            No fall damage after snowfall
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition">
          <img src={snow3} alt="snow" className="w-56 h-36 object-cover rounded-xl" />
          <p className="text-xs text-white/60 mt-2 text-center">
            Evening view on the slopes
          </p>
        </div>

      </div>
    </section>
  </motion.div>
  )
   {/*Need better pics*/}
}