import ImageGallery from 'react-image-gallery';
// import { useAppSelector } from '../../hooks';
import './gallery.css'

const items = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    thumbnailClass: "object-cover overflow-hidden", originalClass: 'rounded-lg'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    thumbnailClass: "object-cover overflow-hidden", originalClass: 'rounded-lg'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    thumbnailClass: "object-cover overflow-hidden", originalClass: 'rounded-lg'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    thumbnailClass: "object-cover overflow-hidden", originalClass: 'rounded-lg'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    thumbnailClass: "object-cover overflow-hidden", originalClass: 'rounded-lg'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    thumbnailClass: "object-cover overflow-hidden", originalClass: 'rounded-lg'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    thumbnailClass: "object-cover overflow-hidden", originalClass: 'rounded-lg'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    thumbnailClass: "object-cover overflow-hidden", originalClass: 'rounded-lg'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    thumbnailClass: "object-cover overflow-hidden", originalClass: 'rounded-lg'
  },
];

type Props = {
  images: string[]
}


const HotelGallery = ({ images }: Props) => {

  // const items = images.map((img)=>(
  //   {original:img,thumbnail:img,thumbnailClass:"h-[60px] object-cover overflow-hidden",originalClass:'rounded-lg'}
  // ))

  return (
    <div>
      <div className='md:mt-10'>
        <ImageGallery items={items} lazyLoad={true} showPlayButton={false} />
      </div>
    </div>

  )
}

export default HotelGallery;
