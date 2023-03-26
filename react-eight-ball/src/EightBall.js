import React from "react";
import { useState } from "react";

import "./EightBall.css";

function response(arr) {
  const genRandomIdx = Math.floor(Math.random() * arr.length);
  return arr[genRandomIdx];
}

const EightBall = (props) => {
  const [msg, setMsg] = useState("Think of a Question.");
  const [color, setColor] = useState("black");

  function click() {
    const { msg, color } = response(props.answers);
    setMsg(msg);
    setColor(color);
  }
  return (
    <div
      className="EightBall"
      onClick={click}
      style={{ backgroundColor: color }}
    >
      <b>{msg}</b>
    </div>
  );
};

export default EightBall;
