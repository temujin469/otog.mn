import moment from 'moment'
import React from 'react'
import { BsCalendarDate } from 'react-icons/bs'
import { Link } from 'react-router-dom'
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
          <div className='px-4 xl:px-0'>
            <div className='xl:container my-[52px] pt-5'>
              <div className='lg:grid grid-cols-6 gap-5 space-y-10 md:space-y-0'>
                <div className='col-span-4'>
                  <h3 className="heading-md lg:text-2xl m-0">{blog.title}</h3>
                  <p className=" text-gray mt-2 flex items-center gap-1 mb-5"><BsCalendarDate />{moment(blog.date).format("MMM Do YY")}</p>
                  <div className="w-full overflow-hidden rounded-2xl max-h-[600px] mb-5">
                    <img alt="Post thumbnail" src={blog.image} className="transition-all w-full h-full object-cover" />
                  </div>
                  <p className='text-base'>{blog.content}</p>
                </div>
                <div className='col-span-2'>
                  <h3 className='heading-md lg:text-2xl mb-[30px] border-b pb-5 border-gray/40'>Сүүлийн үеийн блог</h3>
                  <ul className='space-y-4'>
                    {
                      blogs.slice(0, 5).map(blog => (
                        <Link to={`/blogs/${blog.id}`} className='flex gap-3 h-28' key={blog.id}>
                          <img src={blog.image} className='h-28 w-28 rounded-xl' alt={blog.title} />
                          <div>
                            <h3 className="text-base font-medium m-0">{blog.title.length > 64 ? `${blog.title.slice(0, 64)}...` : blog.title}</h3>
                            <p className=" text-gray mt-2 flex items-center gap-1 mb-5">
                              <BsCalendarDate />{moment(blog.date).format("MMM Do YY")}
                            </p>
                          </div>
                        </Link>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>

        )
      }
      <Footer />
    </div>
  )
}

export default BlogScreen