const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  pin: {
    type: Schema.Types.ObjectId,
    ref: 'pins'
  },
  type: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
    default: []
  },
  emailTitle: {
    type: String,
    required: true
  },
  emailSubject: {
    type: String,
    required: true
  },
  emailBody: {
    type: String,
    required: true
  },
  rooms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'rooms'
    }
  ],
  opinions: [
    {
      fullname: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: new Date
      }
    }
  ]
});

mongoose.model('hotels', hotelSchema);