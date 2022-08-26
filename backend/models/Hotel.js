const mongoose = require("mongoose");
const { Schema } = mongoose;


const RoomInfo = new Schema({
  roomName: {
    type: String,
    required: true,
  },
  roomType: {
    type: Schema.Types.ObjectId,
    ref: "RoomType",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  ameninties: {
    type: Schema.Types.ObjectId,
    ref: "Amenities",
    required: true,
  },
  availablePeopleQuantity: {
    type: {
      adult: {
        type: Number,
        required: true,
      },
      child: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  bedOptions: [
    {
      bedType: {
        type: Schema.Types.ObjectId,
        ref: "BedType",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
})


const GeneralInfo = new Schema({
  hotelName: {
    type: String,
    required: true,
  },
  registerNum: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxlength: [1000, "Хэтэрхий урт бичвэр"],
  },
  pin: {
    longitude: Number,
    latidude: Number,
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  featuredPlace: {
    type: Schema.Types.ObjectId,
    ref: "Place",
    required: true,
  },
  orderTime: {
    type: Date,
    required: true,
  },
})

// const PricingInfo = new Schema({
//   flexible:{
//     type:{

//     }
//   }
// })

const HotelSchema = new Schema({

  // Байр, сууцны бүртгэл ,Ерөнхий мэдээлэл 
  generalInfo: {
    type:GeneralInfo,
    required: true,
  },

  // Байр, сууцны бүртгэл,Өрөөний мэдээлэл
  roomInfo: {
    type:[RoomInfo],
  },

  // Байр, сууцны бүртгэл,Үнийн мэдэээлэл
  pricingInfo:{
    type:[PricingInfo]
  },
  
  opinions: [
    {
      fullname: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

 const Hotel = mongoose.model("hotels", HotelSchema);
 module.exports = Hotel;


