import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-color bg-light">
        <div className="container-fluid">
          <h1 className="logo">
            <span className="navbar-brand mb-0 h1">Portfolio</span>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className="nav-link"
                  aria-current="page"
                  activeclassname="active"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/projects"}
                  className="nav-link"
                  activeclassname="active"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/skills"}
                  className="nav-link"
                  activeclassname="active"
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/contact"}
                  className="nav-link"
                  activeclassname="active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
