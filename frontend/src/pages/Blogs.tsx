import { blogs } from '../data/data';
import BlogCard from '../components/BlogCard'
import Footer from '../components/footer/Footer';
import Header2 from '../components/header/Header2';
import { BsCalendarDate } from 'react-icons/bs';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function Blogs() {

  const latestBlog = blogs[0]


  return (
    <div>
      <Header2 />
      <div className='mt-[52px] relative mb-10'>
        <div className="w-full h-[380px] bg-[url('https://images.unsplash.com/photo-1507409613952-518459ac866e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover bg-no-repeat bg-[#024F6B] bg-center bg-fixed">
          <div className='container h-full flex items-center justify-center'>
            <img className=" absolute  top-10 cursor-pointer w-[70px]" alt="Logo" src="/logo/logo.png" />
            <h1 className="heading-xl text-white">Аялалын талаар таны мэдлэгт (блог)</h1>
          </div>
        </div>
        <div className="w-4/5 m-auto bg-white mt-[-42px] justify-center min-h-[21.5rem] p-6 md:p-14 flex rounded-[40px]">
          <div className='max-w-[510px]'>
            <Link to={`${latestBlog.id}`} className="w-full mb-5">
              <div className="w-full overflow-hidden h-[260px] rounded-[25px]">
                <img alt="Post thumbnail" src={latestBlog.image} className="hover:scale-[1.2] transition-all w-full h-full object-cover cursor-pointer mb-2" />
              </div>
              <p className="text-[13px] text-gray flex items-center gap-1"><BsCalendarDate />{moment(latestBlog.date).format("MMM Do YY")}</p>
              <h3 className="heading-md m-0">{latestBlog.title}</h3>

              <p className="text-gray-dark">{latestBlog.description}...</p>
            </Link>
          </div>

        </div>

        <div className="container grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {blogs.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}