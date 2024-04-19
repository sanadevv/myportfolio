import React from "react";
import { ReactTyped } from "react-typed";
// import Particles from "react-particles";
const Home = () => {
  return (
    <>
      {/* <Particles
        params={{
          particles: {
            number: { value: 30, density: { enable: true, value_area: 900 } },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#442138",
              },
            },
          },
        }}
      /> */}
      <div className="home-container">
        <div className="intro">
          <h1>Front End Web Developper</h1>
          <ReactTyped
            strings={["REACT", "REDUX", "JAVASCRIPT", "CSS ANIMATION"]}
            typeSpeed={40}
            backSpeed={50}
            className="typed-text"
            loop
          />
          {/* <h1>Welcome to my Portfolio</h1> */}
          <p>
            Hello! I'm Sana, a skilled web developer proficient in React, Redux,
            CSS, HTML, and JavaScript. I specialize in creating engaging user
            experiences with animations and frameworks like Bootstrap. I've also
            completed training at OpenClassrooms. Let's bring your digital ideas
            to life!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
