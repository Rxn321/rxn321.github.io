import rocket from "../assets/plate.jpg"
import portfolio from "../assets/plate.jpg"
import finance from "../assets/plate.jpg"
// edit desc soon
export const projects = [
  {
    title: "📍Portfolio Website📍",
    desc: `Built a responsive portfolio website using React and Tailwind CSS to showcase projects and technical skills.`,
    tags: [ "React", "Tailwind", "Frontend", "UI/UX"],
    img: portfolio,
    link: "https://github.com/Rxn321/Portfolio-Website",
  },
  {
    title: "Portfolio Optimization",
    desc: `Developed a Python-based portfolio optimization tool for analyzing financial data and improving risk-adjusted returns. 
        Processed historical stock data and applied quantitative methods to evaluate asset performance and optimize allocations. 
        Focused on data handling, statistical analysis, and financial modeling techniques.`,
    tags: ["Python", "Data Science", "Finance", "Optimization"],
    img: finance,
    link: "https://github.com/Rxn321/Portfolio-Optimization",
  },
  {
    title: "smtsmt",
    desc: "blahhblahhblahh",
    tags: ["CAD", "FEA"],
    img: rocket,
    link: "",
  },
  {
    title: "UBC Rocket",
    desc: `Contributed to the UBC Rocket team on the Cloudburst rocket project,
        Designed and manufactured structural components.
        Collaborated with multidisciplinary subteams to ensure design requirements were met
        and aligned with fabrication constraints.
        Developed experience in engineering documentation, design iteration, and team coordination
        in a real development environment.`,
    tags: ["CAD", "FEA", "Project Management", "Manufacturing"],
    img: rocket,
    link: "https://www.ubcrocket.com/project-COTS.html",
  },
]