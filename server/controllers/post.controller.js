import Post from '../models/post.model.js'

// Get all the posts
export const fetchAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()

    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        posts
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

// Get the post with ID
export const fetchPostById = async (req, res) => {
  const { id: _id } = req.params
  try {
    const post = await Post.findById(_id)

    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        post
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

// Create a new post
export const createPost = async (req, res) => {
  try {
    const reqPost = req.body

    const newPost = new Post(reqPost)
    const resPost = await newPost.save()

    // Success response
    res.status(201).json({
      status: 'ok',
      data: {
        resPost
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

// Update an existing post
export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  try {
    const post = await Post.findById(_id)

    // Error response
    if (!post)
      return res.status(404).json({
        status: "error",
        data: null,
        error: "Post not found" 
      })

    const newPost = await Post.findOneAndUpdate({ _id }, req.body, { new: true })

    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        newPost
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

// Delete an existing post
export const deletePost = async (req, res) => {
  const { id: _id } = req.params
  try {
    const post = await Post.findById(_id)

    // Error response
    if (!post)
      return res.status(404).json({
        status: "error",
        data: null,
        error: "Post not found"
      })

    const newPost = await Post.findOneAndDelete({ _id })
    
    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        data: 'Post deleted'
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

// Creating a new comment
export const createComment = async (req, res) => {
  const comment = req.body
  const { id: _id } = req.params

  try {
    const post = await Post.findById(_id)

    // Error response
    if (!post)
      return res.status(404).json({
        status: "error",
        data: null,
        error: "Post not found"
      })

    post.comments.push(comment)

    const newPost = await Post.findOneAndUpdate({ _id }, { comments: post.comments }, { new: true })
    
    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        newPost
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

// Update a comment on an existing post
export const updateComment = async (req, res) => {
  const { commentId } = req.body
  const { id: _id } = req.params

  try {
    const post = await Post.findById(_id)

    // Error response
    if (!post)
      return res.status(404).json({
        status: "error",
        data: null,
        error: "Post not found"
      })

    const changeComment = post.comments.filter(
      comment => String(comment._id) === commentId
    )
    
    changeComment[0].body = req.body.comment
    post.comments.map(comment => (comment._id === commentId) ? changeComment : comment)

    const newPost = await Post.findOneAndUpdate({ _id }, { comments: post.comments }, { new: true })

    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        newPost
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

// Deleting a new comment
export const deleteComment = async (req, res) => {
  const { commentId } = req.body
  const { id: _id } = req.params

  try {
    const post = await Post.findById(_id)
    // Error response
    if (!post)
      return res.status(404).json({
        status: "error",
        data: null,
        error: "Post not found"
      })

    const newCommentArr = post.comments.filter(
      comment => String(comment._id) !== commentId
    )

    const newPost = await Post.findOneAndUpdate({ _id }, { comments: newCommentArr }, { new: true })
    
    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        data: 'Comment deleted'
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

// Like or Dislike a post
export const likePost = async (req, res) => {
  const { id: _id } = req.params
  const { userId } = req.body

  try {
    const post = await Post.findById(_id)
    // Error response
    if (!post)
      return res.status(404).json({
        status: "error",
        data: null,
        error: "Post not found"
      })

    const hasUserLiked = post.likes.includes(userId)
    if (hasUserLiked) {
      post.likes = post.likes.filter(like => String(like) !== userId)
    } else {
      post.likes.push(userId)
    }
    
    const newPost = await Post.findOneAndUpdate({ _id }, { likes: post.likes }, { new: true })
    
    // Success response
    res.status(200).json({
      status: 'ok',
      data: {
        data: 'Like/Dislike operation successful'
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
