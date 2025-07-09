import { useState } from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './Screens/Home'
import Gallery from './Screens/Gallery'
import Articts from './Screens/Articts'
import FAQ from './Screens/FAQ'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/articts" element={<Articts />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>

      


    </>
  )
}

export default App
