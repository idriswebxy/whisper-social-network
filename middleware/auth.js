const jwt = require("jsonwebtoken");
const config = require("config");

<<<<<<< HEAD
=======

>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
module.exports = function(req, res, next) {
  //  Get token from header
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
<<<<<<< HEAD
=======
    console.log("No token...")
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
    return res.status(401).json({ msg: "No token, authorization denied!" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid..." });
  }
};
