import { Slider } from 'antd'
import Search from 'antd/lib/transfer/search'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { handlePriceRange } from '../../redux/slices/searchSlice'

type Props = {
  openPriceOption: boolean
  setOpenPriceOption: React.Dispatch<boolean>
}


function PriceOption({ setOpenPriceOption, openPriceOption }: Props) {
  const {search} = useAppSelector(state=>state)
  const [priceRange,setPriceRange] = useState<number[]>(search.priceRange)
  const dispatch = useAppDispatch()

  const handleSearch = () => {
    dispatch(handlePriceRange(priceRange))
  }

  const resetSearch = () => {
    setPriceRange(search.priceRange)
  }

  return (
    <>
      {openPriceOption && (
        <div className='md:absolute border border-gray-light z-50 md:shadow-md justify-between flex flex-col bg-white md:top-[37px] w-full  md:w-[300px] md:left-[50%] md:translate-x-[-50%] rounded-xl'>
          <div className='p-5'>
            <h4>Үнэ</h4>
            <Slider
              range
              max={1000000}
              onAfterChange={(value:number[])=>setPriceRange(value)}
              defaultValue={[0, 1000000]}
            />
            {priceRange !== search.priceRange ? (
              <div className='flex justify-end gap-3 items-center mt-5'>
                <button className='font-medium hidden md:block' onClick={resetSearch}>
                  Болих
                </button>
                <button className='btn-primary bg-primary w-full md:w-fit md:py-2 py-3 px-3' onClick={handleSearch}>
                  Хайх
                </button>
              </div>
            ) : (
              <div className='flex justify-end mt-5'>
                <button className='btn-primary bg-primary md:py-2 py-3 px-3' onClick={() => setOpenPriceOption(false)}>
                  Хаах
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default PriceOption