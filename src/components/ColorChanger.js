import React from 'react';

export default function ColorChanger(props) {
  return (
    <select
      className="dropDownContainer"
      onChange={(e) => props.update(e.target.value)}
    // no "this" on functional component (here we are not in a CLASS)
    >
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </ select>
  )
}