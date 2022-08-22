import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { BsPerson, BsSearch } from 'react-icons/bs'
import { MdDateRange } from 'react-icons/md'
import { VscArrowBoth } from 'react-icons/vsc'
import { format } from "date-fns";

import Option from './Option';
import DatePicker from './DatePicker';



type Options = {
  adult: number
  children: number
  room: number
}

function Searcher() {

  const [destination, setDestination] = useState<string>("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  const [openOptions, setOpenOptions] = useState<boolean>(false);

  const [options, setOptions] = useState<any>({
    adult: 1,
    children: 0,
    room: 1,
  });

  let totalGuests = options.adult + options.children

  const navigate = useNavigate();

  const handleOption = (name: string, operation: "nemeh" | "hasah") => {
    setOptions((prev: Options) => {
      return {
        ...prev,
        [name]: operation === "nemeh" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className='bg-white rounded-xl text-gray select-none'>
      <div className='flex flex-col md:flex-row md:items-center divide-y md:divide-x md:divide-y-0 divide-x-gray'>
        <div className='p-1 border-gray-light md:flex-[1] h-[69px]'>
          <div className='hover:bg-gray-light h-full rounded-xl flex items-center gap-2 p-3'>
            <BsSearch className='text-[20px] text-gray' />
            <input placeholder='Хайх газрын нэрээ оруулна уу?' className='outline-none font-medium w-full h-full place bg-transparent' onChange={(e) => setDestination(e.target.value)} value={destination} />
          </div>
        </div>
        <div className='p-1 border-gray-light md:relative md:flex-[1] h-[69px]'>
          <div className='hover:bg-gray-light h-full gap-2  rounded-xl flex items-center p-3'>
            <MdDateRange className='text-[20px] text-gray' />
            <p className='font-medium flex items-center gap-2' onClick={() => setOpenDate(!openDate)}>
              {`${format(date[0].startDate, "MM/dd/yyyy")}`} <VscArrowBoth />{` ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </p>
            <DatePicker setDate={setDate} date={date} openDate={openDate} setOpenDate={setOpenDate} />
          </div>
        </div>
        <div className='p-1 border-gray-light cursor-pointer h-[69px] md:relative'>
          <div className='hover:bg-gray-light h-full gap-2 rounded-xl flex items-center p-3' onClick={() => setOpenOptions(!openOptions)}>
            <BsPerson className='text-[20px] text-gray' />
            <p className='font-medium'>{`Хүний тоо ${totalGuests}`}</p>
          </div>
          <Option handleOption={handleOption} setOptions={setOptions} options={options} openOptions={openOptions} setOpenOptions={setOpenOptions} totalGuests={totalGuests}/>
        </div>
        <div className='py-1 px-1 border-none h-[69px]'>
          <div className='hover:bg-gray-light h-full rounded-xl overflow-hidden'>
            <button className="h-full w-full md:w-[110px] bg-primary font-medium text-white" onClick={handleSearch}>
              Хайх
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searcher;