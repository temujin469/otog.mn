export type SliderViewerData = {
  bg_image: string
  bg_title: string
  sliderDates:{
    title:string
    image:string
    id:string
  }[]
}

export type Hotel = {
  images:string[]
  name: string;
    bed_room: number;
    bath_room: number;
    hotelType: {
        name: string;
        image: string;
        id: string;
    };
    county: string;
    amenities: {
        name: string;
        image: string;
    }[]
    lacation:{
      long:number,
      lat:number,
    };
    region:{}
    description: string;
    rating: number;
    review:number
    id:number
}

export type HotelRegion = any

export type UserBody = {
  name?:string
  email:string
  password:string
}


export type User = {
  name:string
  id:string
  name:string
  phone?:string
  email:string
  county?:string
  accessToken:string
}

export type Option = {
  adult: number
  children: number
  room: number
}