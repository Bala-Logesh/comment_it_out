import { LOGIN_ERROR, REGISTER_ERROR, CLEAR_ERROR} from './errorTypes'

const initialState = {
  login: null,
  register: null
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
    
    case CLEAR_ERROR:
      return {
        ...state,
        login: null,
        register: null
      }
    
    default:
      return state
  }
}

export default errorReducer
