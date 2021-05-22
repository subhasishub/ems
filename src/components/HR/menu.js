import React from "react";

const HrMenu = (props) => {
  return (
    <div className="hr-menu">
      <ul>
        <li onClick={(e) => props.menuHandler("addEmployee")}>Add Employee</li>
        <li onClick={(e) => props.menuHandler("viewEmployee")}>
          View Employee
        </li>
        <li onClick={(e) => props.menuHandler("viewEmployee")}>Compliances</li>
        <li onClick={(e) => props.menuHandler("viewEmployee")}>Exit process</li>
        <li onClick={(e) => props.menuHandler("viewEmployee")}>Dashboard</li>
        <li onClick={(e) => props.menuHandler("viewEmployee")}>Calendar</li>
        <li onClick={(e) => props.menuHandler("viewEmployee")}>Attendance</li>
      </ul>
    </div>
  );
};

export default HrMenu;
