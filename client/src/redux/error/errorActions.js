import { LOGIN_ERROR, REGISTER_ERROR, CLEAR_ERROR, USER_ERROR, POST_ERROR, FORGOT_PWD_ERROR } from './errorTypes'

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

export const UserError = error => dispatch => {
    dispatch({
        type: USER_ERROR,
        payload: error
    })
}

export const postError = error => dispatch => {
    dispatch({
        type: POST_ERROR,
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