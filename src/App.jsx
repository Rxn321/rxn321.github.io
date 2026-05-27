import About from "./components/About"
import Contact from "./components/Contacts"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-800 via-mist-750 to-slate-800 to-gray-600 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}