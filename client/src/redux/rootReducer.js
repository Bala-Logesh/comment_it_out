import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import errorReducer from './error/errorReducer'
import postReducer from './post/postReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
        auth: authReducer,
        error: errorReducer,
        user: userReducer,
        post: postReducer
})

export default rootReducer
