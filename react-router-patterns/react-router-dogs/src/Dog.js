import React from "react";
import { useParams } from "react-router-dom";
import "./Dog.css";

function Dog({ dogs }) {
  const { name } = useParams();
  console.log({ dogs });

  const dogDetail = dogs.filter((obj) => {
    return obj.name === name;
  });

  return (
    <div>
      <h1>Say hello to {dogDetail[0].name}! </h1>
      <img src={dogDetail[0].src}></img>
    </div>
  );
}

export default Dog;
