import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { MdDateRange } from 'react-icons/md'
import { VscArrowBoth } from 'react-icons/vsc'
import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from '../../hooks'
import Option from './Option'
import DatePicker from './DatePicker';

function RoomSearcher() {

  const search = useAppSelector(state => state.search)
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  const dispatch = useAppDispatch()


  const handleOpen = (id: "date" | "option") => {
    if (id === "date") {
      setOpenDate(!openDate)
      setOpenOptions(false)
    } else {
      setOpenDate(false)
      setOpenOptions(!openOptions)
    }
  }

  const handleSearch = ()=> {

  }

  return (
    <div className='bg-white rounded-xl text-gray select-none border border-gray'>
      <div className='flex flex-col md:flex-row md:items-center divide-y md:divide-x md:divide-y-0 divide-x-gray'>
        <div className='p-1 border-gray-light md:relative md:flex-[1] h-[69px]'>
          <div className='hover:bg-gray-light h-full gap-2  rounded-xl flex items-center p-3' onClick={() => handleOpen("date")}>
            <MdDateRange className='text-[20px] text-gray' />
            <p className='font-medium flex items-center gap-2'>
              {`${format(search.date[0].startDate, "MM/dd/yyyy")}`} <VscArrowBoth />{` ${format(search.date[0].endDate, "MM/dd/yyyy")}`}
            </p>
          </div>
          <DatePicker openDate={openDate} setOpenDate={setOpenDate} />
        </div>
        <div className='p-1 flex-[1] border-gray-light cursor-pointer h-[69px] md:relative'>
          <div className='hover:bg-gray-light h-full gap-2 rounded-xl flex items-center p-3' onClick={() => handleOpen('option')}>
            <BsPerson className='text-[20px] text-gray' />
            <p className='font-medium'>{`Хүний тоо ${search.children + search.adult}`}</p>
          </div>
          <Option openOptions={openOptions} setOpenOptions={setOpenOptions} />
        </div>
        <div className='py-1 px-1 border-none h-[69px]'>
          <div className='hover:bg-gray-light h-full rounded-xl overflow-hidden'>
            <button className="h-full w-full min-w-[200px] bg-primary font-medium text-white" onClick={handleSearch}>
              Шалгах
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomSearcher