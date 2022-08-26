import React from 'react'
import { useAppSelector } from '../../hooks'
import HotelCard from './HotelCard';
import {TbMapSearch} from 'react-icons/tb'

function Hotels() {
  const { hotels } = useAppSelector(state => state.hotel);
  const { destination } = useAppSelector(state => state.search);

  return (
    <div className=''>
      <div className='bg-white shadow-lg border-b border-gray px-5 py-2 hidden md:block'>
        <div className='flex justify-between items-center h-full mb-2'>
          <div className='text-lg font-medium'>{`${destination ? destination : "Үр дүн"}: ${hotels?.length}`}</div>
          <div>
            <button className='btn-primary'>
              <TbMapSearch className='text-lg'/>
            </button>
          </div>
        </div>
        <ul className='flex m-0 border border-primary/50 rounded-md overflow-hidden'>
          <li className='py-2 flex-[1] bg-primary text-white text-center font-medium hover:bg-primary hover:text-white'>Үнэ ( өсхөөр )</li>
          <li className='py-2 flex-[1] text-center font-medium border-l border-primary/50 hover:bg-primary hover:text-white'>Үнэлгээ өндөр</li>
          <li className='py-2 flex-[1] text-center font-medium border-l border-primary/50 hover:bg-primary hover:text-white'>Гэр буудал эхэндээ</li>
        </ul>
      </div>
      <div className='flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 md:h-[calc(100vh-210px)] md:overflow-y-scroll'>
        {
          hotels?.map(hotel => (
            <HotelCard hotel={hotel} />
          ))
        }
      </div>
    </div>
  )
}

export default Hotels