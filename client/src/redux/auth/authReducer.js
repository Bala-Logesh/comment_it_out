import { AUTH_LOGIN, AUTH_REGISTER, LOGOUT_USER } from "./authTypes";

const initialState = {
  user: {},
  token: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
    case AUTH_REGISTER:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
    
    case LOGOUT_USER:
      localStorage.removeItem('token')
      return {
        ...state,
        user: {},
        token: null
      }
    
    default:
      return state
  }
}

export default authReducer
