import { useState } from 'react'
import { BsPerson, BsSearch } from 'react-icons/bs'
import { MdDateRange, MdOutlineBedroomChild } from 'react-icons/md'
import { RiPriceTag3Line } from 'react-icons/ri'
import { GoSettings } from 'react-icons/go'
import { VscArrowBoth } from 'react-icons/vsc'
import { format } from "date-fns";
import Sidebar from '../header/Sidebar'

import Option from '../searcher/Option';
import DatePicker from '../searcher/DatePicker';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { handleDestination } from '../../redux/slices/searchSlice';
import { Link } from 'react-router-dom';
import { BiBuildingHouse, BiUserCircle } from 'react-icons/bi';
import ProfilePopup from '../ProfilePopup';
import { AiOutlineGlobal } from 'react-icons/ai';
import RoomOption from '../searcher/RoomOption'
import { handleShowLogin } from '../../redux/slices/appSlice'
import Filter from '../searcher/Filter'
import PriceOption from '../searcher/PriceOption'
import HotelType from '../searcher/HotelType'
// import { amenities } from '../../data/data';



function SearchHeader({ fixed, withFilterRow }: any) {
  const search = useAppSelector(state => state.search)
  const [destination,setDestination] = useState(search.destination)

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [openRoomOption, setOpenRoomOption] = useState<boolean>(false);
  const [openPriceOption, setOpenPriceOption] = useState<boolean>(false);
  const [openHotelType, setOpenHotelType] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [show, setShow] = useState(false)
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const { user } = useAppSelector(state => state.user)


  const handleShow = () => {
    setShow(!show)
  }

  const dispatch = useAppDispatch()

 const handleSearch = (e:any) => {
    dispatch(handleDestination(destination as string))
    e.preventDefault()
  };

  const handleClick = () => {
    user ? setShowProfile(!showProfile) : dispatch(handleShowLogin(true))
  }

  const handleOpen = (id: "1" | "2" | "3" | "4" | "5" | "6") => {
    if (id === "1") {
      setOpenDate(!openDate)
      setOpenOptions(false)
      setOpenRoomOption(false)
      setOpenPriceOption(false)
      setOpenHotelType(false)
      setOpenFilter(false)
    } else if (id === "2") {
      setOpenDate(false)
      setOpenOptions(!openOptions)
      setOpenRoomOption(false)
      setOpenPriceOption(false)
      setOpenHotelType(false)
      setOpenFilter(false)
    } else if (id === "3") {
      setOpenDate(false)
      setOpenOptions(false)
      setOpenRoomOption(!openRoomOption)
      setOpenPriceOption(false)
      setOpenHotelType(false)
      setOpenFilter(false)
    } else if (id === "4") {
      setOpenDate(false)
      setOpenOptions(false)
      setOpenRoomOption(false)
      setOpenPriceOption(!openPriceOption)
      setOpenHotelType(false)
      setOpenFilter(false)
    } else if (id === "5") {
      setOpenDate(false)
      setOpenOptions(false)
      setOpenRoomOption(false)
      setOpenPriceOption(false)
      setOpenHotelType(!openHotelType)
      setOpenFilter(false)
    } else if (id === "6") {
      setOpenDate(false)
      setOpenOptions(false)
      setOpenRoomOption(false)
      setOpenPriceOption(false)
      setOpenHotelType(false)
      setOpenFilter(!openFilter)
    }
  }

  return (
    <div className={fixed ? 'md:fixed w-full md:bg-white z-[100]' : 'w-full md:bg-white'}>
      <div className=' text-gray select-none px-4 md:px-0 w-full h-[170px] md:h-auto md:shadow-md'>
        <div className='flex flex-col md:border-b border-gray md:flex-row md:divide-x divide-x-gray h-[60px]'>
          <div className='border-gray md:border-r py-2 md:py-0 flex justify-between items-center md:h-full'>
            <div className='md:px-5'>
              <Link to='/'>
                <img src="/logo/logo.png" className="h6 sm:h-9" alt="otog logo" />
              </Link>
            </div>
            <button onClick={handleShow} className="sm:hidden text-primary p-2 rounded-md hover:bg-black/10">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>


          <div  className='border shadow-md bg-white md:shadow-none border-gray md:border-none rounded-lg md:rounded-none md:p-0 flex flex-col md:flex-row divide-y md:divide-x md:divide-y-0'>
            <form onSubmit={handleSearch} className='border-gray lg:min-w-[500px] md:h-full rounded-t-lg overflow-hidden'>
              <div className='hover:bg-gray-light h-full flex items-center gap-2 p-3'>
                <BsSearch className='text-[20px] text-gray' />
                <input placeholder='Хайх газрын нэрээ оруулна уу?' onChange={(e)=>setDestination(e.target.value)} value={destination} className='outline-none font-mediun w-full h-full place bg-transparent' />
              </div>
            </form>

            <div className='flex items-center divide-x'>
              <div className='border-gray md:relative md:flex-[1] md:h-full'>
                <div className='hover:bg-gray-light h-full gap-2 flex items-center p-3' onClick={() => handleOpen('1')}>
                  <MdDateRange className='text-[20px] text-gray' />
                  <p className='font-medium flex items-center gap-2'>
                    {`${format(search.date[0].startDate, "MM/dd/yyyy")}`} <VscArrowBoth />{` ${format(search.date[0].endDate, "MM/dd/yyyy")}`}
                  </p>
                </div>
                <DatePicker openDate={openDate} setOpenDate={setOpenDate} />
              </div>
              <div className='border-gray cursor-pointer md:h-full md:relative'>
                <div className='hover:bg-gray-light h-full gap-2 flex items-center p-3' onClick={() => handleOpen('2')}>
                  <BsPerson className='text-[20px] text-gray' />
                  <p className='font-medium whitespace-nowrap'>{`Зочин ${search.adult + search.children}`}</p>
                </div>
                <Option openOptions={openOptions} setOpenOptions={setOpenOptions} />
              </div>
            </div>
          </div>


          <div className='hidden md:flex lg:flex-[1] justify-end border-gray h-full md:relative items-center'>
            <ul className='flex items-center m-0 gap-5 px-5'>
              <li className="px-4 py-2 rounded-md hover:bg-black/10 h-[44px] xl:flex items-center hidden">
                <p className='flex items-center tracking-wide gap-2 uppercase'><AiOutlineGlobal className='text-xl' />MN/₮</p>
              </li>
              <li className='relative h-[44px]'>
                <div className='text-gray cursor-pointer flex items-center gap-1 text-lg px-4 py-2 rounded-md hover:bg-black/10' onClick={handleClick}>
                  <BiUserCircle className='text-xl' />
                  <p>{user ? user.name : "Tаны профайл"}</p>
                </div>
                <ProfilePopup showProfile={showProfile} setShowProfile={setShowProfile} />
              </li>
            </ul>
          </div>
        </div>
        <div className={withFilterRow ? 'block' : 'hidden'}>
          {/* row2 */}
          <div className='h-[50px] hidden md:flex border-b border-gray items-center gap-5 px-5 bg-white'>
            <div>
              <button className='btn-primary text-white rounded-full py-2 px-3' onClick={() => handleOpen('6')}>
                <GoSettings className='text-lg' /> <p className='hidden sm:block'>Шүүх & сортлох</p>
              </button>
              <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />
            </div>
            <div className='relative'>
              <button className='tag text-gray-dark py-3 px-3 md:py-2 md:px-3' onClick={() => handleOpen('3')}>
                <MdOutlineBedroomChild className='text-lg' /> <p className='hidden sm:block'>Өрөөнүүд</p>
              </button>
              <RoomOption openRoomOption={openRoomOption} setOpenRoomOption={setOpenRoomOption} />
            </div>
            <div className='relative'>
              <button className='tag text-gray-dark py-3 px-3 md:py-2 md:px-3' onClick={() => handleOpen('4')}>
                <RiPriceTag3Line className='text-lg' /> <p className='hidden sm:block'>Үнэ</p>
              </button>
              <PriceOption setOpenPriceOption={setOpenPriceOption} openPriceOption={openPriceOption} />
            </div>
            <div className='relative'>
              <button className='tag text-gray-dark py-3 px-3 md:py-2 md:px-3' onClick={() => handleOpen('5')}>
                <BiBuildingHouse className='text-lg' /> <p className='hidden sm:block'>Төрөл</p>
              </button>
              <HotelType openHotelType={openHotelType} setOpenHotelType={setOpenHotelType} />
            </div>

            {/* <div className='gap-5 hidden lg:flex'>
              {amenities.slice(2).map(amenitie => (
                <div key={amenitie.id}>
                  <span className='tag'>{amenitie.name}</span>
                </div>
              ))}
            </div> */}
          </div>
          {/* row2 end */}
        </div>
      </div>
      <Sidebar show={show} handleShow={handleShow} />
    </div>
  )
}

export default SearchHeader;