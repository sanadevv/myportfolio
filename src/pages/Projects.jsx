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
          <div className="card">
            <img
              src={argentBank}
              className="card-img-top .img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Argent Bank</h5>
              <p className="card-text">A website for a banking institution.</p>
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
        </div>
        <div className="col-sm-6 mb-3 mb-sm">
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
        </div>
        <div className="col-sm-6 mb-3 mb-sm">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
