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
        <div className='absolute border border-gray-light z-50 md:shadow-md justify-between left-0 flex flex-col md:block top-0 bg-white md:top-[37px] w-full md:h-auto h-screen md:w-[300px] md:left-[50%] md:translate-x-[-50%] rounded-xl md:p-3'>
          <div className='w-full'>
            <h4>Нэг шөнө</h4>
            <Slider
              range
              step={10}
              defaultValue={[20, 50]}
            />
          </div>
          <div className='md:hidden m-5 absolute bottom-0 left-0 right-0'>
            <button className='btn-primary w-full p-4' onClick={() => setOpenPriceOption(false)}>
              Хаах
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PriceOption