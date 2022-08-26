import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai'
import { BiUserCircle } from "react-icons/bi";
import ProfilePopup from "../ProfilePopup";
import { useAppSelector } from "../../hooks";
import { useState } from "react";

type Props = {
  show: boolean
  handleShow: () => void
}

function Sidebar({ show, handleShow }: Props) {
  const { user } = useAppSelector(state => state.user)
  const [showProfile, setShowProfile] = useState<boolean>(false);

  return (
    <div className={`w-full bg-white flex flex-col justify-between h-screen transition-all duration-400 z-50 absolute top-0 ${show ? 'right-0 block' : 'right-[-100%] hidden'}`}>
      <div>
        <div className='p-5 border-b border-gray-light'>
          <button onClick={handleShow}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className="flex flex-col text-textClr md:font-medium px-5">
          <li className='border-b border-gray-light py-5'>
            <div className='text-textClr cursor-pointer flex items-center gap-1' onClick={() => setShowProfile(!showProfile)}>
              <BiUserCircle className='text-xl' />
              <p>{user ? user.name : "Tаны профайл"}</p>
            </div>
            <div className={`${showProfile && 'w-full bg-black/30 absolute left-0 top-0 bottom-0 right-0'} `}>
              <ProfilePopup showProfile={showProfile} setShowProfile={setShowProfile} />
            </div>
          </li>
          <li className='py-5 border-b border-gray-light'>
            <Link to="#" className="hover:text-secondary">Pricing</Link>
          </li>
          <li className='py-5 border-b border-gray-light'>
            <Link to="#" className="hover:text-secondary">Contact</Link>
          </li>
        </ul>
      </div>
      <div className='text-end m-5'>
        <button className='btn-primary w-full p-4' onClick={handleShow}>
          Хаах
        </button>
      </div>
    </div>
  )
}

export default Sidebar