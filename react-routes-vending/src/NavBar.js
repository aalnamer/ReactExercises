import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <p>
        <NavLink exact to="/chips">
          Chips
        </NavLink>
      </p>
      <p>
        <NavLink exact to="/soda">
          Soda
        </NavLink>
      </p>
      <p>
        <NavLink exact to="/candy">
          Candy
        </NavLink>
      </p>
    </nav>
  );
}

export default NavBar;
