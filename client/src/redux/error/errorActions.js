import { LOGIN_ERROR, REGISTER_ERROR, CLEAR_ERROR } from './errorTypes'

export const loginError = error => dispatch => {
    dispatch({
        type: LOGIN_ERROR,
        payload: error
    })
}

export const registerError = error => dispatch => {
    dispatch({
        type: REGISTER_ERROR,
        payload: error
    })
}

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERROR
    })
}