import express from 'express';
import { getCities } from '../controllers/cityController.js';

const router = express.Router();

router.get('/', getCities);

// Add more city routes as needed

export default router;
