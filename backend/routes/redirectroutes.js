import express from 'express';
import {redirectURL} from '../controllers/redirectcontroller.js'
const router = express.Router();

router.get('/:shortURL', redirectURL);

export default router