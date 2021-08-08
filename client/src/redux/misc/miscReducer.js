import { LOGOUT_MODAL, DEL_POST_MODAL, DEL_USER_MODAL, LOADING } from './miscTypes'

const initialState = {
  logout: false,
  user: false,
  post: false,
  loading: false,
  id: null
}

const miscReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEL_USER_MODAL:
      return {
        ...state,
        user: !state.user,
        id: action.payload
      }
    
    case DEL_POST_MODAL:
      return {
        ...state,
        post: !state.post,
        id: action.payload
      }
    
    case LOGOUT_MODAL:
      return {
        ...state,
        logout: !state.logout
      }
  
    case LOADING:
      return {
        ...state,
        loading: !state.loading
      }
    
    default:
      return state
  }
}

export default miscReducer
