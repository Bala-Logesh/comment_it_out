import { GET_POSTS, GET_POST, CREATE_POST, EDIT_POST, DELETE_POST, CREATE_COMMENT, EDIT_COMMENT, DELETE_COMMENT, LIKE_POST } from "./postTypes";

const initialState = {
  posts: null,
  post: null,
  info: null
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts
      }
  
    case GET_POST:
    case CREATE_POST:
    case EDIT_POST:
    case CREATE_COMMENT:
    case EDIT_COMMENT:
    case DELETE_COMMENT:
    case LIKE_POST:
      return {
        ...state,
        post: action.payload.post
      }
      
    case DELETE_POST:
      return {
        ...state,
        info: action.payload.info
      }

    default:
      return state
  }
}

export default postReducer
