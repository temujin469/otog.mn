export type SliderViewerData = {
  bg_image: string
  bg_title: string
  sliderDates:{
    title:string
    image:string
    _id:string
  }[]
}

export type Hotel = any
export type HotelRegion = any

export type UserBody = {
  name?:string
  email:string
  password:string
}


export type User = {
  name:string
}