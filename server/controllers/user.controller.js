import User from '../models/user.model.js'
import Post from '../models/post.model.js'
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

  if (req.body.user.password) {
    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(req.body.user.password, salt)
    req.body.user.password = hashedPwd
  }

  const newUser = await User.findOneAndUpdate({ _id }, req.body.user, { new: true })
    
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

  const users = await User.find()

  users.forEach(async (user) => {
    user.following = user.following.filter(follower => String(follower) !== _id)

    const userr = await User.findOneAndUpdate({ _id: user._id }, user, { new: true })
    console.log(userr.following);
  })

  await Post.deleteMany({ user: _id })

  const posts = await Post.find()

  posts.forEach(async (post) => {
    post.likes = post.likes.filter(like => String(like) !== _id)
    post.comments = post.comments.filter(comment => String(comment.commentor) !== _id)

    await Post.findOneAndUpdate({ _id: post._id }, post, { new: true })
  })
    
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

  const user = await User.findById(followId)
  
  if (!user)
    return next(new ErrorResponse("User not found", 404))

  const hasFollowedUser = user.following.includes(_id)
  if (hasFollowedUser) {
    user.following = user.following.filter(user => String(user) !== _id)
    status = 'Unfollowed the user'
  } else {
    user.following.push(_id)
    status = 'Started following the user'
  }

  const newUser = await User.findOneAndUpdate({ _id: followId }, { following: user.following }, { new: true })
  res.data = {
    user: newUser
  }

  next()
})