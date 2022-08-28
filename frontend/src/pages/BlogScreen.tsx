import moment from 'moment'
import React from 'react'
import { BsCalendarDate } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header2 from '../components/header/Header2'
import { blogs } from '../data/data'

function BlogScreen() {
  const location = useLocation()
  const currentBlogId = location.pathname.split('/')[2]
  const blog = blogs.find(blog => blog.id === currentBlogId)

  return (
    <div className='h-screen overflow-y-scroll'>
      <Header2 />
      {
        blog && (
          <div className='container my-[52px] pt-5'>
            <div>
              <h3 className="heading-md lg:text-2xl m-0">{blog.title}</h3>
              <p className=" text-gray flex items-center gap-1 mb-5"><BsCalendarDate />{moment(blog.date).format("MMM Do YY")}</p>
              <div className="w-full overflow-hidden rounded-2xl max-h-[500px] mb-5">
                <img alt="Post thumbnail" src={blog.image} className="transition-all w-full h-full object-cover" />
              </div>
              <p>{blog.content}</p>
            </div>
          </div>
        )
      }
      <Footer />
    </div>
  )
}

export default BlogScreen