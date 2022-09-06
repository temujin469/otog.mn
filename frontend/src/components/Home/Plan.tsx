import React from 'react'
import { Link } from 'react-router-dom'

function Plan() {
  return (
    <div className='container mb-10'>
      <h2 className='heading-md'>Та дараачийн аялалаа төлөвлөсөн үү?</h2>
      <div className='lg:grid grid-cols-5 md:gap-4'>
        <div className='col-span-3 h-[360px] pb-5 lg:pb-0'>
          <Link to="blogs/1">
            <div className='flex flex-col rounded-xl border border-gray-light shadow-md overflow-hidden h-full'>
              <img src='https://images.unsplash.com/photo-1511185307590-3c29c11275ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80' alt='landscape' className='h-[65%] object-cover bg-center' />
              <div className='px-5 py-3'>
                <h3 className='font-medium lowercase md:text-base'>РАШААН - ХАЛХГОЛ - АМГАЛАНБААТАР ХОТ ЧИГЛЭЛИЙН АЯЛАЛЫН МАРШРУТ</h3>
                <p className='text-[12px] text-gray'>Хөлөг баатар Боорчийн нутаг - Хөхүүрийн тал...</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='col-span-2'>
          <div className='flex flex-col justify-between gap-4 max-h-[360px]'>
            <Link to="blogs/1">
              <div className='flex items-center h-[112px] md:h-[171px] rounded-xl overflow-hidden border border-gray-light shadow-md w-full'>
                <div className='h-full w-[40%] max-w-[200px]'>
                  <img src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='landscape' className='h-full w-full object-cover' />
                </div>
                <div className='p-3'>
                  <h3 className='font-medium lowercase md:text-base'>ХОЙД ХИЛ ДАМНАСАН АЯЛАЛЫН МАРШРУТ</h3>
                  <p className='text-[12px] text-gray'>Ханзат хотын туурь - Чингисийн морины уяа...</p>
                </div>
              </div>
            </Link>
            <Link to="blogs/2">
              <div className='flex items-center rounded-xl overflow-hidden border border-gray-light shadow-md h-[112px] md:h-[171px] '>
                <div className='h-full w-[40%] max-w-[200px]'>
                  <img src='https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt='landscape' className='h-full w-full object-cover' />
                </div>
                <div className='p-3'>
                  <h3 className='font-medium lowercase md:text-base'>НУТГИЙН ИРГЭД, ДОТООДЫН АЯЛАГЧИДАД</h3>
                  <p className='text-[12px] text-gray'>Чингис хааны адуун сүргийн нутаг...</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan