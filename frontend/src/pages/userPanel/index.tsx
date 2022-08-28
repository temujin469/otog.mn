import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames  from 'classnames'
import { Route, Routes } from "react-router-dom";
import { userProfileData } from "../../data/profileData";
import Order from "./Order";
import Profile from "./Profile";
import Settings from "./Settings";
import Header2 from "../../components/header/Header2";

const MainPage = () => {
  const [show, setShow] = useState(false)

  const location = useLocation()

  const isActiveLink = (currentLink:string) => currentLink === location.pathname;
  
  const menuLink = classNames("flex gap-5 rounded-xl p-4 hover:bg-gray-light cursor-pointer")

  return (
    <div className=" h-screen overflow-hidden">
      <Header2/>
      <div className="mt-[52px]">
        <div className='grid md:grid-cols-9'>
          <div className="md:col-span-6 overflow-y-scroll">
            <main className="p-5">
              <Routes>
                <Route index element={<Profile />} />
                <Route path="/orders" element={<Order />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
          <div className="md:col-span-3 shadow-lg h-screen w-full">
            <ul className="flex flex-col gap-2 p-4">
              {userProfileData.map((item, index) => (
                <Link to={item.link} key={index} onClick={()=>isActiveLink(item.link)} className={menuLink}>
                  <button
                    type="button"
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className=" text-xl rounded-lg p-3 hover:bg-gray"
                  >
                    {item.icon}
                  </button>

                  <div>
                    <p className="font-semibold text-textClr/80">{item.title}</p>
                    <p className="text-gray/60 text-sm"> {item.desc} </p>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MainPage;