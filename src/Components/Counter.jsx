import React from 'react';
import { useState } from 'react';
export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div className='task counter'>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}