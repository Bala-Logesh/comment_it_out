import { AUTH_LOGIN, AUTH_REGISTER, LOGOUT_USER, AUTH_TOKEN_LOGIN } from "./authTypes";
import { loginError, registerError, clearError, setLoading } from '../'
import * as API from '../../api'

export const loginUsingToken = (token) => async (dispatch) => {
    dispatch(setLoading())
    const { data } = await API.auth(token)

    if (data.status === 'ok') {
        dispatch({
            type: AUTH_TOKEN_LOGIN,
            payload: data.data
        })

        dispatch(setLoading())
        dispatch(clearError())
    } else if (data.status === 'error') {
        console.log(data.error)
        dispatch(loginError(data.error))
        dispatch(setLoading())
    }   
}

export const loginUser = (user, history) => async (dispatch) => { 
    dispatch(setLoading())   
    const { data } = await API.login(user)

    if (data.status === 'ok') {
        dispatch({
            type: AUTH_LOGIN,
            payload: data.data
        })

        dispatch(setLoading())
        dispatch(clearError())

        history.push('/home')
    } else if (data.status === 'error') {
        console.log(data.error)
        dispatch(loginError(data.error))
        dispatch(setLoading())
    }   
}

export const registerUser = (user, history) => async (dispatch) => {
    dispatch(setLoading())
    const { data } = await API.register(user)
    dispatch(setLoading())

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
        dispatch(setLoading())
    }
}

export const logoutUser = () =>(dispatch) => {
    dispatch({
        type: LOGOUT_USER
    })
}