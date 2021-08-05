import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import asyncHandler from '../middlewares/asyncHandler.js'
import ErrorResponse from '../utils/errorResponse.js'

/////////////////////////////////////////////////////////////////////////// Get all the users
export const fetchAllUsers = asyncHandler( async (req, res, next) => {
  const users = await User.find()

  res.data = {
    users
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Get the user with ID
export const fetchUserById = asyncHandler( async (req, res, next) => {
  const { id: _id } = req.params
  
  const user = await User.findById(_id)

  if (!user)
    return next(new ErrorResponse("User not found", 404))
  
  res.data = {
    user
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Update an existing user
export const updateUser = asyncHandler( async (req, res, next) => {
  const { id: _id } = req.params
  const user = await User.findById(_id)
    
  if (!user)
    return next(new ErrorResponse("User not found", 404))

  if (req.body.password) {
    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPwd
  }

  const newUser = await User.findOneAndUpdate({ _id }, req.body, { new: true })
    
  res.data = {
    user: newUser
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Delete an existing user
export const deleteUser = asyncHandler( async (req, res, next) => {
  const { id: _id } = req.params
  const user = await User.findById(_id)

  if (!user)
    return next(new ErrorResponse("User not found", 404))

  await User.findOneAndDelete({ _id })
    
  res.data = {
    info: 'User deleted'
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Following or unfollowing an existing user
export const followUser = asyncHandler(async (req, res, next) => {
  let status = ''
  const { id: _id } = req.params
  const { followId } = req.body

  const user = await User.findById(_id)
  
  if (!user)
    return next(new ErrorResponse("User not found", 404))

  const hasFollowedUser = user.following.includes(followId)
  if (hasFollowedUser) {
    user.following = user.following.filter(user => String(user) !== followId)
    status = 'Unfollowed the user'
  } else {
    user.following.push(followId)
    status = 'Started following the user'
  }

  const newUser = await User.findOneAndUpdate({ _id }, { following: user.following }, { new: true })
    
  res.data = {
    info: status
  }

  next()
})