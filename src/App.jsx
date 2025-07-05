import { useState } from 'react'
import Navbar from "./components/Navbar"
import Transfrom from "./components/Transfrom"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <Transform></Transform>
      </div>

    </>
  )
}

export default App
