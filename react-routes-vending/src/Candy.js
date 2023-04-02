import React from "react";
import { NavLink } from "react-router-dom";
function Candy() {
  return (
    <div>
      <h1>Candy</h1>
      <img
        src="https://media4.giphy.com/media/68VbOiJLDUkYo/giphy.gif"
        alt="Candy"
      />
      <p>Sweet</p>
      <p>
        <NavLink exact to="/">
          Go Back
        </NavLink>
      </p>
    </div>
  );
}

export default Candy;
