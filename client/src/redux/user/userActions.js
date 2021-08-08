import { GET_USER, GET_USERS, EDIT_USER, DELETE_USER, FOLLOW_USER } from './userTypes'
import { setLoading, UserError, logoutUser, loginUsingToken } from '../'
import * as API from '../../api'
import actionHelper from "../utils/actionHelper";

const after_fn_logout = (dispatch) => {
    dispatch(logoutUser())
}

const after_fn_edituser = (dispatch) => {
    dispatch(getUsers())
    dispatch(loginUsingToken())
}

const after_fn = (dispatch) => {
    dispatch(getUsers())
}

/////////////////////////////////////////////////////////////////////////// Get all the users
export const getUsers = () => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.getUsers()
        
    actionHelper(dispatch, data, GET_USERS, UserError, null)
}

/////////////////////////////////////////////////////////////////////////// Get the user with ID
export const getUser = (id) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.getUser(id)
        
    actionHelper(dispatch, data, GET_USER, UserError, null)
}

/////////////////////////////////////////////////////////////////////////// Update an existing user
export const editUser = (id, user) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.editUser(id, user)
        
    actionHelper(dispatch, data, EDIT_USER, UserError, 'home', after_fn_edituser)
}

/////////////////////////////////////////////////////////////////////////// Delete an existing user
export const deleteUser = (id) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.deleteUser(id)
        
    actionHelper(dispatch, data, DELETE_USER, UserError, '', after_fn_logout)
}

/////////////////////////////////////////////////////////////////////////// Following or unfollowing an existing user
export const followUser = (id, followId) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.followUser(id, followId)
        
    actionHelper(dispatch, data, FOLLOW_USER, UserError, null, after_fn)
}