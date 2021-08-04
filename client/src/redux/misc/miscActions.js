import { LOGOUT_MODAL, DEL_POST_MODAL, DEL_USER_MODAL, LOADING } from './miscTypes'

export const logoutModal = () => dispatch => {
    dispatch({
        type: LOGOUT_MODAL
    })
}

export const delPostModal = () => dispatch => {
    dispatch({
        type: DEL_POST_MODAL
    })
}

export const delUsertModal = () => dispatch => {
    dispatch({
        type: DEL_USER_MODAL
    })
}

export const setLoading = () => dispatch => {
    dispatch({
        type: LOADING
    })
}