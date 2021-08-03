import express from 'express'
import { loginUser, registerUser, authUser } from '../../controllers/auth.controller.js'

const router = express.Router()

// @route POST api/auth/register
// @description Register a new user
// @access Public
router.post('/register', registerUser)

// @route POST api/auth/login
// @description Login an existing user
// @access Public
router.post('/login', loginUser)

// @route GET api/auth/token
// @description Login an existing user from token
// @access Public
router.post('/token', authUser)

export default router