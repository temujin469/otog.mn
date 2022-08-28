import { Rate } from 'antd';
import React from 'react'
// import { RiHome7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Hotel } from '../../typings';

type Props = {
  hotel: Hotel
}
// const customIcons: Record<any, any> = {
//   1: <RiHome7Fill />,
//   2: <RiHome7Fill />,
//   3: <RiHome7Fill />,
//   4: <RiHome7Fill />,
//   5: <RiHome7Fill />,
// };


function HotelCard({ hotel }: Props) {


  return (
    <Link to={`/hotels/${hotel.id}`} className='rounded-lg hover:text-textClr cursor-pointer shadow-lg hover:shadow-xl p-3 flex flex-col md:flex-row gap-3 bg-white'>
      <div className='flex items-start md:w-[226px] md:h-[226px] h-[200px]'>
        <img src={hotel.images[3]} alt={hotel.name} className=" rounded-lg object-cover h-full w-full" />
      </div>
      <div className='h-full flex-[1]'>
        <ul className='m-0 flex flex-col gap-2 justify-between'>
          <li className='flex justify-between items-center gap-2'>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between'>
                <p className='text-[15px] font-semibold whitespace-nowrap text-primary'>{hotel.name}</p>
                <p className='font-medium'>оноо</p>
              </div>
              <div className='flex items-center justify-between'>
                <small className='text-primary hover:underline'>Сүхбаатар,Улаанбаатар</small>
                <div className='text-end'>
                  <small>{hotel.review} үнэлгээтэй</small>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-primary rounded-t-lg rounded-r-lg flex items-center justify-center font-medium text-lg text-white'>{hotel.rating}
              </div>
            </div>
          </li>

          <li className='flex justify-between items-center'>
            <span className='rounded-md px-3 bg-green-400 text-white font-medium mb-1'>Баталгаажсан</span>
            <Rate defaultValue={hotel.rating} disabled />
          </li>
          <li className='flex flex-col border-l-2 pl-2 border-primary/20'>
            <li className='flex justify-between items-center'>
              <p className='font-medium'>Standart Double Room</p>
              <p>9 шөнө, том хүн</p>
            </li>
            <li className='flex justify-between items-center'>
              <p>1 doble 2 single ортой</p>
              <p className='text-red-500 line-through '>MNT 2,464,114</p>
            </li>
            <li className='flex justify-between items-center'>
              <p className='text-green-400 font-medium'>Оройн хоолтой</p>
              <p className='text-lg'>MNT 2,241,115</p>
            </li>
            <li className='flex justify-between items-center'>
              <p className='text-red-500 text-[12px] xl:text-[14px]'>Энэ үнэ дээр 5 өрөө үлдсэн</p>
              <p className='text-gray text-[12px] xl:text-[14px]'>+MNT 210,124 хураамж</p>
            </li>

          </li>
          <li className='flex justify-end items-center'>
            <button className='btn-primary py-2 px-5'>Дэлгэрэнгүй</button>
          </li>
        </ul>
      </div>
    </Link>
  )
}

export default HotelCard;