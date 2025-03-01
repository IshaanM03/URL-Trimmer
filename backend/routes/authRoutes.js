import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import {registerController, loginController} from '../controllers/authControllers.js';
dotenv.config();

//setup router
const router = express.Router();

//Handles login
router.post('/login', loginController);

//Handles registers
router.post('/register', registerController)

export default router;