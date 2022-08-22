import { faker } from '@faker-js/faker';

type Bg = {
  back1:string
  back2:string
  back3:string
  back4:string
  back5:string
}

export const bg_images:Bg= {
  back1:"https://images.pexels.com/photos/163848/road-mountains-sunset-path-163848.jpeg",
  back2:'https://t3.ftcdn.net/jpg/02/55/53/98/360_F_255539808_28UuJgM27FNYvQVHNguGyznEzgZKqWVj.jpg',
  back3:'https://images.squarespace-cdn.com/content/v1/53ac9e21e4b0a25fee7b9d40/1510365731627-JICWJO0JBKJTI3EC8352/mongolian_steppe.jpg?format=1500w',
  back4:'https://images.pexels.com/photos/753312/pexels-photo-753312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  back5:'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}

export const natureImages  = (num:number)=>{
  let images:string[] = []
  for (let i = 0; i < num; i++) {
    images.push(faker.image.nature(1234, 2345, true) )
  };

  return images;
}

export const hotelTypes = [
  {
    name:"Зочид буудал",
    image:faker.image.nature(undefined,undefined,true),
    _id:"jsdafkjasdj;f",
  },
  {
    name:"Жуулчны бааз",
    image:faker.image.nature(undefined,undefined,true),

    _id:"jsdafkghgfhhgf",
  },
  {
    name:"Амралтын газар",
    image:faker.image.nature(undefined,undefined,true),

    _id:"jhgfh",
  },
  {
    name:"Гэр буудал",
    image:faker.image.nature(undefined,undefined,true),

    _id:"jsdafdsf",
  },
  {
    name:"Кемп",
    image:faker.image.nature(undefined,undefined,true),

    _id:"jsdafhg",
  },
  {
    name:"Зуслан",
    image:faker.image.nature(undefined,undefined,true),

    _id:"jsdafhg",
  },
]

export const amenities = [
  {
    name:"Тэжээвэр амьтан зөвшөөрөх",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwefsg"
  },
  {
    name:"Усан сан",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rw3re"
  },
  {
    name:"Интернэт",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwsds6"
  },
  {
    name:"Гал тогоо",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwgfdh"
  },
  {
    name:"Агааржуулагч",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23r5656"
  },
  {
    name:"Balcony",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rfdgfd5"
  },
  {
    name:"Машины зогсоол",
    image:faker.image.nature(undefined,undefined,true),
    _id:"dfgfd0"
  },
]

export const regions =[
  {
    name:"Зүүн бүс",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwefsg1"
  },
  {
    name:"Баруун бүс",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rw3re2"
  },
  {
    name:"Говийн бүс",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwsds63"
  },
  {
    name:"Төвийн бүс",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwsds64"
  },
  {
    name:"Хангайн бүс",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwsds65"
  },
]

export const blogs =[
  {
    name:"Зүүн бүс",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwefsg1"
  },
  {
    name:"Баруун бүс",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rw3re2"
  },
  {
    name:"Говийн бүс",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwsds63"
  },
  {
    name:"Төвийн бүс",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwsds64"
  },
  {
    name:"Хангайн бүс",
    image:faker.image.nature(undefined,undefined,true),

    _id:"23rwsds65"
  },
]









export const generateHotels = (num:number) => {
  let hotels =[]
  for (let i = 0; i < num; i++) {
    const hotel = {
      name:faker.company.name(),
      bed_room:Math.floor(Math.random()* 9),
      bath_room:Math.floor(Math.random()* 9),
      hotelType:hotelTypes[Math.floor(Math.random()* hotelTypes.length)],
      county:faker.address.country(),
      amenities:amenities,
      lacation:faker.address.nearbyGPSCoordinate(),
      region:regions[Math.floor(Math.random()* regions.length)],
      description:faker.lorem.paragraphs(5),
      rating:Math.floor(Math.random()* 5)
       // amenitie:{
      //   Pe_Allowed:true,
      //   Pool:true,
      //   internet:true,
      //   kitchen:true,
      //   airCondition:true,

      // },
    }

    hotels.push(hotel)
  };

  return hotels;
}
