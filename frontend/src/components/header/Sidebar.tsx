import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
  show: boolean
  handleShow: () => void
}

function Sidebar({ show, handleShow }: Props) {
  return (
    <div className={`w-full bg-white flex flex-col justify-between h-screen transition-all duration-400 z-50 absolute top-0 ${show ? 'right-0 block' : 'right-[-100%] hidden'}`}>
      <div>
        <div className='p-5 border-b border-gray-light'>
          <button onClick={handleShow}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className="flex flex-col text-textClr md:font-medium px-5">
          <li className='py-5 border-b border-gray-light'>
            <Link to="#" className="hover:text-secondary">Таны Профайл</Link>
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
        <button className='btn-primary w-full p-4 max-w-[400px]' onClick={handleShow}>
          Хаах
        </button>
      </div>
    </div>
  )
}

export default Sidebar