import { LOGIN_ERROR, REGISTER_ERROR, CLEAR_ERROR, EDIT_USER_ERROR} from './errorTypes'

const initialState = {
  login: null,
  register: null,
  edituser: null
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
  
    case EDIT_USER_ERROR:
      return {
        ...state,
        edituser: action.payload
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
