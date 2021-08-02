import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

const auth = (req, res, next) => {
    const token = req.header('x-auth-token')
    
    // Check if token is present
    if (!token)
        return res.status(401).json({
            status: "error",
            data: null,
            error: "Token Missing! Authorisation Denied" 
        })
    
    try{
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch(err) {
        return res.status(401).json({
            status: "error",
            data: null,
            error: "Invalid Token! Authorisation Denied" 
        })
    }
}

export default auth