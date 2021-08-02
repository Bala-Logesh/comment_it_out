import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

// Get all the users
export const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find()

    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        users
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

// Get the user with ID
export const fetchUserById = async (req, res) => {
  const { id: _id } = req.params
  try {
    const user = await User.findById(_id)

    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        user
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

// Update an existing user
export const updateUser = async (req, res) => {
  const { id: _id } = req.params
  try {
    const user = await User.findById(_id)
    
    // Error response
    if (!user)
      return res.status(404).json({
        status: "error",
        data: null,
        error: "User not found" 
      })

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10)
      const hashedPwd = await bcrypt.hash(req.body.password, salt)
      req.body.password = hashedPwd
    }

    const newUser = await User.findOneAndUpdate({ _id }, req.body, { new: true })
    
    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        newUser
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

// Delete an existing user
export const deleteUser = async (req, res) => {
  const { id: _id } = req.params
  try {
    const user = await User.findById(_id)

    // Error response
    if (!user)
      return res.status(404).json({
        status: "error",
        data: null,
        error: "User not found" 
      })

    const newUser = await User.findOneAndDelete({ _id })
    
    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        data: 'User deleted'
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

// Following or unfollowing an existing user
export const followUser = async (req, res) => {
  const { id: _id } = req.params
  const { followId } = req.body

  try {
    const user = await User.findById(_id)
    
    // Error response
    if (!user)
      return res.status(404).json({
        status: "error",
        data: null,
        error: "User not found" 
      })

    const hasFollowedUser = user.following.includes(followId)
    if (hasFollowedUser) {
      user.following = user.following.filter(user => String(user) !== followId)
    } else {
      user.following.push(followId)
    }

    const newUser = await User.findOneAndUpdate({ _id }, { following: user.following }, { new: true })
    
    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        data: 'Follow/Unfollow operation successful'
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