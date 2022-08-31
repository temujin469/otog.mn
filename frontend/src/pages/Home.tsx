import React, { useEffect } from 'react'
import HotelCategory from '../components/Home/HotelTypes'
import BestRatedRegion from '../components/Home/BestRatedHotelRegion'
import Blog from '../components/Home/Blog'
import TopSection from '../components/Home/TopSection'
import Amenitie from '../components/Home/Amenitie'
import Footer from '../components/footer/Footer'
import Region from '../components/Home/hotelRegion'
import { getHotels } from '../api/hotel'
import { useAppDispatch } from '../hooks'
import { getHotelRegions } from '../api/hotelRegion'
import Plan from '../components/Home/Plan'

function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchDatas = () => {
      getHotels(dispatch)
      getHotelRegions(dispatch)
    }
    fetchDatas()

  }, [])

  return (
    <div className='h-screen overflow-y-scroll overflow-hidden'>
      <TopSection />
      <HotelCategory />
      <Amenitie />
      <Region />
      <BestRatedRegion />
      <Plan/>
      <Blog />
      <Footer />
    </div>
  )
}

export default Home