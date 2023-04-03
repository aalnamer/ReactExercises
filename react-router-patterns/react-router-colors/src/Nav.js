import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colors">All Colors</Link>
      </li>
      <li>
        {" "}
        <Link to="/colors/new"> Add Color</Link>
      </li>
    </ul>
  );
}

export default Nav;
