const cookieParser = require('cookie-parser');
require('dotenv').config()
const  express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())


//import error middleware
const errorHandler = require('./middlewares/errorHandler')

//Use Middleware
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static('public'))



//Route Import
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute)

//Use error middleware
app.use(errorHandler)



module.exports = app;