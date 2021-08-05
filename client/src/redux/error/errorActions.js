import { LOGIN_ERROR, REGISTER_ERROR, CLEAR_ERROR, EDIT_USER_ERROR, FORGOT_PWD_ERROR } from './errorTypes'

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

export const editUserError = error => dispatch => {
    dispatch({
        type: EDIT_USER_ERROR,
        payload: error
    })
}

export const forgotPwdError = error => dispatch => {
    dispatch({
        type: FORGOT_PWD_ERROR,
        payload: error
    })
}

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERROR
    })
}