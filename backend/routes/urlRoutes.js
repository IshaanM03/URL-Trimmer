import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import {authenticate} from '../middleware/authMiddleware.js';
import {getUserUrls, createUrl, deleteUrl} from '../controllers/urlController.js'
dotenv.config();

//setup router
const router = express.Router();

router.get('/', authenticate, getUserUrls)
router.post('/', authenticate, createUrl);
router.delete('/:id', authenticate, deleteUrl);

export default router;

