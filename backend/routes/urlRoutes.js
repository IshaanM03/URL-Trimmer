import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import {authenticate} from '../middleware/authMiddleware.js';
import {getUserUrls, createUrl, updateUrl, deleteUrl} from '../controllers/urlController.js'
dotenv.config();

//setup router
const router = express.Router();

router.get('/', authenticate, getUserUrls)
router.post('/', authenticate, createUrl);
router.put('/:id', authenticate, updateUrl);
router.delete('/:id', authenticate, deleteUrl);

export default router;

