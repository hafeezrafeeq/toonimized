import { useState } from 'react'
import Navbar from "./components/Navbar"
import Header from "./components/Header"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Header></Header>
      </div>

    </>
  )
}

export default App
