import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <ReactTyped
          strings={[
            "Welcome to my Portfolio",
            "I am a front end developper web",
            "REACT REDUX ",
          ]}
          typeSpeed={40}
          backSpeed={50}
          className="typed-text"
          loop
        />
        {/* <h1>Welcome to my Portfolio</h1> */}
        <p>
          Hello! I'm Sana, a skilled web developer proficient in React, Redux,
          CSS, HTML, and JavaScript. I specialize in creating engaging user
          experiences with animations and frameworks like Bootstrap. Let's bring
          your digital ideas to life!
        </p>
      </div>
    </div>
  );
};

export default Home;
