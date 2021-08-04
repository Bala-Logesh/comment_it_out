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