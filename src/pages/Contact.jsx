/* eslint-disable no-unused-vars */
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form, Spinner } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

function Contact({ collapseStyle, setCollapseStyle }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_9ek71ef",
        "template_d9a0g0e",
        form.current,
        "7p5Pwz9wByIso4s75"
      )
      .then(
        () => {
          toast.success("Message successfully sent!");
          setIsLoading(false);
        },
        () => {
          toast.error(
            "There was an error sending your message. Please try again."
          );
          setIsLoading(false);
        }
      );
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <NavBar setCollapseStyle={setCollapseStyle} />
      <div
        className={`bg-slate-800 pb-5 px-2 transition-all sm:h-[86.5vh] ${
          collapseStyle ? "pt-[15vh]" : "pt-[35vh]"
        }`}
      >
        <Toaster
          containerStyle={{
            position: "absolute",
            top: "10vh",
          }}
        />
        {isLoading && (
          <div className="flex justify-center">
            <Spinner
              animation="border"
              variant="secondary"
              className="m-auto text-center"
            />
          </div>
        )}
        <h1 className="text-white font-monoton">Contact me</h1>
        <p className="text-white pb-3">
          At this time, I am only accepting front-end contract work. I have a
          preference for websites in React, but I am also interested in working
          on features for current codebases.
        </p>

        <Form
          className="sm:w-[60vw] p-4 sm:m-auto border-4 border-slate-500 bg-slate-200 "
          ref={form}
          onSubmit={sendEmail}
        >
          <h3>Please fill this form out for any business inquiries</h3>
          <Form.Group>
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              name="from_name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isLoading}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
              required
            />
          </Form.Group>
          <Button
            className="m-auto text-center mt-3"
            variant="dark"
            type="submit"
            disabled={isLoading}
          >
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
