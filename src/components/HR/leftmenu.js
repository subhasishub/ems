import React from "react";
import "../HR/hr.css";

const LeftMenu = (props) => {
  return (
    <div className="left-menu-container">
      <ul class="menu-items">
        <li
          className={props.compName === "basicDetails" ? "active" : null}
          onClick={(e) => props.listener("basicDetails")}
        >
          Basic Details
        </li>
        <li
          className={props.compName === "educationDetails" ? "active" : null}
          onClick={(e) => props.listener("educationDetails")}
        >
          Education Details
        </li>
        <li>Basic Details</li>
        <li>Identification Details</li>
        <li>Basic Details</li>
        <li>Identification Details</li>
      </ul>
    </div>
  );
};

export default LeftMenu;
