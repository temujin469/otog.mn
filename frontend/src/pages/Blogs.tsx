import { blogs } from '../data/data';
import BlogCard from '../components/BlogCard'
import Footer from '../components/footer/Footer';
import Header2 from '../components/header/Header2';

export default function Blogs() {


  return (
    <div>
      <Header2 />
      <div className='mt-[52px] relative mb-24'>
        <div className="w-full h-[500px] md:h-[600px] bg-[url('https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-[#024F6B] bg-center bg-fixed">
          <div className='container h-full flex items-center justify-center'>
            <img className=" absolute  top-10 cursor-pointer w-[70px]" alt="Logo" src="/logo/logo.png" />
            <h1 className="heading-xl text-white">Аялалын талаар таны мэдлэгт (блог)</h1>
          </div>
        </div>
        <div className="md:w-[80%] xxl:w-[70%] w-full m-auto bg-white mt-[-42px] justify-center md:p-[25px] flex rounded-t-[40px]">
          <div className='max-w-[510px]'>
            {/* <Link to={`${latestBlog.id}`} className="w-full mb-5">
              <div className="w-full overflow-hidden h-[260px] rounded-[25px]">
                <img alt="Post thumbnail" src={latestBlog.image} className="hover:scale-[1.2] transition-all w-full h-full object-cover cursor-pointer mb-2" />
              </div>
              <p className="text-[13px] text-gray flex items-center gap-1"><BsCalendarDate />{moment(latestBlog.date).format("MMM Do YY")}</p>
              <h3 className="heading-md m-0">{latestBlog.title}</h3>

              <p className="text-gray-dark">{latestBlog.description}...</p>
            </Link> */}
          </div>

        </div>

        <div className="container bg-white pt-4 rounded-t-[20px] grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {blogs.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}