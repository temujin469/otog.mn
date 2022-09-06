import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { GoSettings } from 'react-icons/go'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHotels } from '../api/hotel'
import Advertising from '../components/Advertising'
import Hotels from '../components/hotels/Hotels'
import GoogleMap from '../components/map/GoogleMap'
import Mapbox from '../components/map/Map'
import Filter from '../components/searcher/Filter'
import SearchHeader from '../components/searchHeader'
// import { amenities } from '../data/data'
import { useAppDispatch, useAppSelector } from '../hooks'
import { handleShowMap } from '../redux/slices/appSlice'
import { handleAdult } from '../redux/slices/searchSlice'
import { Hotel } from '../typings'
// import FixedHeader from '../components/fixedHeader'

function Search() {
  const { showMap } = useAppSelector(state => state.app)
  const { hotels } = useAppSelector(state => state.hotel)
  const [openFilter, setOpenFilter] = useState(false)
  const dispatch = useAppDispatch()

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const adult = sp.get('adult')
  const arrival = sp.get('arrival') || 'all';
  const bedrooms = sp.get('bedrooms') || 'all';
  const children = sp.get('children') || 'all';
  const duration = sp.get('duration')
  const order = sp.get('order') || 'date';
  const page = sp.get('page') || 1;




  useEffect(() => {
    const fetchData = async () => {
      await getHotels(dispatch)
      dispatch(handleAdult(Number(adult)))
    }
    fetchData()
  }, [adult])

  // const getFilterUrl = (filter:any) => {
  //   const filterPage = filter.page || page;
  //   const filterCategory = filter.category || category;
  //   const filterQuery = filter.query || query;
  //   const filterRating = filter.rating || rating;
  //   const filterPrice = filter.price || price;
  //   const sortOrder = filter.order || order;
  //   return `/search?category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  // };


  return (
    <div>
      {
        showMap ? (
          <div className='w-full h-screen'>
            <div className='flex gap-5 items-center absolute z-20 justify-between w-full p-4'>
              <div>
                <button className='btn-primary rounded-full py-2 px-4 md:text-base' onClick={() => dispatch(handleShowMap(false))}>
                  <BiArrowBack className='text-lg' />
                  Буцах
                </button>
              </div>
              <div className=''>
                <button className='btn-primary text-white rounded-full py-2 px-4 md:text-base' onClick={() => setOpenFilter(!openFilter)}>
                  Шүүх
                  <GoSettings className='text-lg' />
                </button>
              </div>
            </div>
            {/* <Mapbox hotels={hotels as Hotel[]} /> */}
            <GoogleMap />
            <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />
          </div>
        ) : (
          <div className='h-screen md:overflow-hidden bg-gray-light'>
            <SearchHeader withFilterRow />
            <div className=''>
              <div className='xl:grid grid-cols-11'>
                <div className='col-span-6'>
                  <Hotels />
                </div>
                <div className={classNames('col-span-5 hidden xl:block h-[calc(100vh-110px)]')}>
                  <div className='h-[60%]'>
                    {/* <Mapbox hotels={hotels as Hotel[]} /> */}
                    <GoogleMap />
                  </div>
                  <div className='h-[40%]'>
                    <Advertising />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Search