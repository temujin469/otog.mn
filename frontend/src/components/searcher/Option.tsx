import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { MdChildCare, MdOutlineBedroomChild } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { handleAdult, handleBedroom, handleChildren} from '../../redux/slices/searchSlice'
import handleQuant from '../../utils/handleQuantity'

type Props = {
  openOptions: boolean
  setOpenOptions: React.Dispatch<boolean>
  
}

// handleChildren: (state, action: PayloadAction<"nemeh" | "hasah">) => {
//   if (action.payload === "nemeh") {
//     state.children += 1;
//   } else {
//     state.children -= 1;
//   }
// },
// handleAdult: (state, action: PayloadAction<"nemeh" | "hasah">) => {
//   if (action.payload === "nemeh") {
//     state.adult += 1;
//   } else {
//     state.adult -= 1;
//   }
// },
// handleBedroom: (state, action: PayloadAction<"nemeh" | "hasah">) => {
//   if (action.payload === "nemeh") {
//     state.bedRoom += 1;
//   } else {
//     state.bedRoom -= 1;
//   }
// },
// handleBathroom: (state, action: PayloadAction<"nemeh" | "hasah">) => {
//   if (action.payload === "nemeh") {
//     state.bathRoom += 1;
//   } else {
//     state.bathRoom -= 1;
//   }
// },

function Option({setOpenOptions, openOptions }: Props) {
  const search = useAppSelector(state=>state.search)
  const [children,setChildren] = useState(search.children)
  const [adult,setAdult] = useState(search.adult)
  const [bedroom,setBedroom] = useState(search.bedroom)
  const dispatch = useAppDispatch()



  const handleSearch = () => {
    dispatch(handleChildren(children))
    dispatch(handleAdult(adult))
    dispatch(handleBedroom(bedroom))
    setOpenOptions(false)
  }

  const resetSearch = ()=>{
    setChildren(search.children)
    setAdult(search.adult)
    setBedroom(search.bedroom)
  }
  return (
    <>
      {openOptions && (
        <div className='absolute border border-gray-light z-50 md:shadow-md justify-between left-0 flex flex-col md:block top-0 bg-white md:top-[70px] w-full md:h-auto h-screen md:w-[300px] md:left-[50%] md:translate-x-[-50%] rounded-xl'>
          <div className='w-full'>
            <div className='md:hidden bg-gray-light p-5'>
              <div className='gap-2 rounded-xl bg-white flex items-center p-4'>
                <BsPerson className='text-[25px] text-gray' />
                <p className='font-medium text-lg'>{`Хүний тоо ${adult + children}`}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium flex items-center gap-2">
                  <FaRegUser className="text-xl" />
                  Том хүн
                </div>
                <div className="optionCounter flex items-center">
                  <button
                    disabled={adult <= 1}
                    className="btn-border p-2"
                    onClick={() => handleQuant(setAdult,"-")}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="text-lg font-medium p-2">
                    {adult}
                  </span>
                  <button
                    className="btn-border p-2"
                    onClick={() => handleQuant(setAdult,"+")}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium flex items-center gap-2">
                  <MdChildCare className="text-xl" />
                  Хүүхэд
                </div>
                <div className="optionCounter flex items-center">
                  <button
                    disabled={children <= 0}
                    className="btn-border p-2"
                    onClick={() => handleQuant(setChildren,'-')}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="text-lg font-medium p-2">
                    {children}
                  </span>
                  <div
                    className="btn-border p-2"
                    onClick={() =>handleQuant(setChildren,'+') }
                  >
                    <AiOutlinePlus />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium flex items-center gap-2">
                  <MdOutlineBedroomChild className="text-xl" />
                  Унталгын Өрөө
                </div>
                <div className="optionCounter flex items-center">
                  <button
                    disabled={bedroom <= 1}
                    className="btn-border p-2"
                    onClick={() =>handleQuant(setBedroom,'-')}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="text-lg font-medium p-2">
                    {bedroom}
                  </span>
                  <button
                    className="btn-border p-2"
                    onClick={() =>handleQuant(setBedroom,'+')}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
          { adult !== search.adult || children !== search.children || bedroom !== search.bedroom ? (
            <div className='flex justify-end gap-3 items-center m-5'>
              <button className='font-medium hidden md:block' onClick={resetSearch}>
                Болих
              </button>
              <button className='btn-primary bg-primary w-full md:w-fit md:py-2 py-3 px-3' onClick={handleSearch}>
                Хайх
              </button>
            </div>
          ) : (
            <div className='flex md:justify-end m-5'>
              <button className='btn-primary bg-primary w-full md:w-fit md:py-2 py-3 px-3' onClick={() => setOpenOptions(false)}>
                Хаах
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Option