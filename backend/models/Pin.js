const mongoose = require('mongoose');
const { Schema } = mongoose;

const pinSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});

mongoose.model('pins', pinSchema);