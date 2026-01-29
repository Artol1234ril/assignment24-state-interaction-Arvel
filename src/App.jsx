import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Change from './Components/show/hide'
import Login from './Components/LOgin'
import Fruit from './Components/Fruit'
import TaskList from './Components/Container'
import Parent from './Components/Parent and child/parent'
import Email from './Components/Email'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="container">
  <div className="section"><Counter /></div>
  <div className="section"><Change /></div>
  <div className="section"><Login /></div>
  <div className="section"><Fruit /></div>
  <div className="section"><TaskList /></div>
  <div className="section"><Parent /></div>
  <div className="section"><Email /></div>
</div>
    </>
  )
}

export default App
