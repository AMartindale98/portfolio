import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Suspense, useState } from "react";
import { Spinner } from "react-bootstrap";

//general next (9/28): logo then deploy. i want to see if the navbar behavior persists when deployed.

function App() {
  const [collapseStyle, setCollapseStyle] = useState(true);
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Spinner
            animation="border"
            role="status"
            variant="light"
            className="m-auto"
          ></Spinner>
        }
      >
        <Routes>
          <Route
            index
            element={
              <Home
                collapseStyle={collapseStyle}
                setCollapseStyle={setCollapseStyle}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                collapseStyle={collapseStyle}
                setCollapseStyle={setCollapseStyle}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                collapseStyle={collapseStyle}
                setCollapseStyle={setCollapseStyle}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                collapseStyle={collapseStyle}
                setCollapseStyle={setCollapseStyle}
              />
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
