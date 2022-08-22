import React, { useEffect } from 'react'
import HotelCategory from '../components/HotelTypes'
import BestRatedRegion from '../components/BestRatedHotelRegion'
import Blog from '../components/Blog'
import TopSection from '../components/TopSection'
import Amenitie from '../components/Amenitie'
import Footer from '../components/footer/Footer'
import Region from '../components/hotelRegion'
import { getHotels } from '../api/hotel'
import { useAppDispatch } from '../hooks'
import { getHotelRegions } from '../api/hotelRegion'
import Plan from '../components/Plan'

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
    <div>
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