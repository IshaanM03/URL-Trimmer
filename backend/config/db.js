import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();

const mongoURI = process.env.MONGOURI;

const connectDB = async () => {
    try{
        await mongoose.connect(mongoURI)
        console.log("MongoDB has connected successfully")
    }catch(err){
        console.log("MongoDB connection error: ", err);
        process.exit(1);
    }
}

export default connectDB;