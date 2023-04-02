import React from "react";
import { NavLink } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <img
        src="https://media.tenor.com/t767m76I9WAAAAAC/lays-chips-potato-chips.gif"
        alt="Ruffle Chips"
      />
      <p>Crunchy</p>
      <p>
        <NavLink exact to="/">
          Go Back
        </NavLink>
      </p>
    </div>
  );
}

export default Chips;
