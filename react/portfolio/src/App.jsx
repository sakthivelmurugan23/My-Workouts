import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import  Contact from './Contact'
import Resume from './Resume'
import About from './About'
const App = () => {
  return (
    <div>
       <div>
        <BrowserRouter>
       
        <Navbar/>
     
     
        <div>
        <Routes>
          <Route path='/' element={   <Home/>}/>
          <Route path='/Contact' element={       <Contact/>}/>
          <Route path='/Resume' element={       <Resume/>}/>
          <Route path='/About' element={     <About/>}/>
        </Routes>
       </div>
        </BrowserRouter>
       </div>

     
    </div>
  )
}

export default App