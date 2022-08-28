import { format } from 'date-fns';
import React from 'react'
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { MdDateRange } from 'react-icons/md';
import { VscArrowBoth } from 'react-icons/vsc';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setDate} from '../../redux/slices/searchSlice';


type Props = {
  openDate: boolean
  setOpenDate: React.Dispatch<React.SetStateAction<boolean>>
}


function DatePicker({openDate, setOpenDate }: Props) {
  
  const dispatch = useAppDispatch()
  const {date} = useAppSelector(state=>state.search)

  return (
    <div className={openDate ? "block" : "hidden"}>
      <div className=''>
        <div className='absolute border h-screen border-gray-light md:shadow-md flex md:block flex-col md:rounded-xl top-0 left-0 w-full md:h-auto md:w-auto z-[1000] md:top-[70px] md:left-[50%] md:translate-x-[-50%] bg-white'>
          <div className='md:hidden bg-gray-light'>
            <div className='gap-2 shadow-sm bg-white rounded-xl flex items-center justify-center p-4 m-5'>
              <MdDateRange className='text-[25px] text-gray'/>
              <p className='font-medium text-lg flex items-center gap-2'>
                {`${format(date[0].startDate, "MM/dd/yyyy")}`} <VscArrowBoth />{` ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </p>
            </div>
          </div>
          <DateRange
            editableDateInputs={true}
            onChange={(item) =>dispatch(setDate([item.selection]))}
            // onChange={(item) =>console.log(item)}

            moveRangeOnFirstSelection={false}
            ranges={date}
            className="md:rounded-xl overflow-hidden flex-[1]"
            minDate={new Date()}
          />
          <div className='md:hidden m-5'>
            <button className='btn-primary w-full p-4' onClick={()=>setOpenDate(false)}>
              Хаах
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatePicker