import React from 'react'
import { SliderViewerData } from '../typings'
import { bg_images, amenities} from '../utils/data'
import SliderViewer from './SliderViewer'

function Amenitie() {
  const data:SliderViewerData = {
    bg_image:bg_images.back3,
    bg_title:"Таны аялалын тав тухыг хангах өргөн сонголт",
    sliderDates:amenities.map(amenitie=>({image:amenitie.image,title:amenitie.name,_id:amenitie._id}))
  }
  
    return (
      <div className='container'>
        <SliderViewer data={data}/>
      </div>
    )
}

export default Amenitie