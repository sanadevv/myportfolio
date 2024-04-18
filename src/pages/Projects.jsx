import React from "react";
// import projectsData from "../assets/projects/projectsData";
import argentBank from "../assets/projects/argent-bank-acceuil.png";
import kasa from "../assets/projects/kasa.png";
import sohiebluel from "../assets/projects/sophiebluel.png";
const Projects = () => {
  return (
    <div className="projects">
      <h2>Discover my projects</h2>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#argent-bank"
          >
            <div className="card">
              <img
                src={argentBank}
                className="card-img-top .img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Argent Bank</h5>
                <p className="card-text">
                  A website for a banking institution.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React</li>
                <li className="list-group-item">Redux</li>
                <li className="list-group-item">sass</li>
              </ul>
              <div className="card-body">
                <a
                  href="https://github.com/sanadevv/oc-projet11"
                  className="card-link"
                >
                  Guithub
                </a>
                <a href="f" className="card-link">
                  Demo
                </a>
              </div>
            </div>
          </button>
        </div>
        <div className="col-sm-6 mb-3 mb-sm">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kasa"
          >
            <div className="card">
              <img src={kasa} className="card-img-top .img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Kasa</h5>
                <p className="card-text">
                  A website for a housing rental application.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React</li>
                <li className="list-group-item">React router</li>
                <li className="list-group-item">sass</li>
              </ul>
              <div className="card-body">
                <a
                  href="https://github.com/sanadevv/oc-projet8"
                  className="card-link"
                >
                  Guithub
                </a>
                <a href="f" className="card-link">
                  Demo
                </a>
              </div>
            </div>
          </button>
        </div>
        <div className="col-sm-6 mb-3 mb-sm">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#sophie-bluel"
          >
            <div className="card">
              <img
                src={sohiebluel}
                className="card-img-top .img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Sophie Bluel</h5>
                <p className="card-text">
                  Portfolio site of an interior designer.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Javascript</li>
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
              </ul>
              <div className="card-body">
                <a
                  href="https://github.com/sanadevv/oc-projet6"
                  className="card-link"
                >
                  Guithub
                </a>
                <a href="f" className="card-link">
                  Demo
                </a>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="argent-bank"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Argent Bank
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              In this project, I worked on the front-end development of a
              banking application using React and Redux to create a dynamic and
              responsive user experience. My main task was to integrate the
              front-end with the back-end through API calls. I wrote REST API
              calls to connect the two parts of the application, ensuring smooth
              communication between the client and the server. I used React to
              develop the user interface of the banking application, focusing on
              creating a comprehensive and responsive dashboard for users. Redux
              was used to manage the application's data. This allowed me to
              maintain a consistent global state throughout the application.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="kasa"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Kasa
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              In this project, I implemented the front-end of an application
              using React and React Router to create a modern and responsive
              user experience. I worked on data presentation logic and React
              components. I used React Router to configure navigation between
              different pages of the application and employed SASS to manage CSS
              and implement CSS animations.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="sophie-bluel"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sophie Bluel
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              In this project, I worked on creating a dynamic web page for the
              website of an interior designer using JavaScript and communicating
              with an API. I focused on the Front-End part of the site, where I
              developed the presentation page of the designer's work from the
              provided HTML. This involved managing user events and manipulating
              DOM elements with JavaScript. I also created a login page for the
              site administrator as well as a modal for uploading new media. I
              used Figma to access the mockups, Visual Studio Code for
              development, and GitHub for version control of the project.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
