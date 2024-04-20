// import React from "react";

import css from "../assets/skills/css.jpeg";
import react from "../assets/skills/react.png";
import html from "../assets/skills/html.webp";
// import figma from "../assets/skills/figma.png";
// import javascript from "../assets/skills/javascript.png";
import sass from "../assets/skills/sass.webp";
import reactRouter from "../assets/skills/react-router.png";
import redux from "../assets/skills/redux.png";

const Skills = () => {
  return (
    <main className="container">
      <h1>My skills</h1>
      <div className="container text-center">
        <div className="row ">
          <div className="col-lg-4 col-md-6">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card">
                    <img src={react} className="card-img-top" alt="react" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">React</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card">
                    <img src={redux} className="card-img-top" alt="react" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">Redux</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card">
                    <img
                      src={reactRouter}
                      className="card-img-top"
                      alt="react"
                    />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">React router</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card">
                    <img src={sass} className="card-img-top" alt="react" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">Sass</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card">
                    <img src={css} className="card-img-top" alt="react" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">CSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card">
                    <img src={html} className="card-img-top" alt="react" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">HTML</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
