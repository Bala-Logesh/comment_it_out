import { AUTH_LOGIN, AUTH_REGISTER, LOGOUT_USER, AUTH_TOKEN_LOGIN } from "./authTypes";
import { loginError, registerError, clearError } from '../'
import { push } from 'connected-react-router'
import * as API from '../../api'

export const loginUsingToken = () => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'))
    
    const { data } = await API.auth(token)

    if (data.statusCode === 500) {
        dispatch(push('/500'))
    }

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

export const loginUser = (user) => async (dispatch) => { 
    const { data } = await API.login(user)

    if (data.statusCode === 500) {
        dispatch(push('/500'))
    }

    if (data.status === 'ok') {
        dispatch({
            type: AUTH_LOGIN,
            payload: data.data
        })
        
        dispatch(clearError())
    } else if (data.status === 'error') {
        console.log(data.error)
        dispatch(loginError(data.error))
    }   
}

export const registerUser = (user) => async (dispatch) => {
    const { data } = await API.register(user)

    if (data.statusCode === 500) {
        dispatch(push('/500'))
    }

    if (data.status === 'ok') {
        dispatch({
            type: AUTH_REGISTER,
            payload: data.data
        })

        dispatch(clearError())
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