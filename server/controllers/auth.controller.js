import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import asyncHandler from '../middlewares/asyncHandler.js'
import ErrorResponse from '../utils/errorResponse.js'

/////////////////////////////////////////////////////////////////////////// Register a new User
export const registerUser = asyncHandler( async (req, res, next) => {
    const reqUser = req.body

    // Error response
    let user = await User.findOne({ username: reqUser.username })
    if (user)
      return next(new ErrorResponse("Username is already taken", 400))

    // Error response
    user = await User.findOne({ email: reqUser.email })
    if (user)
      return next(new ErrorResponse("User with the email already exists", 400))

    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(reqUser.password, salt)
    reqUser.password = hashedPwd

    const newUser = new User(reqUser)
    const resUser = await newUser.save()

    const token = jwt.sign({ id: resUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    resUser.password = ''
    res.statusCode = 201

    res.data = {
      user: resUser,
      token
    }
    next()
  })

/////////////////////////////////////////////////////////////////////////// Login an existing User
export const loginUser = asyncHandler( async (req, res, next) => {
  const reqUser = req.body

  const user = await User.findOne({
    $or: [{ email: reqUser.username }, { username: reqUser.username }],
  })

  if (!user)
    return next(new ErrorResponse("User with email/username not found", 400))
    
  const passwordsMatch = await bcrypt.compare(reqUser.password, user.password)

  if (!passwordsMatch)
    return next(new ErrorResponse("Invalid Credentials", 400))

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })

  user.password = ''

  res.data = {
    user,
    token
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Login an existing user from token
export const authUser = asyncHandler( async (req, res, next) => {
  const token = req.body.token

  if (token) {
    const { id: _id, exp } = jwt.verify(token, process.env.JWT_SECRET)

    if (Date.now() >= exp * 1000) {
      return next(new ErrorResponse("Token has expired", 403))
    }

    const user = await User.findById(_id).select('-password')
    
    res.data = {
      user,
      token
    }
    next()
  }
})
