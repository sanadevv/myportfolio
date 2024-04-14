import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to={"/"}>
        <div className="logo">Portfolio</div>
      </NavLink>
      <nav className="nav">
        <ul>
          <NavLink to={"/projects"}>
            <li>Projects</li>
          </NavLink>
          <NavLink to={"/skills"}>
            <li>Skills</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
