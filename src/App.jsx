import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import img from "./assets/hero.png"

const App=()=>{
  let a=20;
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/about' element={<Header/>} />
    <Route path='/' element={<Footer/>} />
  </Routes>
  </BrowserRouter>
   </>
   
  
  )
}

export default App
