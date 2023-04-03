import React from "react";
import NewColorForm from "./NewColorForm";

function ColorForm() {
  return (
    <div>
      <NewColorForm addColor={addColor} />
    </div>
  );
}

export default ColorForm;
