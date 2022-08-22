import React from 'react'
import { SliderViewerData } from '../typings'
import {bg_images, regions } from '../utils/data'
import SliderViewer2 from './SliderViewer2'

function BestRatedHotelRegion() {
  const data:SliderViewerData = {
    bg_image:bg_images.back4,
    bg_title:"Хамгийн их сонголттой, аялал, амралтын бүс",
    sliderDates:regions.map(region=>({image:region.image,title:region.name,_id:region._id}))
  }
  return (
    <div className='container'>
      <SliderViewer2 data={data} />
    </div>
  )
}

export default BestRatedHotelRegion;