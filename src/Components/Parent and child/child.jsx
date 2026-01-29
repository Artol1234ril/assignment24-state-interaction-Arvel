import React from "react";

export default function ChildInput({ value, onChange }) {
  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        value={value}              // controlled by Parent
        onChange={(e) => onChange(e.target.value)} // send updates up
        placeholder="Type something..."
      />
    </div>
  );
}
