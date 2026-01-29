import React, { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]); 
      setInputValue(""); 
    }
  };

  return (
    <div>
      <h2>My Task List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}
