import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [form, updateForm] = useState({ colors: "" });
  const history = useHistory();

  function handleChange(e) {
    e.persist();
    updateForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor(form.colors);
    history.push("/colors");
  }

  const { color } = form;

  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="colors">Color name</label>
          <input
            name="colors"
            id="colors"
            placeholder="Enter color name"
            onChange={handleChange}
            value={color}
          />
        </div>
        <input type="Submit" />
      </form>
    </div>
  );
}

export default NewColorForm;
