const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const auth = require("../../middleware/auth");
const User = require("../../models/Users");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
const bcrypt = require("bcrypt");

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json(user);
  } catch (error) {
    res.status(500).send("Server Error!");
=======
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");



router.get("/", auth, async (req, res) => {

  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } 
  catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
  }
});



router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
<<<<<<< HEAD
    check("password", "Password is required!").exists()
=======
    check("password", "Password is required").exists()
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

<<<<<<< HEAD
    const { name, email, password } = req.body;
=======
    const { email, password } = req.body;
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
<<<<<<< HEAD
          .json({ errors: [{ msg: "Invalid Credentials " }] });
=======
          .json({ errors: [{ msg: "Invalid Credentials" }] });
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
<<<<<<< HEAD
        config.get("jwtSecret "),
=======
        config.get("jwtSecret"),
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
<<<<<<< HEAD
      res.status(500).send("Server error!");
    }
  }
=======
      res.status(500).send("Server error");
    }
  } 
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
);

module.exports = router;
