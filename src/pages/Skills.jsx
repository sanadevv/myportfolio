import React from "react";

import css from "../assets/skills/css.jpeg";
import react from "../assets/skills/react.png";
// import html from "../assets/skills/html.webp";
// import figma from "../assets/skills/figma.png";
import javascript from "../assets/skills/javascript.png";
import sass from "../assets/skills/sass.webp";
import reactRouter from "../assets/skills/react-router.png";
import redux from "../assets/skills/redux.png";
import Skill from "../components/Skill";
const Skills = () => {
  return (
    <main className="container">
      <h1>My skills</h1>
      <div className="container text-center">
        <div className="row ">
          <Skill image={react} alt="react logo" text="React" />
          <Skill image={redux} alt="redux log" text="Redux" />
          <Skill
            image={reactRouter}
            alt="react router logo"
            text="React router"
          />
          <Skill image={css} alt="css logo" text="CSS" />
          <Skill image={sass} alt="sass logo" text="SASS" />
          <Skill image={javascript} alt="javascript logo" text="JS" />
        </div>
      </div>
    </main>
  );
};

export default Skills;
