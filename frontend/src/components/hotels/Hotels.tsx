import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import HotelCard from './HotelCard';
import { TbMapSearch } from 'react-icons/tb'
import { Affix, Radio, Skeleton } from 'antd';
import { GoSettings } from 'react-icons/go';
import Filter from '../searcher/Filter';
import { handleShowMap } from '../../redux/slices/appSlice';

function Hotels() {
  const { hotels, loading } = useAppSelector(state => state.hotel);
  const { destination } = useAppSelector(state => state.search);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const dispatch = useAppDispatch()


  return (
    <div className=''>
      <Affix offsetTop={0}>
        <div className='bg-white shadow-lg lg:border-b border-gray px-5 py-2'>
          <div className='flex justify-between items-center h-full mb-2'>
            <div className='text-lg font-medium'>{`${destination ? destination : "Үр дүн"}: ${hotels?.length}`}</div>
            <div className='flex gap-5 items-center'>
              <div className='md:relative md:hidden'>
                <button className='tag bg-primary text-white rounded-full py-2 px-4 md:py-1 md:px-3' onClick={() => setOpenFilter(!openFilter)}>
                  <GoSettings className='text-lg' /> <p className='hidden sm:block'>Шүүх & сортлох</p>
                </button>
                <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />
              </div>
              <div>
                <button className='btn-primary rounded-full' onClick={() => dispatch(handleShowMap(true))}>
                  <p className='hidden md:block'>Map дээр харах</p>
                  <TbMapSearch className='text-lg' />
                </button>
              </div>
            </div>
          </div>
          {/* <ul className='flex m-0 border border-primary/50 rounded-md overflow-hidden'>
          <li className='py-2 flex-[1] bg-primary text-white text-center font-medium hover:bg-primary hover:text-white'>Үнэ ( өсхөөр )</li>
          <li className='py-2 flex-[1] text-center font-medium border-l border-primary/50 hover:bg-primary hover:text-white'>Үнэлгээ өндөр</li>
          <li className='py-2 flex-[1] text-center font-medium border-l border-primary/50 hover:bg-primary hover:text-white'>Гэр буудал эхэндээ</li>
        </ul> */}
          <Radio.Group defaultValue="a" buttonStyle="solid" className='w-full flex justify-center' size='large'>
            <Radio.Button value="a">Үнэ ( өсхөөр )</Radio.Button>
            <Radio.Button value="b">Үнэлгээ өндөр</Radio.Button>
            <Radio.Button className='hidden md:block' value="c">Гэр буудал эхэндээ</Radio.Button>
          </Radio.Group>
        </div>
      </Affix>
      <div className='flex flex-col gap-5 bg-gray-light sm:gap-4 p-3 sm:p-4 md:h-[calc(100vh-210px)] md:overflow-y-scroll'>
        {
          hotels?.map(hotel => (
            <Skeleton avatar title={true} loading={loading} active>
              <HotelCard hotel={hotel} />
            </Skeleton>

          ))
        }
      </div>
    </div>
  )
}

export default Hotels