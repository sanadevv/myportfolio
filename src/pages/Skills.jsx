import React from "react";
import css from "../assets/skills/css.jpeg";
import react from "../assets/skills/react.png";
import html from "../assets/skills/html.webp";
import figma from "../assets/skills/figma.png";
import javascript from "../assets/skills/javascript.png";
import sass from "../assets/skills/sass.webp";
import reactRouter from "../assets/skills/react-router.png";
// import vscode from "../assets/skills/vscode.png";
import redux from "../assets/skills/redux.png";

const Skills = () => {
  return (
    <main>
      <div className="skill-container">
        <h1>Skills</h1>
        <div className="row">
          <div class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={react} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <p>REACT</p>
              </div>
            </div>
          </div>
          <div class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={redux} alt="redux" />
              </div>
              <div class="flip-card-back">
                <p>REDUX</p>
              </div>
            </div>
          </div>
          <div class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={javascript} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <p>JS</p>
              </div>
            </div>
          </div>
          <div class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={sass} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <p>SASS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={html} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <p>HTML</p>
              </div>
            </div>
          </div>
          <div class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={reactRouter} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <p>React router</p>
              </div>
            </div>
          </div>
          <div class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={css} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={figma} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <p>FIGMA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
