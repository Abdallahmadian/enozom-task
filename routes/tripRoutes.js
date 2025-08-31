import express from 'express';
import { getTrips, getTripsFromAlexToCairo } from '../controllers/tripController.js';

const router = express.Router();

router.get('/', getTrips);
router.get('/alex-to-cairo', getTripsFromAlexToCairo);

// Add more trip routes as needed

export default router;
