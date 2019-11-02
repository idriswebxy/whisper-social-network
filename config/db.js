const mongoose = require("mongoose");
const config = require("config");
<<<<<<< HEAD
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected!");
  } catch (err) {
=======
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected!");
  } 
  catch (err) {
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
