import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import HotelScreen from '../pages/HotelScreen'
import Profile from '../pages/userPanel'
import Search from '../pages/Search'
import RequiredAuth from '../RequiredAuth'
import LoginModal from '../components/login/LoginModal'
import Blogs from '../pages/Blogs'
import BlogScreen from '../pages/BlogScreen'
import TermsAndConditions from '../pages/TermsAndConditions'
import Contact from '../pages/Contact'
import AboutUs from '../pages/AboutUs'

function Layout() {
  // const {user} = useAppSelector(state=>state.user)
 
  return (
    <div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<RequiredAuth />}>
            <Route path='/userPanel/*' element={<Profile />} />
          </Route>
          <Route path='/search' element={<Search />} />
          <Route path='/hotels/:id' element={<HotelScreen />} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/terms' element={<TermsAndConditions/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/blogs/:id' element={<BlogScreen/>} />
        </Routes>
      </div>
      <LoginModal/>
    </div>

  )
}

export default Layout