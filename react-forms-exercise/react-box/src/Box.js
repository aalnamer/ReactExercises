import React from "react";
import "./Box.css";

const Box = ({ width, height, backgroundColor, id, handleRemove }) => {
  const remove = () => handleRemove(id);
  return (
    <div
      className="box"
      style={{
        backgroundColor: backgroundColor,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      Box {id}
      <div>
        <button onClick={remove}>Remove This Box!</button>
      </div>
    </div>
  );
};

export default Box;
