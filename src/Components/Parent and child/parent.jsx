
import React, { useState } from "react";
import ChildInput from "./child";

export default function Parent() {

  const [text, setText] = useState("");

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Text from child: {text}</p>


      <ChildInput value={text} onChange={setText} />
    </div>
  )};
