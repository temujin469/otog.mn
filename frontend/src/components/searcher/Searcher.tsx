import { useState } from 'react'
import { BsPerson, BsSearch } from 'react-icons/bs'
import { MdDateRange } from 'react-icons/md'
import { VscArrowBoth } from 'react-icons/vsc'
import { format } from "date-fns";

import Option from './Option';
import DatePicker from './DatePicker';
import { useAppSelector } from '../../hooks';
// import { handleDestination } from '../../redux/slices/searchSlice';
import { Link } from 'react-router-dom';



function Searcher() {
  const search = useAppSelector(state => state.search)
  const [destination, setDestination] = useState(search.destination)
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  // const handleSearch = () => {
  //   dispatch(handleDestination(destination as string))
  //   navigate(`/search/${search.destination}?adults=${search.adult}&arrivel=${format(search.date[0].startDate, "MM/dd/yyyy")}`);
  // };

  const filterUrl = () => {
    return `/search?location=${destination}&adult=${search.adult}&arrival=${format(search.date[0].startDate, "MM/dd/yyyy")}&duration=${5}&bedroom=${search.bedroom}&children=${search.children}`;
  };

  const handleOpen = (id: "date" | "option") => {
    if (id === "date") {
      setOpenDate(!openDate)
      setOpenOptions(false)
    } else {
      setOpenDate(false)
      setOpenOptions(!openOptions)
    }
  }

  return (
    <div className='bg-white rounded-xl text-gray select-none'>
      <div className='flex flex-col md:flex-row md:items-center divide-y md:divide-x md:divide-y-0 divide-x-gray'>
        <div className='p-1 border-gray-light md:flex-[1] h-[69px]'>
          <div className='hover:bg-gray-light h-full rounded-xl flex items-center gap-2 p-3'>
            <BsSearch className='text-[20px] text-gray' />
            <input onChange={(e) => setDestination(e.target.value)} value={destination} placeholder='Хайх газрын нэрээ оруулна уу?' className='outline-none font-medium w-full h-full place bg-transparent' />
            {/* <AutoComplete
              style={{ width: 200 }}
              className="outline-none font-medium w-full h-full place bg-transparent bg-none"
              options={options}
              placeholder="Хайх газрын нэрээ оруулна уу?"
              filterOption={(inputValue, option) =>
                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
            /> */}
          </div>
        </div>
        <div className='p-1 border-gray-light md:relative md:flex-[1] h-[69px]'>
          <div className='hover:bg-gray-light h-full gap-2  rounded-xl flex items-center p-3' onClick={() => handleOpen("date")}>
            <MdDateRange className='text-[20px] text-gray' />
            <p className='font-medium flex items-center gap-2'>
              {`${format(search.date[0].startDate, "MM/dd/yyyy")}`} <VscArrowBoth />{` ${format(search.date[0].endDate, "MM/dd/yyyy")}`}
            </p>
          </div>
          <DatePicker openDate={openDate} setOpenDate={setOpenDate} />
        </div>
        <div className='p-1 border-gray-light cursor-pointer h-[69px] md:relative'>
          <div className='hover:bg-gray-light h-full gap-2 rounded-xl flex items-center p-3' onClick={() => handleOpen('option')}>
            <BsPerson className='text-[20px] text-gray' />
            <p className='font-medium'>{`Хүний тоо ${search.children + search.adult}`}</p>
          </div>
          <Option openOptions={openOptions} setOpenOptions={setOpenOptions} />
        </div>
        <div className='py-1 px-1 border-none h-[69px]'>
          <div className='hover:bg-gray-light h-full rounded-xl overflow-hidden'>
            <Link to={filterUrl()}>
              <button className="h-full w-full md:w-[110px] bg-primary font-medium text-white">
                Хайх
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searcher;