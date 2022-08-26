import React, { CSSProperties } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { SliderViewerData } from '../typings';
import { Skeleton } from 'antd';

type Props = {
  data: SliderViewerData
}



function SliderViewer({ data }: Props) {

  const bg: CSSProperties = {
    backgroundImage: `url(${data.bg_image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: "cover",
  }

  return (
    <div>
      <div className='section' style={bg}>
        <div className='py-8 px-5'>
          <h2 className='heading-xl text-white'>{data.bg_title}</h2>
        </div>
        <div className='bg-white/30 backdrop-blur-sm p-[7px] rounded-xl'>
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
            {
              data.sliderDates.map(data => (
                <SwiperSlide key={data.id}>
                  <div className='relative rounded-xl overflow-hidden'>
                    {
                      data.image ? (
                        <Link to={`/search/${data.id}`} className="scaleWrapper">
                          <img src={data.image} className="w-full" alt={data.title} />
                          <p className='absolute  text-white heading-sm bottom-2 left-2 lg:bottom-4 lg:left-4'>{data.title}</p>
                        </Link>
                      ) : (
                        <Skeleton.Image active={true} className="w-full" />
                      )
                    }
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div >
  )
}

export default SliderViewer