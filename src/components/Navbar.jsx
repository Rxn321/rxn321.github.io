import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center">
      <div className="relative flex items-center justify-between
        rounded-full bg-white/5 backdrop-blur-xl
        border border-white/10 px-6 md:px-10 py-4 md:py-6
        w-[95%] max-w-4xl">


        <div className="hidden md:flex items-center text-white/70 gap-6">
          <a href="#projects" className="hover:text-white transition">
            <AiOutlineStock size={22} />
          </a>
        </div>


        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-12 text-lg text-white/90">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>


        <div className="hidden md:flex items-center gap-4 text-white/70">
          <a href="https://github.com/Rxn321" className="hover:text-white transition"><AiFillGithub size={25} /></a>
          <a href="https://www.linkedin.com/in/ryantyl/" className="hover:text-white transition"><FaLinkedin size={25} /></a>
        </div>


        <div className="md:hidden flex items-center w-full justify-between text-white">
          <span className="text-sm opacity-70">Smol screen</span>

          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>


        {open && (
          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[80%]
            bg-black/80 backdrop-blur-lg border border-grey/10
            rounded-2xl p-4 flex flex-col gap-4 text-center text-white">

            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            <div className="flex justify-center gap-6 pt-2 border-t border-white/10">
              <a href="https://github.com/Rxn321"><AiFillGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/ryantyl/"><FaLinkedin size={22} /></a>
              <a href="#projects" className="hover:text-white transition"><AiOutlineStock size={22} /></a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

   {/*Update link to project*/}