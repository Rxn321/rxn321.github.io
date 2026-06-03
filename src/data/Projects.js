import rocket from "../assets/rocket-1.jpg"
import portfolio from "../assets/snow-1.PNG"
import finance from "../assets/plate.jpg"
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
    desc: `A full-stack quantitative finance application built in Python and React.
    The backend leverages yfinance for real-time market data ingestion, with statistical modeling including Sharpe Ratio, Value at Risk (VaR), Expected Shortfall (CVaR), 
    and Monte Carlo simulation to map the efficient frontier and identify optimal portfolio allocations`,
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
    desc: `Designed and manufactured structural rocket components for the UBC Rocket Cloudburst project, 
    collaborating with engineering teams and gaining experience in design, fabrication, and technical documentation.`,
    tags: ["CAD", "FEA", "Project Management", "Manufacturing"],
    img: rocket,
    link: "https://www.ubcrocket.com/project-COTS.html",
  },
]