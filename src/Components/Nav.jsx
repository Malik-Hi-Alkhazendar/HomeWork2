import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="fixed-top">
      <div className="brand-name">
        <a href="/">Space Groove</a>
      </div>
      <div>
        <ul className="Nav-links">
          <li>
            <a href="#Landing">About</a>
          </li>
          <li>
            <a href="#Product">Product</a>
          </li>
          <li className="dropdown">
            <a href="#Contact">Contact</a>
            <div className="dropdown-content">
              <a href="#Contact1">Contact 1</a>
              <a href="#Contact2">Contact 2</a>
              <a href="#Contact3">Contact 3</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
