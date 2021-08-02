import express from 'express'
import {
  deleteUser,
  fetchAllUsers,
  fetchUserById,
  followUser,
  updateUser,
} from '../../controllers/user.controller.js'

const router = express.Router()

// @route GET api/user
// @description Get all the users
// @access Public
router.get('/', fetchAllUsers)

// @route GET api/user/:id
// @description Get the user with ID
// @access Public
router.get('/:id', fetchUserById)

// @route PATCH api/user/:id
// @description Edit an existing user
// @access Public
router.patch('/:id', updateUser)

// @route DELETE api/user/:id
// @description Delete an existing user
// @access Public
router.delete('/:id', deleteUser)

// @route PATCH api/user/:id/following
// @description Follow or Unfollow an user
// @access Public
router.patch('/:id/following', followUser)

export default router