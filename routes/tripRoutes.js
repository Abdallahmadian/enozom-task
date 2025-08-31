import express from 'express';
import { getTrips } from '../controllers/tripController.js';

const router = express.Router();

router.get('/', getTrips);

// Add more trip routes as needed

export default router;
