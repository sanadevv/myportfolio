import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <NavLink to={"/"} activeclassname="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"} activeclassname="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={"/skills"} activeclassname="active">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
