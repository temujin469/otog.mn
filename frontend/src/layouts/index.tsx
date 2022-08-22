import Search from 'antd/lib/transfer/search'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import HotelScreen from '../pages/HotelScreen'
import Profail from '../pages/Profail'
import Signin from '../pages/Signin'
import Signup from '../pages/SIgnup'

function Layout() {
  return (
    <div className='max-h-screen overflow-y-scroll overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profail/:id' element={<Profail/>} />
        <Route path='/hotel/:id' element={<HotelScreen/>} />
        <Route path='/search/:id' element={<Search/>} />
      </Routes>
    </div>

  )
}

export default Layout