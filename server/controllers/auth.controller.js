import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { AppError, IntServerError } from '../utils/errorClass.js'

/////////////////////////////////////////////////////////////////////////// Register a new User
export const registerUser = async (req, res, next) => {
  try {
    const reqUser = req.body

    // Error response
    let user = await User.findOne({ username: reqUser.username })
    if (user)
      return next(new AppError("Username is already taken", 400))

    // Error response
    user = await User.findOne({ email: reqUser.email })
    if (user)
      return next(new AppError("User with the email already exists", 400))

    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(reqUser.password, salt)
    reqUser.password = hashedPwd

    const newUser = new User(reqUser)
    const resUser = await newUser.save()

    const token = jwt.sign({ id: resUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    resUser.password = ''

    res.data = {
      user: resUser,
      token
    }
    next()
  } catch (error) {
    console.log(error)
    next(new IntServerError())
  }
}

/////////////////////////////////////////////////////////////////////////// Login an existing User
export const loginUser = async (req, res, next) => {
  try {
    const reqUser = req.body

    const user = await User.findOne({
      $or: [{ email: reqUser.username }, { username: reqUser.username }],
    })

    if (!user)
      return next(new AppError("User with email/username not found", 400))
      
    const passwordsMatch = await bcrypt.compare(reqUser.password, user.password)

    if (!passwordsMatch)
      return next(new AppError("Invalid Credentials", 400))

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    user.password = ''

    res.data = {
      user,
      token
    }
    next()
  } catch (error) {
    next(new IntServerError())
  }
}

/////////////////////////////////////////////////////////////////////////// Login an existing user from token
export const authUser = async (req, res, next) => {
  try {
    const token = req.body.token

    if (token) {
      const { id: _id, exp } = jwt.verify(token, process.env.JWT_SECRET)

      if (Date.now() >= exp * 1000) {
        return next(new AppError("Token has expired", 403))
      }

      const user = await User.findById(_id).select('-password')
      
      res.data = {
        user,
        token
      }
      next()
    }
  } catch (error) {
    console.log(error)
    next(new IntServerError())
  }
}
