import React from "react";
import { Select } from "../Style/styles.js";

const DropDown = ({ defaultValue, changeQuantity }) => {
  const handleChange = (e) => {
    changeQuantity(e.target.value);
  };


  return (
    <Select
      name="Quantity"
      value={defaultValue}
      onChange={(e) => handleChange(e)}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </Select>
  );
};

export default DropDown;
