import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5000'
})

API.interceptors.request.use(req => {
    if(localStorage.getItem('token')){
        req.headers['x-auth-token'] = localStorage.getItem('token')
    }

    return req
})

// Auth routes
export const auth = (token) => API.post(`api/auth/token`, { token })
export const login = (user) => API.post(`api/auth/login`, user)
export const register = (user) => API.post(`api/auth/register`, user)

// Forgot Password routes
export const forgot1 = (email) => API.get(`api/forgot/${email}`)
export const forgot2 = (email, otp) => API.get(`api/forgot/${email}/${otp}`)
export const forgot3 = (email, password, _id) => API.post(`api/forgot/${email}`, { password, _id })

// User routes
export const getUsers = () => API.get(`api/user`)
export const getUser = (id) => API.get(`api/user/${ id }`)
export const editUser = (id, update) => API.patch(`api/user/${ id }`, update)
export const deleteUser = (id) => API.delete(`api/user/${ id }`)
export const followUser = (id, followId) => API.patch(`api/user/${id}/following`, {followId})

// Post routes
export const getPosts = () => API.get(`api/post`)
export const createPost = (post) => API.post(`api/post`, post)
export const getPost = (id) => API.get(`api/post/${ id }`)
export const editPost = (id, post) => API.patch(`api/post/${ id }`, {post})
export const deletePost = (id) => API.delete(`api/post/${id}`)
export const createComment = (id, comment) => API.post(`api/post/${id}/comment`, { comment })
export const editComment = (id, commentId, newComment) => API.patch(`api/post/${id}/comment/${commentId}`, {newComment})
export const deleteComment = (id, commentId) => API.delete(`api/post/${id}/comment/${commentId}`)
export const likePost = (id, userId) => API.patch(`api/post/${id}/like`, {userId})