export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 pt-80 text-center">
      <h2 className="text-xl font-semibold mb-6">Contact</h2>

      <div className="flex flex-col items-center gap-4 text-white/70">

        <a href="mailto:liuryanty@gmail.com" className="hover:text-white transition">
          liuryanty@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/ryantyl/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          linkedin.com/in/ryantyl
        </a>

        <a
          href="https://github.com/Rxn321"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          github.com/Rxn321
        </a>
      </div>

      <div className="mt-20 text-mid text-white/90 pb-2">
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