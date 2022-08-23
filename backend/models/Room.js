const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
  hotel: {
    type: Schema.Types.ObjectId,
    ref: 'hotels'
  },
  type: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  facilities: {
    type: [String],
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  adults: {
    type: Number,
    required: true
  },
  children: {
    type: Number,
    required: true
  }
});

mongoose.model('rooms', roomSchema);