import { LOGOUT_MODAL, DEL_POST_MODAL, DEL_USER_MODAL, LOADING } from './miscTypes'

export const logoutModal = () => dispatch => {
    dispatch({
        type: LOGOUT_MODAL
    })
}

export const delPostModal = (id = null) => dispatch => {
    dispatch({
        type: DEL_POST_MODAL,
        payload: id
    })
}

export const delUsertModal = (id = null) => dispatch => {
    dispatch({
        type: DEL_USER_MODAL,
        payload: id
    })
}

export const setLoading = () => dispatch => {
    dispatch({
        type: LOADING
    })
}