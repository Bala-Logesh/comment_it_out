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

const router = express.Router()

// @route GET api/post
// @description Get all the posts
// @access Public
router.get('/', fetchAllPosts)

// @route GET api/post/:id
// @description Get the post with ID
// @access Public
router.get('/:id', fetchPostById)

// @route POST api/post
// @description Create a new post
// @access Public
router.post('/', createPost)

// @route PATCH api/post/:id
// @description Edit an existing post
// @access Public
router.patch('/:id', updatePost)

// @route DELETE api/post/:id
// @description Delete an existing post
// @access Public
router.delete('/:id', deletePost)

// @route POST api/post/:id/comment
// @description Create a comment on the post with ID
// @access Public
router.post('/:id/comment', createComment)

// @route PATCH api/post/:id/comment
// @description Update a comment on the post with ID
// @access Public
router.patch('/:id/comment', updateComment)

// @route DELETE api/post/:id/comment
// @description Delete a comment on the post with ID
// @access Public
router.delete('/:id/comment', deleteComment)

// @route PATCH api/post/:id/like
// @description Like or Dislike the post with ID
// @access Public
router.patch('/:id/like', likePost)

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
