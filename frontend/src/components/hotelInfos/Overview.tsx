import { Rate } from 'antd'
import React from 'react'
import { TbMapSearch } from 'react-icons/tb'
import { amenities } from '../../data/data'
import Icon from '../Icon'
import { ReadMoreButton, WithIcon } from '../myElements'



function Overview() {

  // const {amenitie} = useAppSelector(state=>state.)

  return (
    <div className='px-4 md:px-0'>
      <div className='grid md:grid-cols-9 gap-5'>
        <div className='col-span-6 space-y-5'>
          <div>
            <h2 className='heading-md mb-0'>UB City Hotel</h2>
            <Rate defaultValue={4} disabled />
          </div>
          <div>
            <h3 className='heading-sm'>Тав тухтай байдал</h3>
            <ul className='m-2 grid grid-cols-2'>
              {amenities.slice(0, 6).map((amenitie) => (
                <li className='flex items-center gap-2 md:text-base' key={amenitie.id}>
                  <Icon iconName={amenitie.icon} />
                  <p>{amenitie.name}</p>
                </li>
              ))}
            </ul>
            <ReadMoreButton />
          </div>
          <div>
            <h3 className='heading-sm'>Ариун цэвэр болон аяулгүй байдал</h3>
            <ul className='mb-2 grid grid-cols-2'>
              {Array(4).fill(null).map((_, i) => (
                <li className='flex items-center gap-2 md:text-base' key={i}>
                  <WithIcon icon={'MdLocalFireDepartment'} title={'free wifi'} />
                </li>
              ))}
            </ul>
            <ReadMoreButton />
          </div>
        </div>
        {/* column 2 */}
        <div className='col-span-3 space-y-5'>
          <div>
            <img src='https://snazzy-maps-cdn.azureedge.net/assets/286958-wertyu.png?v=20191011025649' className='rounded-lg' alt="map" />
            <p className='py-1 text-gray'>Сансар,Улаанбаатар</p>
            <p className='hover:underline text-primary flex items-center gap-2 pb-3'><TbMapSearch className='text-primary' />Map дээр харах</p>
          </div>
          <div>
            <h3 className='heading-sm'>Тухайн газрын талаар</h3>
            <ul className='m-0'>
              <li className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Icon iconName={"MdLocationOn"} />
                  <p className='md:text-base'>free wifi</p>
                </div>
                <p className='md:text-base'>11км 11мин алхан</p>
              </li>
              <li className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Icon iconName='MdLocationOn' />
                  <p className='md:text-base'>free wifi</p>
                </div>
                <p className='md:text-base'>11км 11мин алхан</p>
              </li>
              <li className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Icon iconName='MdLocationOn' />
                  <p className='md:text-base'>free wifi</p>
                </div>
                <p className='md:text-base'>11км 11мин алхан</p>
              </li>
            </ul>
          </div>
        </div>
        {/* column 2 end*/}

      </div>
    </div>
  )
}

export default Overview