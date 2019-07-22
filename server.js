const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

connectDB();

app.use(express.json({ extended: true }));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;
 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});

app.get("/", (req, res) => {
  res.send("Its working!");
});
