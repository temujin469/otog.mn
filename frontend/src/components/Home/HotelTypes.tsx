import { SliderViewerData } from '../../typings'
import { bg_images, hotelTypes } from '../../data/data'
import SliderViewer from './SliderViewer'



function HotelTypes() {

const data:SliderViewerData = {
  bg_image:bg_images.back2,
  bg_title:"Таны аялалд зориулагдсан бүх төрлийн байр, сууц",
  sliderDates:hotelTypes.map(type=>({image:type.image,title:type.name,id:type.id}))
}


  return (
    <div className='container'>
      <SliderViewer data={data}/>
    </div>
  )
}

export default HotelTypes