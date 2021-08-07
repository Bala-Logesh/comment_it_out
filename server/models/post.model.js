import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private']
  },
  tags: {
    type: [String],
  },
  image: {
    type: String,
  },
  comments: {
    type: [
      {
        commentor: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        body: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const Post = mongoose.model('post', postSchema)

export default Post
