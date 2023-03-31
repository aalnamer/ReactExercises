import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // When submit is clicked, it sets addBox
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">New Box</label>
      <input
        id="width"
        type="number"
        name="width"
        placeholder="Box Width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="number"
        name="height"
        placeholder="Box height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Color</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        placeholder="Box Color"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
