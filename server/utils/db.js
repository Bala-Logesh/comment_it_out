import mongoose from "mongoose"

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })

        console.log("Successfully connected to the database")
    } catch (error) {
        console.log("MongoDB connection error:")
    }  
}

export default connectToDB