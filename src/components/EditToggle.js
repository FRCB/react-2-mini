import React from 'react';

export default function EditToggle(props) {
  return (
    <select
      className="dropDownContainer ml0"
      onChange={(e) => props.update(e.target.value)}
    // no "this" on functional component (here we are not in a CLASS)
    >
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}