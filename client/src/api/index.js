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
export const forgot3 = (email, password) => API.post(`api/forgot/${email}`, { password })