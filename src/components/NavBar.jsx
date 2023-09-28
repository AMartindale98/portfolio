import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

//there's a weird transition happening in the navbar when in mobile mode.

function NavBar({ setCollapseStyle }) {
  const { innerWidth: width } = window;

  return (
    <Navbar
      expand="md"
      fixed="top"
      className="bg-slate-950 p-4 border-slate-700 border-b-4 font-monoton"
    >
      <Navbar.Toggle
        aria-controls="portfolio-nav"
        data-bs-theme="dark"
        onClick={() => width <= 768 && setCollapseStyle((style) => !style)}
      />
      <img src="/logo.PNG" alt="Logo" className="w-[50px]" />
      <Navbar.Collapse id="portfolio-nav">
        <Nav className="w-full md:flex md:justify-end md:flex-row flex flex-col content-start !items-start ps-2 flex-wrap ms-0 md:me-4">
          <Link
            to="/"
            className="md:px-3 py-1 text-left no-underline text-slate-200 hover:text-slate-300 transition-all hover:scale-105"
            onClick={() => width <= 768 && setCollapseStyle((style) => !style)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="md:px-3 py-1 no-underline text-slate-200 hover:text-slate-300 transition-all hover:scale-105 "
            onClick={() => width <= 768 && setCollapseStyle((style) => !style)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="md:px-3 py-1 no-underline text-slate-200 hover:text-slate-300 transition-all hover:scale-105 "
            onClick={() => width <= 768 && setCollapseStyle((style) => !style)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="md:px-3 py-1 no-underline text-slate-200 hover:text-slate-300 transition-all hover:scale-105 "
            onClick={() => width <= 768 && setCollapseStyle((style) => !style)}
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
