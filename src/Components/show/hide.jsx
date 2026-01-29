import { useState } from "react"
export default function Change(){
    const [toggle, settoggle] = useState(true)
    const setvisible = () =>{
        settoggle(!toggle);
    };
    return(
        <div >
        <button onClick={setvisible}>
        {toggle ? "Show Message" : "Hide Message"}
        </button>
        {!toggle && <p>Alter Ego GO GO GO</p>}
        </div>
    )
}