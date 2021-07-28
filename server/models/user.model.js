import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  OTP: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const User = mongoose.model('user', userSchema)

export default User
