import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { userProfileData } from '../data/profileData';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logOut } from '../redux/slices/userSlice';

type Props = {
  showProfile: boolean
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfilePopup = ({ showProfile, setShowProfile }: Props) => {

  const { user } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logOut())
    setShowProfile(false)
    // window.location.reload()
  }


  return (
    <div className={showProfile ? 'block' : 'hidden'}>
      {user ? (
        <div>
          <div className="nav-item border border-gray-light shadow-xl z-30 absolute right-[50%] translate-x-[50%] lg:right-0 lg:translate-x-0 top-16 bg-white text-textColor rounded-xl w-96">
            <div className="text-end">
              <button className='text-gray text-xl hover:shadow-lg hover:bg-gray-light rounded-full p-3 m-2' onClick={() => setShowProfile(false)}><MdOutlineCancel /></button>
            </div>
            <div className='p-8 pt-0'>
              <div className="flex gap-5 items-center border-gray-light border-b pb-6">
                <img
                  className="rounded-full h-20 w-20"
                  src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                  alt="user-profile"
                />
                <div>
                  <p className="font-semibold text-xl text-textClr/80">{user?.name}</p>
                  <p className="text-textColor text-sm text-gray/70">{user?.email}</p>
                </div>
              </div>
              <div>
                {userProfileData.map((item, index) => (
                  <Link to={item.link} key={index} className="flex gap-5 rounded-xl p-4 hover:bg-gray-light cursor-pointer">
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
              </div>
              <div className="mt-5">
                <button className='btn-primary hover:shadow-md rounded-xl w-full p-4' onClick={handleLogout}>Гарах</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='rounded-xl bg-white absolute right-[50%] translate-x-[50%] lg:right-0 lg:translate-x-0 p-5 w-[160px]'>
          <div className='text-end'>
            <button className='text-gray text-lg hover:shadow-lg hover:bg-gray-light rounded-full p-2' onClick={() => setShowProfile(false)}><MdOutlineCancel /></button>
          </div>
          <button className='btn-primary w-full mt-3'><Link to="/login">Нэвтрэх</Link></button>
        </div>
      )}
    </div>

  );
};

export default ProfilePopup;
