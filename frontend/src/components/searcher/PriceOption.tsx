import { Slider } from 'antd'
import React from 'react'

type Props = {
  openPriceOption: boolean
  setOpenPriceOption: React.Dispatch<boolean>
}

function PriceOption({ setOpenPriceOption, openPriceOption }: Props) {
  return (
    <>
      {openPriceOption && (
        <div className='md:absolute border border-gray-light z-50 md:shadow-md justify-between flex flex-col bg-white md:top-[37px] w-full  md:w-[300px] md:left-[50%] md:translate-x-[-50%] rounded-xl'>
          <div className='p-5'>
            <h4>Үнэ</h4>
            <Slider
              range
              step={10}
              defaultValue={[20, 50]}
            />
            <div className='flex justify-end mt-5'>
              <button className='btn-primary py-2 px-4' onClick={() => setOpenPriceOption(false)}>
                Хаах
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PriceOption