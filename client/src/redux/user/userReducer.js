import { GET_USER, GET_USERS, EDIT_USER, DELETE_USER, FOLLOW_USER } from './userTypes'

const initialState = {
  users: null,
  user: null,
  info: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload.users
      }
    
    case GET_USER:
    case EDIT_USER:
      return {
        ...state,
        user: action.payload.user
      }
    
    case DELETE_USER:
    case FOLLOW_USER:
      return {
        ...state,
        info: action.payload.info
      }

    default:
      return state
  }
}

export default userReducer