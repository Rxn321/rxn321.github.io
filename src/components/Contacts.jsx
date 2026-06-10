
export default function Contact({ darkMode }) {

  const textMain = darkMode ? "text-white/90" : "text-black/80"
  const textMuted = darkMode ? "text-white/70" : "text-black/60"
  const linkHover = darkMode ? "hover:text-white" : "hover:text-black"

  return (
    <section
      id="contact"
      className={`max-w-4xl mx-auto px-6 text-center transition-colors duration-500 ${textMain}`}
    >
      <h2 className="text-xl font-semibold mb-6">
        Contact
      </h2>

      <div className={`flex flex-col items-center gap-4 ${textMuted}`}>

        <a href="mailto:liuryanty@gmail.com" className={`${linkHover} transition`}>
          liuryanty@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/ryantyl/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkHover} transition`}
        >
          linkedin.com/in/ryantyl
        </a>

        <a
          href="https://github.com/Rxn321"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkHover} transition`}
        >
          github.com/Rxn321
        </a>

      </div>

      <div className={`mt-20 text-sm pb-2 ${textMuted}`}>
        <a
          href="https://github.com/Rxn321/Portfolio-Website"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition"
        >
          Developed by <span className="text-blue-400">Ryan Liu</span> - 2026
        </a>
      </div>

    </section>
  )
}