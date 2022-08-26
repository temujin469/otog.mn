import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import HotelScreen from '../pages/HotelScreen'
import Profile from '../pages/userPanel'
import Search from '../pages/Search'
import RequiredAuth from '../RequiredAuth'
import LoginModal from '../components/login/LoginModal'

function Layout() {
  // const {user} = useAppSelector(state=>state.user)
  return (
    <div  className='max-h-screen overflow-y-scroll overflow-x-hidden'>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<RequiredAuth />}>
            <Route path='/profile/*' element={<Profile />} />
          </Route>
          <Route path='/search' element={<Search />} />
          <Route path='/hotels/*' element={<HotelScreen />} />
        </Routes>
      </div>
      <LoginModal/>
    </div>

  )
}

export default Layout