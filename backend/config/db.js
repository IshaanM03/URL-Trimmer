import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();

const mongoURL = process.env.MONGOURL;

const connectDB = async () => {
    try{
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB has connected successfully")
    }catch(err){
        console.log("MongoDB connection error: ", err);
        process.exit(1);
    }
}

export default connectDB;