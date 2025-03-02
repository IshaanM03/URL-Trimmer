import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import urlRoutes from './routes/urlRoutes.js'
import redirectRoutes  from './routes/redirectroutes.js'

//load env
dotenv.config();

//Configure express app
const app = express()
app.use(express.json());
app.use(cors());

//connect to DB
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/url', urlRoutes);
app.use('/', redirectRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
