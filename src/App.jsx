import React from 'react'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className='select-none'>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App