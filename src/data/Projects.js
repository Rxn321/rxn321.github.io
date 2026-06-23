import rocket from "../assets/cloudburst.JPG"
import portfolio from "../assets/snow-1.PNG"
import finance from "../assets/cloudburst.JPG"
import optimize from "../assets/optimization_output.png"
import physic from "../assets/hero.png"

// edit desc soon
export const projects = [
  {
    title: "📍Portfolio Website📍",
    desc: `You are here!`,
    tags: [ "React", "Tailwind", "Frontend", "UI/UX"],
    img: portfolio,
    link: "https://github.com/Rxn321/Portfolio-Website",
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
  desc: `⚠️IN PROGRESS⚠️ 2D physics engine in Python simulating rigid body dynamics, collision detection, and response.`,
    tags: ["Python", "TypeScript"],
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