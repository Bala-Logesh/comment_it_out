import { AUTH_LOGIN, AUTH_REGISTER, LOGOUT_USER, AUTH_TOKEN_LOGIN, AUTH_FORGOT_EMAIL, AUTH_FORGOT_OTP, AUTH_FORGOT_PWD } from "./authTypes";
import { loginError, registerError, setLoading, forgotPwdError } from '../'
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
export const logoutUser = () => (dispatch) => {
    dispatch({
        type: LOGOUT_USER
    })
}

/////////////////////////////////////////////////////////////////////////// Forgot password - Get email
export const forgotPwdEmail = (email) => async (dispatch) => {
    dispatch(setLoading())
    const { data } = await API.forgot1(email)

    actionHelper(dispatch, data, AUTH_FORGOT_EMAIL, forgotPwdError, `forgot1/${ email }`)
}

/////////////////////////////////////////////////////////////////////////// Forgot password - Get OTP
export const forgotPwdOtp = (email, otp) => async (dispatch) => {
    dispatch(setLoading())
    const { data } = await API.forgot2(email, otp)

    actionHelper(dispatch, data, AUTH_FORGOT_OTP, forgotPwdError, `forgot2/${ email }`)
}

/////////////////////////////////////////////////////////////////////////// Forgot password - Reset Password
export const forgotPwdReset = (email, password) => async (dispatch) => {
    dispatch(setLoading())
    const { data } = await API.forgot3(email, password)

    actionHelper(dispatch, data, AUTH_FORGOT_PWD, forgotPwdError, `login`)
}

