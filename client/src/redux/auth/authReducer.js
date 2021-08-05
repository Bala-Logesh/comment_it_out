import { AUTH_LOGIN, AUTH_REGISTER, LOGOUT_USER, AUTH_TOKEN_LOGIN, AUTH_FORGOT_EMAIL, AUTH_FORGOT_OTP, AUTH_FORGOT_PWD } from "./authTypes";

const initialState = {
  user: null,
  token: null,
  forgot: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
    case AUTH_TOKEN_LOGIN:
    case AUTH_REGISTER:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
    
    case AUTH_FORGOT_EMAIL:
    case AUTH_FORGOT_OTP:
    case AUTH_FORGOT_PWD:
      return {
        ...state,
        forgot: action.payload,
      }
    
    case LOGOUT_USER:
      localStorage.removeItem('token')
      return {
        ...state,
        user: null,
        token: null
      }
    
    default:
      return state
  }
}

export default authReducer
