import { faker } from '@faker-js/faker';
import { Blog, Hotel } from '../typings';


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

export const cityImages = (num:number)=>{
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
    id:"jsdafkjasdj;f",
  },
  {
    name:"Жуулчны бааз",
    image:faker.image.nature(undefined,undefined,true),

    id:"jsdafkghgfhhgf",
  },
  {
    name:"Амралтын газар",
    image:faker.image.nature(undefined,undefined,true),

    id:"jhgfh",
  },
  {
    name:"Гэр буудал",
    image:faker.image.nature(undefined,undefined,true),

    id:"jsdafdsf",
  },
  {
    name:"Кемп",
    image:faker.image.nature(undefined,undefined,true),

    id:"jsdafhg",
  },
  {
    name:"Зуслан",
    image:faker.image.nature(undefined,undefined,true),

    id:"jsdafhg",
  },
]

export const amenities = [
  {
    name:"Тэжээвэр амьтан зөвшөөрөх",
    image:faker.image.nature(undefined,undefined,true),
    icon:'FaDog',
    id:"23rwefsg"
  },
  {
    name:"Усан сан",
    image:faker.image.nature(undefined,undefined,true),
    icon:'FaWater',

    id:"23rw3re"
  },
  {
    name:"Интернэт",
    image:faker.image.nature(undefined,undefined,true),
    icon:'FaWifi',

    id:"23rwsds6"
  },
  {
    name:"Гал тогоо",
    image:faker.image.nature(undefined,undefined,true),
    icon:'FaHotdog',

    id:"AiFillFire"
  },
  {
    name:"Агааржуулагч",
    image:faker.image.nature(undefined,undefined,true),
    icon:'FaAirFreshener',

    id:"23r5656"
  },
  {
    name:"Balcony",
    image:faker.image.nature(undefined,undefined,true),
    icon:'MdBalcony',
    id:"23rfdgfd5"
  },
  {
    name:"Машины зогсоол",
    icon:'FaParking',

    image:faker.image.nature(undefined,undefined,true),
    id:"dfgfd0"
  },
]

export const regions =[
  {
    name:"Зүүн бүс",
    image:faker.image.nature(undefined,undefined,true),

    id:"23rwefsg1"
  },
  {
    name:"Баруун бүс",
    image:faker.image.nature(undefined,undefined,true),

    id:"23rw3re2"
  },
  {
    name:"Говийн бүс",
    image:faker.image.nature(undefined,undefined,true),

    id:"23rwsds63"
  },
  {
    name:"Төвийн бүс",
    image:faker.image.nature(undefined,undefined,true),

    id:"23rwsds64"
  },
  {
    name:"Хангайн бүс",
    image:faker.image.nature(undefined,undefined,true),

    id:"23rwsds65"
  },
]


export const generateHotels = (num:number) => {
  let hotels =[]
  for (let i = 0; i < num; i++) {
    const hotel:Hotel = {
      images:cityImages(10),
      name:faker.company.name(),
      bed_room:Math.floor(Math.random()* 9),
      bath_room:Math.floor(Math.random()* 9),
      hotelType:hotelTypes[Math.floor(Math.random()* hotelTypes.length)],
      county:faker.address.country(),
      amenities:amenities,
      lacation:{
        long:2,
        lat:3
      },
      region:regions[Math.floor(Math.random()* regions.length)],
      description:faker.lorem.paragraphs(5),
      rating:Math.floor(Math.random()* 5),
      review:Math.floor(Math.random()* 100),
      id:Math.random()
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


export const blogs:Blog[] = [
  {
    title:'Хангайн бүс',
    image:'https://images.unsplash.com/photo-1416230789844-1998de481fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    date:new Date(),
    id:'1',
    content:"БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм. Хятад-Орос улсын хилийн боомт хот л доо. Уг нь манай компани Манжуур руу аялал хийдэг юм. Гэхдээ захирлаар нь ажилладаг миний бие сая явж үзлээ. Сайн менежертэй болохоор өнөөг хүртэл явах шаардлага гарсангүй. Наадмын олон хоногийг ашиглан, мөн харилцагч маань урьсан тул гэр бүлээрээ аялаад ирлээ.Зарим найзууд МАНЖУУР-т юу үздэг юм гэж хэлдэг. Надад бол хүн хаана ч очсон, өөрөө үзье л гэж бодсон бол сэтгэлдээ таарах, өөрийн дуртай зүйлтэйгээ таарна гэж боддог. Тийм болохоор надад таалагдсан МАНЖУУР, миний олж харсан МАНЖУУР-ын тухай л хуваалцах гээд байгаа юм.Манжуур бол үзэх юм ихтэй. Дээр нь түүхэн талаасаа ч Монголчууд эртнээс нутаглаж буй газар нутаг.   ",
    description:" БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм."
  },
  {
    title:'Хангайн бүс',
    id:'2',
    image:'https://images.unsplash.com/photo-1598963847821-08ab2752dbb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date:new Date(),
    content:"БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм. Хятад-Орос улсын хилийн боомт хот л доо. Уг нь манай компани Манжуур руу аялал хийдэг юм. Гэхдээ захирлаар нь ажилладаг миний бие сая явж үзлээ. Сайн менежертэй болохоор өнөөг хүртэл явах шаардлага гарсангүй. Наадмын олон хоногийг ашиглан, мөн харилцагч маань урьсан тул гэр бүлээрээ аялаад ирлээ.Зарим найзууд МАНЖУУР-т юу үздэг юм гэж хэлдэг. Надад бол хүн хаана ч очсон, өөрөө үзье л гэж бодсон бол сэтгэлдээ таарах, өөрийн дуртай зүйлтэйгээ таарна гэж боддог. Тийм болохоор надад таалагдсан МАНЖУУР, миний олж харсан МАНЖУУР-ын тухай л хуваалцах гээд байгаа юм.Манжуур бол үзэх юм ихтэй. Дээр нь түүхэн талаасаа ч Монголчууд эртнээс нутаглаж буй газар нутаг.   ",
    description:" БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм."
  },
  {
    title:'Хангайн бүс',
    image:'https://images.unsplash.com/photo-1508144753681-9986d4df99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date:new Date(),
    id:'3',
    content:"БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм. Хятад-Орос улсын хилийн боомт хот л доо. Уг нь манай компани Манжуур руу аялал хийдэг юм. Гэхдээ захирлаар нь ажилладаг миний бие сая явж үзлээ. Сайн менежертэй болохоор өнөөг хүртэл явах шаардлага гарсангүй. Наадмын олон хоногийг ашиглан, мөн харилцагч маань урьсан тул гэр бүлээрээ аялаад ирлээ.Зарим найзууд МАНЖУУР-т юу үздэг юм гэж хэлдэг. Надад бол хүн хаана ч очсон, өөрөө үзье л гэж бодсон бол сэтгэлдээ таарах, өөрийн дуртай зүйлтэйгээ таарна гэж боддог. Тийм болохоор надад таалагдсан МАНЖУУР, миний олж харсан МАНЖУУР-ын тухай л хуваалцах гээд байгаа юм.Манжуур бол үзэх юм ихтэй. Дээр нь түүхэн талаасаа ч Монголчууд эртнээс нутаглаж буй газар нутаг.   ",
    description:" БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм."
  },
  {
    title:'Хангайн бүс',
    image:'https://images.unsplash.com/photo-1430375642086-147fcd5fea57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
    date:new Date(),
    id:'4',
    content:"БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм. Хятад-Орос улсын хилийн боомт хот л доо. Уг нь манай компани Манжуур руу аялал хийдэг юм. Гэхдээ захирлаар нь ажилладаг миний бие сая явж үзлээ. Сайн менежертэй болохоор өнөөг хүртэл явах шаардлага гарсангүй. Наадмын олон хоногийг ашиглан, мөн харилцагч маань урьсан тул гэр бүлээрээ аялаад ирлээ.Зарим найзууд МАНЖУУР-т юу үздэг юм гэж хэлдэг. Надад бол хүн хаана ч очсон, өөрөө үзье л гэж бодсон бол сэтгэлдээ таарах, өөрийн дуртай зүйлтэйгээ таарна гэж боддог. Тийм болохоор надад таалагдсан МАНЖУУР, миний олж харсан МАНЖУУР-ын тухай л хуваалцах гээд байгаа юм.Манжуур бол үзэх юм ихтэй. Дээр нь түүхэн талаасаа ч Монголчууд эртнээс нутаглаж буй газар нутаг.   ",
    description:" БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм."
  },
  {
    title:'Хангайн бүс',
    image:'https://images.unsplash.com/photo-1515984977862-1c7201ef324d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    date:new Date(),
    id:'5',
    content:"БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм. Хятад-Орос улсын хилийн боомт хот л доо. Уг нь манай компани Манжуур руу аялал хийдэг юм. Гэхдээ захирлаар нь ажилладаг миний бие сая явж үзлээ. Сайн менежертэй болохоор өнөөг хүртэл явах шаардлага гарсангүй. Наадмын олон хоногийг ашиглан, мөн харилцагч маань урьсан тул гэр бүлээрээ аялаад ирлээ.Зарим найзууд МАНЖУУР-т юу үздэг юм гэж хэлдэг. Надад бол хүн хаана ч очсон, өөрөө үзье л гэж бодсон бол сэтгэлдээ таарах, өөрийн дуртай зүйлтэйгээ таарна гэж боддог. Тийм болохоор надад таалагдсан МАНЖУУР, миний олж харсан МАНЖУУР-ын тухай л хуваалцах гээд байгаа юм.Манжуур бол үзэх юм ихтэй. Дээр нь түүхэн талаасаа ч Монголчууд эртнээс нутаглаж буй газар нутаг.   ",
    description:" БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм."
  },
  {
    title:'Хангайн бүс',
    image:'https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date:new Date(),
    id:'6',
    content:"БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм. Хятад-Орос улсын хилийн боомт хот л доо. Уг нь манай компани Манжуур руу аялал хийдэг юм. Гэхдээ захирлаар нь ажилладаг миний бие сая явж үзлээ. Сайн менежертэй болохоор өнөөг хүртэл явах шаардлага гарсангүй. Наадмын олон хоногийг ашиглан, мөн харилцагч маань урьсан тул гэр бүлээрээ аялаад ирлээ.Зарим найзууд МАНЖУУР-т юу үздэг юм гэж хэлдэг. Надад бол хүн хаана ч очсон, өөрөө үзье л гэж бодсон бол сэтгэлдээ таарах, өөрийн дуртай зүйлтэйгээ таарна гэж боддог. Тийм болохоор надад таалагдсан МАНЖУУР, миний олж харсан МАНЖУУР-ын тухай л хуваалцах гээд байгаа юм.Манжуур бол үзэх юм ихтэй. Дээр нь түүхэн талаасаа ч Монголчууд эртнээс нутаглаж буй газар нутаг.   ",
    description:" БНХАУ-ын Хөлөнбуйр аймгийн МАНЖУУР хотруу аялаад ирсэн замын тэмдэглэлээ тантай хуваалцаю гэсэн юм."
  },
]


