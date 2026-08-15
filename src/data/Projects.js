import rocket from "../assets/rocket.avif"
import portfolio from "../assets/sb.avif"
import optimize from "../assets/optimization.avif"
import physic from "../assets/physicsEngineV0.2.avif"


// edit desc soon
export const projects = [
  {
    title: "📍Moments📍",
    desc: `A visual collection of the things I've been building, exploring, and enjoying.`,
    tags: [ "TypeScript", "Tailwind", "Frontend", "UI/UX"],
    img: portfolio,
    link: "https://ryntyl-blog.vercel.app/",
  },
  {
    title: "Portfolio Optimization",
    desc: `Built a full-stack quantitative finance application using Python and React that leverages historical 
    market data from yfinance to optimize portfolio allocations and assess risk through statistical analysis and Monte Carlo simulations.`,
    tags: ["Python", "Data", "Optimization"],
    img: optimize,
    link: "https://github.com/Rxn321/Portfolio-Optimization",
  },
  {
    title: "Physics Engine",
  desc: `A real-time 2D physics engine and renderer built in C++ 
  and OpenGL. Features body collisions, gravity, and click to spawn. 
  Using hand-written vectors, collision math, and orthographic projection. Base of my next project.`,
    tags: ["C++", "OpenGL", "CMAKE"],
    img: physic,
    link: "https://github.com/Rxn321/2D-Physics-Engine.git",
  },
  {
    title: "UBC Rocket",
    desc: `Designed and manufactured structural rocket components for the award winning UBC Rocket Cloudburst, 
    collaborating with engineering teams and gaining experience in design, fabrication, and technical documentation.`,
    tags: ["CAD", "FEA", "Project Management", "Manufacturing"],
    img: rocket,
    link: "https://www.ubcrocket.com/project-COTS.html",
  },
]