const fs = require('fs');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const User = require('./models/User');

dotenv.config();




const users = JSON.parse(
  fs.readFileSync(__dirname + "/data/users.json","utf-8")
)

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

const importData = async () => {
  try{
    await User.create(users)
    console.log("Бүх Өгөгдлийг импортлолоо...")
  }catch(err){
    console.log(err)
  }
}

const deleteData = async () => {
  try{
    await User.deleteMany()
    console.log("Бүх өгөгдлийг устгалаа...")
  }catch(err){
    console.log(err)
  }
}


if (process.argv[2] == "-i") {
  importData();
} else if (process.argv[2] == '-d'){
  deleteData()
}else {
  deleteData().then(()=>{
    importData()
  })
}