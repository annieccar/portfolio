import { useState } from "react";
import NavBar from "../components/NavBar";
import Presentation from "../components/Presentation";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactForm from "../components/GetInTouch";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <div className="sections">
        <Presentation />
        <AboutMe />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default Home;
