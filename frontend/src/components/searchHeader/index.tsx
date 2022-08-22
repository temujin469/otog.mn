import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { BsPerson, BsSearch } from 'react-icons/bs'
import { MdDateRange } from 'react-icons/md'
import { VscArrowBoth } from 'react-icons/vsc'
import { format } from "date-fns";
import Sidebar from '../../components/header/Sidebar'

import Option from '../searcher/Option';
import DatePicker from '../searcher/DatePicker';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setDestination } from '../../redux/slices/searchSlice';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';



function SearchHeader() {

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const dispatch = useAppDispatch()
  const { date, totalGuests, destination } = useAppSelector(state => state.search)


  // const navigate = useNavigate();


  return (
    <div className=''>
      <div className=' text-gray select-none px-5 md:px-0 w-full'>
        <div className='flex flex-col md:border-b border-gray md:flex-row md:divide-x divide-x-gray'>
          <div className='border-gray md:border-r py-2 md:py-0 flex justify-between items-center md:h-[69px]'>
            <div className='md:px-5'>
              <Link to='/'>
                <img src="/logo/logo.png" className="h6 sm:h-9" alt="otog logo" />
              </Link>
            </div>
            <button onClick={handleShow} className="sm:hidden p-2 text-gray rounded-md hover:bg-black/10">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>


          <div className='border shadow-md md:shadow-none flex-[1] border-gray md:border-none rounded-lg md:rounded-none md:p-0 flex flex-col md:flex-row divide-y md:divide-x md:divide-y-0'>
            <div className='border-gray md:flex-[1] md:h-[69px]'>
              <div className='hover:bg-gray-light h-full flex items-center gap-2 p-3'>
                <BsSearch className='text-[20px] text-gray' />
                <input placeholder='Хайх газрын нэрээ оруулна уу?' className='outline-none font-mediun w-full h-full place bg-transparent' onChange={(e) => dispatch(setDestination(e.target.value))} value={destination} />
              </div>
            </div>

            <div className='flex items-center divide-x'>
              <div className='border-gray md:relative md:flex-[1] md:h-[69px]'>
                <div className='hover:bg-gray-light h-full gap-2 flex items-center p-3' onClick={() => setOpenDate(!openDate)}>
                  <MdDateRange className='text-[20px] text-gray' />
                  <p className='font-medium flex items-center gap-2'>
                    {`${format(date[0].startDate, "MM/dd/yyyy")}`} <VscArrowBoth />{` ${format(date[0].endDate, "MM/dd/yyyy")}`}
                  </p>
                </div>
                <DatePicker openDate={openDate} setOpenDate={setOpenDate} />
              </div>
              <div className='border-gray cursor-pointer md:h-[69px] md:relative'>
                <div className='hover:bg-gray-light h-full gap-2 flex items-center p-3' onClick={() => setOpenOptions(!openOptions)}>
                  <BsPerson className='text-[20px] text-gray' />
                  <p className='font-medium'>{`Зочин ${totalGuests}`}</p>
                </div>
                <Option openOptions={openOptions} setOpenOptions={setOpenOptions} />
              </div>
            </div>
          </div>


          <div className='hidden flex-[1] md:flex justify-end border-gray h-[69px] md:relative items-center'>
            <ul className='flex items-center m-0 gap-5 px-5'>
              {/* <li className="hover:text-secondary px-4 py-3 rounded-md hover:bg-black/20">
                <Select value={language} className="bg-none bg-transparent" onChange={handleLanguage}>
                  <Option value="mn" className="flex items-center"><AiOutlineGlobal />Mongolia</Option>
                  <Option value="en">English</Option>
                </Select>
              </li> */}
              <li className='px-2 py-1 rounded-md hover:bg-gray-light'>
                <Link to="#" className='text-gray flex items-center gap-1 font-medium'>
                  <BiUserCircle className='text-[30px]' />
                  <p className='hidden lg:block'>Таны профайл</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Sidebar show={show} handleShow={handleShow} />
    </div>
  )
}

export default SearchHeader;