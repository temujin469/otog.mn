import React from 'react'
import { SliderViewerData } from '../typings'
import {bg_images, regions } from '../utils/data'
import SliderViewer2 from './SliderViewer2'

function BestRatedHotelRegion() {
  const data:SliderViewerData = {
    bg_image:bg_images.back3,
    bg_title:"Таны аялалд зориулагдсан бүх төрлийн байр, сууц",
    sliderDates:regions.map(region=>({image:region.image,title:region.name,_id:region._id}))
  }
  return (
    <div className='container'>
      <SliderViewer2 data={data} />
    </div>
  )
}

export default BestRatedHotelRegion;