import React from 'react'

function Plan() {
  return (
    <div className='container mb-10'>
      <h2 className='heading-md'>Та дараачийн аялалаа төлөвлөсөн үү?</h2>
      <div className='md:grid   grid-cols-5 md:gap-4'>
        <div className='col-span-3 h-[300px] pb-5 md:pb-0'>
          <div className='flex flex-col rounded-xl border border-gray-light shadow-md overflow-hidden h-full'>
            <img src='https://images.unsplash.com/photo-1511185307590-3c29c11275ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80' alt='landscape' className='h-[65%] object-cover bg-center' />
            <div className='px-5 py-3'>
              <h3 className='font-medium lowercase'>РАШААН - ХАЛХГОЛ - АМГАЛАНБААТАР ХОТ ЧИГЛЭЛИЙН АЯЛАЛЫН МАРШРУТ</h3>
              <p className='text-[12px] text-gray'>Хөлөг баатар Боорчийн нутаг - Хөхүүрийн тал...</p>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='flex flex-col justify-between gap-4 h-full max-h-[360px]'>
            <div className='flex items-center h-[112px] md:h-[142px] rounded-xl overflow-hidden border border-gray-light shadow-md w-full'>
              <div className='h-full w-[40%] max-w-[200px]'>
                <img src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='landscape' className='h-full w-full object-cover' />
              </div>
              <div className='p-3'>
                <h3 className='font-medium lowercase'>ХОЙД ХИЛ ДАМНАСАН АЯЛАЛЫН МАРШРУТ</h3>
                <p className='text-[12px] text-gray'>Ханзат хотын туурь - Чингисийн морины уяа...</p>
              </div>
            </div>
            <div className='flex items-center rounded-xl overflow-hidden border border-gray-light shadow-md h-full h-[112px] md:h-[142px] '>
              <div className='h-full w-[40%] max-w-[200px]'>
                <img src='https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt='landscape' className='h-full w-full object-cover' />
              </div>
              <div className='p-3'>
                <h3 className='font-medium lowercase'>НУТГИЙН ИРГЭД, ДОТООДЫН АЯЛАГЧИДАД</h3>
                <p className='text-[12px] text-gray'>Чингис хааны адуун сүргийн нутаг...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan