import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import user from './api/routes/user.js'
import auth from './api/routes/auth.js'
import forgot from './api/routes/forgot.js'
import post from './api/routes/post.js'
import responseHandler from "./middlewares/responseHandler.js"
import errorHandler from "./middlewares/errorHandler.js"
import connectToDB from "./utils/db.js"
import path from 'path'

dotenv.config()

// Creating the server instance
const app = express()

// Connecting to the database
connectToDB()

// Middlewares
app.use(cors())
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "client", "build")))

// Routes
app.get('/', (req, res) => {
    res.send('Hello welcome to Comment It Out')
})
app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api/forgot', forgot)
app.use('/api/post', post)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Response Middleware
app.use(responseHandler)

// Error Middleware
app.use(errorHandler)

// Starting the server to listen on PORT
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${ PORT }`))