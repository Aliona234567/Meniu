import React from 'react'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './Component/pages/About'
import Service from './Component/pages/Service'
import Contsct from './Component/pages/Contsct'
import Home from './Component/pages/Home'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contsct' element={<Contsct/>}/>
        <Route path='/' element={<Home/>}/>

      </Routes>
    </div>
  )
}

export default App
