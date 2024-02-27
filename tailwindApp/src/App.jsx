import { useState } from 'react'
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MainSection from './Components/MainSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
      <MainSection />
      <Footer />
    </>
  )
}

export default App
