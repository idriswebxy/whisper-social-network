const express = require("express");
const connectDB = require("./config/db");
<<<<<<< HEAD
const dotenv = require("dotenv");
const cors = require('cors')
dotenv.config();

const app = express();

app.use(cors())

connectDB();

app.use(express.json({ extended: true }));
=======
// const cors = require("cors");
require("dotenv").config()
const path = require("path");

const app = express();

// app.use(cors());

connectDB();

app.use(express.json({ extended: false }));
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

<<<<<<< HEAD
=======
if (process.env.NODE_ENV === "production") {
  
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
<<<<<<< HEAD

app.get("/", (req, res) => {
  res.send("Server running...")
});
=======
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
