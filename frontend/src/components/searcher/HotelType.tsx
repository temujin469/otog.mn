import { Checkbox } from 'antd'
import React from 'react'
import { hotelTypes } from '../../data/data'

type Props = {
  openHotelType: boolean
  setOpenHotelType: React.Dispatch<boolean>
}

function HotelType({ openHotelType, setOpenHotelType }: Props) {

  return (
    <>
      {openHotelType && (
        <div className='absolute border border-gray-light z-50 md:shadow-md justify-between left-0 flex flex-col md:block top-0 bg-white md:top-[37px] w-full md:h-auto h-screen md:w-[400px] md:left-[50%] md:translate-x-[-50%] rounded-xl md:p-4'>
          <div>
            <h3 className='font-medium text-gray '>ОРОН СУУЦНЫ ТӨРӨЛ</h3>
              <div className='grid grid-cols-2 gap-2'>
                {
                  hotelTypes.map((type)=>(
                    <Checkbox key={type.id} className="m-0 text-base">{type.name}</Checkbox>
                  ))
                }
              </div>
          </div>
          <div className='md:hidden m-5 absolute bottom-0 left-0 right-0'>
            <button className='btn-primary w-full p-4' onClick={() => setOpenHotelType(false)}>
              Хаах
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default HotelType