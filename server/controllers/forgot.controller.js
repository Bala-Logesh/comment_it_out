import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

// Forgot password - OTP generation
export const genOTP = async (req, res) => {
  try {
    const { email } = req.params
    const user = await User.findOne({ email })

    if (!user) return res.status(400).send('User with the email does not exist')

    const newOTP = String(Math.floor(100000 + Math.random() * 900000))

    await User.findOneAndUpdate(
      { _id: user._id },
      { OTP: newOTP },
      { new: true }
    )

    res.status(201).json({
      data: {
        newOTP,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

// Forgot password - verify OTP
export const verifyOTP = async (req, res) => {
  try {
    const { email, OTP } = req.params
    const user = await User.findOne({ email })

    if (!user) return res.status(400).send('User with the email does not exist')

    if (user.OTP === OTP) {
      res.status(200).send({ status: 'verified' })
    } else {
      res.status(403).send({ status: 'Invalid OTP' })
    }
  } catch (error) {
    console.log(error)
  }
}

// Forgot password - Change password
export const changePassword = async (req, res) => {
  try {
    const { email } = req.params
    const { password } = req.body

    const user = await User.findOne({ email })

    if (!user) return res.status(400).send('User with the email does not exist')

    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(password, salt)

    const resUser = await User.findOneAndUpdate(
      { _id: user._id },
      { password: hashedPwd },
      { new: true }
    )

    res.status(201).json({
      data: {
        resUser,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
