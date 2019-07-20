const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();




const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});

app.get('/', (req, res) => {
  res.send("Its working!");
  
})
