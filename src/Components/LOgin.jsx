import { useState } from "react";
export default function login() {
    const [logged, setlogged] = useState(false)
    const login = (e) =>{
        setlogged(!logged)
    }
    return(
        <div>
        
        {logged? 
        
        (
        <div>
            <h2>Welcome, you are logged in!</h2>
          <button onClick={login}>Logout</button>

        </div>) : (
        <button onClick={login}>Login</button>
        )}
        </div>
    )} 