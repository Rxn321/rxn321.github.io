import rocket from "../assets/rocket.avif"
import portfolio from "../assets/sb.avif"
import optimize from "../assets/optimization.avif"
import physic from "../assets/physicsEngineV0.2.avif"
import temp from "../assets/openRocket.avif"


export const projects = [
  {
    title: "📍Moments📍",
    desc: `A visual collection of the things I've been building, exploring, and enjoying.`,
    tags: [ "TypeScript", "React", "UI/UX"],
    img: portfolio,
    link: "https://ryntyl-blog.vercel.app/",
  },
  {
    title: "Portfolio Optimization",
    desc: `A Python/Streamlit portfolio analysis application that retrieves historical market data,
    applies statistical analysis and Monte Carlo simulations, and uses mathematical optimization to evaluate portfolio allocations and risk.`,
    tags: ["Python",  "Data Analysis", "Monte Carlo", "Portfolio Theory"],
    img: optimize,
    link: "https://github.com/Rxn321/Portfolio-Optimization",
  },
  {
    title: "Physics Engine",
    desc: `A C++/OpenGL physics engine simulating N-body gravitational interactions and orbital motion using Newtonian gravity, 
    semi-implicit Euler integration, and vector mathematics, with real-time 3D visualization of gravity wells and particle trails.`,
    tags: ["C++", "OpenGL", "Physics Simulation", "Numerical Methods"],
    img: physic,
    link: "https://github.com/Rxn321/2D-Physics-Engine.git",
  },
  {
    title: "UBC Rocket",
    desc: `Designed and manufactured structural rocket components for UBC Rocket's competition rocket Cloudburst. 
    Cloudburst placed 5th in the 30K COTS category at the 2026 International Rocket Engineering Competition (IREC), 
    the world's largest collegiate rocket engineering competition.`,    
    tags: ["CAD", "FEA", "Competition", "Manufacturing"],
    img: rocket,
    link: "https://www.ubcrocket.com/project-COTS.html",
  },
  {
    title: "Certification Rocket",
    desc: `Putting IREC experience to use, designing and developing a high-power model rocket for L1 and L2 certification, 
    including structural design, 3D-printed components, flight simulation, and recovery systems.`,
    tags: ["Rocketry", "Design", "3D Printing", "Simulation"],
    img: temp,
    link: "",
  },
]