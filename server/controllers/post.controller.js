import Post from '../models/post.model.js'

// Get all the posts
export const fetchAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()

    res.status(200).json({ data: posts })
  } catch (error) {
    console.log(error)
  }
}

// Get the post with ID
export const fetchPostById = async (req, res) => {
  const { id: _id } = req.params
  try {
    const post = await Post.findById(_id)

    res.status(200).json({ data: post })
  } catch (error) {
    console.log(error)
  }
}

// Create a new post
export const createPost = async (req, res) => {
  try {
    const reqPost = req.body

    const newPost = new Post(reqPost)
    const resPost = await newPost.save()

    res.status(201).json({
      data: {
        resPost,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

// Update an existing post
export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  try {
    const post = await Post.findById(_id)
    if (!post) res.status(404).send('Post not found')

    const newPost = await Post.findOneAndUpdate(_id, req.body, { new: true })
    res.status(200).json({ data: newPost })
  } catch (error) {
    console.log(error)
  }
}

// Delete an existing post
export const deletePost = async (req, res) => {
  const { id: _id } = req.params
  try {
    const post = await Post.findById(_id)
    if (!post) res.status(404).send('Post not found')

    const newPost = await Post.findOneAndDelete({ _id })
    res.status(200).json({ data: 'Post deleted' })
  } catch (error) {
    console.log(error)
  }
}

// Creating a new comment
export const createComment = async (req, res) => {
  const comment = req.body
  const { id: _id } = req.params

  try {
    const post = await Post.findById(_id)
    if (!post) res.status(404).send('Post not found')

    post.comments.push(comment)

    const newPost = await Post.findOneAndUpdate(
      _id,
      { comments: post.comments },
      { new: true }
    )
    res.status(200).json({ data: newPost })
  } catch (error) {}
}

// Update a comment on an existing post
export const updateComment = async (req, res) => {
  const { commentId } = req.body
  const { id: _id } = req.params

  try {
    const post = await Post.findById(_id)
    if (!post) res.status(404).send('Post not found')

    const changeComment = post.comments.filter(
      comment => String(comment._id) === commentId
    )
    
    changeComment[0].body = req.body.comment
    post.comments.map(comment => (comment._id === commentId) ? changeComment : comment)

    const newPost = await Post.findOneAndUpdate(
      _id,
      { comments: post.comments },
      {
        new: true,
      }
    )
    res.status(200).json({ data: newPost })
  } catch (error) {
    console.log(error)
  }
}

// Deleting a new comment
export const deleteComment = async (req, res) => {
  const { commentId } = req.body
  const { id: _id } = req.params

  try {
    const post = await Post.findById(_id)
    if (!post) res.status(404).send('Post not found')

    const newCommentArr = post.comments.filter(
      comment => String(comment._id) !== commentId
    )

    const newPost = await Post.findOneAndUpdate(
      _id,
      { comments: newCommentArr },
      { new: true }
    )
    res.status(200).json({ data: newPost })
  } catch (error) {
    console.log(error)
  }
}

// Like or Dislike a post
export const likePost = async (req, res) => {
  const { id: _id } = req.params
  const { userId } = req.body

  try {
    const post = await Post.findById(_id)
    if (!post) res.status(404).send('Post not found')

    const hasUserLiked = post.likes.includes(userId)
    if (hasUserLiked) {
      post.likes = post.likes.filter(like => String(like) !== userId)
    } else {
      post.likes.push(userId)
    }
    
    const newPost = await Post.findOneAndUpdate(
      _id,
      { likes: post.likes },
      { new: true }
    )
    res.status(200).json({ data: newPost })
  } catch (error) {
    console.log(error)
  }
}
