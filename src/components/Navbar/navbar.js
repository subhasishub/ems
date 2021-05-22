import React from "react";
import "../../resources/global.css";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav>
      <div className="logo">Tedroox</div>
      <div className="menu">
        <ul>
          <li>Profile</li>
          <li>
            <Link className="link" to="/hr">
              HR
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
