import { useState } from "react";
import NavBar from "../components/NavBar";
import Presentation from "../components/Presentation";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactForm from "../components/GetInTouch";
import Menu from "../components/Menu";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="sections">
        <Presentation />
        <AboutMe />
        <Projects />
        <ContactForm/>
      </div>
    </>
  );
}

export default Home;
