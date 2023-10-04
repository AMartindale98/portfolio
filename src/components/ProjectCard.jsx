import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Card className="sm:w-[400px] !bg-slate-300 my-4">
      <Card.Title className="py-3 text-center !text-slate-700 font-monoton">
        <h4 className="pb-2">{project.name.toUpperCase()}</h4>
        <img
          src={project.previewPic}
          alt="Preview of site homepage"
          className="border-y-4 border-slate-700 mb-3 cursor-pointer"
          onClick={() => (window.location.href = project.link)}
        />
      </Card.Title>
      <Card.Body className="!text-slate-700">
        <p className="h-3/6">{project.description}</p>
        <div className="!flex !justify-center gap-5 h-3/6 !items-end">
          <Link
            to={project.link}
            className="text-black w-[32px] hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-link"
              viewBox="0 0 16 16"
            >
              <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
              <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
            </svg>
          </Link>

          <Link to={project.gitHub} className="text-black hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Link>
        </div>
      </Card.Body>
      <Card.Footer className="mt-2 !flex !justify-center gap-1">
        {project.tech.map((item) => (
          <Badge bg="secondary" key={item}>
            {item}
          </Badge>
        ))}
      </Card.Footer>
    </Card>
  );
}

export default ProjectCard;
