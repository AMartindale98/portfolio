/* eslint-disable react/no-unescaped-entities */
import { Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home({ collapseStyle, setCollapseStyle }) {
  return (
    <>
      <NavBar setCollapseStyle={setCollapseStyle} />
      <div
        className={`h-screen w-full bg-[url('/background-1.jpg')] bg-cover font-monoton transition-all ${
          collapseStyle ? "pt-[25vh]" : "pt-[40vh]"
        }`}
      >
        <div className="text-left flex flex-col content-center flex-wrap mt-5 p-3 backdrop-blur border-y border-slate-600/50 rounded">
          <h1 className="text-sky-200 w-fit fade-in">Hi there! I'm Ash</h1>
          <h5 className="text-slate-200 sm:w-[400px]">
            I am a front end developer passionate about mobile-first, responsive
            websites and implementing complex, scalable logic.
          </h5>
          <Link to="/projects" className="text-white no-underline m-auto">
            <Button variant="dark" className="w-fit mt-3">
              MY PROJECTS
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
