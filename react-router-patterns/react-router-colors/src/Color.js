import React from "react";
import { useParams } from "react-router-dom";

function Color({ colors }) {
  const { color } = useParams();
  console.log({ colors });
  const each = colors.colors;
  console.log(each);
  console.log(typeof each);

  return (
    <div>
      <h1 style={{ backgroundColor: color }}>Color: {color}</h1>
    </div>
  );
}

export default Color;
