
import express from "express";
import {
  createTrain,
  getTrains,
  getTrainById,
  updateTrain,
  deleteTrain,
} from "../controllers/trainController.js";

const router = express.Router();

router.post("/", createTrain);
router.get("/", getTrains);
router.get("/:id", getTrainById);
router.put("/:id", updateTrain);
router.delete("/:id", deleteTrain);

export default router;

