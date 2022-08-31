import { format } from 'date-fns';
import React, { useState } from 'react'
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { MdDateRange } from 'react-icons/md';
import { VscArrowBoth } from 'react-icons/vsc';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { handleDate } from '../../redux/slices/searchSlice';


type Props = {
  openDate: boolean
  setOpenDate: React.Dispatch<React.SetStateAction<boolean>>
}


function DatePicker({ openDate, setOpenDate }: Props) {
  const search = useAppSelector(state => state.search)

  const [date, setDate] = useState(search.date)

  const dispatch = useAppDispatch()

  const handleSearch = () => {
    dispatch(handleDate(date))
    setOpenDate(false)
  }

  const resetSearch = () => {
    setDate(search.date)
  }

  return (
    <div className={openDate ? "block" : "hidden"}>
      <div>
        <div className='absolute border h-screen border-gray-light md:shadow-md flex md:block flex-col md:rounded-xl top-0 left-0 w-full md:h-auto md:w-auto z-[1000] md:top-[70px] md:left-[50%] md:translate-x-[-50%] bg-white'>
          <div className='md:hidden bg-gray-light'>
            <div className='gap-2 shadow-sm bg-white rounded-xl flex items-center justify-center p-4 m-5'>
              <MdDateRange className='text-[25px] text-gray' />
              <p className='font-medium text-lg flex items-center gap-2'>
                {`${format(date[0].startDate, "MM/dd/yyyy")}`} <VscArrowBoth />{` ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </p>
            </div>
          </div>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection as any])}
            // onChange={(item) =>console.log(item)}

            moveRangeOnFirstSelection={false}
            ranges={date}
            className="md:rounded-xl overflow-hidden flex-[1]"
            minDate={new Date()}
          />

          {date !== search.date ? (
            <div className='flex justify-end gap-3 items-center m-5'>
              <button className='font-medium hidden md:block' onClick={resetSearch}>
                Болих
              </button>
              <button className='btn-primary bg-primary w-full md:w-fit md:py-2 py-3 px-3' onClick={handleSearch}>
                Хайх
              </button>
            </div>
          ) : (
            <div className='flex md:justify-end m-5'>
              <button className='btn-primary bg-primary w-full md:w-fit md:py-2 py-3 px-3' onClick={() => setOpenDate(false)}>
                Хаах
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DatePicker