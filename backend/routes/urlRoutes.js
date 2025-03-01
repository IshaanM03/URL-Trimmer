import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import {authenticate} from '../middleware/authMiddleware.js';
import {getUserUrls, createUrl, getUrlDetails, updateUrl, deleteUrl} from '../controllers/'
dotenv.config();

//setup router
const router = express.Router();

router.get('/', authenticate, getUserUrls)
router.post('/', authenticate, createUrl);
router.get('/:id', authenticate, getUrlDetails);
router.post('/:id', authenticate, updateUrl);
router.delete('/:id', authenticate, deleteUrl);

export default router;

