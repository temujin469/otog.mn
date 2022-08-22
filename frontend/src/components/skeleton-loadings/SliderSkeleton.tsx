import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function SliderSkeleton() {
  return (
      <Swiper
        spaceBetween={7}
        slidesPerView={2}
        breakpoints={{
          467: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
        }}
      >
        {
          Array(5).fill(null).map((_, i) => (
            <SwiperSlide key={i}>
              <div className='relative rounded-xl overflow-hidden bg-gray-light'>
                <div className="scaleWrapper w-full h-[120px]">
                  <p className='absolute bg-gray heading-sm bottom-4 left-4 w-full h-full p-10' />
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
  )  
}



export default SliderSkeleton