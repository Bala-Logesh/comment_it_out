import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Register a new User
export const registerUser = async (req, res) => {
  try {
    const reqUser = req.body

    const user = await User.findOne({ email: reqUser.email })
    if (user) return res.status(400).send('User with the email already exists')

    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(reqUser.password, salt)
    reqUser.password = hashedPwd

    const newUser = new User(reqUser)
    const resUser = await newUser.save()

    const token = jwt.sign({ id: resUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    res.status(201).json({
      data: {
        resUser,
        token,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

// Login an existing User
export const loginUser = async (req, res) => {
  try {
    const reqUser = req.body

    const user = await User.findOne({
      $or: [{ email: reqUser.email }, { username: reqUser.username }],
    })
    if (!user)
      return res
        .status(400)
        .send('User with the email or username does not exist')

    const passwordsMatch = await bcrypt.compare(reqUser.password, user.password)

    if (!passwordsMatch) return res.status(403).send('Invalid Credentials')

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    res.status(201).json({
      data: {
        user,
        token,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
