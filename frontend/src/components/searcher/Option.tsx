import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { MdChildCare, MdOutlineBedroomChild } from 'react-icons/md'

type Props = {
  handleOption: (name: string, operation: "nemeh" | "hasah") => void
  setOptions: React.Dispatch<any>
  options: any
  openOptions: boolean
  setOpenOptions: React.Dispatch<boolean>
  totalGuests: number
}

function Option({ handleOption, setOptions, options, setOpenOptions, openOptions, totalGuests }: Props) {
  return (
    <>
      {openOptions && (
        <div className='absolute z-50 md:shadow-md justify-between left-0 flex flex-col md:block top-0 bg-white md:top-[75px] w-full md:h-auto h-screen md:w-[300px] md:left-[50%] md:translate-x-[-50%] rounded-xl md:p-5'>
          <div className='w-full'>
            <div className='md:hidden bg-gray-light p-5'>
              <div className='gap-2 rounded-xl bg-white flex items-center p-4'>
                <BsPerson className='text-[25px] text-gray' />
                <p className='font-medium text-lg'>{`Хүний тоо ${totalGuests}`}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium flex items-center gap-2">
                  <FaRegUser className="text-xl" />
                  Том хүн
                </div>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="btn-border p-2"
                    onClick={() => handleOption("adult", "hasah")}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="text-lg font-medium p-2">
                    {options.adult}
                  </span>
                  <button
                    className="btn-border p-2"
                    onClick={() => handleOption("adult", "nemeh")}
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
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="btn-border p-2"
                    onClick={() => handleOption("children", "hasah")}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="text-lg font-medium p-2">
                    {options.children}
                  </span>
                  <button
                    className="btn-border p-2"
                    onClick={() => handleOption("children", "nemeh")}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium flex items-center gap-2">
                  <MdOutlineBedroomChild className="text-xl" />
                  Өрөөний тоо
                </div>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="btn-border p-2"
                    onClick={() => handleOption("room", "hasah")}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="text-lg font-medium p-2">
                    {options.room}
                  </span>
                  <button
                    className="btn-border p-2"
                    onClick={() => handleOption("room", "nemeh")}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='md:hidden m-5 absolute bottom-0 left-0 right-0'>
            <button className='btn-primary w-full p-4' onClick={()=>setOpenOptions(false)}>
              Хаах
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Option