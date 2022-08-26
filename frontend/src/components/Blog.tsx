import React from 'react'
import { blogs } from '../data/data'


function Blog() {
  return (
    <div className='container'>
      <h2 className='heading-md'>Аялалын талаар таны мэдлэгт (блог)</h2>
      <div className='flex gap-4 flex-col md:flex-row pt-4 p-5 md:p-0'>
        {
          blogs.slice(0,3).map(blog => (
            <div key={blog.id}>
              <div>
                <img src={blog.image} alt={blog.name} className="rounded-xl"/>
              </div>
              <div className='py-2 px-1'>
                <p className='text-[15px] font-medium'>{blog.name}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Blog