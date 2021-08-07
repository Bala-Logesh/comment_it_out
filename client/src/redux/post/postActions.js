import { GET_POSTS, GET_POST, CREATE_POST, EDIT_POST, DELETE_POST, CREATE_COMMENT, EDIT_COMMENT, DELETE_COMMENT, LIKE_POST } from "./postTypes";
import { setLoading, postError } from '../'
import * as API from '../../api'
import actionHelper from "../utils/actionHelper";

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
export const createPost = (id, post) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.createPost(id, post)
        
    actionHelper(dispatch, data, CREATE_POST, postError, 'home')
}


/////////////////////////////////////////////////////////////////////////// Edit an existing post
export const editPost = (id, update) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.editPost(id, update)
        
    actionHelper(dispatch, data, EDIT_POST, postError, 'home')
}

/////////////////////////////////////////////////////////////////////////// Delete an existing post
export const deletePost = (id) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.deletePost(id)
        
    actionHelper(dispatch, data, DELETE_POST, postError, '')
}

/////////////////////////////////////////////////////////////////////////// Create a comment on the post
export const createComment = (id, comment) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.createComment(id, comment)
        
    actionHelper(dispatch, data, CREATE_COMMENT, postError, 'home')
}


/////////////////////////////////////////////////////////////////////////// Update a comment on the post with ID
export const editComment = (id, update) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.editComment(id, update)
        
    actionHelper(dispatch, data, EDIT_COMMENT, postError, 'home')
}

/////////////////////////////////////////////////////////////////////////// Delete a comment on the post with ID
export const deleteComment = (id) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.deleteComment(id)
        
    actionHelper(dispatch, data, DELETE_COMMENT, postError, 'home')
}

/////////////////////////////////////////////////////////////////////////// Like or Dislike the post with ID
export const likePost = (id, followId) => async (dispatch) => { 
    dispatch(setLoading())
    const { data } = await API.likePost(id, followId)
        
    actionHelper(dispatch, data, LIKE_POST, postError, 'home')
}