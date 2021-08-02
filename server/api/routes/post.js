import express from 'express'
import {
  createComment,
  createPost,
  deleteComment,
  deletePost,
  fetchAllPosts,
  fetchPostById,
  likePost,
  updateComment,
  updatePost,
} from '../../controllers/post.controller.js'
import auth from '../../middlewares/auth.js'

const router = express.Router()

// @route GET api/post
// @description Get all the posts
// @access Protected
router.get('/', auth, fetchAllPosts)

// @route GET api/post/:id
// @description Get the post with ID
// @access Protected
router.get('/:id', auth, fetchPostById)

// @route POST api/post
// @description Create a new post
// @access Protected
router.post('/', auth, createPost)

// @route PATCH api/post/:id
// @description Edit an existing post
// @access Protected
router.patch('/:id', auth, updatePost)

// @route DELETE api/post/:id
// @description Delete an existing post
// @access Protected
router.delete('/:id', auth, deletePost)

// @route POST api/post/:id/comment
// @description Create a comment on the post with ID
// @access Protected
router.post('/:id/comment', auth, createComment)

// @route PATCH api/post/:id/comment
// @description Update a comment on the post with ID
// @access Protected
router.patch('/:id/comment', auth, updateComment)

// @route DELETE api/post/:id/comment
// @description Delete a comment on the post with ID
// @access Protected
router.delete('/:id/comment', auth, deleteComment)

// @route PATCH api/post/:id/like
// @description Like or Dislike the post with ID
// @access Protected
router.patch('/:id/like', auth, likePost)

export default router

// {
//     "user": "60f1ad02599d1b28f3598b14",
//     "title": "post 1",
//     "body": "Post body",
//     "tags": ["Post", "one"],
//     "comments": [
//         {
//             "user": "60f1ad02599d1b28f3598b14",
//             "body": "Post 1 comment 1"
//         },
//         {
//             "user": "60f1ad02599d1b28f3598b14",
//             "body": "Post 1 comment 2"
//         }
//     ],
//     "likes": [
//         "60f1ad02599d1b28f3598b14",
//         "60f1ad02599d1b28f3598b14"
//     ]
// }
