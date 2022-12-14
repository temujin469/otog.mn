import { Checkbox, Radio, Rate, Slider } from 'antd'
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { MdChildCare, MdOutlineBedroomChild, MdOutlineCancel } from 'react-icons/md'
import { amenities, hotelTypes } from '../../data/data'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { handleBedroom, handleAdult, handleChildren, handlePriceRange } from '../../redux/slices/searchSlice'
import handleQuant from '../../utils/handleQuantity'

type Props = {
  openFilter: boolean
  setOpenFilter: React.Dispatch<boolean>
}

function Filter({ setOpenFilter, openFilter }: Props) {
  const search = useAppSelector(state => state.search)
  const [bedroom, setBedroom] = useState(search.bedroom)
  const [priceRange, setPriceRange] = useState(search.priceRange)
  const [bathroom, setBathroom] = useState(search.bathroom)
  const [adult, setAdult] = useState(search.adult)
  const [children, setChildren] = useState(search.children)

  const dispatch = useAppDispatch()

  const handleSearch = () => {
    dispatch(handleChildren(children))
    dispatch(handleAdult(adult))
    dispatch(handleBedroom(bedroom))
    dispatch(handlePriceRange(priceRange))
    setOpenFilter(false) 
  }

  const resetSearch = () => {
    setChildren(search.children)
    setAdult(search.adult)
    setPriceRange(search.priceRange)
    setBedroom(search.bedroom)
    setOpenFilter(false)
  }

  const isModified = bedroom !== search.bedroom || bathroom !== search.bathroom || adult !== search.adult || children !== search.children || priceRange !== search.priceRange

  return (
    <>
      {openFilter && (
        <div className=''>
          <div className="absolute z-40 bg-black/60 w-full h-screen hidden md:block left-0 top-0" onClick={() => setOpenFilter(false)}>
          </div>
          <div className='overflow-y-scroll scrollbar-hide h-screen absolute border border-gray-light z-50 md:shadow-md justify-between left-0 md:left-[50%] md:translate-x-[-50%] flex flex-col md:block top-0 md:top-[50%] md:translate-y-[-50%] bg-white w-full scrollbar-hidden md:w-[600px] md:h-[calc(100vh-80px)] md:rounded-xl'>
            <div className='p-5 border-b border-gray-light flex justify-between items-center'>
              <h3 className='text-[16px] font-semibold'>????????????????</h3>
              <button className='text-gray text-2xl hover:shadow-lg hover:bg-gray-light rounded-full p-3' onClick={resetSearch}><MdOutlineCancel /></button>
            </div>
            <div className='flex flex-col justify-between p-5'>
              <div className='w-full divide-y divide-gray-light'>
                <div className="grid md:grid-cols-2 gap-2 md:gap-5 pb-5">

                  <div className='space-y-2'>
                    <div className="flex items-center justify-between">
                      <div className="font-medium flex items-center gap-2">
                        <FaRegUser className="text-xl" />
                        ?????? ??????
                      </div>
                      <div className="optionCounter flex items-center">
                        <button
                          disabled={adult <= 1}
                          className="btn-border p-2"
                          onClick={() => handleQuant(setAdult, '-')}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="text-lg font-medium p-2">
                          {adult}
                        </span>
                        <button
                          className="btn-border p-2"
                          onClick={() => handleQuant(setAdult, "+")}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium flex items-center gap-2">
                        <MdChildCare className="text-xl" />
                        ????????????
                      </div>
                      <div className="optionCounter flex items-center">
                        <button
                          disabled={children <= 0}
                          className="btn-border p-2"
                          onClick={() => handleQuant(setChildren, '-')}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="text-lg font-medium p-2">
                          {children}
                        </span>
                        <button
                          className="btn-border p-2"
                          onClick={() => handleQuant(setChildren, "+")}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* column */}
                  <div className='space-y-2'>
                    <div className="flex items-center justify-between">
                      <div className="font-medium flex items-center gap-2">
                        <MdOutlineBedroomChild className="text-xl" />
                        ???????????????? ????????
                      </div>
                      <div className="optionCounter flex items-center">
                        <button
                          disabled={bedroom <= 1}
                          className="btn-border p-2"
                          onClick={() => handleQuant(setBedroom, "-")}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="text-lg font-medium p-2">
                          {bedroom}
                        </span>
                        <button
                          className="btn-border p-2"
                          onClick={() => handleQuant(setBedroom, "+")}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium flex items-center gap-2">
                        <MdOutlineBedroomChild className="text-xl" />
                        ???????????????? ??????????
                      </div>
                      <div className="optionCounter flex items-center">
                        <button
                          disabled={bathroom <= 1}
                          className="btn-border p-2"
                          onClick={() => handleQuant(setBathroom, "-")}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="text-lg font-medium p-2">
                          {bathroom}
                        </span>
                        <button
                          className="btn-border p-2"
                          onClick={() => handleQuant(setBathroom, "+")}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* price */}
                <div className='py-5'>
                  <h4 className='text-base mb-4'>??????</h4>
                  <Slider
                    range
                    max={1000000}
                    defaultValue={[0, 1000000]}
                    onAfterChange={(value:number[])=>setPriceRange(value)}
                  />
                </div>
                {/* amenities */}
                <div className='py-4'>
                  <h4 className='text-base mb-4'>?????? ???????????? ????????????</h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {
                      amenities.map((amenitie) => (
                        <div key={amenitie.id}>
                          <Checkbox className="m-0 text-base">{amenitie.name}</Checkbox>
                        </div>
                      ))
                    }
                  </div>
                </div>
                {/* hotelType */}
                <div className='py-4'>
                  <h4 className='text-base mb-4'>???????? ???????????? ??????????????</h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {
                      hotelTypes.map((type) => (
                        <div key={type.id}>
                          <Checkbox className="m-0 text-base">{type.name}</Checkbox>
                        </div>
                      ))
                    }
                  </div>
                </div>
                {/* ?????????????? */}
                <div className='pt-4 pb-[80px] md:pb-4'>
                  <h4 className='text-base mb-4'>??????????????</h4>
                  <Radio.Group className='w-full'>
                    <div className='grid md:grid-cols-2 gap-2'>
                      <Radio value={1}>??????????????????<Rate disabled defaultValue={5} className="pl-2" /> </Radio>
                      <Radio value={2}>C??????<Rate disabled defaultValue={4} className="pl-2" /> </Radio>
                      <Radio value={4}>?????? ????????<Rate disabled defaultValue={3} className="pl-2" /> </Radio>
                      <Radio value={5}>????????????<Rate disabled defaultValue={2} className="pl-2" /> </Radio>
                      <Radio value={6}>??????</Radio>
                    </div>
                  </Radio.Group>
                </div>
              </div>
              <div className='hidden md:block'>
                { isModified ? (
                  <div className='flex justify-end gap-3 items-center'>
                    <button className='font-medium hidden md:block' onClick={resetSearch}>
                      ??????????
                    </button>
                    <button className='btn-primary bg-primary w-full md:w-fit md:py-2 py-3 px-3' onClick={handleSearch}>
                      ????????
                    </button>
                  </div>
                ) : (
                  <div className='flex md:justify-end'>
                    <button className='btn-primary bg-primary w-full md:w-fit md:py-2 py-3 px-3' onClick={() => setOpenFilter(false)}>
                      ????????
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {
            isModified ? (
              <div className='flex h-[79px] md:hidden z-[100] md:static justify-end fixed left-0 right-0 bottom-0 bg-white border-t border-gray-light md:pt-5'>
                <button className='btn-primary flex-[1] md:flex-[0] md:py-2 py-3 px-4 my-4 mx-4 md:m-0 ' onClick={handleSearch}>
                  ????????
                </button>
              </div>
            ) : (
              <div className='flex h-[79px] md:hidden z-[100] md:static justify-end fixed left-0 right-0 bottom-0 bg-white border-t border-gray-light md:pt-5'>
                <button className='btn-primary bg-white text-primary border-2 border-primary flex-[1] md:flex-[0] md:py-2 py-3 px-4 my-4 mx-4 md:m-0 ' onClick={() => setOpenFilter(false)}>
                  ????????
                </button>
              </div>
            )
          }
        </div>
      )}
    </>
  )
}

export default Filter