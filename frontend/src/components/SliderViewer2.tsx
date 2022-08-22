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



function SliderViewer2({ data }: Props) {

  const bg: CSSProperties = {
    backgroundImage: `url(${data.bg_image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: "cover",
    objectFit: "cover",
  }

  return (
    <div>
      <div className='section select-none' style={bg}>
        <div className='py-8 px-5'>
          <h2 className='heading-xl text-white'>{data.bg_title}</h2>
        </div>
        <div className='p-[7px]'>
          <Swiper
            spaceBetween={7}
            slidesPerView={1}
            breakpoints={{
              500: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {
              data.sliderDates.map(data => (
                <SwiperSlide key={data._id}>
                  {
                    data.image ? (
                      <Link to={`/search/${data._id}`}>
                        <div className='flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm  p-1'>
                          <img src={data.image} className="w-full rounded-lg max-h-[90px] object-cover max-w-[100px]" alt={data.title} />
                          <div>
                            <p className='text-lg'>{data.title}</p>
                            <p className='text-[12px]'>{data.title}</p>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <Skeleton.Image active={true} className="w-full" />
                    )
                  }
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div >
  )
}

export default SliderViewer2