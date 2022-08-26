import React from 'react'
import { AiFillCar } from 'react-icons/ai'
import { MdLocationOn, MdOutlineRestaurantMenu } from 'react-icons/md'
import { TbMapSearch } from 'react-icons/tb'
// import Icon from '../Icon'

function HotelLocation() {
  return (
    <div className='py-3 px-4 md:px-0'>
      <div className='grid md:grid-cols-5 gap-8'>
        <div className='col-span-2'>
          <h2 className='heading-md'>Энэ газрын тухай</h2>
          <h4 className='heading-sm'>Улаанбаатар</h4>
          <p>
            Улаанбаатар хотод, Улаанбаатар дуурийн театраас 2.1 км зайд байрлах Ланд зочид буудал нь баартай, хотыг үзэх үзэмжтэй. Энэ үл хөдлөх хөрөнгийн үйлчилгээний газруудын дунд ресторан, 24 цагийн үүдний ширээ, өрөөний үйлчилгээ, мөн бүх газар үнэ төлбөргүй WiFi байдаг. Зочид буудал нь гэр бүлийн өрөөтэй.
          </p>
        </div>
        <div className='col-span-3'>
          <div>
            <div className='rounded-xl overflow-hidden'>
              <img src='https://snazzy-maps-cdn.azureedge.net/assets/286958-wertyu.png?v=20191011025649' className='w-full' alt="location" />
            </div>
            <p className='hover:underline text-primary flex items-center justify-center gap-2 pb-3'><TbMapSearch className='text-primary' />Map дээр харах</p>
          </div>
          <div className='grid md:grid-cols-2 gap-2.5'>
            <div>
              <h4 className='heading-sm flex items-center gap-1'><MdLocationOn className="text-xl" /> газарууд</h4>
              <ul className='m-0 pl-6'>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
              </ul>
            </div>
            <div>
              <h4 className='heading-sm flex items-center gap-1'><AiFillCar className="text-xl" /> газарууд</h4>
              <ul className='m-0 pl-6'>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
              </ul>
            </div>
            <div>
              <h4 className='heading-sm flex items-center gap-1'><MdOutlineRestaurantMenu className="text-xl" /> газарууд</h4>
              <ul className='m-0 pl-6'>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
                <li>Бүгд хааны музей</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelLocation