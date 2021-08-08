import { GET_POSTS, GET_POST, CREATE_POST, EDIT_POST, DELETE_POST, CREATE_COMMENT, EDIT_COMMENT, DELETE_COMMENT, LIKE_POST } from "./postTypes";
import { setLoading, postError } from '../'
import * as API from '../../api'
import actionHelper from "../utils/actionHelper";

const after_fn = (dispatch) => {
    dispatch(getPosts())
}

/////////////////////////////////////////////////////////////////////////// Get all the posts
export const getPosts = () => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.getPosts()
        
    actionHelper(dispatch, data, GET_POSTS, postError, null)
}

/////////////////////////////////////////////////////////////////////////// Get the post with ID
export const getPost = (id) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.getPost(id)
        
    actionHelper(dispatch, data, GET_POST, postError, null)
}

/////////////////////////////////////////////////////////////////////////// Create a new post
export const createPost = (post) => async (dispatch) => {
    dispatch(setLoading())
    const { data } = await API.createPost(post)
        
    actionHelper(dispatch, data, CREATE_POST, postError, 'home', after_fn)
}


/////////////////////////////////////////////////////////////////////////// Edit an existing post
export const editPost = (id, post) => async (dispatch) => {
    dispatch(setLoading())
    const { data } = await API.editPost(id, post)
        
    actionHelper(dispatch, data, EDIT_POST, postError, 'home', after_fn)
}

/////////////////////////////////////////////////////////////////////////// Delete an existing post
export const deletePost = (id) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.deletePost(id)
        
    actionHelper(dispatch, data, DELETE_POST, postError, '', after_fn)
}

/////////////////////////////////////////////////////////////////////////// Create a comment on the post
export const createComment = (id, comment) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.createComment(id, comment)
        
    actionHelper(dispatch, data, CREATE_COMMENT, postError, null, after_fn)
}


/////////////////////////////////////////////////////////////////////////// Update a comment on the post with ID
export const editComment = (id, commentId, newComment) => async (dispatch) => {
    dispatch(setLoading())
    const { data } = await API.editComment(id, commentId, newComment)
        
    actionHelper(dispatch, data, EDIT_COMMENT, postError, null, after_fn)
}

/////////////////////////////////////////////////////////////////////////// Delete a comment on the post with ID
export const deleteComment = (id, commentId) => async (dispatch) => {
    dispatch(setLoading())
    const { data } = await API.deleteComment(id, commentId)
        
    actionHelper(dispatch, data, DELETE_COMMENT, postError, null, after_fn)
}

/////////////////////////////////////////////////////////////////////////// Like or Dislike the post with ID
export const likePost = (id, userId) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.likePost(id, userId)
        
    actionHelper(dispatch, data, LIKE_POST, postError, null, after_fn)
}