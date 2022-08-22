import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineGlobal } from 'react-icons/ai'
import Sidebar from './Sidebar';
import './navbar.css'
import { Select } from 'antd';
const { Option } = Select;


function Navbar() {
  const [show, setShow] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("mn");

  const handleLanguage = (value:string)=>{
    setLanguage(value)
  }

  const handleShow = () => setShow(!show);

  return (
    <nav className="px-3 py-3">
      <div className="flex justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src="/logo/logo.png" className="h-6 sm:h-9" alt="Flowbite Logo" />
        </Link>
        <button onClick={handleShow} className="sm:hidden p-3 text-white rounded-md hover:bg-black/20">
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <ul className="hidden m-0 sm:flex items-center text-white gap-5 md:text-sm md:font-medium">
          {/* <li className="hover:text-secondary px-4 py-3 rounded-md hover:bg-black/20">
            <Link to="#" className='text-white text-xl'>Services</Link>
          </li> */}
          <li className="hover:text-secondary px-4 py-3 rounded-md hover:bg-black/20">
            <Select value={language} className="bg-none bg-transparent" onChange={handleLanguage}>
              <Option value="mn" className="flex items-center"><AiOutlineGlobal/>Mongolia</Option>
              <Option value="en">English</Option>
            </Select>
          </li>
          <li className='hover:text-secondary px-4 py-3 rounded-md hover:bg-black/20'>
            <Link to="#" className='text-white flex items-center gap-1 text-xl'>
              <BiUserCircle className='text-2xl' />
              <p>Таны профайл</p>
            </Link>
          </li>
        </ul>
      </div>
      <Sidebar show={show} handleShow={handleShow} />
    </nav>
  )
}

export default Navbar