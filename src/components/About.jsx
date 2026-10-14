import collage from "../assets/collage.avif";
import { motion } from "framer-motion";
import { getTheme } from "../styles/theme";
import { currently, hobby, skills } from "../data/About";
import { useEffect, useRef, useState } from "react";

export default function About({ darkMode }) {
  const theme = getTheme(darkMode);

  // Carousel
  const carouselRef = useRef(null);
  const firstSetRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const position = useRef(0);
  const lastTime = useRef(null);

  const startX = useRef(0);
  const startPosition = useRef(0);

  const SPEED = 40;

  // Automatic scrolling
  useEffect(() => {
    let animationFrame;

    const animate = (time) => {
      if (lastTime.current === null) {
        lastTime.current = time;
      }

      const deltaTime = (time - lastTime.current) / 1000;
      lastTime.current = time;

      if (!isDragging) {
        position.current -= SPEED * deltaTime;
      }

      // Seamless looping
      if (firstSetRef.current) {
        const loopWidth = firstSetRef.current.offsetWidth;

        if (position.current <= -loopWidth) {
          position.current += loopWidth;
        }

        if (position.current > 0) {
          position.current -= loopWidth;
        }
      }

      if (carouselRef.current) {
        carouselRef.current.style.transform =
          `translateX(${position.current}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isDragging]);

  // Dragging
  const handlePointerDown = (e) => {
    setIsDragging(true);

    startX.current = e.clientX;
    startPosition.current = position.current;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const delta = e.clientX - startX.current;

    position.current = startPosition.current + delta;
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section
      id="about"
      className={`w-full mx-auto px-4 sm:px-6 pt-28 pb-28 space-y-6 overflow-x-hidden overflow-y-visible transition-colors duration-500 ${theme.text.main}`}
    >

      {/* Skills first */}
      <h2
        className={`text-3xl font-semibold text-center leading-normal ${theme.text.gradientText}`}
      >
        Skills...
      </h2>

      <div
        className={`w-full max-w-2xl mx-auto overflow-hidden rounded-3xl py-3 backdrop-blur-sm border bg-white/5 ${theme.ui.bg} ${theme.ui.border}`}
      >
        <div
          ref={carouselRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`flex w-max gap-6 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            touchAction: "pan-y",
            userSelect: "none",
          }}
        >

          {/* First copy */}
          <div
            ref={firstSetRef}
            className="flex gap-6 shrink-0"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={`first-${index}`}
                  className="flex min-w-fit flex-col items-center gap-1 px-4 transition-transform duration-300 hover:scale-110"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ${theme.hero.shadow}`}
                  >
                    <Icon
                      className={`h-8 w-8 ${theme.text.main}`}
                    />
                  </div>

                  <span className={`text-sm ${theme.text.muted}`}>
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Second copy */}
          <div
            className="flex gap-6 shrink-0"
            aria-hidden="true"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={`second-${index}`}
                  className="flex min-w-fit flex-col items-center gap-1 px-4 transition-transform duration-300 hover:scale-110"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ${theme.hero.shadow}`}
                  >
                    <Icon
                      className={`h-8 w-8 ${theme.text.main}`}
                    />
                  </div>

                  <span className={`text-sm ${theme.text.muted}`}>
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>

            {/* Image + txt */}
      <div className="grid md:grid-cols-2 items-center gap-4 pt-10">


        {/* Img Left */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }
        }
        >
          <img
            src={collage}
            alt="Pics of Interest"
            className="w-40 md:w-72 object-cover shadow-lg hover:scale-105 transition-transform duration-300 rounded-sm"
          />
        </motion.div>


        {/* Img Right */}
        <div className="space-y-8">


          {/* Currently */}
          <div className="text-center md:text-left">
            <h2 className={`text-3xl font-semibold leading-normal ${theme.text.gradientText}`}>
              Currently...
            </h2>

            {currently.map((item, i) => (
              <p
                key={i}
                className={`leading-relaxed text-lg py-2 ${theme.text.main}`}
              >
                {item.text}
              </p>
            ))}
          </div>



          {/* Interests */}
          <div className="text-center md:text-left">
            <h2 className={`text-3xl font-semibold leading-normal ${theme.text.gradientText}`}>
              Interests...
            </h2>

            <ul className="list-none space-y-4">

              {hobby.map((item, i) => (

                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}

                  className={`before:content-['✦'] before:mr-3 leading-relaxed text-lg ${theme.text.main}`}
                >
                  {item.text}
                </motion.li>

              ))}

            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}