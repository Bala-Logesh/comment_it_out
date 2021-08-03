import { LOGOUT_MODAL, DEL_POST_MODAL, DEL_USER_MODAL } from './miscTypes'

const initialState = {
  logout: false,
  user: false,
  post: false
}

const miscReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEL_USER_MODAL:
      return {
        ...state,
        user: !state.user
      }
    
    case DEL_POST_MODAL:
      return {
        ...state,
        post: !state.post
      }
    
    case LOGOUT_MODAL:
      return {
        ...state,
        logout: !state.logout
      }
    
    default:
      return state
  }
}

export default miscReducer
