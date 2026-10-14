import { useEffect, useRef } from "react";
import useIsMobile from "../styles/mobile"


type Particle = {
  x: number;
  y: number;

  vx: number;
  vy: number;

  size: number;
  color: string;

  trail: { x: number; y: number }[];

  // Small random variation in the orbit
  perturbation: number;
};

type ParticleBackgroundProps = {
  darkMode: boolean;
};

export default function ParticleBackground({
  darkMode,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrameId: number;

    const particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };


    const colors = darkMode ? ["#ffffff"] : ["#555555"];

    const PARTICLE_COUNT = isMobile ? 7 : 15;
    const TRAIL_LENGTH = isMobile ? 30 : 60;

    const G = 1000


    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      /*Particle spread*/
      const maxRadius = Math.min(
        canvas.width,
        canvas.height
      ) * 0.7;

      const minRadius = Math.min(
        400,
        maxRadius * 0.35
      );

      const radius =
        minRadius +
        Math.random() *
          (maxRadius - minRadius);

      /*
       * Random starting angle.
       */
      const angle =
        Math.random() * Math.PI * 2;

      /*
       * Starting position.
       */
      const x =
        centerX +
        Math.cos(angle) * radius;

      const y =
        centerY +
        Math.sin(angle) * radius;

      const tangentX = -Math.sin(angle);
      const tangentY = Math.cos(angle);


      const orbitalSpeed =
        Math.sqrt(G / radius);

      const eccentricity =
        0.82 +
        Math.random() * 0.28;

      const speed =
        orbitalSpeed * eccentricity;

      const direction =
        Math.random() > 0.5 ? 1 : -1;

      const vx =
        tangentX * speed * direction;

      const vy =
        tangentY * speed * direction;

      particles.push({
        x,y,vx,vy,
        size: Math.random(),
        color: colors[i % colors.length],
        trail: [],
        perturbation:
          0.0005 +
          Math.random() * 0.001,
      });
    }


    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );


    const animate = () => {

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;


      for (const particle of particles) {

        const dx =
          centerX - particle.x;

        const dy =
          centerY - particle.y;

        const distanceSquared =
          dx * dx + dy * dy;

        const distance =
          Math.sqrt(distanceSquared);

        const safeDistance =
          Math.max(distance, 60);

        const gravity =
          G /
          (safeDistance *
            safeDistance);

        particle.vx +=
          (dx / safeDistance) *
          gravity;

        particle.vy +=
          (dy / safeDistance) *
          gravity;


        particle.vx +=
          (Math.random() - 0.5) *
          particle.perturbation;

        particle.vy +=
          (Math.random() - 0.5) *
          particle.perturbation;

        const mouseDx =
          mouse.x - particle.x;

        const mouseDy =
          mouse.y - particle.y;

        const mouseDistance =
          Math.sqrt(
            mouseDx * mouseDx +
              mouseDy * mouseDy
          );

        if (
          mouseDistance > 1 &&
          mouseDistance < 150
        ) {
          const mouseForce =
            ((220 - mouseDistance) /
              220) *
            0.04;

          particle.vx +=
            (mouseDx / mouseDistance) *
            mouseForce;

          particle.vy +=
            (mouseDy / mouseDistance) *
            mouseForce;
        }

        const maxSpeed = 3;

        const speed =
          Math.sqrt(
            particle.vx *
              particle.vx +
              particle.vy *
                particle.vy
          );

        if (speed > maxSpeed) {
          particle.vx =
            (particle.vx / speed) *
            maxSpeed;

          particle.vy =
            (particle.vy / speed) *
            maxSpeed;
        }


        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.trail.push({
          x: particle.x,
          y: particle.y,
        });

        if (
          particle.trail.length >
          TRAIL_LENGTH
        ) {
          particle.trail.shift();
        }
      }


      for (const particle of particles) {
        for (
          let i = 1;
          i < particle.trail.length;
          i++
        ) {
          const previous =
            particle.trail[i - 1];

          const current =
            particle.trail[i];

          const progress =
            i / particle.trail.length;


          const opacity =
            progress * 0.1;

          ctx.beginPath();

          ctx.moveTo(
            previous.x,
            previous.y
          );

          ctx.lineTo(
            current.x,
            current.y
          );

          ctx.strokeStyle =
            hexToRgba(
              particle.color,
              opacity
            );

          ctx.lineWidth =
            progress * 3;

          ctx.stroke();
        }
      }

      animationFrameId =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      cancelAnimationFrame(
        animationFrameId
      );
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[15] pointer-events-none"
    />
  );
}


function hexToRgba(
  hex: string,
  alpha: number
) {
  const r = parseInt(
    hex.slice(1, 3),
    16
  );

  const g = parseInt(
    hex.slice(3, 5),
    16
  );

  const b = parseInt(
    hex.slice(5, 7),
    16
  );

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

