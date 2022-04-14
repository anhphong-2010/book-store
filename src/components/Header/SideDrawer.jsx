import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.scss";
export default function SideDrawer(props) {
  let drawClasses = ["side-drawer"];
  if (props.show) {
    drawClasses = ["side-drawer open"];
  }
  return (
    <nav className={drawClasses}>
      <ul className="side-drawer__list">
        <li className="side-drawer__item">
          <NavLink className="side-drawer__link" to="/">
            Books
          </NavLink>
        </li>
        <li className="side-drawer__item">
          <NavLink className="side-drawer__link" to="/login">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
