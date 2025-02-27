import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

//load env
dotenv.config();
//connect to DB
connectDB();

//Configure express app
const app = express()
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})