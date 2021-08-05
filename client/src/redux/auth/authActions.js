import { AUTH_LOGIN, AUTH_REGISTER, LOGOUT_USER, AUTH_TOKEN_LOGIN } from "./authTypes";
import { loginError, registerError, setLoading } from '../'
import { push } from 'connected-react-router'
import * as API from '../../api'
import actionHelper from "../utils/actionHelper";

/////////////////////////////////////////////////////////////////////////// Login an existing user from token
export const loginUsingToken = () => async (dispatch) => {
    dispatch(setLoading())
    const token = localStorage.getItem('token')

    if (!token) {
        dispatch(setLoading())
        dispatch(push('/'))
    } else {
        const { data } = await API.auth(token)
        
        actionHelper(dispatch, data, AUTH_TOKEN_LOGIN, loginError, 'home')
    }
}

/////////////////////////////////////////////////////////////////////////// Login an existing User
export const loginUser = (user) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.login(user)
        
    actionHelper(dispatch, data, AUTH_LOGIN, loginError, 'home')
}

/////////////////////////////////////////////////////////////////////////// Register a new User
export const registerUser = (user) => async (dispatch) => {
    dispatch(setLoading())
    const { data } = await API.register(user)
        
    actionHelper(dispatch, data, AUTH_REGISTER, registerError, 'home')
}

/////////////////////////////////////////////////////////////////////////// Logout the current user
export const logoutUser = () =>(dispatch) => {
    dispatch({
        type: LOGOUT_USER
    })
}