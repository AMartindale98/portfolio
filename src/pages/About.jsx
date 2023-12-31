/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import { Button, Card } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

/*        <Card className="!bg-slate-200 w-[325px] sm:w-[350px] m-auto">
<Card.Title>
<img src="/nyx-2.png" className="h-fit w-fit" />
</Card.Title>
<Card.Body className="text-center m-auto w-fit">
Nyx's favorite hobby is distracting me from coding.
</Card.Body>
</Card> */

function About({ collapseStyle, setCollapseStyle }) {
  return (
    <>
      <NavBar setCollapseStyle={setCollapseStyle} />
      <div
        className={`bg-slate-800 h-full w-full pt-[20vh] text-white px-3 transition-all ${
          collapseStyle ? "pt-[20vh]" : "pt-[40vh]"
        }`}
      >
        <div>
          <h1 className="font-monoton text-slate-300">About Me</h1>
          <p className="md:w-[50vw] xl:w-[70vw]">
            I am a front end developer, and I love working on projects that
            challenge me, both in logic and creativity. I prefer to build
            websites that are responsive and mobile-first. Additionally, I love
            creating reusable and scalable components that I can use later in
            other projects. I enjoy working with data and love finding new APIs
            to implement in my projects.
          </p>
          <p className="md:w-[50vw] xl:w-[70vw]">
            Although coding is a passion of mine, it is not the only one I have!
            In my free time, I enjoy playing video games, working out, reading,
            writing, and spending time with my cat, Nyx. On the weekends, you
            can find me eating at a new restaurant in the city, looking for a
            good horror movie for a movie night with friends, or checking out a
            local show.
          </p>
        </div>

        <div className="flex justify-center items-center my-32 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-code"
            viewBox="0 0 16 16"
          >
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
          </svg>

          <div className="border-1 w-[150px] sm:w-[20vw] border-slate-300"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-code-slash"
            viewBox="0 0 16 16"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
        </div>
        <div>
          <h1 className="font-monoton text-slate-300"> Technical Skills</h1>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4">
            <Card className="!bg-slate-200 p-2 my-3">
              <Card.Title className="flex items-center gap-2 !border-b-2 border-slate-700 pb-2">
                <span className="w-fit">HTML & CSS </span>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/nolan/64/code--v2.png"
                  alt="code--v2"
                />
              </Card.Title>
              <Card.Body>
                <p className="h-4/6">
                  I have an advanced knowledge of HTML and CSS. I am adept with
                  CSS Flexbox and Grid, animations, and transitions. I find
                  accessibility and responsiveness incredibly important, and I
                  constantly search for ways to improve my code in these realms.
                </p>
                <div className="h-3/6 flex">
                  <Button variant="dark" className="!m-auto">
                    <Link className="text-white no-underline" to="/projects">
                      View my projects
                    </Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="!bg-slate-200 p-2 my-3">
              <Card.Title className="flex items-center gap-2 !border-b-2 border-slate-700 pb-2">
                <span className="w-fit">Javascript</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                  <path
                    fill="#000001"
                    d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                  ></path>
                </svg>
              </Card.Title>
              <Card.Body>
                <p className="h-4/6">
                  Javascript is the main programming language I use, and I even
                  have projects in vanilla JS. I am proficient in both
                  object-oriented programming and functional programming. I am
                  familiar with more advanced Javascript functions, such as
                  closures, async functions, IIFEs, and hoisting.
                </p>
                <div className="h-3/6 flex">
                  <Button variant="dark" className="!m-auto">
                    <Link className="text-white no-underline" to="/projects">
                      View my projects
                    </Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="!bg-slate-200 p-2 my-3">
              <Card.Title className="flex items-center gap-2 !border-b-2 border-slate-700 pb-2">
                <span className="w-fit">React</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="#4e7ab5"
                    d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"
                  ></path>
                  <path
                    fill="#4e7ab5"
                    d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"
                  ></path>
                  <path
                    fill="#4e7ab5"
                    d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"
                  ></path>
                  <path
                    fill="#8bb7f0"
                    d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
                  ></path>
                  <path
                    fill="#4e7ab5"
                    d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
                  ></path>
                  <path
                    fill="#8bb7f0"
                    d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"
                  ></path>
                  <path
                    fill="#8bb7f0"
                    d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"
                  ></path>
                  <g>
                    <path
                      fill="#8bb7f0"
                      d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"
                    ></path>
                  </g>
                </svg>
              </Card.Title>
              <Card.Body>
                <p className="h-4/6">
                  My favorite framework for front-end development is React,
                  which is reflected in my portfolio projects. While I have
                  coded with vanilla React, I prefer to utilize libraries such
                  as Redux, React Router, and React Query to manage complex
                  state more easily.
                </p>
                <div className="h-3/6 flex">
                  <Button variant="dark" className="!m-auto">
                    <Link className="text-white no-underline" to="/projects">
                      View my projects
                    </Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="flex justify-center items-center my-32 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-code"
            viewBox="0 0 16 16"
          >
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
          </svg>

          <div className="border-1 w-[150px] sm:w-[20vw] border-slate-300"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-code-slash"
            viewBox="0 0 16 16"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
        </div>
        <div className="flex-col flex pb-5">
          <h1 className="font-monoton text-slate-300">Certifications</h1>
          <a
            href="https://www.udemy.com/certificate/UC-920c4af0-3414-4c7d-b4d9-53717d850db8/"
            className="pb-2 w-fit hover:text-slate-300 text-slate-50"
          >
            Udemy: The Complete Javascript Course 2023
          </a>
          <a
            href="https://www.udemy.com/certificate/UC-49cfe9cf-eacb-42f9-804a-abd1f7784eac/"
            className="pb-2 w-fit hover:text-slate-300 text-slate-50"
          >
            Udemy: The Ultimate React Course 2023
          </a>
          <a
            href="https://www.freecodecamp.org/certification/AshMartindale/responsive-web-design"
            className="w-fit hover:text-slate-300 text-slate-50"
          >
            freeCodeCamp: Responsive Web Design
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
