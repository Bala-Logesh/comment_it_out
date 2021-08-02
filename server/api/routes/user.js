import express from 'express'
import {
  deleteUser,
  fetchAllUsers,
  fetchUserById,
  followUser,
  updateUser,
} from '../../controllers/user.controller.js'
import auth from '../../middlewares/auth.js'

const router = express.Router()

// @route GET api/user
// @description Get all the users
// @access Protected
router.get('/', auth, fetchAllUsers)

// @route GET api/user/:id
// @description Get the user with ID
// @access Protected
router.get('/:id', auth, fetchUserById)

// @route PATCH api/user/:id
// @description Edit an existing user
// @access Protected
router.patch('/:id', auth, updateUser)

// @route DELETE api/user/:id
// @description Delete an existing user
// @access Protected
router.delete('/:id', auth, deleteUser)

// @route PATCH api/user/:id/following
// @description Follow or Unfollow an user
// @access Protected
router.patch('/:id/following', auth, followUser)

export default router