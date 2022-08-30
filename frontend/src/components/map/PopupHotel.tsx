import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Hotel } from '../../typings'

type Props = {
  hotel: Hotel
}

function PopupHotel({ hotel }: Props) {
  return (
    <div className='w-[250px]'>
      <div className='relative'>
        <img src={hotel.images[0]} alt={hotel.name} className='h-[180px] object-cover w-[250px] rounded-t-lg' />
        <span className='absolute left-0 bottom-2 text-base rounded-r-lg bg-black/50 p-2 text-white'>{`₮${hotel.price}`}</span>
      </div>
      <div className='p-2 space-y-4'>
        <div className='flex items-center justify-between'>
          <p className='text-base'>{hotel.hotelType.name}</p>
          <div className='flex items-center space-x-3'>
            <p className='flex gap-1 items-center text-[17px]'><FaRegUser className='text-[15px] text-black/80'/>{`6`}</p>
            <p className='flex gap-1 items-center text-[17px]'><MdOutlineBedroomChild className='text-[18px] text-black/80'/>{`2`}</p>
          </div>
        </div>
        <div className='flex justify-end'>
          <Link to={`/hotels/${hotel.id}`} className='btn-primary hover:text-white bg-primary'>Дэлгэрэнгүй</Link>
        </div>
      </div>
    </div>
  )
}

export default PopupHotel