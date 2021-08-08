import Post from '../models/post.model.js'
import asyncHandler from '../middlewares/asyncHandler.js'
import ErrorResponse from '../utils/errorResponse.js'

/////////////////////////////////////////////////////////////////////////// Get all the posts
export const fetchAllPosts = asyncHandler ( async (req, res, next) => {
  const posts = await Post.find().sort({ 'createdAt': -1 })

  res.data = {
    posts
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Get the post with ID
export const fetchPostById = asyncHandler( async (req, res, next) => {
  const { id: _id } = req.params

  const post = await Post.findById(_id)

  if (!post)
    return next(new ErrorResponse("Post not found", 404))
  
  res.data = {
    post
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Create a new post
export const createPost = asyncHandler( async (req, res, next) => {
  const reqPost = req.body

  const newPost = new Post(reqPost)
  const resPost = await newPost.save()

  res.data = {
    post: resPost
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Update an existing post
export const updatePost = asyncHandler( async (req, res, next) => {
  const { id: _id } = req.params

  const post = await Post.findById(_id)

  if (!post)
    return next(new ErrorResponse("Post not found", 404))
  
  const newPost = await Post.findOneAndUpdate({ _id }, req.body.post, { new: true })

  res.data = {
    post: newPost
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Delete an existing post
export const deletePost = asyncHandler( async (req, res, next) => {
  const { id: _id } = req.params

  const post = await Post.findById(_id)

  if (!post)
    return next(new ErrorResponse("Post not found", 404))
  
  await Post.findOneAndDelete({ _id })
  res.data = {
    info: 'Post deleted'
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Creating a new comment
export const createComment = asyncHandler( async (req, res, next) => {
  const { comment } = req.body
  const { id: _id } = req.params

  const post = await Post.findById(_id)

  if (!post)
    return next(new ErrorResponse("Post not found", 404))
  
  post.comments.unshift(comment)

  const newPost = await Post.findOneAndUpdate({ _id }, { comments: post.comments }, { new: true })

  res.data = {
    post: newPost
  }

  next()
})

/////////////////////////////////////////////////////////////////////////// Update a comment on an existing post
export const updateComment = asyncHandler( async (req, res, next) => {
  const { newComment } = req.body
  const { id: _id, commentId } = req.params

  const post = await Post.findById(_id)

  if (!post)
    return next(new ErrorResponse("Post not found", 404))

  const changeComment = post.comments.filter(
    comment => String(comment._id) === commentId
  )

  if (changeComment.length === 0)
    return next(new ErrorResponse("Comment not found", 404))
  
  changeComment[0].body = newComment
  post.comments.map(comment => (comment._id === commentId) ? changeComment : comment)

  const newPost = await Post.findOneAndUpdate({ _id }, { comments: post.comments }, { new: true })

  res.data = {
    post: newPost
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Deleting a new comment
export const deleteComment = asyncHandler( async (req, res, next) => {
  const { id: _id, commentId } = req.params

  const post = await Post.findById(_id)

  if (!post)
    return next(new ErrorResponse("Post not found", 404))

  const newCommentArr = post.comments.filter(
    comment => String(comment._id) !== commentId
  )

  const newPost = await Post.findOneAndUpdate({ _id }, { comments: newCommentArr }, { new: true })

  res.data = {
    post: newPost
  }
  next()
})

/////////////////////////////////////////////////////////////////////////// Like or Dislike a post
export const likePost = asyncHandler( async (req, res, next) => {
  const { id: _id } = req.params
  const { userId } = req.body

  const post = await Post.findById(_id)

  if (!post)
    return next(new ErrorResponse("Post not found", 404))
  
  const hasUserLiked = post.likes.includes(userId)
  if (hasUserLiked) {
    post.likes = post.likes.filter(like => String(like) !== userId)
  } else {
    post.likes.push(userId)
  }
  
  const newPost = await Post.findOneAndUpdate({ _id }, { likes: post.likes }, { new: true })

  res.data = {
    post: newPost
  }
  next()
})
