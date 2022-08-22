import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

function Layout() {
  return (
    <div className='max-h-screen overflow-y-scroll overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>

  )
}

export default Layout