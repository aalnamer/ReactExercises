import React from "react";
import { NavLink } from "react-router-dom";
function Soda() {
  return (
    <div>
      <h1>Soda</h1>
      <img
        src="https://media.tenor.com/DtzyrD92obIAAAAC/coke-cocacola.gif"
        alt="Drinking Soda"
      />
      <p>So tasty!</p>
      <p>
        <NavLink exact to="/">
          Go Back
        </NavLink>
      </p>
    </div>
  );
}

export default Soda;
