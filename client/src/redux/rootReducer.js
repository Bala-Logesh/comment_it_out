import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import errorReducer from './error/errorReducer'
import miscReducer from './misc/miscReducer'
import postReducer from './post/postReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
        auth: authReducer,
        err: errorReducer,
        user: userReducer,
        post: postReducer,
        misc: miscReducer
})

export default rootReducer
