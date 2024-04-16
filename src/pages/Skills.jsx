import React from "react";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import html from "../assets/skills/html.png";
import figma from "../assets/skills/figma.png";
import javascript from "../assets/skills/javascript.png";
import sass from "../assets/skills/sass.webp";
import reactRouter from "../assets/skills/react-router.png";
import vscode from "../assets/skills/vscode.png";
import redux from "../assets/skills/redux.png";

const Skills = () => {
  return (
    <div className="skills-container">
      <img src={css} alt="logo css" />
      <img src={html} alt="logo html" />
      <img src={react} alt="logo react" />
      <img src={redux} alt="logo redux" />
      <img src={vscode} alt="logo vscode" />
      <img src={figma} alt="logo figma" />
      <img src={javascript} alt="logo javascript" />
      <img src={reactRouter} alt="logo react-router" />
      <img src={sass} alt="logo sass" />
    </div>
  );
};

export default Skills;
