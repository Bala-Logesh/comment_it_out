import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import asyncHandler from '../middlewares/asyncHandler.js'
import ErrorResponse from '../utils/errorResponse.js'

/////////////////////////////////////////////////////////////////////////// Forgot password - OTP generation
export const genOTP = asyncHandler( async (req, res, next) => {
  const { email } = req.params

  console.log(email);
  const user = await User.findOne({ email: email })

  if (!user)
    return next(new ErrorResponse("User not found", 400))

  const newOTP = String(Math.floor(100000 + Math.random() * 900000))

  await User.findOneAndUpdate(
    { _id: user._id },
    { OTP: newOTP },
    { new: true }
  )

  res.data = {
    forgot: newOTP
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Forgot password - verify OTP
export const verifyOTP = asyncHandler( async (req, res, next) => {
  const { email, OTP } = req.params
  const user = await User.findOne({ email })

  if (!user)
    return next(new ErrorResponse("User with the email does not exist", 400))

  user.password = ''
  
  if (user.OTP === OTP) {
    res.data = {
      forgot: user
    }
  } else {
    return next(new ErrorResponse("Invalid OTP", 401))
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Forgot password - Change password
export const changePassword = asyncHandler( async (req, res, next) => {
  const { email } = req.params
  const { password } = req.body

  const user = await User.findOne({ email })

  if (!user)
    return next(new ErrorResponse("User with the email does not exist", 400))

  const salt = await bcrypt.genSalt(10)
  const hashedPwd = await bcrypt.hash(password, salt)

  const resUser = await User.findOneAndUpdate(
  { _id: user._id },
  { password: hashedPwd },
  { new: true }
  )

  res.data = {
    forgot: resUser
  }
  next()
})
