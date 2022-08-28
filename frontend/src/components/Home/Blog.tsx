import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { blogs } from '../../data/data'
import BlogCard from '../BlogCard'


function Blog() {
  return (
    <div className='container mb-5'>
      <h2 className='heading-md'>Аялалын талаар таны мэдлэгт (блог)</h2>
      <div className='flex gap-5 flex-col md:flex-row pt-4 md:p-0'>
        {
          blogs.slice(0,3).map((blog,i) => (
            <BlogCard blog={blog}/>
          ))
        }
      </div>
      <div className='flex justify-end mt-2'>
        <Link to="/blogs" className='text-base hover:text-primary flex items-center gap-2'>Бүгдийг үзэх<FiChevronRight/></Link>
      </div>
    </div>
  )
}

export default Blog