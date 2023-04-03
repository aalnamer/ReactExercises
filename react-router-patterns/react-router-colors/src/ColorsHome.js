import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import NewColorForm from "./NewColorForm";

function ColorsHome({ colors }) {
  console.log(colors);
  const renderColors = () => {
    return (
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Our Colors!</h1>
      <ul>{renderColors()}</ul>
    </div>
  );
}

export default ColorsHome;
