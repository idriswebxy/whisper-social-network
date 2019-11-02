import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
<<<<<<< HEAD
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
=======
    console.log("token set!");
  } 
  else {
    delete axios.defaults.headers.common["x-auth-token"];
    console.log("No token...");
    
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
  }
};

export default setAuthToken;
