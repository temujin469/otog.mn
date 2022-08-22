import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAppSelector } from '../hooks'

function HotelRegion() {

  const { regions, loading } = useAppSelector(state => state.hotelRegion)

  return (
    <div className='container mb-10'>
      <div className='p-4 shadow-lg rounded-xl'>
        <h2 className='heading-md mt-4 mb-5'>Аялал, амралтын бүс нутгууд</h2>
        <div className='bg-white backdrop-blur-sm rounded-xl'>
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
              1300: {
                slidesPerView: 5,
              },
            }}
          >
            {regions && !loading ? (
              regions.map(region => (
                <SwiperSlide key={region._id}>
                  <div className='relative rounded-xl overflow-hidden'>
                    {
                      <Link to={`/search/${region._id}`} className="scaleWrapper">
                        <img src={region.image} className="w-full" alt={region.name} />
                        <p className='absolute  text-white heading-sm bottom-2 left-2 lg:bottom-4 lg:left-4'>{region.name}</p>
                      </Link>
                    }
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p>loading</p>
            )
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default HotelRegion;