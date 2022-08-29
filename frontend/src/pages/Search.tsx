import React, { useEffect } from 'react'
import { getHotels } from '../api/hotel'
import Advertising from '../components/Advertising'
import Hotels from '../components/hotels/Hotels'
import Map from '../components/map/Map'
import SearchHeader from '../components/searchHeader'
// import { amenities } from '../data/data'
import { useAppDispatch } from '../hooks'
// import FixedHeader from '../components/fixedHeader'

function Search() {

  const dispatch = useAppDispatch()
  // const {amenities} = useAppSelector(state=>state.)

  useEffect(() => {
    const fetchData = async () => {
      await getHotels(dispatch)
    }
    fetchData()
  }, [])
  return (
    <div className='h-screen overflow-y-scroll bg-gray-light'>
      <SearchHeader withFilterRow />
      <div className=''>
        <div className='xl:grid grid-cols-11'>
          <div className='col-span-6'>
            <Hotels />
          </div>
          <div className='col-span-5 hidden xl:block h-[calc(100vh-110px)]'>
            <div className='h-[60%]'><Map /></div>
            <div className='h-[40%]'>
              <Advertising />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search