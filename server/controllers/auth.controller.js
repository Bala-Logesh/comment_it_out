import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Register a new User
export const registerUser = async (req, res) => {
  try {
    const reqUser = req.body

    let user = await User.findOne({ email: reqUser.email })

    // Error response
    if (user) return res.status(400).json({
      status: "error",
      data: null,
      error: "User with the email already exists" 
    })

    // Error response
    user = await User.findOne({ username: reqUser.username })
    if (user) return res.status(400).json({
      status: "error",
      data: null,
      error: "Username is already taken" 
    })

    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(reqUser.password, salt)
    reqUser.password = hashedPwd

    const newUser = new User(reqUser)
    const resUser = await newUser.save()

    const token = jwt.sign({ id: resUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    // Success response
    res.status(201).json({
      status: 'ok',
      data: {
        resUser,
        token
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

// Login an existing User
export const loginUser = async (req, res) => {
  try {
    const reqUser = req.body

    const user = await User.findOne({
      $or: [{ email: reqUser.email }, { username: reqUser.username }],
    })

    // Error response
    if (!user)
      return res.status(400).json({
        status: "error",
        data: null,
        error: "User with the email or username does not exist" 
      })

    const passwordsMatch = await bcrypt.compare(reqUser.password, user.password)

    // Error response
    if (!passwordsMatch)
      return res.status(403).json({
        status: "error",
        data: null,
        error: "Invalid Credentials" 
      })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
    console.log(token);
    // Success response
    res.status(201).json({
      status: 'ok',
      data: {
        user,
        token
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
