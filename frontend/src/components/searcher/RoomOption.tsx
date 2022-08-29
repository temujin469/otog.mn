import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { handleBathroom, handleBedroom } from '../../redux/slices/searchSlice'
import handleQuant from '../../utils/handleQuantity'

type Props = {
  openRoomOption: boolean
  setOpenRoomOption: React.Dispatch<boolean>
}

function RoomOption({ openRoomOption, setOpenRoomOption }: Props) {
  const search = useAppSelector(state => state.search)
  const [bedroom, setBedroom] = useState(search.bedroom)
  const [bathroom, setBathroom] = useState(search.bathroom)
  const dispatch = useAppDispatch()

  const handleSearch = () => {
    dispatch(handleBedroom(bedroom))
    dispatch(handleBathroom(bathroom))
    setOpenRoomOption(false)
  }

  const resetSearch = () => {
    setBedroom(search.bedroom)
    setBathroom(search.bathroom)
  }

  return (
    <>
      {openRoomOption && (
        <div className='absolute border border-gray-light z-50 md:shadow-md justify-between left-0 flex flex-col md:block top-0 bg-white md:top-[37px] w-full md:h-auto h-screen md:w-[300px] md:left-[50%] md:translate-x-[-50%] rounded-xl'>
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium flex items-center gap-2">
                <FaRegUser className="text-xl" />
                Унталгын өрөө
              </div>
              <div className="optionCounter flex items-center">
                <button
                  disabled={bedroom<= 1}
                  className="btn-border p-2"
                  onClick={() => handleQuant(setBedroom, '-')}
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
                Угаалгын өрөө
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
            {bedroom !== search.bedroom || bathroom !== search.bathroom ? (
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
                <button className='btn-primary bg-primary md:py-2 py-3 px-3' onClick={() => setOpenRoomOption(false)}>
                  Хаах
                </button>
              </div>
            )}
          </div>

          {/* <div className='md:hidden m-5 absolute bottom-0 left-0 right-0'>
            <button className='btn-primary w-full p-4' onClick={() => setOpenRoomOption(false)}>
              Хаах
            </button>
          </div> */}
        </div>
      )}
    </>
  )
}

export default RoomOption