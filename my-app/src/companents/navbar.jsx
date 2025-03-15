import React from "react";
import "../navbar.css";
function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="nav_brand">
        herdoy
      </a>
      <ul className="nav_menu">
        <li className="nav_item">
          {" "}
          <a href="#" className="nav_link">
            Home
          </a>
        </li>
        <li className="nav_item">
          {" "}
          <a href="#" className="nav_link">
            about
          </a>
        </li>
        <li className="nav_item">
          {" "}
          <a href="#" className="nav_link">
            skills
          </a>
        </li>
        <li className="nav_item">
          {" "}
          <a href="#" className="nav_link">
            portifolio
          </a>
        </li>
        <li className="nav_item">
          {" "}
          <a href="#" className="nav_link">
            contact
          </a>
        </li>
        <li className="nav_item">
          {" "}
          <a href="#" className="nav_link">
            contact
          </a>
        </li>
      </ul>
      <div className="nav_taggler">
        <div className="liner1"></div>
        <div className="liner2"></div>
        <div className="liner3"></div>
      </div>
    </nav>
  );
}
export default Navbar;
