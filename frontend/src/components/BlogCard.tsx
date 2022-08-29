import { Link } from "react-router-dom";
import { Blog } from "../typings";
import moment from 'moment'
import 'moment/locale/mn' 
import { BsCalendarDate } from "react-icons/bs";
moment.locale('mn')

type Props = {
  blog: Blog
}

export default function PostCard({ blog }: Props) {

  return (
    <Link to={`/blogs/${blog.id}`} className="w-full mb-2">
      <div className="w-full overflow-hidden h-60 rounded-2xl">
        <img alt="Post thumbnail" src={blog.image} className="hover:scale-[1.2] transition-all w-full h-full object-cover cursor-pointer mb-2" />
      </div>
      <p className="text-[13px] text-gray flex items-center gap-1"><BsCalendarDate />{moment(blog.date).format('ll')}</p>
      <h3 className="heading-sm m-0">{blog.title}</h3>

      {/* <p className="text-gray-dark">{blog.description}</p> */}
    </Link>
  )
}