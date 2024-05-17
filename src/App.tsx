import { useState } from 'react'
import './App.css'
import Home from './assets/paginas/home/Home'
import Footer from './assets/paginas/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Home />
      <Footer />

    </>
  )
}

export default App
