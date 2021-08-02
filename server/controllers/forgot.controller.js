import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

// Forgot password - OTP generation
export const genOTP = async (req, res) => {
  try {
    const { email } = req.params
    const user = await User.findOne({ email })

    // Error response
    if (!user)
      return res.status(400).json({
        status: "error",
        data: null,
        error: "User with the email or username does not exist" 
      })

    const newOTP = String(Math.floor(100000 + Math.random() * 900000))

    await User.findOneAndUpdate(
      { _id: user._id },
      { OTP: newOTP },
      { new: true }
    )

    // Success response
    res.status(201).json({
      status: 'ok',
      data: {
        newOTP
      },
      error: null
    })
  } catch (error) {
    console.log(error)

    // Error response
    res.status(500).json({
      status: "error",
      data: null,
      error: "Internal Server Error" 
    })
  }
}

// Forgot password - verify OTP
export const verifyOTP = async (req, res) => {
  try {
    const { email, OTP } = req.params
    const user = await User.findOne({ email })

    // Error response
    if (!user)
      return res.status(400).json({
        status: "error",
        data: null,
        error: "User with the email does not exist" 
      })

    if (user.OTP === OTP) {

      // Success response
      res.status(200).json({
        status: 'ok',
        data: {
          data: 'verified'
        },
        error: null
      })
    } else {

      // Error response
      res.status(403).json({
        status: "error",
        data: null,
        error: "Invalid OTP" 
      })
    }
  } catch (error) {
    console.log(error)

    // Error response
    res.status(500).json({
      status: "error",
      data: null,
      error: "Internal Server Error" 
    })
  }
}

// Forgot password - Change password
export const changePassword = async (req, res) => {
  try {
    const { email } = req.params
    const { password } = req.body

    const user = await User.findOne({ email })

    // Error response
    if (!user)
      return res.status(400).json({
        status: "error",
        data: null,
        error: "User with the email does not exist" 
      })

    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(password, salt)

    const resUser = await User.findOneAndUpdate(
      { _id: user._id },
      { password: hashedPwd },
      { new: true }
    )
    
    // Success response
    res.status(201).json({
      status: 'ok',
      data: {
        resUser
      },
      error: null
    })
  } catch (error) {
    console.log(error)

    // Error response
    res.status(500).json({
      status: "error",
      data: null,
      error: "Internal Server Error" 
    })
  }
}
