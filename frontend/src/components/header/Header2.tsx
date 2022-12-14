import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineGlobal } from 'react-icons/ai'
import classNames from 'classnames'
import Sidebar from './Sidebar';
import './navbar.css'
import { useAppDispatch, useAppSelector } from '../../hooks';
import ProfilePopup from '../ProfilePopup';
import { handleShowLogin } from '../../redux/slices/appSlice';


function Header2() {
  const [show, setShow] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("mn/$");
  const { user } = useAppSelector(state => state.user)

  const dispatch = useAppDispatch()


  const handleLanguage = (value: string) => {
    setLanguage(value)
  }

  const handleSidebar = () => setShow(!show);

  const handleClick = () => {
    user ? setShowProfile(!showProfile) : dispatch(handleShowLogin(true))
  }

  const linkStyle = classNames('text-textClrn relative cursor-pointer flex items-center text-base px-3 py-1 rounded-md hover:bg-black/10')

  const headerStyle = classNames("fixed top-0 w-full flex items-center shadow-md bg-white z-50 left-0 py-2 px-10 h-[52px]")

  return (
    <nav className={headerStyle}>
      <div className="flex justify-between w-full items-center mx-auto">
        <Link to="/" className="flex items-center px-4">
          <img src="/logo/Otog logo white.png" className="sm:h-[50px] h-[30px]" alt="Logo" />
        </Link>
        <button onClick={handleSidebar} className="sm:hidden rounded-md hover:bg-black/20">
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <ul className="hidden m-0 sm:flex items-center gap-10">
          {/* <li className="hover:text-secondary px-4 py-3 rounded-md hover:bg-black/20">
            <Link to="#" className='text-white text-xl'>Services</Link>
          </li> */}
          <li className={linkStyle}>
            <p className='flex items-center tracking-wide gap-2 uppercase'><AiOutlineGlobal className='base' />{language}</p>
          </li>
          <li className={linkStyle}>
            <div className='flex items-center gap-1' onClick={handleClick}>
              <BiUserCircle className='text-base' />
              <p>{user ? user.name : "T?????? ??????????????"}</p>
            </div>
            <ProfilePopup showProfile={showProfile} setShowProfile={setShowProfile} />
          </li>
        </ul>
      </div>
      <Sidebar show={show} handleShow={handleSidebar} />
    </nav>
  )
}

export default Header2