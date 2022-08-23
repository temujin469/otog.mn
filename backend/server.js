const app = require('./app')
const connectDB = require('./config/database')

const port = process.env.PORT | 5000;

const startServer = async () => {
  try {

    // database holbolt
   await connectDB();
    app.listen(port, () =>
      console.log(`${port} дээр ажиллаж байна...`)
    );
  } catch (error) {
    console.log(error);
  }
};


// server asaah
startServer();