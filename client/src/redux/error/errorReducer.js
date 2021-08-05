import { LOGIN_ERROR, REGISTER_ERROR, CLEAR_ERROR, USER_ERROR, POST_ERROR, FORGOT_PWD_ERROR } from './errorTypes'

const initialState = {
  login: null,
  register: null,
  user: null,
  post: null,
  forgot: null
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        login: action.payload
      }

    case REGISTER_ERROR:
      return {
        ...state,
        register: action.payload
      }
  
    case USER_ERROR:
      return {
        ...state,
        User: action.payload
      }
    
    case POST_ERROR:
      return {
        ...state,
        post: action.payload
      }
    
    case FORGOT_PWD_ERROR:
      return {
        ...state,
        forgot: action.payload
      }
    
    case CLEAR_ERROR:
      return {
        ...state,
        login: null,
        register: null,
        forgot: null,
        user: null,
        post: null
      }
    
    default:
      return state
  }
}

export default errorReducer
