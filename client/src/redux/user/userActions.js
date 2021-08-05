import { GET_USER, GET_USERS, EDIT_USER, DELETE_USER, FOLLOW_USER } from './userTypes'
import { setLoading, UserError, logoutUser } from '../'
import * as API from '../../api'
import actionHelper from "../utils/actionHelper";

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
export const editUser = (id, update) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.editUser(id, update)
        
    actionHelper(dispatch, data, EDIT_USER, UserError, 'home')
}

/////////////////////////////////////////////////////////////////////////// Delete an existing user
export const deleteUser = (id) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.deleteUser(id)
    dispatch(logoutUser())
        
    actionHelper(dispatch, data, DELETE_USER, UserError, '')
}

/////////////////////////////////////////////////////////////////////////// Following or unfollowing an existing user
export const followUser = (id, followId) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.followUser(id, followId)
        
    actionHelper(dispatch, data, FOLLOW_USER, UserError, 'suggested')
}