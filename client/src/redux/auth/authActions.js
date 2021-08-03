import { AUTH_LOGIN, AUTH_REGISTER, LOGOUT_USER, AUTH_TOKEN_LOGIN } from "./authTypes";
import { loginError, registerError, clearError } from '../'
import * as API from '../../api'

export const loginUsingToken = (token) => async (dispatch) => {
    const { data } = await API.auth(token)

    if (data.status === 'ok') {
        dispatch({
            type: AUTH_TOKEN_LOGIN,
            payload: data.data
        })

        dispatch(clearError())
    } else if (data.status === 'error') {
        console.log(data.error)
        dispatch(loginError(data.error))
    }   
}

export const loginUser = (user, history) => async (dispatch) => {    
    const { data } = await API.login(user)
    console.log(data);

    if (data.status === 'ok') {
        dispatch({
            type: AUTH_LOGIN,
            payload: data.data
        })

        dispatch(clearError())

        history.push('/home')
    } else if (data.status === 'error') {
        console.log(data.error)
        dispatch(loginError(data.error))
    }   
}

export const registerUser = (user, history) => async (dispatch) => {
    const { data } = await API.register(user)

    if (data.status === 'ok') {
        dispatch({
            type: AUTH_REGISTER,
            payload: data.data
        })

        dispatch(clearError())

        history.push('/home')
    } else {
        console.log(data.error)
        dispatch(registerError(data.error))
    }
}

export const logoutUser = () =>(dispatch) => {
    dispatch({
        type: LOGOUT_USER
    })
}