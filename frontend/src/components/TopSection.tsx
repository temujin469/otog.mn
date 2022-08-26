import React, { CSSProperties } from 'react'
import { bg_images } from '../data/data'
import Navbar from './header/Navbar';
import Searcher from './searcher/Searcher';

const bg: CSSProperties = {
  backgroundImage: `url(${bg_images.back1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: 'fixed'
}

function TopSection() {
  return (
    <div className='p-5 2xl:p-7 mb-5'>
      <div className="rounded-lg min-h-[600px]" style={bg} >
        <div className='pb-14 mx-auto'>
          <Navbar />
          <div className='container'>
            <div className='mx-auto min-h-[500px] flex flex-col gap-10 justify-center'>
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