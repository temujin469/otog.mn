import React from 'react'
import { SidebarData } from '../data/ProfileSidebarData'
import { NavLink } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai';

const UserPanelSidebar = ({ show,setShow }: any) => {
  const activeLink = 'hover:bg-gray-light mt-3 px-7 w-full h-14 flex justify-start gap-1 items-center text-white space-x-1 font-medium bg-primary rounded-xl'
  const normalLink = 'hover:bg-gray-light px-7 mt-3 w-full h-14 flex justify-start gap-1 items-center text-black space-x-1 font-medium rounded-xl'

  return (
    <section className={`shadow-xl transition-all duration-300 z-[1000] h-screen bg-white absolute md:static overflow-hidden ${show ? "w-[300px] lg:w-[400px]" : 'w-0'}`}>
      <div className=' p-3'>
        <div className='text-end md:hidden'>
          <button onClick={()=>setShow(false)} className="hover:bg-gray-light rounded-full p-1">
            <AiOutlineCloseCircle className='text-[21px] text-gray'/>
          </button>
        </div>
        <div className=" text-textColor z-[100] h-screen">
          {
            SidebarData.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink to={item.path}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink}
                  >
                    <span className='text-[18px]'>{item.icon}</span>
                    <span>{item.title}</span>
                  </NavLink>

                </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default UserPanelSidebar