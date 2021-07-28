import express from 'express'
import { changePassword, genOTP, verifyOTP } from '../../controllers/forgot.controller.js'

const router = express.Router()

// @route GET api/forgot/:email
// @description Forgot password - OTP generation page
// @access Public
router.get('/:email', genOTP)

// @route GET api/forgot/:email/:otp
// @description Forgot password - verify OTP page
// @access Public
router.get('/:email/:OTP', verifyOTP)

// @route POST api/forgot/:email
// @description Forgot password - Change password page
// @access Public
router.post('/:email', changePassword)

export default router
