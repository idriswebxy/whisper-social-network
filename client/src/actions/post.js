import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./types"

// Get posts 
export const getPosts = () => async dispatch => {
  
  try {
    const res = axios.get('/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } 
  catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    })
  }
}


// Add like 
export const addLike = id => async dispatch => {

  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    })
  } 
  catch (error) {
    
  }
}
