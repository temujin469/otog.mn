const cookieParser = require('cookie-parser');
require('dotenv').config()
const  express = require('express')
const cookieSession = require("cookie-session");
const app = express()
const cors = require('cors')
const passport  = require('passport')

app.use(cors())
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

//import error middleware
const errorHandler = require('./middlewares/errorHandler')

//Use Middleware
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET));
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(express.static('public'))
app.use(passport.initialize())
app.use(passport.session())



//Route Import
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute)
app.get('/',(req,res)=>{
  res.send("hello")
})

//Use error middleware
app.use(errorHandler)



module.exports = app;