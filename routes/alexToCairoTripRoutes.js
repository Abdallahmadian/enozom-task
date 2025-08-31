import express from 'express';
import { getAlexToCairoTrips } from '../controllers/alexToCairoTripController.js';

const router = express.Router();

router.get('/', getAlexToCairoTrips);

export default router;
