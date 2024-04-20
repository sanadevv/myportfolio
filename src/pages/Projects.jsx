import React from "react";
// import projectsData from "../assets/projects/projectsData";
import argentBank from "../assets/projects/argent-bank.png";
import kasa from "../assets/projects/kasa.png";
import sohiebluel from "../assets/projects/sophiebluel.png";
import Project from "../components/Project";
import ProjectModal from "../components/ProjectModal";
const Projects = () => {
  return (
    <div className="projects">
      <h2>Discover my projects</h2>
      <div className="row">
        <Project
          modalId="#argent-bank"
          image={argentBank}
          alt="argent bank"
          title="Argent Bank"
          description="A website for a banking institution."
          skill1="React"
          skill2="Redux"
          skill3="Sass"
          link="https://github.com/sanadevv/oc-projet11"
        />
        <Project
          modalId="#kasa"
          image={kasa}
          alt="Kasa"
          title="Kasa"
          description="A website for a housing rental application."
          skill1="React"
          skill2="React router"
          skill3="Sass"
          link="https://github.com/sanadevv/oc-projet8"
        />
        <Project
          modalId="#sophie-bluel"
          image={sohiebluel}
          alt="Sophie Bluel"
          title="Sophie Bluel"
          description="Portfolio site of an interior designer."
          skill1="Javascript"
          skill2="HTML"
          skill3="CSS"
          link="https://github.com/sanadevv/oc-projet6"
        />
      </div>

      <ProjectModal
        id="argent-bank"
        title="Argent Bank"
        description=" In this project, I worked on the front-end development of a
        banking application using React and Redux to create a dynamic and
        responsive user experience. My main task was to integrate the
        front-end with the back-end through API calls. I wrote REST API
        calls to connect the two parts of the application, ensuring smooth
        communication between the client and the server. I used React to
        develop the user interface of the banking application, focusing on
        creating a comprehensive and responsive dashboard for users. Redux
        was used to manage the application's data. This allowed me to
        maintain a consistent global state throughout the application."
      />
      <ProjectModal
        id="kasa"
        title="Kasa"
        description="In this project, I implemented the front-end of an application
        using React and React Router to create a modern and responsive
        user experience. I worked on data presentation logic and React
        components. I used React Router to configure navigation between
        different pages of the application and employed SASS to manage CSS
        and implement CSS animations."
      />
      <ProjectModal
        id="sophie-bluel"
        title="Sophie Bluel"
        description="In this project, I worked on creating a dynamic web page for the
        website of an interior designer using JavaScript and communicating
        with an API. I focused on the Front-End part of the site, where I
        developed the presentation page of the designer's work from the
        provided HTML. This involved managing user events and manipulating
        DOM elements with JavaScript. I also created a login page for the
        site administrator as well as a modal for uploading new media. I
        used Figma to access the mockups, Visual Studio Code for
        development, and GitHub for version control of the project."
      />
    </div>
  );
};

export default Projects;
