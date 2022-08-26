import { Checkbox } from 'antd'
import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { MdOutlineChevronRight } from 'react-icons/md'
import { amenities } from '../../data/data'
import Icon from '../Icon'
import { ReadMoreButton } from '../myElements'

function RoomCard() {

  return (
    <div>
      <div className='rounded-xl overflow-hidden justify-between flex flex-col shadow-lg hover:shadow-2xl border border-gray-light h-[680px]'>
        <div>
          <img src='https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='room'
            className='w-full h-[200px] object-cover'
          />
          <div className='p-4 space-y-3'>
            <p className='text-lg font-medium'>Өрөөний нэр</p>
            <ul className='m-0 flex flex-col gap-1'>
              {
                amenities.slice(0, 4).map(amenitie => (
                  <li className='flex items-center gap-2'>
                    <Icon iconName={amenitie.icon} size={15} />
                    <p className='text-textClr'>{amenitie.name}</p>
                  </li>
                ))
              }
            </ul>
            <div>
              <p className='text-primary flex items-center gap-1 w-fit'>
                Буцаах боломжой<AiOutlineExclamationCircle className='text-lg' />
              </p>
              <small className='text-gray'>9 сарь,1 өмнө</small>
            </div>
            <p className='text-primary hover:underline flex items-center gap-1 w-fit'>
              дэлгэрэнүй харах<MdOutlineChevronRight className='text-lg' />
            </p>
          </div>
          <div className='px-4'>
            <p className=' border-t border-gray-light font-medium text-base'>Нэмэлт</p>
            <ul className='flex flex-col gap-2 mt-2'>
              <li className='flex items-center justify-between'>
                <Checkbox>Нэтэлт зүйлгүй</Checkbox>
                <p>+₮0</p>
              </li>
              <li className='flex items-center justify-between'>
                <Checkbox>Өглөөний цай</Checkbox>
                <p>+₮30,000</p>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-end p-4'>
          <div>
            <p className='heading-sm'>₮1045000</p>
            <p className='text-gray'>Нийт ₮1045000</p>
            <ReadMoreButton />
          </div>
          <button className='btn-primary'>Захиалах</button>
        </div>
      </div>
    </div>
  )
}

export default RoomCard