import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

// Get all the users
export const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find()

    res.status(200).json({ data: users })
  } catch (error) {
    console.log(error)
  }
}

// Get the user with ID
export const fetchUserById = async (req, res) => {
  const { id: _id } = req.params
  try {
    const user = await User.findById(_id)

    res.status(200).json({ data: user })
  } catch (error) {
    console.log(error)
  }
}

// Update an existing user
export const updateUser = async (req, res) => {
  const { id: _id } = req.params
  try {
    const user = await User.findById(_id)
    if (!user) res.status(404).send('User not found')

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10)
      const hashedPwd = await bcrypt.hash(req.body.password, salt)
      req.body.password = hashedPwd
    }

    const newUser = await User.findOneAndUpdate(_id, req.body, { new: true })
    res.status(200).json({ data: newUser })
  } catch (error) {
    console.log(error)
  }
}

// Delete an existing user
export const deleteUser = async (req, res) => {
  const { id: _id } = req.params
  try {
    const user = await User.findById(_id)
    if (!user) res.status(404).send('User not found')

    const newUser = await User.findOneAndDelete({ _id })
    res.status(200).json({ data: 'User deleted' })
  } catch (error) {
    console.log(error)
  }
}
