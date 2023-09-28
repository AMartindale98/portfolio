/* eslint-disable no-unused-vars */
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "Bartender Buddy",
    description:
      "A site created with vanilla Javascript and Bootstrap using MVC pattern. Uses third-party API for data fetching.",
    link: "https://cocktail-recipe-site.ashleymartindal.repl.co/",
    previewPic: "/cocktail-site.PNG",
    tech: ["Javascript", "HTML", "CSS", "Bootstrap"],
  },
  {
    name: "One-stop shop",
    description:
      "SPA using CRA and Bootstrap. Uses a third-party API for data fetching. Uses basic user authentication. Utilizes React Router and useReducer for state management. Created custom hooks for reusability and data fetching throughout site.",
    link: "https://online-shop-cra.netlify.app",
    gitHub: "https://github.com/AMartindale98/online-shop-cra",
    previewPic: "/online-shop-site.PNG",
    tech: ["React", "Javascript", "HTML", "CSS", "Bootstrap"],
  },
];

const finalLearningProjects = [
  {
    name: "Forkify",
    description:
      "Final project for Javascript course. Uses MVC for state management. Uses third-party API for data fetching.",
    link: "https://forkify-practice-ash.netlify.app/",
    gitHub: "https://github.com/AMartindale98/forkify-practice",
    previewPic: "/forkify-site.PNG",
    tech: ["Javascript", "HTML", "CSS"],
  },
  {
    name: "The Wild Oasis",
    description:
      "Final project for React course. Vite app. Uses React Router, Styled Components, React Query, and custom hooks.",
    link: "https://the-wild-oasis-practice-site.netlify.app/login",
    gitHub: "https://github.com/AMartindale98/The-wild-oasis",
    previewPic: "/wild-oasis-site.PNG",
    tech: ["React", "Javascript", "HTML", "CSS"],
  },
];

function Projects({ collapseStyle, setCollapseStyle }) {
  return (
    <>
      <NavBar setCollapseStyle={setCollapseStyle} />
      <div
        className={`bg-slate-800 text-white px-3 pb-3 transition-all ${
          collapseStyle ? "pt-[20vh]" : "pt-[40vh]"
        }`}
      >
        <h1 className="font-monoton border-b-2 border-slate-400 pb-2">
          My Projects
        </h1>
        <div className="sm:flex sm:justify-around sm:gap-2">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
        <h1 className="font-monoton mt-5 border-b-2 border-slate-400 pb-2">
          Course Final Projects
        </h1>
        <div className="sm:flex sm:justify-around sm:gap-2">
          {finalLearningProjects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
