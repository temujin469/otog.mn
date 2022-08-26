import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Order from "./Order";
// import Navbar from "../../components/profile/ProfileNavbar";
import Sidebar from '../../components/userPanel/UserPanelSidebar'
import Profile from "./Profile";
import Settings from "./Settings";

const MainPage = () => {
  const [show,setShow] = useState(false)

  return (
    <div className="">
        <div className='flex'>
          <Sidebar show={show} setShow={setShow}/>

          <section className="relative w-full bg-gray-light h-screen">
            {/* <Navbar /> */}
            <nav className="p-5 flex justify-between items-center">
              <button onClick={()=>setShow(!show)}>
                <AiOutlineMenu className="text-[20px] text-primary"/>
              </button>
              <ul className="m-0 flex items-center gap-5">
                <li>item</li>
                <li><FaRegUser className="text-[20px] text-primary"/></li>
              </ul>
            </nav>
            <main className="mt-5 p-5">
              <Routes>
                <Route index element={<Profile/>} />
                <Route path="/orders" element={<Order/>} />
                <Route path="/settings" element={<Settings/>} />
              </Routes>
            </main>
          </section>
        </div>
    </div>

  );
};

export default MainPage;