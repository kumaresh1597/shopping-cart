import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Mycart from './components/Mycart'

import { Route,Routes } from 'react-router'

const App = () => {

  return (
    
    <div>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Mycart/>}/>
        </Routes>
    </div>
  )
}

export default App
