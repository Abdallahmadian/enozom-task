import express from 'express';
import * as trainController from '../controllers/trainController.js';

const router = express.Router();

router.get('/', trainController.getTrains);
router.delete('/:id', trainController.deleteTrain);

// Add more train routes as needed

export default router;