import { useState } from "react"
export default function Fruit(){
    const buah = ["Pepaya", "Mangga", "Durian", "pisang","kelapa" ]
    return(
    <div>
      <ul>
        {buah.map((buahaha) => (
          <li key={buahaha}>{buahaha}</li>
        ))}
      </ul>
      <p>Total Fruits: {buah.length}</p>
    </div>

    )
}