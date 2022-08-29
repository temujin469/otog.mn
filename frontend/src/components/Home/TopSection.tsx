import React, { CSSProperties } from 'react'
import { bg_images } from '../../data/data'
import Header from '../header/Header';
import Searcher from '../searcher/Searcher';

const bg: CSSProperties = {
  backgroundImage: `url(${bg_images.back1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: 'fixed'
}

function TopSection() {
  return (
    <div className='p-5 2xl:p-7 mb-5 h-screen  md:min-h-[600px]'>
      <div className="rounded-lg h-full" style={bg} >
        <Header />
        <div className='pb-14 h-full'>
          <div className='container h-full flex items-center'>
            <div className='flex flex-col gap-10 pb-32 justify-center flex-[1]'>
              <div className='text-white'>
                <h2 className='heading-xl text-white'>Байр, сууц захиалгын хамгийн өргөн сонголт</h2>
                <p>......... байр, сууцны мэдээлэл байна.</p>
              </div>
              <div>
                <Searcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSection;