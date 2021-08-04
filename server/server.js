import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import user from './api/routes/user.js'
import auth from './api/routes/auth.js'
import forgot from './api/routes/forgot.js'
import post from './api/routes/post.js'
import reponseMiddleware from "./middlewares/reponse.js"
import errorMiddleware from "./middlewares/error.js"

dotenv.config()

// Creating the server instance
const app = express()

// Connecting to the database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

mongoose.connection
  .once("open", () => {
    console.log("Successfully connected to the database")
  })
  .on("error", console.error.bind(console, "MongoDB connection error:"))

// Middlewares
app.use(cors())
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ extended: false }))

// Routes
app.get('/', (req, res) => {
    res.send('Hello welcome to Comment It Out')
})
app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api/forgot', forgot)
app.use('/api/post', post)

// Response Middleware
app.use(reponseMiddleware)

// Error Middleware
app.use(errorMiddleware)

// Starting the server to listen on PORT
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${ PORT }`))