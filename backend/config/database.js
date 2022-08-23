const mongoose = require('mongoose')


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    });
    console.log("Database Холбогдлоо");
  } catch (error) {
    console.log(error)
    throw error;
  }
};

// mongoose.connection.on("disconnected", () => {
//   console.log("mongoDB disconnected!");
// });

module.exports = connectDB;