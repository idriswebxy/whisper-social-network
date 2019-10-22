const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config();
// const db = config.get("mongo_URI");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected!");
  } 
  catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
